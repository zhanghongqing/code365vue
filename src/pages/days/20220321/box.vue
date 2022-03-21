<script setup lang="ts">
import { defineProps } from 'vue'

interface Pos {
  x: number
  y: number
}

interface Props {
  pos: Pos
}

withDefaults(defineProps<Props>(), {
  pos: () => {
    return { x: 1, y: 1 }
  },
})

</script>

<template>
  <div w0 h0 bg-red relative preserve-3d class="box" :style="{'transform': `translateX(${100 * pos.x + 50}px) translateZ(50px) translateY(${100 * pos.y + 50}px)`}">
    <div preserve-3d class="face top" w100px h100px bg-red op50 absolute />
    <div preserve-3d class="face bottom" w100px h100px bg-blue op50 absolute />
    <div preserve-3d class="face left" w100px h100px bg-green op50 absolute />
    <div preserve-3d class="face right" w100px h100px bg-yellow op50 absolute />
    <div preserve-3d class="face front" w100px h100px bg-pink op50 absolute />
    <div preserve-3d class="face back" w100px h100px bg-purple op50 absolute />
  </div>
</template>

<style>
.box {
  /* transform: translateZ(-100px); */
  transform: translateX(50px) translateZ(50px) translateY(50px);
}
.face {
  top: -50px;
  left: -50px;
  transform-origin: center center;
  /* transform: matrix3d(
    1,0,0,0,
    0,1,0,0,
    0,0,1,0,
    0,0,0,1
  ); */
}
.face.top {
  transform: translateZ(50px) rotate(0deg);
}
.face.bottom {
  transform: translateZ(-50px) rotate(0deg);
}
.face.left {
  transform: translateX(-50px) rotateY(90deg);
}
.face.right {
  transform: translateX(50px) rotateY(90deg);
}
.face.front {
  transform: translateY(50px) rotateX(90deg);
}
.face.back {
  transform: translateY(-50px) rotateX(90deg);
}
</style>
