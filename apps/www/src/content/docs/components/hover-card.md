---
title: Hover Card
description: A hover element card preview.
source: apps/www/src/registry/cedar-ui/components/hover-card
---

<ComponentPreview name="HoverCardDemo" />

## Installation

```bash
npx shadcn-vue@latest add hover-card
```

## Usage

```vue
<script setup lang="ts">
import {
  HoverCard,
} from '@/components/cedar-ui/hover-card'
</script>

<template>
  <HoverCard>
    <HoverCardTrigger>Hover</HoverCardTrigger>
    <HoverCardContent>
      The Vue Framework – created and maintained by @vuejs.
    </HoverCardContent>
  </HoverCard>
</template>
```
