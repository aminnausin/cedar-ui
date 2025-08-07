<script setup lang="ts">
import { Content, useData, useRoute } from 'vitepress';
import { ToastController } from '@/registry/cedar-ui/components/toast';
import { useMagicKeys } from '@vueuse/core';
import { useModalCore } from '@aminnausin/cedar-ui';
import { GlobalModal } from '@/registry/cedar-ui/components/modal';
import { docsConfig } from '../config/docs';
import { watch } from 'vue';
import { Button } from '../components/ui/default/button';

import ThemeToggle from '../components/ThemeToggle.vue';
import SearchModal from '../components/SearchModal.vue';
import NavLink from '../components/NavLink.vue';
import Logo from '../components/Logo.vue';
import Kbd from '../components/Kbd.vue';

import ProiconsGithub from '~icons/proicons/github';

const { frontmatter } = useData();

const searchModal = useModalCore();
const modalProps = { modal: searchModal, hideHeader: true, rootClass: 'p-0' };
const $route = useRoute();

const links = [
    {
        name: 'GitHub',
        href: 'https://github.com/aminnausin/cedar-ui',
        icon: ProiconsGithub,
    },
];

const { Meta_K, Ctrl_K } = useMagicKeys({
    passive: false,
    onEventFired(e) {
        if (e.key === 'k' && (e.metaKey || e.ctrlKey)) e.preventDefault();
    },
});

watch([Meta_K, Ctrl_K], (v) => {
    if (v[0] || v[1]) searchModal.open(SearchModal, modalProps);
});
</script>

<template>
    <div class="relative flex min-h-svh flex-col bg-background">
        <header
            class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 container-wrapper"
        >
            <div class="container flex h-14 items-center">
                <div class="mr-4 md:mr-1 flex">
                    <Logo />

                    <nav class="hidden md:flex items-center gap-4 text-sm xl:gap-6">
                        <NavLink
                            v-for="route in docsConfig.mainNav"
                            :key="route.title"
                            :href="route.href"
                            :target="route.external ? '_target' : undefined"
                            :active="$route.path === `${route.href}`"
                        >
                            {{ route.title }}
                        </NavLink>
                    </nav>
                </div>
                <!-- <MobileNav /> -->

                <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div class="w-full flex-1 md:w-auto md:flex-none">
                        <Button
                            variant="outline"
                            class="relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64"
                            @click="searchModal.open(SearchModal, modalProps)"
                        >
                            <span class="hidden lg:inline-flex">Search documentation...</span>
                            <span class="inline-flex lg:hidden">Search...</span>
                            <Kbd
                                :size="'xs'"
                                class="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"
                            >
                                ⌘ K
                            </Kbd>
                        </Button>
                    </div>

                    <nav class="flex items-center gap-0.5">
                        <Button
                            v-for="link in links"
                            :key="link.name"
                            as="a"
                            class="w-8 h-8"
                            :href="link.href"
                            target="_blank"
                            :variant="'ghost'"
                            :size="'icon'"
                        >
                            <component :is="link.icon" class="w-4 h-4" />
                        </Button>

                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>

        <main class="flex flex-1 flex-col container-wrapper w-full">
            <template v-if="!frontmatter.layout && !$route.path.includes('docs') && !$route.path.includes('examples')">
                <Content :key="$route.path" />
            </template>
            <div
                v-else
                class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"
            >
                <component :is="frontmatter.layout" v-if="frontmatter.layout">
                    <slot />
                </component>
                <component :is="'docs'" v-else-if="$route.path.includes('docs')">
                    <Content :key="$route.path" />
                </component>

                <component :is="'examples'" v-else-if="$route.path.includes('examples')">
                    <Content :key="$route.path" />
                </component>
            </div>
        </main>

        <footer class="border-t p-4 container-wrapper">
            <p
                class="text-neutral-800 dark:text-neutral-200 text-center text-sm leading-loose flex gap-1 flex-wrap justify-center md:justify-normal items-center container"
            >
                <span>
                    Built by
                    <a href="https://github.com/aminnausin" target="_blank" class="font-medium underline underline-offset-4"> aminnausin</a
                    >.
                </span>

                <span class="">
                    The code source is available on
                    <a href="https://github.com/aminnausin/cedar-ui" target="_blank" class="font-medium underline underline-offset-4">
                        GitHub</a
                    >.
                </span>
            </p>
        </footer>
    </div>
    <ToastController />
    <GlobalModal />
</template>
