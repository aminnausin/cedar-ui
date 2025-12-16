import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export function cn(...inputs: any[]) {
    return twMerge(clsx(inputs));
}

export function isInputLikeElement(element: EventTarget | null, key: string): boolean {
    if (!element) return false;

    let inputLikeTags = ['INPUT', 'TEXTAREA', 'SELECT'];

    if (key === ' ' || key === 'Enter') inputLikeTags = [...inputLikeTags, 'BUTTON'];

    return inputLikeTags.includes((element as HTMLElement).tagName);
}
