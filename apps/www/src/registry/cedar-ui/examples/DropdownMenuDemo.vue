<script setup lang="ts">
import type { DropdownMenuItem } from '@aminnausin/cedar-ui';

import { ProiconsSettings, LucideUserPlus, LucideLogIn } from '../components/icons';
import { DropdownMenu } from '@/registry/cedar-ui/components/dropdown-menu';
import { ref } from 'vue';

const isDropdownOpen = ref(false);
const isLoadingUserData = ref(false);
const userData = ref({
    name: 'aminnausin',
    email: 'aminnausin@nausin.me',
});

const defaults = { external: false, disabled: false, action: () => {} };

const dropDownItems: DropdownMenuItem[][] = [
    [{ ...defaults, name: 'settings', text: 'Settings', icon: ProiconsSettings }],
    [
        { ...defaults, name: 'login', text: 'Log in', icon: LucideLogIn },
        { ...defaults, name: 'register', text: 'Sign up', icon: LucideUserPlus },
    ],
];

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};
</script>
<template>
    <DropdownMenu :dropdownOpen="isDropdownOpen" @toggleDropdown="isDropdownOpen = false" :drop-down-items="dropDownItems">
        <template #trigger>
            <button
                id="user-header"
                class="flex gap-2 text-2xl hover:text-violet-600 dark:hover:text-violet-500 items-center justify-center capitalize h-8"
                @click="toggleDropdown"
                aria-haspopup="menu"
                :aria-expanded="isDropdownOpen ? 'true' : 'false'"
                aria-controls="user-dropdown"
            >
                <h2
                    id="user-name"
                    :class="[
                        'hidden sm:block truncate !p-0 !border-none !font-normal',
                        {
                            'bg-neutral-200 dark:bg-neutral-800 rounded-full w-32 h-5 !my-auto animate-pulse': isLoadingUserData,
                        },
                        { '!my-0': !isLoadingUserData },
                    ]"
                >
                    {{ isLoadingUserData ? '' : userData?.name || 'Guest' }}
                </h2>

                <img
                    :src="'/avatars/default.jpg'"
                    class="h-7 w-7 rounded-full ring-2 ring-violet-700 object-cover aspect-square"
                    alt="profile"
                />
            </button>
        </template>
    </DropdownMenu>
</template>
