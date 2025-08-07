<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { computed } from 'vue';
import { cn } from '@/lib/utils';

const props = withDefaults(
    defineProps<{
        type?: 'reset' | 'submit' | 'button' | undefined;
        disabled?: boolean;
        title?: string;
        variant?: 'default' | 'ghost' | 'transparent' | 'form';
        to?: string;
        href?: string;
        target?: string;
        text?: string;
        class?: string;
    }>(),
    {
        title: '',
        type: 'button',
        variant: 'default',
        target: '_blank',
    },
);

const variantClass = computed(() => {
    switch (props.variant) {
        case 'ghost':
            return '';
        case 'transparent':
            return [
                'transition',
                'hover:bg-white hover:dark:bg-primary-dark-800',
                'focus:outline-none hover:text-gray-900 dark:text-neutral-100',
                'hocus:ring-[0.125rem] hover:ring-violet-400 hover:dark:ring-violet-700 focus:ring-white',
                'aria-disabled:cursor-not-allowed aria-disabled:hover:ring-neutral-200 aria-disabled:hover:dark:ring-neutral-700 aria-disabled:ring-1 aria-disabled:opacity-60',
                'disabled:cursor-not-allowed disabled:hover:ring-neutral-200 disabled:hover:dark:ring-neutral-700 disabled:hover:ring-1 disabled:opacity-60',
            ].join(' ');
        case 'form':
            return [
                'inline-flex items-center justify-center px-4 py-2 text-sm transition-colors border dark:border-neutral-600 rounded-md focus:outline-none',
                'focus:ring-1 focus:ring-neutral-100 dark:focus:ring-neutral-400 focus:ring-offset-1 hover:bg-neutral-100 dark:hover:bg-neutral-900',
                'aria-disabled:cursor-not-allowed aria-disabled:hover:ring-neutral-200 aria-disabled:hover:dark:ring-neutral-700 aria-disabled:ring-1 aria-disabled:opacity-60',
                'disabled:cursor-not-allowed disabled:hover:ring-neutral-200 disabled:hover:dark:ring-neutral-700 disabled:hover:ring-1 disabled:opacity-60',
            ].join(' ');
        default:
            return [
                'h-10 max-h-full rounded-md ',
                'p-2 shadow-sm',
                'focus:outline-none text-gray-900 dark:text-neutral-100',
                'ring-1 ring-neutral-200 dark:ring-neutral-700 hocus:ring-[0.125rem] focus:ring-purple-400 dark:focus:ring-purple-500 hover:ring-violet-400 hover:dark:ring-violet-700',
                'bg-white dark:bg-primary-dark-800',
                'aria-disabled:cursor-not-allowed aria-disabled:hover:ring-neutral-200 aria-disabled:hover:dark:ring-neutral-700 aria-disabled:ring-1 aria-disabled:opacity-60',
                'disabled:cursor-not-allowed disabled:hover:ring-neutral-200 disabled:hover:dark:ring-neutral-700 disabled:ring-1 disabled:opacity-60',
            ].join(' ');
    }
});
</script>

<template>
    <router-link
        v-if="to"
        :to="to"
        :class="[cn('flex gap-2 items-center justify-center cursor-pointer', variantClass, props.class)]"
        :type="type"
        :title="title"
        :aria-disabled="disabled"
        :target="target ?? '_blank'"
    >
        <slot>
            <p class="line-clamp-1 flex-1 text-left">{{ text }}</p>
        </slot>
        <slot name="icon"> </slot>
    </router-link>
    <a
        v-else-if="href"
        :href="href"
        :class="[cn('flex gap-2 items-center justify-center cursor-pointer', variantClass, props.class)]"
        :type="type"
        :title="title"
        :aria-disabled="disabled"
        :target="target ?? '_blank'"
    >
        <slot>
            <p class="line-clamp-1 flex-1 text-left">{{ text }}</p>
        </slot>
        <slot name="icon"> </slot>
    </a>
    <button
        v-else
        :class="[cn('flex gap-2 items-center justify-center cursor-pointer', variantClass, props.class)]"
        :type="type"
        :disabled="disabled"
        :title="title ?? 'Button'"
    >
        <slot>
            <p class="line-clamp-1 flex-1 text-left" v-if="text">{{ text }}</p>
        </slot>
        <slot name="icon"> </slot>
    </button>
</template>
