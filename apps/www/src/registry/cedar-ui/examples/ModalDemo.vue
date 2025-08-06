<script setup lang="ts">
import { useModalCore } from '@aminnausin/cedar-ui';
import { ButtonText } from '../components/button';

import EditProfileModal from './EditProfileModal.vue';

const modal = useModalCore();
</script>

<template>
    <ButtonText @click="modal.open(EditProfileModal)" :class="['text-sm h-8 ring-1 capitalize']" :variant="'default'">
        Edit Profile
    </ButtonText>
</template>
