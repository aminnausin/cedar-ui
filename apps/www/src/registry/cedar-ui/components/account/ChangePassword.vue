<script setup lang="ts">
import type { FormField } from '@aminnausin/cedar-ui';

import { FormInput, FormErrorList, FormInputLabel } from '../form';
import { SettingsCard, SettingsHeader } from '../card';
import { toast, useForm } from '@aminnausin/cedar-ui';
import { ButtonForm } from '../button';
import { reactive } from 'vue';

const fields = reactive<FormField[]>([
    {
        name: 'current_password',
        text: 'Current Password',
        placeholder: 'Current Password',
        autocomplete: 'current-password',
        ariaAutocomplete: 'inline',
        type: 'password',
        required: true,
        max: 255,
    },
    {
        name: 'password',
        text: `New Password`,
        placeholder: `New Password`,
        autocomplete: 'new-password',
        type: 'password',
        required: true,
        max: 255,
    },
    {
        name: 'password_confirmation',
        text: `Confirm Password`,
        placeholder: `Confirm Password`,
        type: 'password',
        required: true,
        max: 255,
    },
]);

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const handleSubmit = async () => {
    form.submit(
        async (fields) => {
            // return changePassword(fields); -> replace with your change password function
        },
        {
            onSuccess: (response) => {
                toast.add('Success', { type: 'success', description: 'Password Changed', life: 3000 });
                form.reset(...Object.keys(form.fields));
            },
            onError: () => {
                if (form.errors.password) {
                    form.reset('password', 'password_confirmation');
                    return;
                }

                if (form.errors.current_password) {
                    form.reset('current_password');
                    return;
                }

                toast.add('Error', { type: 'danger', description: 'Unable change password.', life: 3000 });
            },
        },
    );
};
</script>

<template>
    <SettingsCard>
        <template #content>
            <SettingsHeader>
                <h3 class="text-base font-medium">Update password</h3>
                <p class="text-neutral-600 dark:text-neutral-400">Ensure your account is using a long, random password to stay secure.</p>
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
                    <ButtonForm @click="handleSubmit" type="button" variant="submit" :disabled="form.processing">
                        Save Password
                    </ButtonForm>
                </div>
            </form>
        </template>
    </SettingsCard>
</template>
