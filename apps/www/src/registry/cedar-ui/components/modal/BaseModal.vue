<script setup lang="ts">
import type { useModalCore } from './useModalCore';

import ButtonCorner from '@/registry/cedar-ui/components/button/ButtonCorner.vue';

defineProps<{
    modal: ReturnType<typeof useModalCore>;
}>();
</script>

<template>
    <section v-if="!modal.props?.hideHeader" class="flex flex-wrap gap-2 items-center">
        <h3 ref="modalTitle" id="modalTitle" class="text-xl font-semibold scroll-mt-16 sm:scroll-mt-12 flex-1">
            <slot name="title">
                {{ modal.props?.title ?? 'Modal Title' }}
            </slot>
        </h3>
        <ButtonCorner @click="modal.close" class="!m-0 !static" />
        <p class="text-neutral-500 dark:text-neutral-400 text-sm w-full" v-if="$slots.description" id="modalDescription">
            <slot name="description"> </slot>
        </p>
    </section>
    <slot> </slot>
</template>
