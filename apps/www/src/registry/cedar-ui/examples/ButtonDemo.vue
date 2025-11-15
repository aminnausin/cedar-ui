<script setup lang="ts">
import { ButtonText } from '@/registry/cedar-ui/components/button';

const variants: ('default' | 'form' | 'ghost' | 'transparent')[] = ['default', 'form', 'ghost', 'transparent'];
</script>

<template>
    <section class="flex gap-4 items-center text-sm *:h-8 flex-wrap">
        <ButtonText v-for="variant in variants" :key="variant" :text="variant" :variant="variant" />
    </section>
</template>
