// Context Menu

import type { Component } from 'vue';

export interface ContextMenu {
    disabled?: boolean;
    style?: string;
    itemStyle?: string;
    items?: ContextMenuItem[];
    scrollContainer?: 'window' | 'body';
}
export interface ContextMenuItem {
    text?: string;
    shortcut?: string;
    url?: string;
    external?: boolean;
    action?: () => void;
    style?: string;
    selectedStyle?: string;
    selected?: boolean;
    disabled?: boolean;
    hidden?: boolean;
    icon?: Component;
}
