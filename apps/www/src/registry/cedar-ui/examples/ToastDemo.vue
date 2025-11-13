<script setup lang="ts">
import type { ToastOptions, ToastPostion, ToastType } from '@aminnausin/cedar-ui';

import { ButtonText } from '../components/button';
import { toast } from '@aminnausin/cedar-ui';
import { ref } from 'vue';

const currentPosition = ref<ToastPostion>('bottom-right');
const currentType = ref<ToastType>('success');
const withDescription = ref(false);

const showToast = (
    options: ToastOptions = {
        position: currentPosition.value,
        type: currentType.value,
        description: withDescription.value ? 'This is an example toast notification' : '',
    },
) => {
    toast.add('Toast', options);
};

const positions: ToastPostion[] = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];
const types: ToastType[] = ['default', 'success', 'warning', 'danger', 'info'];
</script>

<template>
    <section class="w-full flex flex-col gap-8">
        <div>
            <p class="mb-2 text-lg font-medium text-center text-gray-500 sm:text-left">Position</p>
            <div class="flex flex-wrap gap-4">
                <ButtonText
                    v-for="pos in positions"
                    :key="pos"
                    @click="
                        currentPosition = pos;
                        showToast();
                    "
                    :class="
                        [{ 'ring-neutral-500! dark:ring-neutral-200!': currentPosition == pos }, 'text-sm h-8 ring-1 capitalize'].join(' ')
                    "
                    :variant="'default'"
                >
                    {{ pos }}
                </ButtonText>
            </div>
        </div>
        <div>
            <p class="mb-2 text-lg font-medium text-center text-gray-500 sm:text-left">Types</p>
            <div class="flex flex-wrap gap-4">
                <ButtonText
                    v-for="type in types"
                    :key="type"
                    @click="
                        currentType = type;
                        showToast();
                    "
                    :class="[{ 'ring-neutral-500!': currentType == type }, 'text-sm h-8 ring-1 capitalize'].join(' ')"
                >
                    {{ type }}
                </ButtonText>
                <ButtonText
                    @click="
                        withDescription = !withDescription;
                        showToast();
                    "
                    :class="[{ 'ring-neutral-500!': withDescription }, 'text-sm h-8 ring-1 capitalize'].join(' ')"
                >
                    With Description
                </ButtonText>
            </div>
        </div>
    </section>
</template>
