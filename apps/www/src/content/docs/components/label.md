---
title: Label
description: Renders an accessible label associated with controls.
source: apps/www/src/registry/cedar-ui/components/input
---

<ComponentPreview name="LabelDemo" />

## Installation

 ```bash
npx cedar-ui@latest add input
npm i @aminnausin/cedar-ui
```

or download the following folders to your project:

`@/components/cedar-ui/input`

## Usage

```vue
<script setup lang="ts">
import { InputLabel } from '@/registry/cedar-ui/components/input';
</script>
<template>
    <InputLabel name="artist">Album Artist</InputLabel>
</template>
```
