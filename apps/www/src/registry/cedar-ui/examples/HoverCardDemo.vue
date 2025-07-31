<script setup lang="ts">
import { HoverCard } from '@/registry/cedar-ui/components/hover-card';

const stateVideo = { id: 1 };
const title = 'Frieren: S1E01';
</script>
<template>
    <div id="hover-card-demo">
        <HoverCard scroll-container="window">
            <template #trigger>
                <h2 class="hover:underline">
                    {{ !stateVideo.id ? '' : (title ?? '[File Not Found]') }}
                </h2>
            </template>
            <template #content>
                {{ title ?? '[File Not Found]' }}
                <div class="size-4 bg-green-600 rounded-full animate-pulse"></div>
            </template>
        </HoverCard>
    </div>
</template>

<style lang="css" scoped>
.vp-doc h2 {
    margin: 0%;
    padding-top: 0%;
    border: none;
}
</style>
