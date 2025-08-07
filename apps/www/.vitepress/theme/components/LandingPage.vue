<script setup lang="ts">
import { ButtonText } from '@/registry/cedar-ui/components/button';

import LogosTailwindcssIcon from '~icons/logos/tailwindcss-icon';
import LogosTypescriptIcon from '~icons/logos/typescript-icon';
import ProiconsArrowRight from '~icons/proicons/arrow-right';
</script>
<template>
    <div class="container py-6 flex flex-col gap-6 text-sm">
        <section class="flex flex-col gap-2">
            <h1 class="text-4xl font-semibold">Build your design system</h1>
            <p class="text-neutral-700 dark:text-neutral-300 text-base">
                A collection of beautiful, accessible Vue 3 components built with Tailwind CSS and designed to be customised.
            </p>
        </section>
        <section class="flex gap-2 text-sm h-8">
            <ButtonText
                :href="'/docs/installation'"
                target=""
                :class="'bg-purple-600 dark:bg-purple-600 hover:bg-purple-700 dark:hover:bg-purple-700 text-white !ring-purple-600 hover:!ring-purple-700'"
            >
                Get Started</ButtonText
            >
            <!-- <ButtonText :href="'https://github.com/aminnausin/cedar-ui'"> Contribute </ButtonText> -->
            <ButtonText :href="'/docs/components/accordion'" target="" :class="'group'">
                <template #default>Explore Components</template>
                <template #icon><ProiconsArrowRight class="transition-all ms-0.5 -translate-x-0.5 group-hover:translate-x-0.5" /></template>
            </ButtonText>
        </section>
        <section class="flex flex-col gap-4">
            <div class="flex items-start gap-2">
                <LogosTailwindcssIcon class="size-6" />
                <div class="flex flex-col gap-2">
                    <h3 class="text-base">Styled with Tailwind CSS</h3>
                    <p class="text-neutral-700 dark:text-neutral-300">Beautifully styled by default, overwrite any style you want.</p>
                </div>
            </div>
            <div class="flex items-start gap-2">
                <LogosTypescriptIcon class="size-6" />
                <div class="flex flex-col gap-2">
                    <h3 class="text-base">Type-safe with TypeScript</h3>
                    <p class="text-neutral-700 dark:text-neutral-300">Auto-complete and type safety for most components.</p>
                </div>
            </div>
        </section>
    </div>
</template>
