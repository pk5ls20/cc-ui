<template>
    <button
        class="c-button"
        :class="classList"
        :type="nativeType"
        :autofocus="autoFocus"
        :disabled="disabled"
    >
    <i v-if="props.icon" :class="props.icon"></i>
    <span v-if="$slots.default">
        <slot />
    </span>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Props, Emits } from './button';
const props = defineProps(Props)
const emits = defineEmits(Emits)
const classList = computed(() => {
    const { type, size, round, plain, circle, disabled } = props;
    return [
        {
            [`c-button--${type}`]: type,
        }
    ]
});
function handlerClick(evt: MouseEvent): void {
    emits('click', evt)
}
</script>