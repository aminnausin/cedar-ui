---
title: Accordion
description: A vertically stacked set of interactive headings that each reveal a section of content.
source: apps/www/src/registry/cedar-ui/components/accordion
---

<ComponentPreview name="AccordionDemo" class="sm:max-w-[70%]" />

## Installation

```bash
npx cedar-ui@latest add accordion
```

## Usage

```vue
<script setup lang="ts">
import { BaseAccordion } from '@/registry/cedar-ui/components/accordion';

const accordionItems = [
  { id: 'item-1', title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
  { id: 'item-2', title: 'Is it unstyled?', content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.' },
  { id: 'item-3', title: 'Can it be animated?', content: 'Yes! You can use the transition prop to configure the animation.' },
]
</script>
<template>
    <BaseAccordion :accordions="accordionItems" />
</template>
```
