<script setup lang="ts">
import { defineProps } from 'vue'
import { useBoxStore } from '~/stores/box'
import type { Pos } from '~/pages/days/types'

const box = useBoxStore()

interface Props {
  pos: Pos,
  active: boolean,
}

withDefaults(defineProps<Props>(), {
  pos: () => {
    return { x: 1, y: 1, z: 1 }
  }
})

</script>

<template>
  <div w0 h0 bg-red relative preserve-3d :class="{'box': true, 'active': active}" :style="{'transform': `translateX(${box.boxSize * pos.x + box.boxSize / 2}px) translateZ(${box.boxSize * pos.z + box.boxSize / 2}px) translateY(${box.boxSize * pos.y + box.boxSize / 2}px)`}">
    <div preserve-3d class="face top" bg-red op30 absolute :style="{'width': `${box.boxSize}px`, 'height': `${box.boxSize}px`, 'top': `-${box.boxSize / 2}px`, 'left': `-${box.boxSize / 2}px`, 'transform': `translateZ(${box.boxSize / 2}px) rotate(0deg)`}" />
    <div preserve-3d class="face bottom" bg-blue op30 absolute :style="{'width': `${box.boxSize}px`, 'height': `${box.boxSize}px`, 'top': `-${box.boxSize / 2}px`, 'left': `-${box.boxSize / 2}px`, 'transform': `translateZ(-${box.boxSize / 2}px) rotate(0deg)`}" />
    <div preserve-3d class="face left" bg-green op30 absolute :style="{'width': `${box.boxSize}px`, 'height': `${box.boxSize}px`, 'top': `-${box.boxSize / 2}px`, 'left': `-${box.boxSize / 2}px`, 'transform': `translateX(-${box.boxSize / 2}px) rotateY(90deg)`}" />
    <div preserve-3d class="face right" bg-yellow op30 absolute :style="{'width': `${box.boxSize}px`, 'height': `${box.boxSize}px`, 'top': `-${box.boxSize / 2}px`, 'left': `-${box.boxSize / 2}px`, 'transform': `translateX(${box.boxSize / 2}px) rotateY(90deg)`}" />
    <div preserve-3d class="face front" bg-pink op30 absolute :style="{'width': `${box.boxSize}px`, 'height': `${box.boxSize}px`, 'top': `-${box.boxSize / 2}px`, 'left': `-${box.boxSize / 2}px`, 'transform': `translateY(${box.boxSize / 2}px) rotateX(90deg)`}" />
    <div preserve-3d class="face back" bg-purple op30 absolute :style="{'width': `${box.boxSize}px`, 'height': `${box.boxSize}px`, 'top': `-${box.boxSize / 2}px`, 'left': `-${box.boxSize / 2}px`, 'transform': `translateY(-${box.boxSize / 2}px) rotateX(90deg)`}" />
  </div>
</template>

<style>
.box {
  transition: all .2s ease;
  /* transform: translateZ(-100px); */
  transform: translateX(50px) translateZ(50px) translateY(50px);
}
.box:hover .face {
  background: blue;
}
.box.active .face {
  background: red;
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
.face::before {
  content: '前Q';
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.face.back::before {
  content: '后E';
}
.face.top::before {
  content: '上W';
}
.face.bottom::before {
  content: '下S';
}
.face.left::before {
  content: '左A';
}
.face.right::before {
  content: '右D';
}
</style>
