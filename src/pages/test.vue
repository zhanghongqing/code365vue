<script setup lang="ts">

const data = reactive({
  resStr: '',
})

const { resStr } = toRefs(data)

function kthPalindrome(queries: number[], intLength: number): number[] {
  let res = queries.map((v) => {
    if (intLength > 2) {
      let n = Math.floor(intLength / 2)
      let n1 = Array(n - (intLength % 2 === 1 ? 0 : 1)).fill(9).join('')
      let n2 = v + Number(n1)
      v = Number(String(n2) + String(n2).split('').reverse().slice(-n).join(''))
      console.log(v)
    }
    if (intLength === 2) {
      v =  Number(String(v) + String(v))
    }
    if (String(v).length > intLength) {
      v = -1
    }
    return v
  })
  return res
};

onMounted(() => {
  let res = kthPalindrome([2, 5, 6], 7)
  resStr.value = JSON.stringify(res)
})
</script>

<template>
  <div>
    结果：{{resStr}}
  </div>
</template>
