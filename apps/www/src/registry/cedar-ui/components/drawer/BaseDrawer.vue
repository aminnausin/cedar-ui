<script setup lang="ts">
import type { DrawerProps, SwipeDirection } from '@aminnausin/cedar-ui';

import { cn, useSwipeHandler, SWIPE_THRESHOLD, VELOCITY_THRESHOLD, useDrawer } from '@aminnausin/cedar-ui';
import { ButtonText } from '../button';
import { RootDrawer } from '.';
import { ref } from 'vue';

import DrawerHandle from './DrawerHandle.vue';

const drawer = useDrawer();

const props = withDefaults(defineProps<DrawerProps>(), { direction: 'bottom' });
const swipeDirections = ref<SwipeDirection[]>([props.direction]);

const { offset, isSwiping, onPointerDown, onPointerMove, onPointerUp, onPointerCancel, isTapGesture } = useSwipeHandler({
    directions: swipeDirections,
    swipeThreshold: { px: SWIPE_THRESHOLD },
    velocityThreshold: VELOCITY_THRESHOLD,
    onSwipeOut: drawer.close,
});
</script>
<template>
    <RootDrawer
        @keydown.esc="drawer.close"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="onPointerUp"
        @dragend="onPointerUp"
        @pointercancel="onPointerCancel"
        :class="cn(drawer.props.value?.rootClass, 'drawer duration-300 transition-all ease-out')"
        :data-isSwiping="isSwiping"
        :style="{
            '--offset-y': `${Math.max(-10, offset.y)}px`,
        }"
        id="drawer"
    >
        <div class="flex flex-col rounded-t-xl items-center justify-center">
            <div class="w-full cursor-pointer group pt-4 flex">
                <slot name="handle">
                    <DrawerHandle
                        :aria-expanded="drawer.isOpen.value"
                        @keydown.enter.prevent="drawer.close"
                        @keydown.space.prevent="drawer.close"
                        @pointerup="
                            () => {
                                onPointerUp();
                                if (isTapGesture()) drawer.close();
                            }
                        "
                    />
                </slot>
            </div>
            <div class="p-3 flex flex-col gap-3 w-full">
                <slot name="header">
                    <div class="flex flex-col gap-1.5 w-full">
                        <h2 id="drawerTitle" class="flex-1 text-xl font-semibold text-foreground">
                            <slot name="title">
                                {{ drawer.props.value.title ?? title ?? 'Title' }}
                            </slot>
                        </h2>
                        <p
                            class="w-full text-sm text-foreground-1"
                            v-if="$slots.description || drawer.props.value.description || description"
                            id="drawerDescription"
                        >
                            <slot name="description">{{ drawer.props.value.description ?? description ?? 'Description' }}</slot>
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
    transform: translateY(var(--offset-y, 0px)) translateX(var(--offset-x, 0px));
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
