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

In `App.vue` or your component if you expose `setContextMenu()` with a pinia store.

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

In a component

```vue
<script setup lang="ts">
import type { ContextMenuItem } from '@aminnausin/cedar-ui';

import { useTemplateRef } from 'vue';
import { useAppStore } from '@/stores/AppStore';
import { storeToRefs } from 'pinia';

const { contextMenuItems, contextMenuStyle, contextMenuItemStyle} = storeToRefs(useAppStore());

const playerContextMenu = useTemplateRef('contextMenu');
const player = useTemplateRef("player")


const playerContextMenuItems = computed(() => {
    const items: ContextMenuItem[] = [
        {
            text: 'Save Frame',
            action: () => {
                if (!player.value) return;
                saveVideoFrame(player.value);
            },
        },
        {
            text: 'Copy Frame',
            action: () => {
                if (!player.value) return;
                copyVideoFrame(player.value);
            },
        },
    ];
    return items;
});

</script>

<template>
    <div
        :class="[`relative overflow-clip rounded-sm`]"
        ref="video-container"
        id="video-container"
        @contextmenu="
            (e: any) => {
                setContextMenu(e, { items: playerContextMenuItems, style: 'w-32', itemStyle: 'text-xs' });
                playerContextMenu?.contextMenuToggle(e, true);
            }
        "
    >
        <video
            id="video-source"
            width="100%"
            type="video/mp4"
            ref="player"
            style="z-index: 3"
            preload="metadata"
            :class="[`relative h-full object-contain select-none focus:outline-hidden`,]"
            :src="''"
        />
        <div class="absolute top-0 left-0 h-full w-full" >
            <ContextMenu
                ref="contextMenu"
                :items="contextMenuItems"
                :style="contextMenuStyle"
                :itemStyle="contextMenuItemStyle ?? 'hover:bg-purple-600 hover:text-white'"
                scrollContainer="window"
                teleport-disabled
            />
        </div>
    </div>
</template>
```
