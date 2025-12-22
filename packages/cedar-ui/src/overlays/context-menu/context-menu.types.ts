// Context Menu

import type { AnchorTarget } from '@/types/shared';
import type { Component } from 'vue';

export interface ContextMenuOptions {
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
    target?: AnchorTarget;
}
