<script setup lang="ts">
import type { FormField } from '@aminnausin/cedar-ui';

import { FormInput, FormLabel } from '@/registry/cedar-ui/components/form';
import { ref } from 'vue';

const field = ref<FormField>({
    name: 'artist',
    text: 'Artist Name',
    type: 'text',
    required: true,
    placeholder: 'Use the artist name to refine your search',
    value: null,
    max: 255,
});

const artist = ref(null);
</script>
<template>
    <form class="flex w-full flex-col gap-1">
        <FormLabel :for="field.name" :text="field.text" :subtext="field.subtext" />
        <FormInput v-model="artist" :field="field" class="mt-1 w-64" />
    </form>
</template>
