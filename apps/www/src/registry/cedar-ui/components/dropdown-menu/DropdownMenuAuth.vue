<script setup lang="ts">
import type { DropdownMenuItem } from '@aminnausin/cedar-ui';

import { computed, nextTick, onMounted, onUnmounted, ref, useTemplateRef, watch } from 'vue';
import { ProiconsSettings, LucideUserPlus, LucideLogOut, LucideLogIn } from '../icons';
import { OnClickOutside } from '@vueuse/components';

import DropdownItem from './DropdownItem.vue';

const userData = ref<null | { email: string }>(null); // Replace with your auth state

const defaults = {
    external: false,
    disabled: false,
    action: () => {
        userData.value = {
            email: 'aminnausin@nausin.me',
        };
    },
};
const props = defineProps<{ dropdownOpen: boolean }>();
const dropdown = useTemplateRef('dropdown');
const manualPosition = ref(0);

const dropDownItems: DropdownMenuItem[][] = [
    [{ ...defaults, name: 'settings', text: 'Settings', icon: ProiconsSettings }],
    [
        { ...defaults, name: 'login', text: 'Log in', icon: LucideLogIn },
        { ...defaults, name: 'register', text: 'Sign up', icon: LucideUserPlus },
    ],
];

const dropDownItemsAuth = computed<DropdownMenuItem[][]>(() => {
    return [
        [
            {
                ...defaults,
                name: 'logout',
                text: 'Log out',
                icon: LucideLogOut,
                shortcut: '⇧⌘Q',
                action: () => {
                    userData.value = null;
                },
            },
        ],
    ];
});

const adjustDropdownPosition = async () => {
    if (!dropdown.value || !dropdown.value.parentElement) return;

    const parentRect = dropdown.value.parentElement.getBoundingClientRect();

    await nextTick();

    if (parentRect.right - 4 - dropdown.value.offsetWidth >= 0) {
        manualPosition.value = 0;
        return;
    }
    manualPosition.value = -parentRect.left + 20;
};

watch(
    () => props.dropdownOpen,
    (value) => {
        if (!value) return;
        adjustDropdownPosition();
    },
);

onMounted(() => {
    window.addEventListener('resize', adjustDropdownPosition);
});

onUnmounted(() => {
    window.removeEventListener('resize', adjustDropdownPosition);
});
</script>

<template>
    <OnClickOutside @trigger="$emit('toggleDropdown', false)">
        <slot name="trigger"></slot>
        <Transition
            enter-active-class="ease-out duration-200"
            enter-from-class="-translate-y-4"
            enter-to-class="translate-y-0"
            leave-active-class="ease-in duration-100"
            leave-from-class="-translate-y-0"
            leave-to-class="-translate-y-4 opacity-0"
        >
            <div
                v-show="props.dropdownOpen"
                :class="`absolute top-0 z-50 mt-12 w-56 max-w-[80vw] mx-auto ${manualPosition ? '' : '-right-[0.25rem]'} `"
                v-cloak
                id="user-dropdown"
                role="menu"
                :style="manualPosition ? `left: ${manualPosition}px;` : ''"
                ref="dropdown"
            >
                <div
                    class="p-1 mt-1 bg-white dark:bg-neutral-800/70 backdrop-blur-lg border rounded-md shadow-md border-neutral-200/70 dark:border-neutral-700 text-neutral-700 dark:text-neutral-100"
                >
                    <div class="px-2 py-1.5 text-sm font-semibold" v-if="userData">{{ userData.email }}</div>
                    <div class="h-px my-1 -mx-1 bg-neutral-200 dark:bg-neutral-500" v-if="userData"></div>
                    <section v-for="(group, groupIndex) in userData ? dropDownItemsAuth : dropDownItems" :key="groupIndex">
                        <div
                            v-if="groupIndex !== 0 && groupIndex !== group.length && group.some((item) => !item.hidden)"
                            class="h-px my-1 -mx-1 bg-neutral-200 dark:bg-neutral-500"
                        ></div>
                        <DropdownItem
                            v-for="(item, index) in group.filter((item) => !item.hidden)"
                            :key="index"
                            :linkData="item"
                            :selected="false"
                            :external="item.external"
                            :disabled="item.disabled ?? false"
                            @click="
                                () => {
                                    $emit('toggleDropdown', false);
                                    if (item.action) item.action();
                                }
                            "
                        >
                            <template #icon>
                                <component
                                    :is="item.icon"
                                    :class="['w-4 h-4 mr-2', item.iconStrokeWidth ? `[&>*]:stroke-[${item.iconStrokeWidth}]` : '']"
                                />
                            </template>
                        </DropdownItem>
                    </section>
                </div>
            </div>
        </Transition>
    </OnClickOutside>
</template>
