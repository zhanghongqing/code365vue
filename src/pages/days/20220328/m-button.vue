<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  btnText?: string,
  bg?: string
}

withDefaults(defineProps<Props>(), {
  btnText: '按钮'
})

</script>

<template>
  <div w50px h30px lh-30px cursor-pointer inline-block align-middle mr-10px :style="{'background-color': bg || '#3C82F6'}">{{btnText}}</div>
</template>