<script setup lang="ts">
import type { TabsOrientation } from '../../types/cedar-ui';
import type { Ref } from 'vue';

import { inject } from 'vue';

const orientation = inject<Ref<TabsOrientation>>('orientation');
</script>
<template>
    <div
        :class="['bg-purple-500 rounded-md shadow-xs', orientation === 'horizontal' ? 'w-full h-0.5 mt-auto' : 'w-0.5 h-full me-auto']"
    ></div>
</template>
