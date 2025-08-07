<script setup lang="ts">
import type { AccordionItem } from '@aminnausin/cedar-ui';

import { BaseAccordion } from '@/registry/cedar-ui/components/accordion';

const accordionItems: AccordionItem[] = [
    { id: 'item-1', title: 'Is it accessible?', content: 'I didnt pay enough attention' },
    { id: 'item-2', title: 'Is it unstyled?', content: 'Uhhhh' },
    { id: 'item-3', title: 'Can it be animated?', content: 'Not sure' },
];
</script>
<template>
    <BaseAccordion :accordions="accordionItems" />
</template>
