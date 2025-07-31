<script setup lang="ts">
export interface TabsContentProps {
    value: string;
    isActive?: boolean;
}
defineProps<TabsContentProps>();
</script>
<template>
    <slot v-if="isActive"> </slot>
</template>
