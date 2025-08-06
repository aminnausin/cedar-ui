<script setup lang="ts">
const props = defineProps<{
    name?: string;
    text?: string;
    subtext?: string;
    class?: string;
    subtextClass?: string;
}>();
</script>

<template>
    <label v-if="text || $slots" :for="name" :class="[`font-medium text-gray-700 dark:text-neutral-200`, props.class]">
        <slot>
            {{ text }}
        </slot>
    </label>
    <p v-if="subtext || $slots.subtext" :class="['text-sm/6 text-gray-500 dark:text-gray-400', subtextClass]">
        <slot name="subtext">
            {{ subtext }}
        </slot>
    </p>
</template>
