import type { Component, DefineComponent } from 'vue';

export type ToastType = 'success' | 'info' | 'warning' | 'danger' | 'default' | 'loading';
export type ToastPostion = 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';
export type ToastLayout = 'default' | 'expanded';

export type TabsOrientation = 'horizontal' | 'vertical';

export interface ToastIcons {
    success?: Component;
    info?: Component;
    warning?: Component;
    error?: Component;
    loading?: Component;
    close?: Component;
}

export interface ToastControllerProps {
    layout?: 'default' | 'expanded';
    position?: ToastPostion;
    defaultLife?: number;
    viewportOffset?: string | number;
    mobileViewportOffset?: string | number;
    paddingBetweenToasts?: number; // gap
    maxVisibleToasts?: number;
    closeButton?: boolean;
    icons?: ToastIcons;
}

export interface ToastProps extends Message {
    id: string;
    index: number;
    stack: (...args: unknown[]) => unknown;
    position: ToastPostion;
    toastCount: number;
    expanded: boolean;
    maxVisibleToasts?: number;
    swipeDirections?: SwipeDirection[];
    style?: string;
}

export type SwipeDirection = 'top' | 'right' | 'bottom' | 'left';

export interface Message<T extends Component = Component> {
    id: string;
    title: string;
    description?: string;
    type?: ToastType;
    position?: ToastPostion;
    life?: number;
    html?: string;
    component?: T;
    scale: number;
    zIndex: number;
    offsetY: number;
    positionY?: string;
}

export interface ExternalToast {
    title: string;
    options: ToastOptions;
}

export interface ToastOptions {
    id?: string;
    description?: string;
    type?: ToastType;
    position?: ToastPostion;
    life?: number;
}

export interface ToastT {
    id: string;
}

export declare interface ToastToDismiss {
    id: string;
    dismiss: boolean;
}

export interface BreadCrumbItem {
    name: string;
    url: string;
    icon?: Component;
}

export declare type SortDir = 1 | -1;

export declare type FieldType = 'text' | 'textArea' | 'number' | 'date' | 'url' | 'multi' | 'select' | 'password';

export interface FormField {
    name: string;
    text?: string;
    subtext?: string;
    type: FieldType;
    required?: boolean;
    value?: any;
    placeholder?: string;
    default?: any;
    min?: number;
    max?: number;
    class?: string;
    disabled?: boolean;
    autocomplete?: string;
    ariaAutocomplete?: 'list' | 'none' | 'inline' | 'both';
}

export interface SelectItem {
    id: number;
    name: string;
    relationships?: any;
}

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

export interface TableProps<T> {
    useToolbar?: boolean;
    usePagination?: boolean;
    usePaginationIcons?: boolean;
    useGrid?: string;
    data: T[];
    row: DefineComponent<any, any, any> | Component;
    rowAttributes?: Record<string, any>;
    loading?: boolean;
    clickAction?: (id: number, ...args: any[]) => void;
    otherAction?: (...args: any[]) => void;
    sortAction?: (sortKey: keyof T, direction: 1 | -1) => void;
    sortingOptions?: TableSortOption[];
    itemsPerPage?: number;
    itemName?: string;
    searchQuery?: string;
    selectedID?: number | string | null;
    tableStyles?: string;
    startAscending?: boolean;
    paginationClass?: string;
    maxVisiblePages?: number;
    noResultsMessage?: string;
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

export interface ContextMenu {
    disabled?: boolean;
    style?: string;
    itemStyle?: string;
    items?: ContextMenuItem[];
    scrollContainer?: 'window' | 'body';
}

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

export declare type TableSortOption = {
    title: string;
    value: string;
    disabled?: boolean;
};

export interface TabsProps {
    defaultValue: string;
    orientation?: TabsOrientation;
}

export interface TabsTriggerProps {
    value: string;
}

export interface TabsMarkerProps {
    orientation?: TabsOrientation;
}
