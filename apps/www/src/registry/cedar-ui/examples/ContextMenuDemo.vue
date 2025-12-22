<script setup lang="ts">
import type { ContextMenuOptions, ContextMenuItem } from '@aminnausin/cedar-ui';

import { computed, ref, useTemplateRef } from 'vue';
import { ContextMenu } from '@/registry/cedar-ui/components/context-menu';
import { toast } from '@aminnausin/cedar-ui';

import ProiconsCheckmark from '~icons/proicons/checkmark';

const contextMenu = useTemplateRef<InstanceType<typeof ContextMenu> | null>('contextMenu');
const contextMenuItems = ref<ContextMenuItem[]>([]);
const contextMenuEvent = ref<MouseEvent>();
const contextMenuItemStyle = ref('');
const contextMenuStyle = ref('');

const setContextMenu = (event: MouseEvent, options: ContextMenuOptions) => {
    if (!options.items || options.items.length === 0) return;
    contextMenuEvent.value = event;
    contextMenuItems.value = options.items ?? contextMenuItems.value;
    contextMenuStyle.value = options.style ?? '';
    contextMenuItemStyle.value = options.itemStyle ?? '';

    if (contextMenu.value) contextMenu.value.contextMenuToggle(event);
};

const isLooping = ref(false);
const isShowingStats = ref(false);
const isShowingParty = ref(false);
const isAudio = ref(false);

const options = computed<ContextMenuOptions>(() => {
    return {
        items: [
            {
                text: 'Loop',
                icon: isLooping.value ? ProiconsCheckmark : undefined,
                action: () => {
                    isLooping.value = !isLooping.value;
                },
            },
            {
                text: 'Show Stats',
                icon: isShowingStats.value ? ProiconsCheckmark : undefined,
                action: () => {
                    isShowingStats.value = !isShowingStats.value;
                },
            },
            {
                text: 'Show Party Demo',
                icon: isShowingParty.value ? ProiconsCheckmark : undefined,
                disabled: true,
                action: () => {
                    isShowingParty.value = !isShowingParty.value;
                },
            },
            {
                text: 'Save Frame',
                hidden: isAudio.value,
                action: () => {
                    toast.success('Frame Saved!');
                },
            },
            {
                text: 'Copy Frame',
                hidden: isAudio.value,
                action: () => {
                    toast.success('Frame Copied!');
                },
            },
            {
                text: 'Go Home',
                url: '/',
                external: true,
                target: '_self',
            },
        ],
        style: 'w-32',
        itemStyle: 'text-xs',
    };
});
</script>

<template>
    <div
        @contextmenu.prevent="
            (e: any) => {
                setContextMenu(e, options);
            }
        "
        class="flex min-h-[310px] w-full items-center justify-center border-2 border-dashed"
    >
        Right Click Here
    </div>
    <ContextMenu
        ref="contextMenu"
        :items="contextMenuItems"
        :style="contextMenuStyle"
        :itemStyle="contextMenuItemStyle"
        scrollContainer="window"
    />
</template>
