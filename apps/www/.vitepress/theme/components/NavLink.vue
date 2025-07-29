<script setup lang="ts">
import { cn } from '@/lib/utils';

defineProps<{ href?: string; external?: boolean; active: boolean }>();
</script>

<template>
    <a
        :href="href"
        :target="external ? '_target' : undefined"
        :class="
            cn(
                'group hover:text-purple-700 dark:hover:text-purple-500 transition-all flex flex-col relative cursor-pointer',
                active ? 'text-purple-600' : '',
            )
        "
    >
        <slot />
        <div
            class="w-0 mx-auto h-0.5 absolute -bottom-0.5 left-1/2 group-hover:left-0 group-hover:w-full rounded-lg bg-purple-700 transition-all"
        ></div>
    </a>
</template>
