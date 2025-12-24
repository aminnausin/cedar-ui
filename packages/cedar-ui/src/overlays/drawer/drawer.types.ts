import type { SwipeDirection } from '@/gestures';

export type DrawerCloseReason = 'user' | 'escape' | 'programmatic';

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
    preventClose?: boolean; // Disable non programmatic close

    payload?: unknown;

    onOpen?: () => void;
    onClose?: () => void;
}
