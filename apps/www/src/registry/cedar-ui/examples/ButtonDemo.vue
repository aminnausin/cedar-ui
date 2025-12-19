<script setup lang="ts">
import type { FormButtonVariant, IconButtonVariant, TextButtonVariant } from '@aminnausin/cedar-ui';
import { ButtonText, ButtonForm, ButtonIcon, ButtonCorner } from '../components/button';
import { ProiconsSettings } from '../components/icons';

const variants: TextButtonVariant[] = ['default', 'form', 'ghost', 'transparent'];
const iconVariants: IconButtonVariant[] = ['default', 'ghost', 'transparent'];
const formVariants: FormButtonVariant[] = ['default', 'submit', 'reset', 'auth'];
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
        <div>
            <p>Icon</p>
            <div class="flex flex-wrap items-center gap-4 text-sm">
                <ButtonIcon v-for="variant in iconVariants" :key="variant" :variant="variant">
                    <ProiconsSettings />
                </ButtonIcon>
            </div>
        </div>
        <div>
            <p>Corner</p>
            <div class="bg-surface-1 relative flex rounded-lg p-4 text-sm">
                Example
                <ButtonCorner class="hover:bg-surface-2 hover:text-danger-2 m-2 size-6" :label="'Do nothing'" />
            </div>
        </div>
    </div>
</template>
