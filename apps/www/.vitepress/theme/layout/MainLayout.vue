<script setup lang="ts">
import type { NavItem } from '../config/docs';

import { Content, useData, useRoute, useRouter } from 'vitepress';
import { Dialog, DialogContent } from '../components/ui/default/dialog';
import { ToastController } from '@/registry/cedar-ui/components/toast';
import { useMagicKeys } from '@vueuse/core';
import { GlobalModal } from '@/registry/cedar-ui/components/modal';
import { docsConfig } from '../config/docs';
import { ref, watch } from 'vue';
import { Button } from '../components/ui/default/button';

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '../components/ui/default/command';

import ThemeToggle from '../components/ThemeToggle.vue';
import NavLink from '../components/NavLink.vue';
import Logo from '../components/Logo.vue';
import Kbd from '../components/Kbd.vue';

import ProiconsGithub from '~icons/proicons/github';
import MoonIcon from '~icons/lucide/moon';
import SunIcon from '~icons/lucide/sun';
import Circle from '~icons/radix-icons/circle';
import File from '~icons/radix-icons/file';

const { frontmatter, isDark } = useData();

const $route = useRoute();
const $router = useRouter();

const links = [
    {
        name: 'GitHub',
        href: 'https://github.com/aminnausin/cedar-ui',
        icon: ProiconsGithub,
    },
];

const isOpen = ref(false);
const { Meta_K, Ctrl_K } = useMagicKeys({
    passive: false,
    onEventFired(e) {
        if (e.key === 'k' && (e.metaKey || e.ctrlKey)) e.preventDefault();
    },
});

watch([Meta_K, Ctrl_K], (v) => {
    if (v[0] || v[1]) isOpen.value = true;
});

function handleSelectLink(item: NavItem) {
    if (item.external) window.open(item.href, '_blank');
    else $router.go(item.href);

    isOpen.value = false;
}
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
                            @click="isOpen = true"
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

        <main class="flex flex-1 flex-col">
            <component :is="frontmatter.layout" v-if="frontmatter.layout">
                <slot />
            </component>

            <div v-else-if="$route.path.includes('docs') || $route.path.includes('examples')" class="container-wrapper w-full">
                <div
                    class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"
                >
                    <component :is="'docs'" v-if="$route.path.includes('docs')">
                        <Content :key="$route.path" />
                    </component>

                    <component :is="'examples'" v-else-if="$route.path.includes('examples')">
                        <Content :key="$route.path" />
                    </component>
                </div>
            </div>

            <Content v-else-if="!frontmatter.layout" :key="$route.path" />
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

        <Dialog v-model:open="isOpen">
            <DialogContent class="p-0">
                <Command>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandEmpty> No results found. </CommandEmpty>
                    <CommandList @escape-key-down="isOpen = false">
                        <CommandGroup heading="Links">
                            <CommandItem
                                v-for="item in docsConfig.mainNav"
                                :key="item.title"
                                :heading="item.title"
                                :value="item.title"
                                class="py-3"
                                @select="handleSelectLink(item)"
                            >
                                <File class="mr-2 h-5 w-5" />
                                <span>{{ item.title }}</span>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup v-for="item in docsConfig.sidebarNav" :key="item.title" :heading="item.title">
                            <CommandItem
                                v-for="subItem in item.items"
                                :key="subItem.title"
                                :heading="subItem.title"
                                :value="subItem.title"
                                class="py-3"
                                @select="handleSelectLink(subItem)"
                            >
                                <Circle class="mr-2 h-4 w-4" />
                                <span>{{ subItem.title }}</span>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Theme">
                            <CommandItem
                                value="light-theme"
                                class="py-3"
                                @select="
                                    () => {
                                        isDark = false;
                                        isOpen = false;
                                    }
                                "
                            >
                                <SunIcon class="mr-2 h-5 w-5" />
                                <span>Light Theme</span>
                            </CommandItem>
                            <CommandItem
                                value="dark-theme"
                                class="py-3"
                                @select="
                                    () => {
                                        isDark = true;
                                        isOpen = false;
                                    }
                                "
                            >
                                <MoonIcon class="mr-2 h-5 w-5" />
                                <span>Dark Theme</span>
                            </CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </DialogContent>
        </Dialog>
        <!-- <DefaultToaster /> -->
    </div>
    <ToastController />
    <GlobalModal />
</template>
