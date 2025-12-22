<script setup lang="ts">
import type { FormField } from '@aminnausin/cedar-ui';

import { FormTextArea } from '@/registry/cedar-ui/components/textarea';
import { ref } from 'vue';

import { FormLabel } from '@/registry/cedar-ui/components/form';

const field = ref<FormField>({
    name: 'lyrics',
    text: `Lyrics`,
    type: 'textArea',
    value: null,
    subtext: 'Format: [mm:ss] line',
    placeholder: `No lyrics yet`,
    default: '',
});

const lyrics = ref(null);
</script>
<template>
    <form class="flex w-full flex-col gap-1">
        <FormLabel :for="field.name" :text="field.name" :subtext="field.subtext" />
        <FormTextArea v-model="lyrics" :field="field" class="mt-1 w-full" />
    </form>
</template>
