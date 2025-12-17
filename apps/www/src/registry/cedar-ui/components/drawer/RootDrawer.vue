<script setup lang="ts">
import { cn } from '@aminnausin/cedar-ui';
</script>
<template>
    <div :class="cn('backdrop-blur-lg rounded-t-lg bg-surface-1 w-screen', 'border border-b')">
        <slot></slot>
    </div>
</template>
