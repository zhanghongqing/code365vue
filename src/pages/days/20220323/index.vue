<script setup lang="ts">
import type { Pos } from '~/pages/days/types'
import Box from '~/pages/days/20220321/box.vue'

const data = reactive({
  pos: Array<Pos>(),
})

const { pos } = toRefs(data)

const initPos = () => {
  while (pos.value.length < 50) {
    const x = Math.floor(Math.random() * 6)
    const y = Math.floor(Math.random() * 6)
    const z = Math.floor(Math.random() * 6)
    pos.value.push({ x, y, z })
  }
}

onMounted(() => {
  initPos()
})
</script>

<template>
  <div wfull flex justify-center pt400px preserve-3d op100 class="stage">
    <div w-600px h-600px preserve-3d class="bigBox">
      <Box v-for="(p, index) in pos" :key="index" :pos="p" />
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
.bigBox {
  transform: rotateX(60deg) rotateZ(50deg);
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
