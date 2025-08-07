<script setup lang="ts">
import type { AccordionItem } from '@aminnausin/cedar-ui';

import { BaseAccordionItem } from '.';
import { ref } from 'vue';

withDefaults(defineProps<{ accordions?: AccordionItem[] }>(), {
    accordions: () => [
        { id: '1', title: 'What is Pines?', content: 'Pines is a UI library built for AlpineJS and TailwindCSS.' },
        {
            id: '2',
            title: 'How do I install Pines?',
            content: 'Add AlpineJS and TailwindCSS to your page and then copy and paste any of these elements into your project.',
        },
        {
            id: '3',
            title: 'Can I use Pines with other libraries or frameworks?',
            content: 'Absolutely! Pines works with any other library or framework. Pines works especially well with the TALL stack.',
        },
    ],
});

const activeAccordionId = ref<string>('');

function setActiveAccordion(id: string) {
    activeAccordionId.value = activeAccordionId.value == id ? '' : id;
}
</script>
<template>
    <div
        class="relative w-full mx-auto overflow-hidden text-sm font-normal bg-white dark:bg-primary-dark-800 border border-gray-200 dark:border-border divide-y divide-gray-200 dark:divide-neutral-700 rounded-md"
    >
        <BaseAccordionItem
            v-for="accordion in accordions"
            :key="accordion.id"
            :accordion="accordion"
            :is-active="accordion.id === activeAccordionId"
            @setActive="setActiveAccordion"
        >
        </BaseAccordionItem>
    </div>
</template>
