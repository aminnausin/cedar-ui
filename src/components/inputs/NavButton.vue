<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps(['label', 'colour', 'active']);
const activeColour = ref(`ring ring-inset ring-[0.1rem] dark:ring-0 ring-violet-500 dark:bg-violet-700 bg-white`);
</script>
<template>
    <button
        :id="'btn-nav-' + props.label"
        :class="`${props.active ? activeColour : `bg-white dark:bg-primary-dark-800`} hover:bg-neutral-100 hover:dark:bg-violet-700 dark:text-neutral-100 flex justify-center items-center shrink-0 h-8 w-8 rounded-lg shadow-lg`"
        :aria-label="props.label"
    >
        <slot name="icon"></slot>
        <span :class="`hidden ${activeColour}`"></span>
    </button>
</template>
