<script setup lang="ts">
import { cn, type ButtonComponent } from '@aminnausin/cedar-ui';

import { RouterLink } from 'vue-router';
import { computed } from 'vue';

const props = withDefaults(
    defineProps<{
        disabled?: boolean;
        as?: ButtonComponent;
        to?: string;
        href?: string;
        ariaLabel?: string;
        class?: any;
        useSize?: boolean;
    }>(),
    {
        useSize: true,
        disabled: false,
    },
);

const wrapper = computed(() => props.as ?? (props.to ? RouterLink : props.href ? 'a' : 'button')); // Component is set here but props are set 1 level above
</script>
<template>
    <component
        :is="wrapper"
        :class="
            cn(
                'transition duration-200 ease-in-out focus:outline-hidden', // Animation
                { 'data-[disabled=true]:button-disabled-pointer': wrapper === 'button' }, // Disabled Button
                'data-[disabled=true]:button-disabled', // Disabled
                'flex items-center justify-center gap-2', // Layout
                'cursor-pointer text-sm', // Style
                { 'h-8 max-h-full p-2': useSize }, // Size
                'rounded-md', // Shape
                props.class,
            )
        "
        :disabled="wrapper === 'button' ? disabled : undefined"
        :aria-disabled="wrapper !== 'button' ? disabled : undefined"
        :data-disabled="disabled"
        :aria-label="ariaLabel"
        :to="to"
        :href="href"
    >
        <slot />
    </component>
</template>
