<script setup lang="ts">
import type { TextInputProps } from '@aminnausin/cedar-ui';

import { InputShell } from '.';
import { ref } from 'vue';

const model = defineModel();

defineProps<TextInputProps>();
const el = ref<HTMLInputElement | null>(null);

defineExpose({ el });
</script>
<template>
    <InputShell>
        <template #input="{ class: inputClass }">
            <input
                ref="el"
                type="text"
                v-model="model"
                :id="id"
                :minlength="minlength"
                :maxlength="maxlength"
                :placeholder="placeholder"
                :class="[inputClass]"
                :disabled="disabled"
            />
        </template>
    </InputShell>
</template>
