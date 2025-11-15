<script setup lang="ts">
import type { TabsOrientation } from '../../types/cedar-ui';
import type { Ref } from 'vue';

import { inject } from 'vue';

const orientation = inject<Ref<TabsOrientation>>('orientation');
</script>
<template>
    <div
        :class="[
            'bg-white dark:bg-primary-dark-700 rounded-md shadow-sm',
            orientation === 'horizontal' ? 'w-full h-full' : 'w-full h-full',
        ]"
    ></div>
</template>
