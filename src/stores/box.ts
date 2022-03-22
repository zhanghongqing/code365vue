import { acceptHMRUpdate, defineStore } from 'pinia'

export const useBoxStore = defineStore('box', () => {
  const boxSize = ref(100)

  function setBoxSize(size: number) {
    boxSize.value = size
  }

  return {
    setBoxSize,
    boxSize,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useBoxStore, import.meta.hot))
