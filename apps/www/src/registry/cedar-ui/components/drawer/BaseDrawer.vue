<script setup lang="ts">
import type { SwipeDirection } from '@aminnausin/cedar-ui';

import { cn, useSwipeHandler } from '@aminnausin/cedar-ui';
import { useDrawerCore } from './useDrawerCore';
import { ButtonText } from '../button';
import { RootDrawer } from '.';
import { ref } from 'vue';

const SWIPE_THRESHOLD = 5;
const SWIPE_LIMIT = 64;

const swipeDirections = ref<SwipeDirection[]>(['top', 'bottom']);

const props = defineProps<{
    drawer: ReturnType<typeof useDrawerCore>;
}>();

const { offset, isSwiping, onPointerDown, onPointerMove, onPointerUp } = useSwipeHandler({
    directions: swipeDirections,
    threshold: SWIPE_THRESHOLD,
    onSwipeOut: props.drawer.close,
});
</script>
<template>
    <RootDrawer
        @keydown.esc="drawer.close"
        :class="cn(drawer.props.value?.rootClass, 'drawer duration-300 transition-all ease-out')"
        tabindex="-1"
        :style="{
            '--offset-y': `${Math.max(-0, Math.min(offset.y, SWIPE_LIMIT))}px`,
        }"
    >
        <div class="flex flex-col rounded-t-xl items-center justify-center">
            <div
                class="w-full cursor-pointer group pt-4"
                :data-isSwiping="isSwiping"
                @pointerdown="onPointerDown"
                @pointermove="onPointerMove"
                @pointerup="onPointerUp"
                @pointercancel="onPointerUp"
            >
                <slot name="handle">
                    <div
                        class="mx-auto w-1/8 sm:w-1/12 h-1.5 rounded-full bg-foreground-2 cursor-pointer group-hover:bg-foreground-1 transition-colors"
                    ></div>
                </slot>
            </div>
            <div class="p-3 flex flex-col gap-3 w-full">
                <slot name="header">
                    <div class="flex flex-col gap-1.5 w-full">
                        <h2 id="drawerTitle" class="flex-1 text-xl font-semibold text-foreground">
                            <slot name="title">
                                {{ drawer.props.value.title ?? 'Title' }}
                            </slot>
                        </h2>
                        <p
                            class="w-full text-sm text-foreground-1"
                            v-if="$slots.description || drawer.props.value.description"
                            id="drawerDescription"
                        >
                            <slot name="description">{{ drawer.props.value.description ?? 'Description' }}</slot>
                        </p>
                    </div>
                </slot>
            </div>
            <div v-if="$slots.default" class="max-h-[60vh] overflow-y-scroll scrollbar-hide flex flex-col gap-3 w-full p-3">
                <slot> </slot>
            </div>
            <div v-if="$slots.footer || !$slots.default" class="p-3 flex flex-col gap-3 w-full">
                <slot name="footer">
                    <ButtonText :class="'text-sm h-8 ring-1 capitalize w-full'" :variant="'default'" @click="drawer.close()">
                        Close Drawer
                    </ButtonText>
                </slot>
            </div>
        </div>
    </RootDrawer>
</template>
<style lang="css" scoped>
.drawer {
    transform: translateY(var(--offset-y, 0px));
}

@media (prefers-reduced-motion: reduce) {
    .drawer {
        transition: none !important;
    }
}

[data-isSwiping='true'] {
    transition-property: none !important;
}
</style>
