<script setup lang="ts">
import type { BreadCrumbItem } from '@aminnausin/cedar-ui';

import { cn } from '@aminnausin/cedar-ui';

withDefaults(defineProps<{ breadCrumbs: BreadCrumbItem[] }>(), { breadCrumbs: () => [] });
</script>
<template>
    <nav class="flex justify-between flex-1">
        <ol class="inline-flex items-center space-x-1 text-foreground-2 sm:mb-0">
            <template v-for="(breadCrumb, index) in breadCrumbs" :key="index">
                <li class="flex items-center h-full">
                    <RouterLink
                        :to="breadCrumb.url"
                        :class="
                            cn(
                                'aria-[current]:font-medium aria-[current]:text-foreground-1 aria-[current]:dark:text-foreground hover:text-foreground-0',
                                'transition-colors inline-flex items-center p-2 py-1.5 space-x-1.5 rounded-md',
                                'ring-inset hover:ring-2 hover:ring-primary hover:bg-surface-2',
                            )
                        "
                        :title="breadCrumb.name"
                        :aria-current="index === breadCrumbs.length - 1"
                    >
                        <component v-if="breadCrumb.icon" :is="breadCrumb.icon" class="size-3.5 shrink-0" />
                        <span class="capitalize max-w-32 line-clamp-1 break-all">{{ breadCrumb.name }}</span>
                    </RouterLink>
                </li>
                <svg
                    class="size-5 text-foreground-2 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    v-if="index < breadCrumbs.length - 1"
                >
                    <g fill="none" stroke="none">
                        <path
                            d="M10 8.013l4 4-4 4"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </g>
                </svg>
            </template>
        </ol>
    </nav>
</template>
<style lang="css" scoped>
a {
    text-decoration: none;
}
</style>
