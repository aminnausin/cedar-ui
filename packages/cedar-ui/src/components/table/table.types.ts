// Table

import type { Component, DefineComponent, Ref } from 'vue';

export type TableRow = {
    id: number;
};

export interface UseTableOptions<T> {
    data: Ref<T[]>;
    itemsPerPage?: number;
    resetOnDataChange?: boolean;
}

export interface TableProps<T extends TableRow> {
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
    resetOnDataChange?: boolean;
}

export type TableSortOption = {
    title: string;
    value: string;
    disabled?: boolean;
};

export interface TablePaginationProps {
    listLength: number;
    currentPage: number;
    itemsPerPage: number;
    useIcons: boolean;
    maxVisiblePages?: number;
}

export interface TablePaginationButtonProps {
    currentPage?: number;
    pageNumber?: number;
    text?: string;
    underline?: boolean;
    sticky?: boolean;
    disabled?: boolean;
}
