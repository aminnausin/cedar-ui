import type { _RouterLinkI } from 'vue-router';

export type ButtonVariant = 'default';

export type ButtonComponent = 'button' | 'a' | _RouterLinkI;

export type IconButtonVariant = ButtonVariant | 'ghost' | 'transparent';

export type TextButtonVariant = ButtonVariant | 'ghost' | 'transparent' | 'form';

export type FormButtonVariant = ButtonVariant | 'submit' | 'reset' | 'auth';

export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
    type?: ButtonType;
}
