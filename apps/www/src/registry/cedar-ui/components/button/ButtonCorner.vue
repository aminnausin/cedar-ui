<script setup lang="ts">
import { CedarDelete } from '../icons';
import { RouterLink } from 'vue-router';
import { cn } from '@aminnausin/cedar-ui';

const props = defineProps(['positionClasses', 'colourClasses', 'textClasses', 'to', 'label', 'disabled']);
</script>

<template>
    <RouterLink
        v-if="to"
        :aria-label="label ?? 'Link'"
        :title="label ?? 'Link'"
        :to="to ?? '/'"
        :class="
            cn(
                'flex items-center justify-center rounded-full aria-disabled:cursor-not-allowed aria-disabled:hover:ring-r-disabled aria-disabled:opacity-60',
                `${positionClasses ?? ' absolute top-0 right-0 w-8 h-8 mt-5 mr-5'}`,
                `${props?.colourClasses ?? 'hover:bg-gray-50 dark:hover:bg-gray-700'} ${props?.textClasses ?? 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'}`,
            )
        "
        :aria-disabled="disabled"
    >
        <slot name="icon">
            <CedarDelete />
        </slot>
    </RouterLink>
    <button
        v-else
        :aria-label="props?.label ?? 'Close Modal'"
        :title="props?.label ?? 'Close Modal'"
        class="flex items-center justify-center rounded-full disabled:cursor-not-allowed aria-disabled:hover:ring-r-disabled disabled:opacity-60"
        :class="`${props?.positionClasses ?? 'absolute top-0 right-0 w-8 h-8 mt-5 mr-5'} ${props?.colourClasses ?? 'hover:bg-gray-50 dark:hover:bg-gray-700'} ${props?.textClasses ?? 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'}`"
        :disabled="disabled"
        type="button"
    >
        <slot name="icon">
            <CedarDelete />
        </slot>
    </button>
</template>
