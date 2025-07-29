<script setup lang="ts">
import { ButtonClipboard } from '@/registry/cedar-ui/components/clipboard';
import { ref } from 'vue';

const copyText = ref('Example copy text');
</script>

<template>
    <section class="w-full flex flex-col gap-8 items-center">
        <ButtonClipboard :text="copyText" />
    </section>
</template>
