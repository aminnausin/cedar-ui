<script setup lang="ts">
import type { TablePaginationButtonProps } from '@aminnausin/cedar-ui';

import { ButtonBase } from '../button';

const props = withDefaults(defineProps<TablePaginationButtonProps>(), {
    underline: false,
    sticky: false,
    disabled: false,
});
</script>

<template>
    <li :class="{ hidden: currentPage !== pageNumber && !text && !sticky }" class="z-0 h-full md:block">
        <button-base
            class="group hover:text-foreground-0 disabled:text-foreground-2 pointer-events-auto! relative inline-flex h-full items-center rounded-none px-3 disabled:cursor-not-allowed"
            :class="{
                'text-foreground-0 bg-overlay-accent': currentPage === pageNumber,
                'hover:bg-overlay-accent': !disabled,
            }"
            :disabled="disabled ?? false"
        >
            <slot name="content">
                <span>
                    {{ text ?? pageNumber }}
                </span>
            </slot>

            <span
                v-if="!text || underline"
                class="bg-primary group-hover:border-primary absolute bottom-0 -mx-px box-content h-px w-0 translate-y-px border-transparent duration-200 ease-out group-hover:left-0 group-hover:w-full group-hover:border-r group-hover:border-l"
                bg-neutral-900
                dark:bg-violet-600
                group-hover:border-neutral-900
                dark:group-hover:border-violet-600
                :class="{
                    'left-0 w-full border-r border-l': currentPage === pageNumber,
                    'left-1/2': currentPage !== pageNumber,
                }"
            >
                <!-- bg-neutral-900 dark:bg-violet-600 group-hover:border-neutral-900 dark:group-hover:border-violet-600 -->
            </span>
        </button-base>
    </li>
</template>
