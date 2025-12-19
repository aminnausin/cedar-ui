<script setup lang="ts">
import { ButtonIcon } from '../button';
import { cn } from '@aminnausin/cedar-ui';

const props = defineProps<{
    label?: string;
    colour?: string;
    active: boolean;
}>();

const oldClass = `${props.active ? `bg-white ring-3 ring-[0.1rem] ring-violet-500 ring-inset dark:bg-violet-700 dark:ring-0` : `dark:bg-primary-dark-800 bg-white`} flex h-8 w-8 shrink-0 items-center justify-center rounded-lg shadow-lg hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-violet-700`;
</script>
<template>
    <button-icon
        :id="'btn-nav-' + label"
        :variant="'transparent'"
        :class="
            cn(
                'dark:hover:bg-primary-dark hover:bg-foreground-4-hover focus:bg-surface-2 size-8 shrink-0 rounded-lg shadow-lg hover:ring-0',
                active
                    ? `ring-primary dark:bg-primary-active hover:ring-primary/70 ring-2 ring-inset hover:ring-2 dark:ring-0`
                    : `bg-surface-2`,
            )
        "
        :title="label"
    >
        <slot />
    </button-icon>
</template>
