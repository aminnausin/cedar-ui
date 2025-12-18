<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { computed } from 'vue';
import { cn } from '@aminnausin/cedar-ui';

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
    }>(),
    {
        title: '',
        type: 'button',
        variant: 'default',
        target: '_blank',
    },
);

const wrapper = computed(() => (props.to ? RouterLink : props.href ? 'a' : 'button'));
const wrapperProps = computed(() => {
    let wProps = {};

    if (props.to) wProps = { to: props.to, title: props.title ?? 'Link' };
    else if (props.href) wProps = { href: props.href, title: props.title ?? 'External Link' };
    else wProps = { title: 'Button' };

    return { title: props.title, target: props.target ?? '_blank', type: props.type, ...wProps };
});

const variantClass = computed(() => {
    switch (props.variant) {
        case 'ghost':
            return ['hocus:bg-surface-2'];
        case 'transparent':
            return ['hocus:ring-1 hocus:ring-surface-1'];
        case 'form':
            return [
                'inline-flex px-4',
                'border border-r-button hocus:border-primary',
                'focus:ring-1 focus:ring-primary hover:bg-surface-2',
            ];
        default:
            return [
                'shadow-xs bg-surface-2',
                'border border-r-button hover:border-primary-active focus:border-primary',
                'ring-primary-active hocus:ring-1 focus:ring-primary',
            ];
    }
});
</script>

<template>
    <component
        :is="wrapper"
        :aria-disabled="disabled"
        :disabled="disabled"
        :data-disabled="disabled"
        :class="[
            cn(
                'data-[disabled=true]:button-disabled flex h-8 max-h-full cursor-pointer items-center justify-center gap-2 rounded-md p-2 transition-colors duration-200 focus:outline-hidden',
                ...variantClass,
            ),
        ]"
        v-bind="wrapperProps"
    >
        <slot>
            <p class="line-clamp-1 flex-1 text-left" v-if="text">{{ text }}</p>
        </slot>
        <slot name="icon"> </slot>
    </component>
</template>
