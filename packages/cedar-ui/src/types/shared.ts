import type { Component } from 'vue';

// Sort Types
export type SortDir = 1 | -1;

// BreadCrumbs

export interface BreadCrumbItem {
    name: string;
    url: string;
    icon?: Component;
}

// Dropdown

export interface DropdownMenuItem {
    name: string;
    url?: string;
    text: string;
    title?: string;
    icon?: Component;
    disabled?: boolean;
    hidden?: boolean;
    external?: boolean;
    action?: () => void;
    shortcut?: string | Component;
    shortcutTitle?: string;
    iconStrokeWidth?: number;
}

export type AnchorTarget = '_self' | '_blank' | '_parent' | '_top' | (string & {});
