<script setup lang="ts">
import { useModalCore } from '@aminnausin/cedar-ui';
import { ButtonText } from '../components/button';

import NestedModal from './NestedModal.vue';

const modal = useModalCore();
</script>

<template>
    <ButtonText @click="modal.open(NestedModal)" :class="['text-sm h-8 ring-1 capitalize']" :variant="'default'">
        Open Nested Modal
    </ButtonText>
</template>
