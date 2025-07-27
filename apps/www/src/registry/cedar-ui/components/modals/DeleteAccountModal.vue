<script setup lang="ts">
import { createModalCore } from '@/composables/useModalCore';
import { useRouter } from 'vue-router';

import PasswordConfirm from '@/registry/cedar-ui/components/forms/PasswordConfirm.vue';
import BaseModal from '@/registry/cedar-ui/components/modals/BaseModal.vue';

const modalStore = createModalCore();
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
