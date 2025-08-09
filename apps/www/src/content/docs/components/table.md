---
title: Table
description: A simple component based table, with search and sort slots.
source: apps/www/src/registry/cedar-ui/components/table
---

<ComponentPreview name="TableDemo" />

## Installation

 ```bash
npx cedar-ui@latest add table
npm i @aminnausin/cedar-ui
```

or download the following folders to your project:

`@/components/cedar-ui/table`

## Usage

```vue
<script setup lang="ts">
import { TableBase } from '@/components/cedar-ui/hover-card'
import { ref } from 'vue';

const searchQuery = ref('')

</script>

<template>
    <TableBase
        :data="rows"
        :row="RowComponent"
        :clickAction="
            () => {
                toast.info('Primary Action');
            }
        "
        :otherAction="
            () => {
                toast.info('Other Action');
            }
        "
        :loading="isLoadingRows"
        :useToolbar="true"
        :sortAction="handleSort"
        :sortingOptions="sortingOptions"
        :selectedID="-1"
        :startAscending="true"
        :search-query="searchQuery"
        :items-per-page="12"
        v-model="searchQuery"
    />
</template>
```
