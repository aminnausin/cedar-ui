---
title: Button
description: A set of button elements that can be used to trigger an action.
source: apps/www/src/registry/cedar-ui/components/button
---

<ComponentPreview name="ButtonDemo" />

## Installation

 ```bash
npx cedar-ui@latest add button
npm i @aminnausin/cedar-ui
```

or download the following folders to your project:

`@/components/cedar-ui/button`

## Usage

```vue
<script setup lang="ts">
import { ButtonText } from '@/registry/cedar-ui/components/button';

</script>

<template>
    <ButtonText text="Add to favourites" title="Favourite"/>
</template>

```
