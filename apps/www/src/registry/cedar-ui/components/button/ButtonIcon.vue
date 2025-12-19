<script setup lang="ts">
import { ButtonBase } from '.';
import { computed } from 'vue';

const props = withDefaults(
    defineProps<{
        type?: 'reset' | 'submit' | 'button' | undefined;
        disabled?: boolean;
        title?: string;
        variant?: 'default' | 'ghost' | 'transparent';
        to?: string;
        href?: string;
        target?: string;
    }>(),
    {
        variant: 'default',
        target: '_self',
        type: 'button',
    },
);

const variantClass = computed(() => {
    switch (props.variant) {
        case 'ghost':
            return ['hocus:dark:bg-surface-2'];
        case 'transparent':
            return ['hocus:ring-1 hocus:ring-surface-1 hocus:bg-transparent'];
        default:
            return ['shadow-xs', 'ring-1 ring-r-button hover:ring-primary-active focus:ring-primary hocus:ring-2', 'bg-surface-2'];
    }
});

const wrapperProps = computed(() => {
    let wProps = {};

    if (props.to || props.href) wProps = { title: props.title ?? 'Link' };

    return {
        title: props.title ?? 'Button',
        to: props.to,
        href: props.href,
        target: props.target ?? '_blank',
        type: props.type,
        disabled: props.disabled,
        ...wProps,
    };
});
</script>

<template>
    <ButtonBase v-bind="wrapperProps" :class="['hocus:bg-surface-3 aspect-square', ...variantClass]">
        <!-- Should remove (only have icon but that should be the default not named) -->
        <slot name="text"> </slot>
        <slot name="icon"> </slot>
        <slot></slot>
    </ButtonBase>
</template>
