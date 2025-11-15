<script setup lang="ts">
import type { TabsContentProps } from '@aminnausin/cedar-ui';
import type { Ref } from 'vue';

import { computed, inject } from 'vue';

const props = defineProps<TabsContentProps>();

const tabSelected = inject<Ref<string>>('tabSelected');

const isActive = computed(() => tabSelected?.value === props.value);
</script>
<template>
    <slot v-if="isActive"> </slot>
</template>
