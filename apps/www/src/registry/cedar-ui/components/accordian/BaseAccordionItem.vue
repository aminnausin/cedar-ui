<script setup lang="ts">
import type { AccordionItem } from '@aminnausin/cedar-ui';

import { ref, useTemplateRef, watch } from 'vue';
import { cn } from '@/lib/utils';

const emit = defineEmits<(e: 'setActive', id: string) => void>();

const props = withDefaults(
    defineProps<{ accordion: AccordionItem; isActive: boolean; rootClass?: string; contentClass?: string; buttonClass?: string }>(),
    {
        isActive: false,
    },
);
const content = useTemplateRef('content');
const accordionHeight = ref(0);

const recalculateAccordionHeight = () => {
    console.log('re');

    if (!content.value || !props.isActive) {
        accordionHeight.value = 0;
        return;
    }
    accordionHeight.value = content.value.scrollHeight;
};

watch(() => [props.accordion.content, props.isActive], recalculateAccordionHeight);
</script>

<template>
    <div>
        <button
            class="flex items-center justify-between w-full p-4 text-left select-none hover:underline"
            @click="emit('setActive', accordion.id)"
            :id="`accordion-header-${accordion.id}`"
            :aria-expanded="isActive"
            :aria-controls="`accordion-panel-${accordion.id}`"
        >
            <slot name="title">
                <span>{{ accordion.title }}</span>
            </slot>
            <slot name="icon">
                <svg
                    :class="`w-4 h-4 duration-200 ease-out ${isActive ? 'rotate-180' : ''}`"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </slot>
        </button>

        <div
            :class="[cn('transition-all ease-out overflow-hidden duration-300', rootClass)]"
            :style="`--accordion-height: ${accordionHeight}px; max-height: var(--accordion-height);`"
            :id="`accordion-panel-${accordion.id}`"
            role="region"
            :aria-labelledby="`accordion-header-${accordion.id}`"
        >
            <div :class="cn('p-4 pt-0 opacity-70', contentClass)" ref="content">
                <slot>
                    {{ accordion?.content }}
                </slot>
            </div>
        </div>
    </div>
</template>
