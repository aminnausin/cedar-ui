<script setup lang="ts">
import type { FormField } from '@/types/cedar-ui.ts';

import { useRoute, useRouter } from 'vue-router';
import { toast } from '@/service/toaster/toastService';
import { ref } from 'vue';

import FormInputLabel from '@/components/labels/FormInputLabel.vue';
import FormErrorList from '@/components/labels/FormErrorList.vue';
import ButtonForm from '@/components/inputs/ButtonForm.vue';
import FormInput from '@/components/inputs/FormInput.vue';
import BaseForm from '@/components/forms/BaseForm.vue';
import FormItem from '@/components/forms/FormItem.vue';
import useForm from '@/composables/useForm';

const router = useRouter();
const route = useRoute();

const fields = ref<FormField[]>([
    {
        name: 'email',
        text: 'Email',
        type: 'text',
        required: true,
        autocomplete: 'email',
        placeholder: 'email@example.ca',
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
    email: route.query.email as string,
    token: route.params.token as string,
    password: '',
    password_confirmation: '',
});

const handleSubmit = async () => {
    form.submit(
        async (fields) => {
            //return resetPassword(fields);
        },
        {
            onSuccess: (response) => {
                toast.success('Your password has been reset.');
                router.push('/login');
            },
            onError() {
                form.reset('email');
            },
        },
    );
};
</script>
<template>
    <BaseForm @submit.prevent="handleSubmit">
        <FormItem v-for="(field, index) in fields" :key="index">
            <FormInputLabel :field="field" />
            <FormInput v-model="form.fields[field.name]" :field="field" class="!mt-0" />
            <FormErrorList :errors="form.errors" :field-name="field.name" />
        </FormItem>

        <template #footer>
            <ButtonForm
                variant="auth"
                type="button"
                @click="handleSubmit"
                :disabled="form.processing"
                class="!justify-center !capitalize w-full"
            >
                Reset Password
            </ButtonForm>
        </template>
    </BaseForm>
</template>
