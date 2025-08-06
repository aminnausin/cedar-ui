<script setup lang="ts">
import { useModalCore } from '@aminnausin/cedar-ui';
import { ButtonForm } from '../components/button';

import EditProfileModal from './EditProfileModal.vue';
import { BaseModal } from '../components/modal';

const modal = useModalCore();
</script>

<template>
    <BaseModal :modal="modal">
        <template #title>Nested Modal</template>
        <template #description> Open a second modal on top of this one. </template>
        <div class="flex flex-col sm:flex-row gap-2 justify-end">
            <ButtonForm variant="reset" type="button" class="!capitalize" @click="modal.close()">Cancel</ButtonForm>
            <ButtonForm variant="submit" type="button" @click="modal.open(EditProfileModal)" class="!capitalize"> Open </ButtonForm>
        </div>
    </BaseModal>
</template>
