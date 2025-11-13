<script setup lang="ts">
import type { TabsProps } from '../../types/cedar-ui';

import { onMounted, provide, ref, useTemplateRef } from 'vue';
import { TabsMarkerLine, TabsTrigger } from '.';

const props = withDefaults(defineProps<TabsProps>(), { defaultValue: 'account', orientation: 'horizontal' });

const tabSelected = ref(props.defaultValue);
const tabsTriggers = useTemplateRef('tabsTriggers');
const tabsMarker = useTemplateRef('tabsMarker');

provide('tabSelected', tabSelected);
provide('orientation', props.orientation);
provide('selectTab', selectTab);

function selectTab(value: string) {
    tabSelected.value = value;

    const tabButton = tabsTriggers.value?.querySelector(`[data-value="${value}"]`) as HTMLElement | null;

    if (!tabButton) return;

    repositionMarker(tabButton);
}

function repositionMarker(tabButton: HTMLElement) {
    if (!tabsMarker.value) return;

    if (props.orientation === 'horizontal') {
        tabsMarker.value.style.width = tabButton.offsetWidth + 'px';
        tabsMarker.value.style.height = '';
        tabsMarker.value.style.left = tabButton.offsetLeft + 'px';
        tabsMarker.value.style.top = '';
    } else {
        tabsMarker.value.style.height = tabButton.offsetHeight + 'px';
        tabsMarker.value.style.width = '';
        tabsMarker.value.style.top = tabButton.offsetTop + 'px';
        tabsMarker.value.style.left = '';
    }
}

onMounted(() => {
    const defaultButton = tabsTriggers.value?.querySelector(`[data-value="${props.defaultValue}"]`) as HTMLElement | null;
    if (defaultButton) {
        repositionMarker(defaultButton);
    }
});
</script>
<template>
    <div class="relative w-full max-w-sm">
        <div
            ref="tabsTriggers"
            class="relative inline-grid items-center justify-center w-full h-10 grid-cols-2 p-1 text-gray-500 bg-gray-100 dark:bg-primary-dark-900 dark:text-white rounded-lg select-none"
            role="tablist"
            :aria-orientation="orientation"
        >
            <slot name="tabsTriggers">
                <TabsTrigger @tabsTrigger="selectTab" value="Account" />
                <TabsTrigger @tabsTrigger="selectTab" value="Password" />
            </slot>
            <div
                ref="tabsMarker"
                :class="['absolute z-10 duration-300 ease-out flex p-1', orientation === 'horizontal' ? 'left-0 h-full' : 'top-0 w-full']"
            >
                <slot name="marker">
                    <TabsMarkerLine />
                </slot>

                <!-- <div class="w-full h-full bg-white rounded-md shadow-xs"></div> -->
            </div>
        </div>
        <div class="relative w-full mt-2 content hidden">
            <div v-show="tabSelected === 'Account'" class="relative">
                <div class="border rounded-lg shadow-xs bg-card text-neutral-900">
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="text-lg font-semibold leading-none tracking-tight">Account</h3>
                        <p class="text-sm text-neutral-500">Make changes to your account here. Click save when you're done.</p>
                    </div>
                    <div class="p-6 pt-0 space-y-2">
                        <div class="space-y-1">
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="name"
                                >Name</label
                            ><input
                                type="text"
                                placeholder="Name"
                                id="name"
                                value="Adam Wathan"
                                class="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md peer border-neutral-300 ring-offset-background placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                        <div class="space-y-1">
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="username"
                                >Username</label
                            ><input
                                type="text"
                                placeholder="Username"
                                id="username"
                                value="@adamwathan"
                                class="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md peer border-neutral-300 ring-offset-background placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                    </div>
                    <div class="flex items-center p-6 pt-0">
                        <button
                            type="button"
                            class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 rounded-md bg-neutral-950 hover:bg-neutral-900 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 focus:shadow-outline focus:outline-hidden"
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>

            <div v-show="tabSelected === 'Password'" class="relative" v-cloak>
                <div class="border rounded-lg shadow-xs bg-card text-neutral-900">
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="text-lg font-semibold leading-none tracking-tight">Password</h3>
                        <p class="text-sm text-neutral-500">Change your password here. After saving, you'll be logged out.</p>
                    </div>
                    <div class="p-6 pt-0 space-y-2">
                        <div class="space-y-1">
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="password"
                                >Current Password</label
                            ><input
                                type="password"
                                placeholder="Current Password"
                                id="password"
                                class="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md peer border-neutral-300 ring-offset-background placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                        <div class="space-y-1">
                            <label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for="password_new"
                                >New Password</label
                            ><input
                                type="password"
                                placeholder="New Password"
                                id="password_new"
                                class="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                    </div>
                    <div class="flex items-center p-6 pt-0">
                        <button
                            type="button"
                            class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 rounded-md bg-neutral-950 hover:bg-neutral-900 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 focus:shadow-outline focus:outline-hidden"
                        >
                            Save password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
