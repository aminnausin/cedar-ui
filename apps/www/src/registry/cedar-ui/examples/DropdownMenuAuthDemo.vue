<script setup lang="ts">
import { DropdownMenuAuth } from '@/registry/cedar-ui/components/dropdown-menu';
import { ref } from 'vue';

const isDropdownOpen = ref(false);
const isLoadingUserData = ref(false);
const userData = ref({
    name: 'aminnausin',
    email: 'aminnausin@nausin.me',
});

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};
</script>
<template>
    <div class="relative">
        <DropdownMenuAuth :dropdownOpen="isDropdownOpen" @toggleDropdown="isDropdownOpen = false">
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
                            'hidden sm:block truncate p-0! border-none! font-normal!',
                            {
                                'bg-neutral-200 dark:bg-neutral-800 rounded-full w-32 h-5 my-auto! animate-pulse': isLoadingUserData,
                            },
                            { 'my-0!': !isLoadingUserData },
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
        </DropdownMenuAuth>
    </div>
</template>
