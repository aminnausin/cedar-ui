<script setup lang="ts">
import type { FormField } from '@aminnausin/cedar-ui';

import { FormTextArea } from '@/registry/cedar-ui/components/textarea';
import { ref } from 'vue';

import { FormInputLabel } from '@/registry/cedar-ui/components/form';

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
    <form class="flex flex-col gap-1 w-full">
        <FormInputLabel :field="field" />
        <FormTextArea v-model="lyrics" :field="field" class="w-full mt-1" />
    </form>
</template>
