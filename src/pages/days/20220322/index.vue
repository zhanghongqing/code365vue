<script setup lang="ts">
import Stage from '~/pages/days/20220321/index.vue'
import { useBoxStore } from '~/stores/box'

const box = useBoxStore()

const data = reactive({
  size: 100,
})

const stageRef = ref(null)

const moveBox = () => {
  console.log('moveAllBox', stageRef.value)
}

const changeSize = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  box.setBoxSize(+value)
}

const { size } = toRefs(data)
</script>

<template>
  <div>
    <button mr20px @click="moveBox">
      move
    </button>
    <input v-model="size" text-gray-9 bg-gray-2 @change="changeSize">
    <Stage ref="stageRef" />
  </div>
</template>

<style>
</style>
