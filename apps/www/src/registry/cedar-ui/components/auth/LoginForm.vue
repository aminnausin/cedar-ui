<script setup lang="ts">
import type { FormField } from '@aminnausin/cedar-ui';

import { BaseForm, FormInput, FormItem, FormErrorList, FormInputLabel } from '../form';
import { useRouter, useRoute, RouterLink } from 'vue-router';
import { ButtonForm } from '../button';
import { useForm } from '@aminnausin/cedar-ui';
import { ref } from 'vue';

const userData = ref({});
const router = useRouter();
const route = useRoute();

const fields = ref<FormField[]>([
    { name: 'email', text: 'Email', type: 'text', required: true, autocomplete: 'username email', placeholder: 'Email' },
    { name: 'password', text: 'Password', type: 'password', required: true, autocomplete: 'password', placeholder: 'Password' },
]);

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const handleLogin = async () => {
    form.submit(
        async (fields) => {
            // return await login(fields); -> replace with your login function
        },
        {
            onSuccess: (response: { data: { token: string; user: any } }) => {
                localStorage.setItem('auth-token', response.data.token);
                userData.value = response.data.user;
                router.push(route.query.redirect ? route.query.redirect.toString() : '/');
            },
            onError: () => form.reset('password'),
        },
    );
};
</script>
<template>
    <BaseForm @submit.prevent="handleLogin">
        <FormItem v-for="(field, index) in fields" :key="index">
            <span v-if="field.name === 'password'" class="flex flex-wrap">
                <FormInputLabel :field="field" class="me-auto" />
                <RouterLink
                    to="/recovery"
                    class="underline leading-none text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:focus:ring-offset-gray-800"
                >
                    Forgot password?
                </RouterLink>
            </span>
            <FormInputLabel v-else :field="field" />
            <FormInput v-model="form.fields[field.name]" :field="field" class="!mt-0" />
            <FormErrorList :errors="form.errors" :field-name="field.name" />
        </FormItem>

        <!-- Remember Me -->
        <label for="remember-me" class="w-full flex items-center gap-2">
            <input
                v-model="form.fields.remember"
                id="remember-me"
                type="checkbox"
                class=""
                :class="[
                    'rounded dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 shadow-sm',
                    'appearance-none',
                    'focus:ring-purple-500 focus:!ring-[0.125rem] !ring-offset-0',
                    'checked:text-purple-600',
                ]"
                name="remember_me"
            />
            <span class="text-sm text-gray-600 dark:text-gray-400">Remember me</span>
        </label>

        <div class="flex flex-wrap gap-2 gap-x-4 items-center justify-end text-center">
            <RouterLink
                class="underline text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:focus:ring-offset-gray-800"
                to="/register"
            >
                Not Registered?
            </RouterLink>
            <ButtonForm variant="auth" type="button" @click="handleLogin" :disabled="form.processing"> Log in </ButtonForm>
        </div>
    </BaseForm>
</template>
