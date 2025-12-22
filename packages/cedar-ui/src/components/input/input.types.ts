import type { FormField } from '@/composables';

export interface InputProps {
    id?: string;
    disabled?: boolean;
    placeholder?: string;
    class?: string;
}

export interface InputShellProps extends InputProps {
    clampText?: boolean;
}

export interface LabelProps {
    text?: string;
    subtext?: string;
}

export interface NumberFieldProps {
    increment?: number;
}

export interface TextInputProps extends InputProps {
    minlength?: number;
    maxlength?: number;
}

export interface LabelledTextInputProps extends TextInputProps, LabelProps {}

// Forms

export interface FormLabelledTextInputProps extends TextInputProps, LabelProps {
    required?: boolean;
}

export interface FormLabelProps extends LabelProps {
    for: string;
}

export interface FormNumberFieldProps extends NumberFieldProps {
    field: FormField;
}

export interface FormTextAreaProps {
    field: FormField;
    maxHeight?: number;
}
