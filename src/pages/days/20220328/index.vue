<script setup lang="ts">
import Btn from './m-button.vue'

const data = reactive({
  showIndex: true,
  showComponent: true,
  showAttr: true,
})

const { showIndex, showComponent, showAttr } = toRefs(data)
</script>

<template>
  <div w100vw h100vh position="fixed top-0px left-0px" z-99999 class="bg-[#171B22]">
    <div h50px wfull bg-gray-700>
      <div w200px lh-50px >
        <Btn @click="showIndex = !showIndex" :bg="showIndex ? '' : '#999'" btn-text="层级" />
        <Btn @click="showComponent = !showComponent" :bg="showComponent ? '' : '#999'" btn-text="组件" />
        <Btn @click="showAttr = !showAttr" :bg="showAttr ? '' : '#999'" btn-text="属性" />
      </div>
    </div>
    <div wfull style="height: calc(100% - 50px);" bg-gray-800 flex="~">
      <div w200px hfull bg-gray-600 v-if="showIndex">层级</div>
      <div w240px hfull bg-gray-500 v-if="showComponent">组件</div>
      <div wfull flex="~ 1" bg-gray-600>123</div>
      <div w340px hfull bg-gray-500 v-if="showAttr">属性</div>
    </div>
  </div>
</template>