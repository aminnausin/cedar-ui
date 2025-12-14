<script setup lang="ts">
import { cn } from '@aminnausin/cedar-ui';
</script>
<template>
    <div
        :class="
            cn('backdrop-blur-lg rounded-t-lg bg-background dark:bg-accent w-screen', 'border border-neutral-200 dark:border-neutral-700')
        "
    >
        <slot></slot>
    </div>
</template>
