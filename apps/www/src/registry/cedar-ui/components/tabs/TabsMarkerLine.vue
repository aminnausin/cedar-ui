<script setup lang="ts">
import type { TabsOrientation } from '@aminnausin/cedar-ui';
import type { Ref } from 'vue';

import { inject } from 'vue';

const orientation = inject<Ref<TabsOrientation>>('orientation');
</script>
<template>
    <div :class="[orientation === 'horizontal' ? 'w-full p-0.5 mt-auto' : 'p-0.5 h-full me-auto']">
        <div :class="['bg-purple-500 rounded-md shadow-xs', orientation === 'horizontal' ? 'h-0.5' : 'w-0.5']"></div>
    </div>
</template>
