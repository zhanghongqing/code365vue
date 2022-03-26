import { acceptHMRUpdate, defineStore } from 'pinia'

export const useBoxStore = defineStore('box', () => {
  const boxSize = ref(100)
  const boxOpacity = ref(50)

  function setBoxSize(size: number) {
    boxSize.value = size
  }

  function setBoxOpacity(opacity: number) {
    boxOpacity.value = opacity
  }

  return {
    setBoxSize,
    boxSize,
    setBoxOpacity,
    boxOpacity
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useBoxStore, import.meta.hot))
