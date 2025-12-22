---
title: Drawer
description: A drawer component for mobile devices.
source: apps/www/src/registry/cedar-ui/components/drawer
---

<ComponentPreview name="DrawerDemo" class="sm:max-w-[70%]" />

## Installation

<Steps>

### Run the following command

 ```bash
npx cedar-ui@latest add drawer
npm i @aminnausin/cedar-ui
```

or download the following folders to your project:

`@/components/drawer`

### Add the DrawerController component

Add the `DrawerController` component to your `App.vue` file:

```vue title="App.vue"
<script setup lang="ts">
import { DrawerController } from '@/cedar-ui/components/drawer'
</script>

<template>
    <DrawerController />
</template>
```

</Steps>

## Usage

```vue title="page.vue"
<script setup lang="ts">
import { BaseDrawer } from '../components/drawer';
import { ButtonText } from '../components/button/';
import { drawer } from '@aminnausin/cedar-ui';
</script>

<template>
    <div>
        <ButtonText
            :class="'text-sm h-8 ring-1 capitalize'"
            :variant="'default'"
            @click="drawer.open(BaseDrawer, { title: 'Move Goal', description: 'Set your daily activity goal.' })"
        >
            Open Drawer
        </ButtonText>
    </div>
</template>
```

```vue title="customDrawer.vue"
<script setup lang="ts">
import { BaseDrawer } from '../components/drawer';
import { ButtonText } from '../components/button';
import { toast } from '@aminnausin/cedar-ui';
</script>

<template>
    <BaseDrawer title="Calendar Options">
        <ButtonText
            variant="form"
            @click="
                toast.success('Event has been created', {
                    description: 'Sunday, December 03, 2023 at 9:00 AM',
                })
            "
        >
            Add to calendar
        </ButtonText>
    </BaseDrawer>
</template>
```

<ComponentPreview name="CustomDrawerDemo" class="sm:max-w-[70%]" />
