<script setup lang="ts">
import type { TabsOrientation } from '@aminnausin/cedar-ui';
import type { Ref } from 'vue';

import { inject } from 'vue';

const orientation = inject<Ref<TabsOrientation>>('orientation');
</script>
<template>
    <div
        :class="['bg-surface-2 dark:bg-surface-3 rounded-md shadow-sm', orientation === 'horizontal' ? 'h-full w-full' : 'h-full w-full']"
    ></div>
</template>
