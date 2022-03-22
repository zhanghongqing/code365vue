<script setup lang="ts">
import Box from './box.vue'

interface Pos {
  x: number
  y: number
}

const data = reactive({
  pos: Array<Pos>(),
})

const { pos } = toRefs(data)

const initPos = () => {
  console.log('初始化')
  while (pos.value.length < 30) {
    const x = Math.floor(Math.random() * 6)
    const y = Math.floor(Math.random() * 6)
    pos.value.push({ x, y })
  }
}

const resetPos = () => {
  console.log('重置位置数据')
}

defineExpose({
  resetPos,
})

onMounted(() => {
  initPos()
})
</script>

<template>
  <div wfull flex justify-center pt100px preserve-3d class="stage">
    <div w-600px h-600px bg-gray preserve-3d class="floor">
      <Box v-for="(p, index) in pos" :key="index" :pos="p" />
    </div>
  </div>
</template>

<style>
.stage {
  perspective: 2000px;
}
.floor {
  transform: rotateX(40deg) rotateZ(40deg);
}
</style>
