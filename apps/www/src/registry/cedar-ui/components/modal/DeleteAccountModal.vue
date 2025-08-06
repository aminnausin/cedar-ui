<script setup lang="ts">
import { useModalCore } from './useModalCore';
import { PasswordConfirm } from '../auth';
import { useRouter } from 'vue-router';

import BaseModal from './BaseModal.vue';

const modalStore = useModalCore();
const router = useRouter();

function handleSuccess() {
    modalStore.close();
    router.push('/');
}

async function deleteAccount() {
    // Implement your delete account function or replace this function
}
</script>

<template>
    <BaseModal :modal="modalStore">
        <template #title>Are you sure you want to delete your account?</template>
        <template #description>
            Once your account is deleted, all of its resources and data will also be permanently deleted. Please enter your password to
            confirm you would like to permanently delete your account.
        </template>

        <PasswordConfirm :action="deleteAccount" success-message="Account Deleted..." @confirm="handleSuccess" @cancel="modalStore.close" />
    </BaseModal>
</template>
