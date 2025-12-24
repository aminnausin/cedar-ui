import type { SwipeDirection } from '@/gestures';

export type DrawerCloseReason = 'backdrop' | 'swipe' | 'escape' | 'programmatic'; // Backdrop, swipe, escape, code

export interface DrawerControllerProps {
    teleportTarget?: string;
}

export interface DrawerProps {
    title?: string;
    description?: string;

    showHeader?: boolean;
    showFooter?: boolean;

    direction?: SwipeDirection; // Unimplemented

    rootClass?: string; // Applies to RootDrawer

    closeOnEsc?: boolean; // OnEsc
    closeOnBackdrop?: boolean; // OnClickOutside
    closeOnSwipe?: boolean; // OnSwipe
    preventClose?: boolean; // Disable non programmatic close

    payload?: unknown;

    onOpen?: () => void;
    onClose?: (reason: DrawerCloseReason) => void;
}
