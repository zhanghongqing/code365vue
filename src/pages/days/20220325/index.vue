<script setup lang="ts">
import type { Pos } from '~/pages/days/types'
import Box from '~/pages/days/20220321/box.vue'
import { useBoxStore } from '~/stores/box'

const box = useBoxStore()

const data = reactive({
  pos: Array<Pos>(),
  boxNum: 50,
  size: 100,
  rangeX: 60,
  rangeY: 0,
  rangeZ: 210,
  zoom: 90,
  isAnimating: false,
  actBox: {} as Pos,
})

const { boxNum, size, rangeX, rangeY, rangeZ, pos, isAnimating, actBox, zoom } = toRefs(data)

const initPos = () => {
  pos.value = []
  while (pos.value.length < boxNum.value) {
    let { x, y, z } = getPos()
    pos.value.push({ x, y, z })
  }
}

const getPos = () => {
  let boxlen = Math.floor(600 / size.value)
  let p = {x: 0, y: 0, z: 0}
  do {
    const x = Math.floor(Math.random() * boxlen)
    const y = Math.floor(Math.random() * boxlen)
    const z = Math.floor(Math.random() * boxlen)
    p = { x, y, z }
  } while (isCreatePos(p))
  return p
}

const isCreatePos = (p: Pos) => {
  let isSame = false
  pos.value.forEach(item => {
    if (item.x === p.x && item.y === p.y && item.z === p.z) {
      isSame = true
    }
  })
  // if (isSame) console.log('有重复')
  return isSame
}

const resetPos = () => {
  pos.value.forEach(p => {
    let { x, y, z } = getPos()
    p.x = x
    p.y = y
    p.z = z
  })
}

const changeSize = (e: Event) => {
  let value = +(e.target as HTMLInputElement).value
  if (value > 100) value = 100
  else if (value < 10) value = 10
  size.value = value
  box.setBoxSize(+value)
  initPos()
}

const changeNum = (e: Event) => {
  let value = +(e.target as HTMLInputElement).value
  if (value > 200) value = 200
  else if (value < 10) value = 10
  boxNum.value = value
  initPos()
}

const animation = () => {
  resetPos()
  if (!isAnimating.value) return
  setTimeout(animation, 500)
}

const boxClick = (p: Pos) => {
  actBox.value = p
}

onMounted(() => {
  initPos()
})
</script>

<template>
  <div wfull flex justify-center pt400px preserve-3d op100 class="stage">
    <div w140px position="fixed bottom-30px right-30px">
      <div pb10px>
        <input type="checkbox" v-model="isAnimating" @change="animation" />
        <span pl6px>开启动画</span>
      </div>
      <div pb10px>
        <button @click="resetPos">更改位置</button>
      </div>
      <div w-full pb10px text-center lh-30px>
        <span inline-block w50px pr-5px>zoom:</span>
        <input type="range" w50px v-model="zoom" :min="20" :max="200" :step="1" />
        <span inline-block w35px text-right>{{(zoom / 100).toFixed(2)}}</span>
      </div>
      <div w-full pb10px text-center lh-30px>
        <span inline-block w20px pr-5px>X:</span>
        <input type="range" w80px v-model="rangeX" :min="0" :max="360" :step="1" />
        <span inline-block w35px text-right>{{rangeX}}</span>
      </div>
      <div w-full pb10px>
        <span inline-block w20px pr-10px>Y:</span>
        <input type="range" w80px v-model="rangeY" :min="0" :max="360" :step="1" />
        <span inline-block w35px text-right>{{rangeY}}</span>
      </div>
      <div w-full pb10px>
        <span inline-block w20px pr-10px>Z:</span>
        <input type="range" w80px v-model="rangeZ" :min="0" :max="360" :step="1" />
        <span inline-block w35px text-right>{{rangeZ}}</span>
      </div>
      <div w-full pb10px>
        <span inline-block w60px pr-10px>size</span>
        <input v-model="size" text-center w50px text-gray-9 bg-gray-2 @change="changeSize" />
      </div>
      <div w-full pb5px>
        <span inline-block w60px pr-10px>num</span>
        <input v-model="boxNum" text-center w50px text-gray-9 bg-gray-2 @change="changeNum" />
      </div>
    </div>
    <div w-600px h-600px preserve-3d :style="{'transform': `translate3d(0,0, 0) rotateX(${rangeX}deg) rotateY(${rangeY}deg) rotateZ(${rangeZ}deg)`, 'zoom': zoom / 100}">
      <Box @click="boxClick(p)" v-for="(p, index) in pos" :key="index" :pos="p" :active="actBox.x === p.x && actBox.y === p.y && actBox.z === p.z" />
      <div w-full h-full position="absolute top-0 left-0" bg-op30 bg-blue class="bigFace floor" />
      <div w-full h-full position="absolute top-0 left-0" border="1px red" bg-op3 bg-blue class="bigFace ceiling" />
      <div w-full h-full position="absolute top-0 left-0" border="1px red" bg-op3 bg-blue class="bigFace left" />
      <div w-full h-full position="absolute top-0 left-0" border="1px red" bg-op3 bg-blue class="bigFace right" />
      <div w-full h-full position="absolute top-0 left-0" border="1px red" bg-op3 bg-blue class="bigFace front" />
      <div w-full h-full position="absolute top-0 left-0" border="1px red" bg-op3 bg-blue class="bigFace back" />
    </div>
  </div>
</template>

<style>
.stage {
  perspective: 2000px;
}
.bigFace {
  pointer-events: none;
}
.bigFace::after {
  content: '';
  display: block;
  width: 100px;
  height: 100px;
  background: red;
}
.bigFace:hover {
  background: red;
}
.bigFace.ceiling {
  /* transform: translate3d(600px, 600px, 600px); */
  transform: translate3d(0, 0, 600px);
}
.bigFace.left {
  transform-origin: left;
  transform: rotateY(-90deg);
}
.bigFace.right {
  transform-origin: right;
  transform: rotateY(90deg);
}
.bigFace.front {
  transform-origin: bottom;
  transform: rotateX(-90deg);
}
.bigFace.back {
  transform-origin: top;
  transform: rotateX(90deg);
}
</style>
