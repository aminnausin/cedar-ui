<script setup lang="ts">
import type { BreadCrumbItem } from '@aminnausin/cedar-ui';

import { BreadCrumbs } from '@/registry/cedar-ui/components/breadcrumbs';

import ProiconsLibrary from '~icons/proicons/library';
import ProiconsHome2 from '~icons/proicons/home-2';

const items: BreadCrumbItem[] = [
    {
        name: 'Cedar-UI',
        url: '/',
        icon: ProiconsHome2,
    },
    {
        name: 'Docs',
        url: '/docs/introduction/',
        icon: ProiconsLibrary,
    },
    {
        name: 'Components',
        url: '/docs/components/breadcrumbs',
    },
];
</script>

<template>
    <section class="w-full flex flex-col gap-8 items-center text-sm">
        <BreadCrumbs :bread-crumbs="items" />
    </section>
</template>

<style lang="css" scoped>
a {
    text-decoration: none;
}
</style>
