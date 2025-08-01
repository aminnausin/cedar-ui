---
title: Context Menu
description: Displays a menu to the user — such as a set of actions or functions — triggered by a button.
source: apps/www/src/registry/cedar-ui/components/context-menu
---

<ComponentPreview name="ContextMenuDemo"  />

## Installation

 ```bash
npx cedar-ui@latest add context-menu
npm i @aminnausin/cedar-ui
```

or download the following folders to your project:

`@/components/cedar-ui/context-menu`

## Usage

In `App.vue`

```vue
<script setup lang="ts">
import type { ContextMenu as ContextMenuType, ContextMenuItem } from '@aminnausin/cedar-ui';

import { ref, useTemplateRef } from 'vue';
import { ContextMenu } from '@/registry/cedar-ui/components/context-menu';


const contextMenu = useTemplateRef<InstanceType<typeof ContextMenu> | null>('contextMenu');
const contextMenuItems = ref<ContextMenuItem[]>([]);
const contextMenuEvent = ref<MouseEvent>();
const contextMenuItemStyle = ref('');
const contextMenuStyle = ref('');

const setContextMenu = (event: MouseEvent, options: ContextMenuType) => {
    if (!options.items || options.items.length === 0) return;
    contextMenuEvent.value = event;
    contextMenuItems.value = options.items ?? contextMenuItems.value;
    contextMenuStyle.value = options.style ?? '';
    contextMenuItemStyle.value = options.itemStyle ?? '';

    if (contextMenu.value) contextMenu.value.contextMenuToggle(event);
};
</script>

<template>
    <ContextMenu
        ref="contextMenu"
        :items="contextMenuItems"
        :style="contextMenuStyle"
        :itemStyle="contextMenuItemStyle"
        scrollContainer="window"
    />
</template>
```

```vue
<script setup lang="ts">
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
</script>

<template>

  <ContextMenu>
    <ContextMenuTrigger>Right click</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Profile</ContextMenuItem>
      <ContextMenuItem>Billing</ContextMenuItem>
      <ContextMenuItem>Team</ContextMenuItem>
      <ContextMenuItem>Subscription</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>
```
