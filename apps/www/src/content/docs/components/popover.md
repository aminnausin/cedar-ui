---
title: Popover
description: A popover element that can display rich content in a portal, triggered by a button..
source: apps/www/src/registry/cedar-ui/components/popover
---

<ComponentPreview name="PopoverDemo" />

## Installation

```bash
npx cedar-ui@latest add popover
npm i @aminnausin/cedar-ui
```

or download the following folders to your project:

`@/components/cedar-ui/popover`

## Usage

```vue
<script setup lang="ts">
import { BasePopover } from '@/registry/cedar-ui/components/popover';
</script>

<template>
    <BasePopover :popover-class="'mt-10'" :button-class="'h-8 w-8'">
        <template #content>
            Hello
            You can add any content you want here. Other slots include the button text and button icon.
        </template> 
    </BasePopover>
</template>

```
