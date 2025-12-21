<script setup lang="ts">
import type { TabsTriggerProps } from '@aminnausin/cedar-ui';
import type { Ref } from 'vue';

import { computed, inject } from 'vue';
import { ButtonBase } from '../button';

const props = defineProps<TabsTriggerProps>();

const tabSelected = inject<Ref<string>>('tabSelected');
const selectTab = inject<(value: string) => void>('selectTab');

const isActive = computed(() => tabSelected?.value === props.value);

function handleClick() {
    selectTab?.(props.value);
}
</script>
<template>
    <button-base
        type="button"
        role="tab"
        :data-value="value"
        :aria-selected="isActive"
        @click="handleClick"
        :class="[
            'hover:bg-surface-3 relative w-full truncate rounded-none p-3 text-sm font-medium text-nowrap text-ellipsis focus-visible:font-bold',
            isActive ? 'text-foreground-0' : 'text-foreground-1 hover:text-foreground-0',
        ]"
        :use-size="false"
    >
        <p style="z-index: 11">
            <slot>
                {{ value }}
            </slot>
        </p>
    </button-base>
</template>
