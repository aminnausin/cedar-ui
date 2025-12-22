<script setup lang="ts">
import type { FormField } from '@aminnausin/cedar-ui';

import { DatePicker } from '@/registry/cedar-ui/components/date-picker';
import { FormLabel } from '@/registry/cedar-ui/components/form';
import { ref } from 'vue';

const field = ref<FormField>({
    name: 'date_released',
    text: 'Release Date',
    type: 'date',
    value: null,
    subtext: `The video release date.`,
    default: null,
});

const releaseDate = ref(null);
</script>
<template>
    <form class="flex w-full flex-col gap-1">
        <FormLabel :for="field.name" :text="field.text" :subtext="field.subtext" />
        <DatePicker v-model="releaseDate" :field="field" class="mt-1" />
    </form>
</template>
