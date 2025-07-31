---
title: BreadCrumbs
description: Displays the path to the current resource using a hierarchy of links and icons.
source: apps/www/src/registry/cedar-ui/components/breadcrumbs
---

<ComponentPreview name="BreadCrumbsDemo" />

## Installation

```bash
npx cedar-ui@latest add breadcrumbs
npm i @aminnausin/cedar-ui
```

or download the following folders to your project:

`@/components/cedar-ui/breadcrumbs`

## Usage

```vue
<script setup lang="ts">
import type { BreadCrumbItem } from '@aminnausin/cedar-ui';

import { BreadCrumbs } from '@/components/cedar-ui/BreadCrumbs'

import ProiconsLibrary from '~icons/proicons/library';
import ProiconsHome2 from '~icons/proicons/home-2';

// Ideally you generate this from your route
const items: BreadCrumbItem[] = [
    {
        name: 'Dashboard',
        url: '/dashboard/analytics',
        icon: ProiconsHome2,
    },
    {
        name: 'Libraries',
        url: '/dashboard/libraries',
        icon: ProiconsLibrary,
    },
];
</script>

<template>
  <BreadCrumbs :bread-crumbs="items">
</template>
```
