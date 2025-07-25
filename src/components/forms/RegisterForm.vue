<script setup lang="ts">
import type { FormField } from '@/types/cedar-ui.ts';

import { useRouter, RouterLink } from 'vue-router';
import { ref } from 'vue';

import FormInputLabel from '@/components/labels/FormInputLabel.vue';
import FormErrorList from '@/components/labels/FormErrorList.vue';
import ButtonForm from '@/components/inputs/ButtonForm.vue';
import FormInput from '@/components/inputs/FormInput.vue';
import BaseForm from '@/components/forms/BaseForm.vue';
import FormItem from '@/components/forms/FormItem.vue';
import useForm from '@/composables/useForm';

const userData = ref({}); // Replace with your auth store and user data object

const router = useRouter();

const fields = ref<FormField[]>([
    { name: 'name', text: 'Name', type: 'text', required: true, autocomplete: 'name', placeholder: 'Name' },
    { name: 'email', text: 'Email', type: 'text', required: true, autocomplete: 'username email', placeholder: 'Email' },
    { name: 'password', text: 'Password', type: 'password', required: true, autocomplete: 'new-password', placeholder: 'Password' },
    {
        name: 'password_confirmation',
        text: 'Confirm Password',
        type: 'password',
        required: true,
        autocomplete: 'new-password',
        placeholder: 'Confirm Password',
    },
]);

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const handleRegister = async () => {
    form.submit(
        async (fields) => {
            // return await register(fields); -> Replace with your register function
        },
        {
            onSuccess: (response) => {
                localStorage.setItem('auth-token', response.data.token);
                userData.value = response.data.user;
                router.push({ name: 'root' });
            },
            onError: () => {
                form.reset('password', 'password_confirmation');
            },
        },
    );
};
</script>

<template>
    <BaseForm @submit.prevent="handleRegister">
        <FormItem v-for="(field, index) in fields" :key="index">
            <FormInputLabel :field="field" />
            <FormInput v-model="form.fields[field.name]" :field="field" class="!mt-0" />
            <FormErrorList :errors="form.errors" :field-name="field.name" />
        </FormItem>
        <div class="flex flex-wrap gap-2 gap-x-4 items-center justify-end text-center">
            <RouterLink
                class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                to="/login"
            >
                Already registered?
            </RouterLink>

            <ButtonForm variant="auth" type="submit" :disabled="form.processing">Register</ButtonForm>
        </div>
    </BaseForm>
</template>
