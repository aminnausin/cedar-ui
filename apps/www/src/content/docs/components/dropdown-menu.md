---
title: Dropdown Menu
description: Displays a menu to the user — such as a set of actions or functions — triggered by a button.
source: apps/www/src/registry/default/ui/dropdown-menu
primitive: https://www.reka-ui.com/docs/components/dropdown-menu.html
---

<ComponentPreview name="DropdownMenuDemo" />

## Installation

```bash
npx shadcn-vue@latest add dropdown-menu
```

## Usage

```vue
<script setup lang="ts">
import {
  DropdownMenu,
  
} from '@/components/ui/dropdown-menu'
</script>

<template>
  <DropdownMenu>
    
  </DropdownMenu>
</template>
```

## Examples

### Auth

You can manually show different items based on your auth state.

<ComponentPreview name="DropdownMenuAuthDemo"/>
