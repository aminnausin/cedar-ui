<script setup lang="ts">
import type { FormField } from '@aminnausin/cedar-ui';

import { FormInput, FormErrorList, FormInputLabel } from '../form';
import { SettingsCard, SettingsHeader } from '../card';
import { toast, useForm } from '@aminnausin/cedar-ui';
import { ButtonForm } from '../button';
import { reactive } from 'vue';

defineProps<{
    onSubmit: (fields: any) => Promise<any>;
}>();

const fields = reactive<FormField[]>([
    {
        name: 'email',
        text: `New Email`,
        autocomplete: 'email',
        ariaAutocomplete: 'inline',
        type: 'text',
        required: true,
        placeholder: `New Email`,
        max: 255,
    },
    {
        name: 'password',
        text: 'Confirm Password',
        placeholder: 'Confirm Password',
        autocomplete: 'current-password',
        ariaAutocomplete: 'inline',
        type: 'password',
        required: true,
        max: 255,
    },
]);

const form = useForm({
    email: '',
    password: '',
});

const handleSubmit = async () => {
    form.submit(
        async (fields) => {
            // return changeEmail(fields); -> replace with your change email function
        },
        {
            onSuccess: () => {
                toast.add('Success', { type: 'success', description: 'Email Changed', life: 3000 });
                form.reset(...Object.keys(form.fields));
            },
            onError: () => {
                form.reset('password');

                if (form.errors.email) {
                    form.reset('email');
                    return;
                }
                toast.add('Error', { type: 'danger', description: 'Unable change email.', life: 3000 });
            },
        },
    );
};
</script>

<template>
    <SettingsCard>
        <template #content>
            <SettingsHeader>
                <h3 class="text-base font-medium">Update Email</h3>
                <p class="text-neutral-600 dark:text-neutral-400">Ensure you have secure access to this email.</p>
            </SettingsHeader>
            <form class="flex flex-col sm:flex-row sm:justify-between flex-wrap gap-4 w-full max-w-xl" @submit.prevent="handleSubmit">
                <div v-for="(field, index) in fields.filter((field) => !field.disabled)" :key="index" class="w-full" :class="field.class">
                    <FormInputLabel :field="field" />
                    <FormInput
                        v-model="form.fields[field.name]"
                        :field="field"
                        :class="'dark:bg-primary-dark-900/70 bg-white ring-neutral-300 dark:ring-neutral-800'"
                    />
                    <FormErrorList :errors="form.errors" :field-name="field.name" />
                </div>

                <div class="relative flex flex-col-reverse sm:flex-row sm:justify-end gap-2 w-full">
                    <ButtonForm @click="form.reset(...Object.keys(form.fields))" type="button" variant="reset" :disabled="form.processing">
                        Cancel
                    </ButtonForm>
                    <ButtonForm @click="handleSubmit" type="button" variant="submit" :disabled="form.processing"> Save Email </ButtonForm>
                </div>
            </form>
        </template>
    </SettingsCard>
</template>
