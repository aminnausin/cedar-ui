<script setup lang="ts">
import { CedarDelete } from '../icons';
import { RouterLink } from 'vue-router';
import { computed } from 'vue';
import { cn } from '@aminnausin/cedar-ui';

const props = defineProps<{
    to?: string;
    label?: string;
    disabled?: boolean;
    class?: string;
    positionClasses?: string; // legacy
    colourClasses?: string; // legacy
    textClasses?: string; // legacy
}>();

const wrapper = computed(() => (props.to ? RouterLink : 'button'));
const wrapperProps = computed(() => {
    return props.to
        ? { to: props.to, title: props.label ?? 'Link', 'aria-label': props.label ?? 'Link' }
        : {
              'aria-label': props.label ?? 'Close Modal',
              title: props?.label ?? 'Close Modal',
              type: 'button',
          };
});
</script>

<template>
    <component
        :is="wrapper"
        :aria-disabled="disabled"
        :disabled="disabled"
        :data-disabled="disabled"
        :class="
            cn(
                'flex items-center justify-center rounded-full cursor-pointer data-[disabled=true]:button-disabled',
                positionClasses ?? 'absolute top-0 right-0 w-8 h-8 mt-5 mr-5',
                colourClasses ?? 'hover:bg-surface-1',
                textClasses ?? 'text-foreground-1 hover:text-foreground-0 ',
                props.class,
            )
        "
        v-bind="wrapperProps"
    >
        <slot name="icon">
            <CedarDelete />
        </slot>
    </component>
</template>
