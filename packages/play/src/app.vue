<template>
  <c-button>Default</c-button>
  <c-button type="primary">Primary</c-button>
  <c-button type="success">Success</c-button>
  <c-button type="info">Info</c-button>
  <c-button type="warning">Warning</c-button>
  <c-button type="danger">Danger</c-button>

  <br />
  <br />

  <c-button plain>朴素按钮</c-button>
  <c-button type="primary" plain>主要按钮</c-button>
  <c-button type="success" plain>成功按钮</c-button>
  <c-button type="info" plain>信息按钮</c-button>
  <c-button type="warning" plain>警告按钮</c-button>
  <c-button type="danger" plain>危险按钮</c-button>

  <br />
  <br />

  <c-button>按钮默认尺寸</c-button>
  <c-button size="large">Large</c-button>
  <c-button size="medium">Medium</c-button>
  <c-button size="small">Small</c-button>
  <c-button size="mini">Mini</c-button>

  <br />
  <br />

  <c-button plain type="primary">朴素按钮</c-button>
  <c-button round type="primary">椭圆按钮</c-button>
  <c-button disabled type="primary">椭圆按钮</c-button>
  <c-button circle type="primary">圆形按钮</c-button>

  <c-tree :options="treeData"/>
</template>

<script setup lang="ts">
import { ref } from "vue";

const treeData = ref([
  {
    label: "一级 1",
    children: [
      {
        label: "二级 1-1",
        children: [
          {
            label: "三级 1-1-1"
          }
        ]
      }
    ]
  },
  {
    label: "一级 2",
    children: [
      {
        label: "二级 2-1",
        children: [
          {
            label: "三级 2-1-1"
          }
        ]
      },
      {
        label: "二级 2-2",
        children: [
          {
            label: "三级 2-2-1"
          }
        ]
      }
    ]
  },
  {
    label: "一级 3",
    children: [
      {
        label: "二级 3-1",
        children: [
          {
            label: "三级 3-1-1"
          }
        ]
      },
      {
        label: "二级 3-2"
      }
    ]
  }
]);
</script>

<style scoped></style>
