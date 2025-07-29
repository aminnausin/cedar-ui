<script setup lang="ts">
import type { FormField } from '@aminnausin/cedar-ui';

import { DatePicker } from '../components/date-picker';
import { ref } from 'vue';
import FormInputLabel from '../components/form/FormInputLabel.vue';

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
    <form class="flex flex-col gap-1">
        <FormInputLabel :field="field" />
        <DatePicker v-model="releaseDate" :field="field" class="w-64 mt-1" />
    </form>
</template>
