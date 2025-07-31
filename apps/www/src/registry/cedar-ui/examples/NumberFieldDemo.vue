<script setup lang="ts">
import type { FormField } from '@aminnausin/cedar-ui';

import { FormInputNumber, FormInputLabel } from '@/registry/cedar-ui/components/form';
import { ref } from 'vue';

const rating = ref(88);

const field = ref<FormField>({
    name: 'rating',
    text: 'Average Score',
    type: 'number',
    value: rating.value,
    subtext: 'Percentage out of 100%',
    default: 0,
    min: 0,
    max: 100,
});
</script>
<template>
    <form class="flex flex-col gap-1 w-full">
        <FormInputLabel :field="field" />
        <FormInputNumber v-model="rating" :field="field" />
    </form>
</template>
