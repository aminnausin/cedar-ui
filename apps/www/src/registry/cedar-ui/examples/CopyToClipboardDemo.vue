<script setup lang="ts">
import { CopyToClipboard } from '@/registry/cedar-ui/components/clipboard';
import { ref } from 'vue';

const copyText = ref('Example copy text');
</script>

<template>
    <section class="w-full flex flex-col gap-8">
        <CopyToClipboard :text="copyText" />
    </section>
</template>
