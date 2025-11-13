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
            'relative z-20 inline-flex items-center justify-center w-full h-8 px-3 text-sm font-medium transition-all rounded-md cursor-pointer whitespace-nowrap',
            isActive ? 'text-neutral-950 dark:text-white' : 'text-neutral-600 dark:text-neutral-400',
        ]"
    >
        <slot>{{ value }}</slot>
    </button>
</template>
