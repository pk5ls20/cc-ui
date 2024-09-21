<template>
  <button
    class="c-button"
    :class="classList"
    :type="nativeType"
    :autofocus="autoFocus"
    :disabled="disabled"
  >
    <i v-if="props.icon" :class="props.icon" />
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts" name="CButton">
import "../style/";
import { computed } from "vue";
import { Props } from "./button";
defineOptions({
  name: "CButton"
});
const props = defineProps(Props);
// const emits = defineEmits(Emits);
const classList = computed(() => {
  const { type, size, round, plain, circle, disabled } = props;
  return [
    {
      [`c-button--${type}`]: type,
      [`c-button--${size}`]: size,
      ["is-disabled"]: disabled,
      ["is-round"]: round,
      ["is-plain"]: plain,
      ["is-circle"]: circle
    }
  ];
});
// function handlerClick(evt: MouseEvent): void {
//   emits("click", evt);
// }
</script>
<style></style>
