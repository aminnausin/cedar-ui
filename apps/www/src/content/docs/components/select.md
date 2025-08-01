---
title: Select
description: A custom select input element that can be used to select an option.
source: apps/www/src/registry/cedar-ui/components/select
---

<ComponentPreview name="SelectDemo" />

## Installation

 ```bash
npx cedar-ui@latest add select
npm i @aminnausin/cedar-ui
```

or download the following folders to your project:

`@/components/cedar-ui/select`

## Usage

```vue
<script setup lang="ts">
import { InputSelect } from '@/registry/cedar-ui/components/select';

const sortingOptions = [
    {
        title: 'Username',
        value: 'name',
        disabled: false,
    },
    {
        title: 'Date Joined',
        value: 'created_at',
        disabled: false,
    },
    {
        title: 'Last Active',
        value: 'last_active',
        disabled: false,
    },
];

</script>
<template>
    <InputSelect
        :name="'sort'"
        :placeholder="'Sort by...'"
        :prefix="'By '"
        :options="sortingOptions"
        :defaultItem="0"
        class="w-full"
        title="Sort by..."
        @selectItem="() => {}"
    />
</template>

```
