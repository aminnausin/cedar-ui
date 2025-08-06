---
title: Modal
description: A dialog window that can be used to display a message or request user input.
source: apps/www/src/registry/cedar-ui/components/modal
---
<ComponentPreview name="ModalDemo" />

## Installation

<Steps>

### Run the following command

 ```bash
npx cedar-ui@latest add modal
npm i @aminnausin/cedar-ui
```

or download the following folders to your project:

`@/components/cedar-ui/modal`

### Add the ToastController component

Add the `GlobalModal` component to your `App.vue` file:

```vue title="App.vue"
<script setup lang="ts">
import { GlobalModal } from '@/cedar-ui/components/modal'
</script>

<template>
  <GlobalModal />
</template>
```

</Steps>

## Usage

```vue
<script setup lang="ts">
import { ButtonText } from '@/components/cedar-ui/button'
import { toast } from '@aminnausin/cedar-ui'
</script>

<template>
  <ButtonText
    variant="form" @click="() => {
      toast.success('Event has been created', {
        description: 'Sunday, December 03, 2023 at 9:00 AM',
      })
    }"
  >
    Add to calendar
  </ButtonText>
</template>
```

## Examples

### Nested Modal

Currently just opens another modal without traversal between them.

<ComponentPreview name="NestedModalDemo" />
