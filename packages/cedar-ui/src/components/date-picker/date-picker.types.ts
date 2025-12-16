import type { ModelRef } from 'vue';

export interface DatePickerProps {
    model?: ModelRef<string | undefined>;
    defaultDate?: string;
    useDefaultDate?: boolean;
}
