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
