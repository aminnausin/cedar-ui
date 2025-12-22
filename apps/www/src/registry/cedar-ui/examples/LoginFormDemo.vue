<script setup lang="ts">
import type { FormField } from '@aminnausin/cedar-ui';

import { BaseForm, FormInput, FormItem, FormErrorList, FormLabel } from '../components/form';
import { ButtonForm } from '../components/button';
import { useForm } from '@aminnausin/cedar-ui';
import { ref } from 'vue';

const userData = ref({});

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
                // redirect to route.query.redirect ? route.query.redirect.toString() : '/'
            },
            onError: () => form.reset('password'),
        },
    );
};
</script>
<template>
    <BaseForm @submit.prevent="handleLogin" class="w-sm text-xs">
        <FormItem v-for="(field, index) in fields" :key="index">
            <span v-if="field.name === 'password'" class="flex flex-wrap">
                <FormLabel :for="field.name" :text="field.text" :subtext="field.subtext" class="me-auto" />
                <a
                    href=""
                    class="rounded-md leading-none text-gray-600 underline hover:text-gray-900 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                >
                    Forgot password?
                </a>
            </span>
            <FormLabel v-else :for="field.name" :text="field.text" :subtext="field.subtext" />
            <FormInput v-model="form.fields[field.name]" :field="field" class="mt-0!" />
            <FormErrorList :errors="form.errors" :field-name="field.name" />
        </FormItem>

        <!-- Remember Me -->
        <label for="remember-me" class="flex w-full items-center gap-2">
            <input
                v-model="form.fields.remember"
                id="remember-me"
                type="checkbox"
                class=""
                :class="[
                    'rounded border-neutral-300 shadow-xs dark:border-neutral-700 dark:bg-neutral-900',
                    'appearance-none',
                    'ring-offset-0! focus:ring-2! focus:ring-purple-500',
                    'checked:text-purple-600',
                ]"
                name="remember_me"
            />
            <span class="text-sm text-gray-600 dark:text-gray-400">Remember me</span>
        </label>

        <div class="flex flex-wrap items-center justify-end gap-2 gap-x-4 text-center">
            <a
                class="rounded-md text-gray-600 underline hover:text-gray-900 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                href=""
            >
                Not Registered?
            </a>
            <ButtonForm variant="auth" type="button" @click="handleLogin" :disabled="form.processing"> Log in </ButtonForm>
        </div>
    </BaseForm>
</template>
<style lang="css" scoped>
a {
    font-size: inherit;
}
</style>
