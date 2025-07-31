<script setup lang="ts">
import type { AccordionItem } from '@aminnausin/cedar-ui';
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
        <div v-for="accordion in accordions" :key="accordion.id" class="cursor-pointer">
            <button
                @click="setActiveAccordion(accordion.id)"
                class="flex items-center justify-between w-full p-4 text-left select-none hover:underline"
            >
                <span>{{ accordion.title }}</span>
                <svg
                    :class="`w-4 h-4 duration-200 ease-out ${activeAccordionId == accordion.id ? 'rotate-180' : ''}`"
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
            </button>

            <div
                :class="[
                    'transition-all ease-in overflow-hidden duration-300',
                    activeAccordionId === accordion.id ? 'max-h-[99999px]' : 'max-h-0',
                ]"
            >
                <div class="p-4 pt-0 opacity-70">{{ accordion?.content }}</div>
            </div>
        </div>
    </div>
</template>
