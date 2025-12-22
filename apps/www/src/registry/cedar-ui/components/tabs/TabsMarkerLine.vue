<script setup lang="ts">
import type { TabsOrientation } from '@aminnausin/cedar-ui';
import type { Ref } from 'vue';

import { inject } from 'vue';

const orientation = inject<Ref<TabsOrientation>>('orientation');
</script>
<template>
    <div :class="[orientation === 'horizontal' ? 'mt-auto w-full p-0.5' : 'me-auto h-full p-0.5']">
        <div :class="['bg-primary-muted rounded-md shadow-xs', orientation === 'horizontal' ? 'h-0.5' : 'w-0.5']"></div>
    </div>
</template>
