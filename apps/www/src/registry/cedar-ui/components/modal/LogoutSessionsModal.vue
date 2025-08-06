<script setup lang="ts">
import { PasswordConfirm } from '../auth';
import { useModalCore } from '@aminnausin/cedar-ui';

import BaseModal from './BaseModal.vue';

const props = defineProps<{ onSuccess?: () => void }>();
const modalStore = useModalCore();

function handleSuccess() {
    modalStore.close();
    props.onSuccess?.();
}
</script>

<template>
    <BaseModal :modal="modalStore">
        <template #title>Sign Out of Other Devices</template>
        <template #description>Are you sure you want to sign out of other devices? You won't be able to undo this action.</template>
        <PasswordConfirm
            :action="
                async () => {
                    // implement or replace signOutOtherSessions
                }
            "
            success-message="Other Sessions Logged Out Successfully"
            @confirm="handleSuccess"
            @cancel="modalStore.close"
        />
    </BaseModal>
</template>
