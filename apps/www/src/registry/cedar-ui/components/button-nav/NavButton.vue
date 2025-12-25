<script setup lang="ts">
import { ButtonIcon } from '../button';
import { cn } from '@aminnausin/cedar-ui';

const props = defineProps<{
    label?: string;
    colour?: string;
    active: boolean;
}>();
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
