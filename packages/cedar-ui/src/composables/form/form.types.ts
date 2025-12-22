// Form Types
export type FieldType = 'text' | 'textArea' | 'number' | 'date' | 'url' | 'multi' | 'select' | 'password';
export type FormFieldValue = string | number | boolean | Array<any> | null;
export type FormFields<T> = T & { [key: string]: FormFieldValue };

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
