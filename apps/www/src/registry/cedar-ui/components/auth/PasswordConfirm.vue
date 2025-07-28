<script setup lang="ts">
import type { FormField } from '@aminnausin/cedar-ui';

import { BaseForm, FormInput, FormItem, FormErrorList, FormInputLabel } from '../form';
import { toast, useForm } from '@aminnausin/cedar-ui';
import { ButtonForm } from '../button';

const emit = defineEmits(['confirm', 'cancel']);

const props = withDefaults(
    defineProps<{
        action: (fields: any) => Promise<any>;
        successAction?: (response: any) => void;
        successMessage?: string;
        confirmText?: string;
        cancelText?: string;
        passwordLabel?: string;
    }>(),
    {
        confirmText: 'Confirm',
        cancelText: 'Cancel',
    },
);

const fields: FormField[] = [
    {
        name: 'password',
        text: 'Confirm Password',
        placeholder: 'Password',
        autocomplete: 'current-password',
        ariaAutocomplete: 'inline',
        type: 'password',
        required: true,
        max: 255,
    },
];

const form = useForm<{ password: string }>({
    password: '',
});

const handleSubmit = async () => {
    form.submit(
        async (fields) => {
            return props.action(fields);
        },
        {
            onSuccess: (response) => {
                if (props.successMessage) toast.success(props.successMessage);
                if (props.successAction) props.successAction(response);
                emit('confirm');
            },
            onError() {
                form.reset('password');
            },
        },
    );
};
</script>
<template>
    <BaseForm @submit.prevent="handleSubmit" :footer-class="`flex flex-col-reverse sm:flex-row sm:justify-end gap-2 text-sm`">
        <FormItem v-for="(field, index) in fields" :key="index">
            <FormInputLabel v-if="passwordLabel" :field="{ ...field, text: passwordLabel }" />
            <FormInput v-model="form.fields[field.name]" :field="field" class="!mt-0" />
            <FormErrorList :errors="form.errors" :field-name="field.name" />
        </FormItem>

        <template #footer>
            <ButtonForm variant="reset" type="button" :disabled="form.processing" class="!capitalize" @click="$emit('cancel')">{{
                cancelText
            }}</ButtonForm>
            <ButtonForm
                variant="submit"
                type="button"
                @click="handleSubmit"
                :disabled="form.processing"
                class="!capitalize !bg-rose-600 hover:!bg-rose-500"
            >
                {{ confirmText }}
            </ButtonForm>
        </template>
    </BaseForm>
</template>
