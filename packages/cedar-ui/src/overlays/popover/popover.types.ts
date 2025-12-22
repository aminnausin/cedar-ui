import type { Component } from 'vue';

export interface PopoverItem {
    text?: string;
    title?: string;
    shortcut?: string;
    action?: () => void;
    style?: string;
    iconStyle?: string;
    selectedStyle?: string;
    selectedIconStyle?: string;
    selected?: boolean;
    disabled?: boolean;
    icon?: Component;
    selectedIcon?: Component;
}
