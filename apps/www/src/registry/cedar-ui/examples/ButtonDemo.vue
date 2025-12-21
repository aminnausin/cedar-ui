<script setup lang="ts">
import type { FormButtonVariant, IconButtonVariant, TextButtonVariant } from '@aminnausin/cedar-ui';

import { ButtonText, ButtonForm, ButtonIcon, ButtonCorner } from '../components/button';
import { LucideUserPlus, ProiconsSettings } from '../components/icons';
import { NavButton, NavLink } from '../components/button-nav';

const variants: TextButtonVariant[] = ['default', 'form', 'transparent', 'ghost'];
const iconVariants: IconButtonVariant[] = ['default', 'transparent', 'ghost'];
const formVariants: FormButtonVariant[] = ['default', 'submit', 'reset', 'auth'];

const navButtons = [
    {
        icon: ProiconsSettings,
        label: 'Settings',
        active: false,
    },
    {
        icon: LucideUserPlus,
        label: 'Profile',
        active: true,
    },
];
</script>

<template>
    <div class="space-y-4">
        <div>
            <p>Text</p>
            <div class="flex flex-wrap items-center gap-4 text-sm">
                <ButtonText v-for="variant in variants" :key="variant" :text="variant" :variant="variant" />
            </div>
        </div>
        <div>
            <p>Form</p>
            <div class="flex flex-wrap items-center gap-4 text-sm">
                <ButtonForm v-for="variant in formVariants" :key="variant" :variant="variant">{{ variant }}</ButtonForm>
            </div>
        </div>
        <div>
            <p>Icon</p>
            <div class="flex flex-wrap items-center gap-4 text-sm">
                <ButtonIcon v-for="variant in iconVariants" :key="variant" :variant="variant">
                    <ProiconsSettings />
                </ButtonIcon>
            </div>
        </div>
        <div>
            <p>Corner</p>
            <div class="bg-surface-1 relative flex rounded-lg p-4 text-sm">
                Example
                <ButtonCorner class="hover:bg-surface-2 focus-visible:bg-surface-2 hover:text-danger-2 m-2 size-6" :label="'Do nothing'" />
            </div>
        </div>
        <div>
            <p>Nav</p>
            <div class="flex flex-wrap items-center gap-4 text-sm">
                <NavButton v-for="variant in navButtons" :key="variant.label" :active="variant.active" :label="variant.label">
                    <component :is="variant.icon" />
                </NavButton>
                <NavLink v-for="variant in navButtons" :key="variant.label" :active="variant.active" :label="variant.label" :href="'/'">
                    <component :is="variant.icon" />
                </NavLink>
            </div>
        </div>
    </div>
</template>
