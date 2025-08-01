<script setup lang="ts">
import type { ContextMenu as ContextMenuType, ContextMenuItem } from '@aminnausin/cedar-ui';

import { computed, ref, useTemplateRef } from 'vue';
import { ContextMenu } from '@/registry/cedar-ui/components/context-menu';
import { toast } from '@aminnausin/cedar-ui';

import ProiconsCheckmark from '~icons/proicons/checkmark';

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

const isLooping = ref(false);
const isShowingStats = ref(false);
const isShowingParty = ref(false);
const isAudio = ref(false);

const options = computed<ContextMenuType>(() => {
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
        class="w-full min-h-[310px] flex items-center justify-center border-dashed border-2"
    >
        Right Click Here
    </div>
    <ContextMenu
        ref="contextMenu"
        :items="contextMenuItems"
        :style="contextMenuStyle"
        :itemStyle="contextMenuItemStyle ?? 'hover:bg-purple-600 hover:text-white'"
        scrollContainer="window"
    />
</template>
