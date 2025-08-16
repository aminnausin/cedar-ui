<script setup lang="ts">
import { ButtonCorner } from '../button';
import { RouterLink } from 'vue-router';
import { cn } from '@aminnausin/cedar-ui';

const props = defineProps<{
    label?: string;
    removeable?: boolean;
    textClass?: string;
    class?: string;
    URL?: string;
}>();

const defaultStyle =
    'p-1 px-2 text-sm leading-none rounded-xl truncate lowercase text-neutral-100 dark:text-neutral-300 bg-violet-600 dark:bg-violet-900 shrink-0 transition-colors duration-200';
</script>
<template>
    <RouterLink
        v-if="props.URL"
        :class="cn(defaultStyle, removeable ? 'flex gap-1 items-center justify-between' : '', props.class)"
        :to="props.URL"
    >
        <slot> {{ label }}</slot>
        <ButtonCorner
            v-if="removeable"
            :positionClasses="'w-4 h-4'"
            :textClasses="cn(`text-white dark:text-rose-700`, textClass)"
            :colourClasses="'dark:bg-neutral-900/20 dark:hover:bg-rose-700 hover:bg-rose-300 hover:text-rose-700 dark:hover:text-white drop-shadow'"
            :label="'Remove'"
            @click.stop.prevent="$emit('clickAction')"
        />
    </RouterLink>
    <p v-else :class="cn(defaultStyle, `cursor-default`, removeable ? 'flex gap-1 items-center justify-between' : '', props.class)">
        <slot> {{ label }}</slot>
        <ButtonCorner
            v-if="removeable"
            :positionClasses="'w-4 h-4'"
            :textClasses="cn(`text-white dark:text-rose-700`, textClass)"
            :colourClasses="'dark:bg-neutral-900/20 dark:hover:bg-rose-700 hover:bg-rose-300 hover:text-rose-700 dark:hover:text-white drop-shadow'"
            :label="'Remove'"
            @click.stop.prevent="$emit('clickAction')"
        />
    </p>
</template>
