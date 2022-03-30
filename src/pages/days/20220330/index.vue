<script setup lang="ts">
import vue3TreeOrg from 'vue3-tree-org';
import "vue3-tree-org/lib/vue3-tree-org.css";
console.log('aaaa', vue3TreeOrg);
// import a from 'lvs-design'
// console.log(a)

const data = reactive({
  style: {
    background: "#fff",
    color: "#5e6d82",
  },
  treeData: {
    "id":1,"label":"xxx科技有限公司",
    "children":[
        {
            "id":2,"pid":1,"label":"产品研发部",
            "style":{"color":"#fff","background":"#108ffe"},
            "children":[
                {"id":6,"pid":2,"label":"禁止编辑节点","disabled":true},
                {"id":8,"pid":2,"label":"禁止拖拽节点","noDragging":true},
                {"id":10,"pid":2,"label":"测试"}
            ]
        },
        {
            "id":3,"pid":1,"label":"客服部",
            "children":[
                {"id":11,"pid":3,"label":"客服一部"},
                {"id":12,"pid":3,"label":"客服二部"}
            ]
        },
        {"id":4,"pid":1,"label":"业务部"}
    ]
  }
})

const { style, treeData } = toRefs(data)

const nodeDragMove = (d: any) => {
  console.log(d)
}

const nodeDragEnd = (d: any, isSelf: boolean) => {
  console.log(d, isSelf)
}

const onMenus = (d: any) => {
  console.log(d)
}

const onNodeClick = (e: Event, d: any) => {
  console.log(e, d)
}

const onExpand = (e: Event, d: any) => {
  console.log(e, d)
}

</script>

<template>
  <div>
  123
    <!-- <BobButton /> -->
    <vue3-tree-org
      :data="treeData"
      :disabled="false"
      :horizontal="false"
      :collapsable="true"
      :label-style="style"
      :node-draggable="true"
      :only-one-node="true"
      :clone-node-drag="true"
      :node-draging="nodeDragMove"
      :node-drag-end="nodeDragEnd"
      @on-contextmenu="onMenus"
      @on-expand="onExpand"
      @on-node-click="onNodeClick"
    />
  </div>
</template>