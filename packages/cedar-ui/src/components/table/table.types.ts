// Table

import type { Component, DefineComponent } from 'vue';

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
