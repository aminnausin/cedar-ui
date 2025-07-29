<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

import Spinner from './Spinner.vue';

defineOptions({
    inheritAttrs: false,
});

const props = defineProps<{
    name: string;
    typeName?: 'example' | 'block';
}>();

const Component = defineAsyncComponent(() => import(`@/registry/cedar-ui/examples/${props.name}.vue`));
</script>

<template>
    <Suspense>
        <Component :is="Component" v-bind="$attrs" />

        <template #fallback>
            <div class="w-full flex items-center justify-center" :class="[typeName === 'block' ? 'h-screen' : '']">
                <Spinner />
            </div>
        </template>
    </Suspense>
</template>
