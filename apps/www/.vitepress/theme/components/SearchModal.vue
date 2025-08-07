<script setup lang="ts">
import type { NavItem } from '../config/docs';

import { useData, useRouter } from 'vitepress';
import { useModalCore } from '@aminnausin/cedar-ui';
import { docsConfig } from '../config/docs';
import { BaseModal } from '@/registry/cedar-ui/components/modal';

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '../components/ui/default/command';

import MoonIcon from '~icons/lucide/moon';
import SunIcon from '~icons/lucide/sun';
import Circle from '~icons/radix-icons/circle';
import File from '~icons/radix-icons/file';
import { ButtonCorner } from '@/registry/cedar-ui/components/button';

const { isDark } = useData();

const modal = useModalCore();
const $router = useRouter();

function handleSelectLink(item: NavItem) {
    if (item.external) window.open(item.href, '_blank');
    else $router.go(item.href);

    modal.close();
}
</script>

<template>
    <BaseModal :modal="modal">
        <Command>
            <div class="flex w-full [&>*:first-child]:flex-1 [&>*:first-child]:border-none border-b items-center py-1">
                <CommandInput placeholder="Type a command or search..." class="border-none ring-none outline-none" />
                <ButtonCorner @click="modal.close" class="!m-0 !static" />
            </div>
            <CommandEmpty> No results found. </CommandEmpty>
            <CommandList @escape-key-down="modal.close()">
                <CommandGroup heading="Links">
                    <CommandItem
                        v-for="item in docsConfig.mainNav"
                        :key="item.title"
                        :heading="item.title"
                        :value="item.title"
                        class="py-3 cursor-pointer"
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
                        class="py-3 cursor-pointer"
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
                        class="py-3 cursor-pointer"
                        @select="
                            () => {
                                isDark = false;
                                modal.close();
                            }
                        "
                    >
                        <SunIcon class="mr-2 h-5 w-5" />
                        <span>Light Theme</span>
                    </CommandItem>
                    <CommandItem
                        value="dark-theme"
                        class="py-3 cursor-pointer"
                        @select="
                            () => {
                                isDark = true;
                                modal.close();
                            }
                        "
                    >
                        <MoonIcon class="mr-2 h-5 w-5" />
                        <span>Dark Theme</span>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
    </BaseModal>
</template>
