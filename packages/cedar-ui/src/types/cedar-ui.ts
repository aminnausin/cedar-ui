import type { Component, DefineComponent } from 'vue';

// Sort Types
export type SortDir = 1 | -1;

// Form Types
export type FieldType = 'text' | 'textArea' | 'number' | 'date' | 'url' | 'multi' | 'select' | 'password';
export type FormFieldValue = string | number | boolean | Array<any> | null;
export type FormFields<T> = T & { [key: string]: FormFieldValue };

// Toast Types

export type ToastType = 'success' | 'info' | 'warning' | 'danger' | 'default' | 'loading';
export type ToastPostion = 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';
export type ToastLayout = 'default' | 'expanded';
export type SwipeDirection = 'top' | 'right' | 'bottom' | 'left';

// Tabs Types

export type TabsOrientation = 'horizontal' | 'vertical';

// Toast

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

// BreadCrumbs

export interface BreadCrumbItem {
    name: string;
    url: string;
    icon?: Component;
}

// Select

export interface SelectItem {
    id: number;
    name: string;
    relationships?: any;
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

// Context Menu

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

// Popover

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

// Table

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

export declare type TableSortOption = {
    title: string;
    value: string;
    disabled?: boolean;
};

// Form

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

export interface FormHooks {
    onBefore?: () => any;
    onSuccess?: (response: any) => any;
    onError?: (error: any) => any;
    onFinish?: () => any;
}

export interface FormState<T> {
    fields: FormFields<T>;
    errors: { [key: string]: string };
    dirty: boolean;
    hasErrors: boolean;
    processing: boolean;
    wasSuccessful: boolean;
    recentlySuccessful: boolean;
    submit: (submitFn: (fields: FormFields<T>) => Promise<any>, hooks?: FormHooks) => Promise<void>;
    reset: (...fields: (keyof FormFields<T>)[]) => void;
    clearErrors: (...fields: string[]) => void;
    setErrors: (errors: { [key: string]: string }) => void;
}

// Accordion

export interface AccordionItem {
    id: string;
    title: string;
    content: string;
}

// Tabs

export interface TabsProps {
    defaultValue: string;
    orientation?: TabsOrientation;
}

export interface TabsTriggerProps {
    value: string;
}

export interface TabsContentProps {
    value: string;
}

export interface TabsMarkerProps {
    orientation?: TabsOrientation;
}
