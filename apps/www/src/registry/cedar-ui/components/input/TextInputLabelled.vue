<script setup lang="ts">
import { FormInputLabel } from '../form';

withDefaults(defineProps<{ id?: string; text?: string; placeholder?: string; subtext?: string; required?: boolean }>(), {
    id: 'text-input-labelled-' + Math.random() * 10000,
    text: '',
});

const model = defineModel();
</script>
<template>
    <div class="flex flex-col justify-center gap-2 text-sm">
        <FormInputLabel :field="{ name: id, text, type: 'text', subtext }" />
        <input
            type="text"
            v-model="model"
            :name="id"
            :id="id"
            :placeholder="placeholder"
            :required="required ?? false"
            :class="`h-10 p-2 px-3 shadow-sm rounded-md w-full text-sm
            border-none outline-none
            disabled:cursor-not-allowed disabled:opacity-50
            text-gray-900 dark:text-neutral-100 bg-white dark:bg-primary-dark-800 placeholder:text-neutral-400
            ring-inset focus:ring-inset ring-1 ring-neutral-200 dark:ring-neutral-700
            hocus:ring-[0.125rem] focus:ring-purple-400 dark:focus:ring-purple-500 hover:ring-violet-400 hover:dark:ring-violet-700`"
        />
    </div>
</template>
