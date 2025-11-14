<script setup lang="ts">
import { HoverCard } from '@/registry/cedar-ui/components/hover-card';
const title = 'Frieren: S1E01';
const stateVideo = { id: 1 };
</script>
<template>
    <HoverCard :content="title ?? '[File Not Found]'" class="flex-1 min-w-10">
        <template #trigger>
            <h2
                :class="[
                    'text-xl capitalize truncate text-gray-900 dark:text-white',
                    { 'bg-neutral-300 dark:bg-neutral-700  rounded-full w-full h-5 my-auto animate-pulse': !stateVideo.id },
                ]"
            >
                {{ !stateVideo.id ? '' : (title ?? '[File Not Found]') }}
            </h2>
        </template>
    </HoverCard>
</template>
