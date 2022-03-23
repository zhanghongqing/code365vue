<script setup lang="ts">
import { defineProps } from 'vue'
import { useBoxStore } from '~/stores/box'
import type { Pos } from '~/pages/days/types'

const box = useBoxStore()

interface Props {
  pos: Pos
}

withDefaults(defineProps<Props>(), {
  pos: () => {
    return { x: 1, y: 1, z: 1 }
  },
})

</script>

<template>
  <div w0 h0 bg-red relative preserve-3d class="box" :style="{'transform': `translateX(${box.boxSize * pos.x + box.boxSize / 2}px) translateZ(${box.boxSize * pos.z + box.boxSize / 2}px) translateY(${box.boxSize * pos.y + box.boxSize / 2}px)`}">
    <div preserve-3d class="face top" bg-red op50 absolute :style="{'width': `${box.boxSize}px`, 'height': `${box.boxSize}px`, 'top': `-${box.boxSize / 2}px`, 'left': `-${box.boxSize / 2}px`, 'transform': `translateZ(${box.boxSize / 2}px) rotate(0deg)`}" />
    <div preserve-3d class="face bottom" bg-blue op50 absolute :style="{'width': `${box.boxSize}px`, 'height': `${box.boxSize}px`, 'top': `-${box.boxSize / 2}px`, 'left': `-${box.boxSize / 2}px`, 'transform': `translateZ(-${box.boxSize / 2}px) rotate(0deg)`}" />
    <div preserve-3d class="face left" bg-green op50 absolute :style="{'width': `${box.boxSize}px`, 'height': `${box.boxSize}px`, 'top': `-${box.boxSize / 2}px`, 'left': `-${box.boxSize / 2}px`, 'transform': `translateX(-${box.boxSize / 2}px) rotateY(90deg)`}" />
    <div preserve-3d class="face right" bg-yellow op50 absolute :style="{'width': `${box.boxSize}px`, 'height': `${box.boxSize}px`, 'top': `-${box.boxSize / 2}px`, 'left': `-${box.boxSize / 2}px`, 'transform': `translateX(${box.boxSize / 2}px) rotateY(90deg)`}" />
    <div preserve-3d class="face front" bg-pink op50 absolute :style="{'width': `${box.boxSize}px`, 'height': `${box.boxSize}px`, 'top': `-${box.boxSize / 2}px`, 'left': `-${box.boxSize / 2}px`, 'transform': `translateY(${box.boxSize / 2}px) rotateX(90deg)`}" />
    <div preserve-3d class="face back" bg-purple op50 absolute :style="{'width': `${box.boxSize}px`, 'height': `${box.boxSize}px`, 'top': `-${box.boxSize / 2}px`, 'left': `-${box.boxSize / 2}px`, 'transform': `translateY(-${box.boxSize / 2}px) rotateX(90deg)`}" />
  </div>
</template>

<style>
.box {
  /* transform: translateZ(-100px); */
  transform: translateX(50px) translateZ(50px) translateY(50px);
}
.face {
  transform-origin: center center;
  /* transform: matrix3d(
    1,0,0,0,
    0,1,0,0,
    0,0,1,0,
    0,0,0,1
  ); */
}
</style>
