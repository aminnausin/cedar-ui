---
title: Dropdown Menu
description: A simple dropdown menu element.
source: apps/www/src/registry/cedar-ui/components/dropdown-menu
---

<ComponentPreview name="DropdownMenuDemo" />

## Installation

 ```bash
npx cedar-ui@latest add dropdown-menu
npm i @aminnausin/cedar-ui
```

or download the following folders to your project:

`@/components/cedar-ui/dropdown-menu`

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
