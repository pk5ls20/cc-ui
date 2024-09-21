<template>
  <li>
    <div class="tree-node">
      <span class="toggle" @click="toggleOpen">{{ isOpened ? "-" : "+" }}</span>
      <label v-if="showCheckbox">
        <input type="checkbox" v-model="localItem.checked" />
      </label>
      {{ localItem.label }}
    </div>
    <ul v-if="isOpened && localItem.children" class="children">
      <c-tree-node
        v-for="(child, index) in localItem.children"
        :key="index"
        :item="child"
        :showCheckbox="showCheckbox"
      />
    </ul>
  </li>
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  showCheckbox: {
    type: Boolean,
    default: false
  }
});

// 使用 reactive 复制 item 的属性
const localItem = reactive({ ...props.item });

// 计算属性 isOpened 依赖于 localItem
const isOpened = computed(() => localItem.isOpened);

const toggleOpen = () => {
  localItem.isOpened = !localItem.isOpened;
};
</script>

<script lang="ts">
export default {
  name: "CTreeNode"
};
</script>

<style scoped lang="scss">
.tree-node {
  display: flex;
  align-items: center;
}

.toggle {
  cursor: pointer;
  margin-right: 0.5rem;
  font-weight: bold;
}

.children {
  list-style-type: none;
  padding-left: 1.5rem;
  margin-top: 0.5rem;
}
</style>
