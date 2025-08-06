<script setup lang="ts">
import { toast, useModalCore } from '@aminnausin/cedar-ui';
import { TextInputLabelled } from '../components/input';
import { ButtonForm } from '../components/button';
import { BaseModal } from '../components/modal';

const props = defineProps<{ onSuccess?: () => void }>();
const modalStore = useModalCore();

function handleSuccess() {
    toast.success('Profile Saved');
    modalStore.close();
    props.onSuccess?.();
}
</script>

<template>
    <BaseModal :modal="modalStore">
        <template #title>Edit profile</template>
        <template #description>Make changes to your profile here. Click save when you're done.</template>

        <TextInputLabelled :text="'Username'" :placeholder="'aminnausin'" :subtext="'This is your public display name.'" />

        <div class="flex flex-col sm:flex-row gap-2 justify-end">
            <ButtonForm variant="reset" type="button" class="!capitalize" @click="modalStore.close()">Cancel</ButtonForm>
            <ButtonForm variant="submit" type="button" @click="handleSuccess" class="!capitalize"> Save </ButtonForm>
        </div>
    </BaseModal>
</template>
