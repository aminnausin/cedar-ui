<script setup lang="ts">
import { RouterLink } from 'vue-router';
const props = defineProps(['label', 'colour', 'URL', 'active']);
const activeColour = `bg-neutral-300 dark:bg-violet-700`;
</script>

<template>
    <router-link
        :id="'btn-nav-' + props.label"
        :to="props.URL"
        :class="`${props.active ? activeColour : `bg-white dark:bg-primary-dark-800`} hover:bg-neutral-100 hover:dark:bg-violet-700 dark:text-neutral-200 flex justify-center items-center shrink-0 h-8 w-8 rounded-lg shadow-lg`"
        :aria-label="props.label"
    >
        <slot name="icon"></slot>
    </router-link>
</template>
