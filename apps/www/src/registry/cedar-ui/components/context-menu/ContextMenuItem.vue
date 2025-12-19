<script setup lang="ts">
import type { ContextMenuItem } from '@aminnausin/cedar-ui';

import { ButtonBase } from '../button';
import { computed } from 'vue';
import { cn } from '@aminnausin/cedar-ui';

const props = withDefaults(defineProps<ContextMenuItem>(), {});

const wrapperProps = computed(() => {
    if (!props.url) return {};
    if (props.external) return { href: props.url, target: props.target ?? '_blank' };
    return { to: props.url, target: props.target };
});
</script>
<template>
    <ButtonBase
        :class="
            cn(
                selected ? (selectedStyle ?? 'text-primary font-bold') : '',
                'relative w-full rounded px-2 py-1.5 select-none hover:bg-neutral-100 dark:hover:bg-neutral-900',
                style,
            )
        "
        :disabled="disabled"
        :onclick="
            () => {
                if (action) action();
            }
        "
        v-bind="wrapperProps"
    >
        <slot name="icon">
            <component v-if="icon" :is="icon" class="mr-2 h-4 w-4" />
            <span
                v-else
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2 h-4 w-4"
            >
            </span>
        </slot>
        <span class="text-nowrap">{{ text }}</span>
        <span class="ml-auto text-xs tracking-widest opacity-60">{{ shortcut ?? '' }}</span>
    </ButtonBase>
</template>
