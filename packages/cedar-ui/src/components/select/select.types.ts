// Select

export interface SelectItem {
    title: string;
    value: any;
    key?: any;
    disabled?: boolean;
}

export interface MultiSelectItem {
    id: number;
    name: string;
    relationships?: any;
    disabled?: boolean;
}

export interface SelectProps {
    name?: string;
    class?: string;
    rootClass?: string;
    placeholder?: string;
    defaultItem?: number | null;
    options?: SelectItem[];
    disabled?: boolean;
    title?: string;
    prefix?: string;
    menuMargin?: { top: string; bottom: string };
}

export interface MultiSelectProps {
    class?: string;
    rootClass?: string;
    placeholder?: string;
    defaultItems?: MultiSelectItem[];
    options?: MultiSelectItem[];
    max?: number;
    disabled?: boolean;
    title?: string;
    fieldName?: string;
}
