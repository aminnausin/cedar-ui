<script setup lang="ts">
import type { TabsTriggerProps } from '../../types/cedar-ui';
import type { Ref } from 'vue';

import { computed, inject } from 'vue';

const props = defineProps<TabsTriggerProps>();

const tabSelected = inject<Ref<string>>('tabSelected');
const selectTab = inject<(value: string) => void>('selectTab');

const isActive = computed(() => tabSelected?.value === props.value);

function handleClick() {
    selectTab?.(props.value);
}
</script>
<template>
    <button
        type="button"
        role="tab"
        :data-value="value"
        :aria-selected="isActive"
        @click="handleClick"
        :class="[
            'relative z-20  items-center justify-center w-full px-3 py-3 text-sm font-medium transition-colors duration-200 rounded-md cursor-pointer text-nowrap text-ellipsis truncate',
            isActive
                ? 'text-neutral-950 dark:text-white'
                : 'text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200',
        ]"
    >
        <slot>
            {{ value }}
        </slot>
    </button>
</template>
