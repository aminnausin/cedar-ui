<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue';
import { ref } from 'vue';

const el = ref<HTMLElement | ComponentPublicInstance | null>(null);

const wrapper: 'button' | 'a' = 'button';

defineExpose({
    el: () => (el.value instanceof HTMLElement ? el.value : (el.value?.$el ?? null)),
});
</script>
<template>
    <component ref="el" :is="wrapper">hi</component>
</template>
