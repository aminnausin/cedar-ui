<script setup lang="ts">
defineProps<{ value: string }>();
</script>
<template>
    <button
        @click="$emit('tabTrigger', value)"
        type="button"
        class="relative z-20 inline-flex items-center justify-center w-full h-8 px-3 text-sm font-medium transition-all rounded-md cursor-pointer whitespace-nowrap"
        :value="value"
    >
        {{ value }}
    </button>
</template>
