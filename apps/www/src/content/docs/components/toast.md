---
title: Toast
description: An opinionated toast notification that can be used to show a message. Click a button below to show the toast notification.
source: apps/www/src/registry/cedar-ui/components/toast
---
<ComponentPreview name="ToastDemo" />

## About

The toast component takes functional inspiration from [vue-sonner](https://vue-sonner.vercel.app/), which is a Vue port of Sonner, originally created by [Emil Kowalski](https://twitter.com/emilkowalski_) for React.

## Installation

<Steps>

### Run the following command

 ```bash
npx cedar-ui@latest add toast
npm i @aminnausin/cedar-ui
```

or download the following folders to your project:

`@/components/cedar-ui/toast`

### Add the ToastController component

Add the `ToastController` component to your `App.vue` file:

```vue title="App.vue"
<script setup lang="ts">
import { ToastController } from '@/cedar-ui/components/toast'
</script>

<template>
  <ToastController />
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

### Calendar

The example given in the installation steps.

<ComponentPreview name="ToastCalendarDemo" />
