<script setup lang="ts">
import { ButtonText, ButtonForm } from '../components/button';

const variants: ('default' | 'form' | 'ghost' | 'transparent')[] = ['default', 'form', 'ghost', 'transparent'];
const formVariants: ('default' | 'submit' | 'reset' | 'auth')[] = ['default', 'submit', 'reset', 'auth'];
</script>

<template>
    <div class="space-y-4">
        <div>
            <p>Text</p>
            <div class="flex flex-wrap items-center gap-4 text-sm">
                <ButtonText v-for="variant in variants" :key="variant" :text="variant" :variant="variant" />
            </div>
        </div>
        <div>
            <p>Form</p>
            <div class="flex flex-wrap items-center gap-4 text-sm">
                <ButtonForm v-for="variant in formVariants" :key="variant" :variant="variant">{{ variant }}</ButtonForm>
            </div>
        </div>
    </div>
</template>
