<script setup lang="ts">
import type { FormField } from '@aminnausin/cedar-ui';

import { FormInput, FormInputLabel } from '@/registry/cedar-ui/components/form';
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
    <form class="flex flex-col gap-1 w-full">
        <FormInputLabel :field="field" />
        <FormInput v-model="artist" :field="field" class="w-64 mt-1" />
    </form>
</template>
