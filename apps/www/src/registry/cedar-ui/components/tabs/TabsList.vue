<script setup lang="ts">
import type { TabsProps } from '@aminnausin/cedar-ui';

import { onMounted, onUnmounted, provide, ref, useTemplateRef } from 'vue';
import { TabsMarkerBlock, TabsTrigger } from '.';

const props = withDefaults(defineProps<TabsProps>(), { defaultValue: 'account', orientation: 'horizontal' });

const tabSelected = ref(props.defaultValue);
const tabsTriggers = useTemplateRef('tabsTriggers');
const tabsMarker = useTemplateRef('tabsMarker');

provide('tabSelected', tabSelected);
provide('orientation', props.orientation);
provide('selectTab', selectTab);

function selectTab(value: string) {
    tabSelected.value = value;

    const tabButton = tabsTriggers.value?.querySelector(`[data-value="${value}"]`) as HTMLElement | null;

    if (!tabButton) return;

    repositionMarker(tabButton);
}

function refreshMarkerPosition() {
    const tabButton = tabsTriggers.value?.querySelector(`[data-value="${tabSelected.value}"]`) as HTMLElement | null;

    if (!tabButton) return;

    repositionMarker(tabButton);
}

function repositionMarker(tabButton: HTMLElement) {
    if (!tabsMarker.value) return;

    if (props.orientation === 'horizontal') {
        tabsMarker.value.style.width = tabButton.offsetWidth + 'px';
        tabsMarker.value.style.height = '';
        tabsMarker.value.style.left = tabButton.offsetLeft + 'px';
        tabsMarker.value.style.top = '';
    } else {
        tabsMarker.value.style.height = tabButton.offsetHeight + 'px';
        tabsMarker.value.style.width = '';
        tabsMarker.value.style.top = tabButton.offsetTop + 'px';
        tabsMarker.value.style.left = '';
    }
}

onMounted(() => {
    const defaultButton = tabsTriggers.value?.querySelector(`[data-value="${props.defaultValue}"]`) as HTMLElement | null;
    if (defaultButton) {
        repositionMarker(defaultButton);
    }

    window.addEventListener('resize', refreshMarkerPosition);
});

onUnmounted(async () => {
    window.removeEventListener('resize', refreshMarkerPosition);
});
</script>
<template>
    <div>
        <div class="relative w-full">
            <div
                ref="tabsTriggers"
                :class="[
                    'dark:bg-primary-dark-900 bg-surface-1 relative flex items-center justify-center overflow-clip rounded-lg select-none dark:text-white',
                    orientation === 'horizontal' ? 'w-full flex-row' : 'h-auto w-full flex-col',
                ]"
                role="tablist"
                :aria-orientation="orientation"
            >
                <slot name="triggers">
                    <TabsTrigger @tabsTrigger="selectTab" value="Account" />
                    <TabsTrigger @tabsTrigger="selectTab" value="Password" />
                </slot>

                <div
                    ref="tabsMarker"
                    :class="[
                        'pointer-events-none absolute z-10 flex p-1 duration-300 ease-out',
                        orientation === 'horizontal' ? 'left-0 h-full' : 'top-0 w-full',
                    ]"
                >
                    <slot name="marker">
                        <TabsMarkerBlock />
                    </slot>
                </div>
            </div>
        </div>
        <div class="relative mt-2 w-full">
            <slot name="content"> </slot>
        </div>
    </div>
</template>
