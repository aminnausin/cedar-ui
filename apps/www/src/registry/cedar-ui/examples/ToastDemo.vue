<script setup lang="ts">
import type { ToastOptions, ToastPostion, ToastType } from '@aminnausin/cedar-ui';

import { ButtonText } from '@/registry/cedar-ui/components/button';
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
    if (options.type === 'promise') showPromiseToast();
    else toast.add('Toast', options);
};

const showPromiseToast = () => {
    const promise: Promise<string> = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Subtitles Loaded!');
        }, 2000);
    });
    toast.promise(promise, {
        loading: 'Loading...',
        success: (data) => {
            return data;
        },
        error: (data: any) => 'Error',
    });
};

const positions: ToastPostion[] = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];
const types: ToastType[] = ['default', 'success', 'warning', 'danger', 'info', 'promise'];
</script>

<template>
    <section class="flex w-full flex-col gap-8">
        <div>
            <p class="mb-2 text-center text-lg font-medium sm:text-left">Position</p>
            <div class="flex flex-wrap gap-4">
                <ButtonText
                    v-for="pos in positions"
                    :key="pos"
                    @click="
                        currentPosition = pos;
                        showToast();
                    "
                    :class="[{ 'ring-neutral-500! dark:ring-neutral-300!': currentPosition == pos }, 'h-8 text-sm capitalize ring-1']"
                >
                    {{ pos }}
                </ButtonText>
            </div>
        </div>
        <div>
            <p class="mb-2 text-center text-lg font-medium sm:text-left">Types</p>
            <div class="flex flex-wrap gap-4">
                <ButtonText
                    v-for="type in types"
                    :key="type"
                    @click="
                        currentType = type;
                        showToast();
                    "
                    :class="[{ 'ring-neutral-500! dark:ring-neutral-300!': currentType == type }, 'h-8 text-sm capitalize ring-1']"
                >
                    {{ type }}
                </ButtonText>
                <ButtonText
                    @click="
                        withDescription = !withDescription;
                        showToast();
                    "
                    :class="[{ 'ring-neutral-500! dark:ring-neutral-300!': withDescription }, 'h-8 text-sm capitalize ring-1']"
                >
                    With Description
                </ButtonText>
            </div>
        </div>
    </section>
</template>
