<script setup lang="ts">
import type { DropdownMenuItem } from '@aminnausin/cedar-ui';

import { ProiconsSettings, LucideUserPlus, LucideLogIn, LucideLogOut } from '@/registry/cedar-ui/components/icons';
import { computed, ref } from 'vue';
import { DropdownMenu } from '@/registry/cedar-ui/components/dropdown-menu';
import { ButtonBase } from '../components/button';

const isDropdownOpen = ref(false);
const userData = ref({
    name: 'aminnausin',
    email: 'aminnausin@nausin.me',
});

const isLoggedIn = ref(false);

const defaults = { external: false, disabled: false, action: () => {} };

const dropDownItems = computed<DropdownMenuItem[][]>(() =>
    isLoggedIn.value
        ? [
              [{ ...defaults, name: 'settings', text: 'Settings', icon: ProiconsSettings, url: '/', external: true }],
              [{ ...defaults, name: 'logout', text: 'Log out', icon: LucideLogOut, action: () => (isLoggedIn.value = false) }],
          ]
        : [
              [{ ...defaults, name: 'settings', text: 'Settings', icon: ProiconsSettings, url: '/', external: true }],
              [
                  { ...defaults, name: 'login', text: 'Log in', icon: LucideLogIn, action: () => (isLoggedIn.value = true) },
                  { ...defaults, name: 'register', text: 'Sign up', icon: LucideUserPlus, action: () => (isLoggedIn.value = true) },
              ],
          ],
);

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};
</script>
<template>
    <div class="relative">
        <DropdownMenu :dropdownOpen="isDropdownOpen" @toggleDropdown="isDropdownOpen = false" :drop-down-items="dropDownItems">
            <template #trigger>
                <ButtonBase
                    id="user-header"
                    class="hover:text-primary dark:hover:text-primary-muted h-8 gap-2 text-2xl capitalize"
                    @click="toggleDropdown"
                    aria-haspopup="menu"
                    :aria-expanded="isDropdownOpen ? 'true' : 'false'"
                    aria-controls="user-dropdown"
                >
                    <h2 id="user-name" :class="['truncate sm:block']">
                        {{ isLoggedIn ? userData?.name : 'Guest' }}
                    </h2>

                    <img
                        :src="'/avatars/default.jpg'"
                        class="ring-primary-active aspect-square size-7 rounded-full object-cover ring-1"
                        alt="profile"
                    />
                </ButtonBase>
            </template>
        </DropdownMenu>
    </div>
</template>
