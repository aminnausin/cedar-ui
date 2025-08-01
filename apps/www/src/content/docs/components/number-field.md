---
title: Hover Card
description: A hover element card preview.
source: apps/www/src/registry/cedar-ui/components/form
---

<ComponentPreview name="NumberFieldDemo" />

## Installation

 ```bash
npx cedar-ui@latest add form
npm i @aminnausin/cedar-ui
```

or download the following folders to your project:

`@/components/cedar-ui/form`

The Date Picker is intended for use within a form and given a `FormField`.

See installations instructions for the [Form](/docs/components/form) component.

## Usage

```vue
<script setup lang="ts">
import type { FormField } from '@aminnausin/cedar-ui';

import { FormInputNumber, FormInputLabel } from '@/registry/cedar-ui/components/form';
import { ref } from 'vue';

const rating = ref(88);

const field = ref<FormField>({
    name: 'rating',
    text: 'Average Score',
    type: 'number',
    value: rating.value,
    subtext: 'Percentage out of 100%',
    default: 0,
    min: 0,
    max: 100,
});
</script>
<template>
    <form class="flex flex-col gap-1 w-full">
        <FormInputLabel :field="field" />
        <FormInputNumber v-model="rating" :field="field" />
    </form>
</template>

```
