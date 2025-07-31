---
title: Hover Card
description: A hover element card preview.
source: apps/www/src/registry/cedar-ui/components/hover-card
---

<ComponentPreview name="HoverCardDemo" />

## Installation

```bash
npx cedar-ui@latest add hover-card
```

## Usage

```vue
<script setup lang="ts">
import {
  HoverCard,
} from '@/components/cedar-ui/hover-card'

const username = ref('@vue.js')
const description = ref('')
</script>

<template>
  <HoverCard :content="description" scroll-container="window">
      <template #trigger>
          <h2>
              {{ username }}
          </h2>
      </template>
      <template #content>
        {{ description }}
      </template>
  </HoverCard>
</template>
```
