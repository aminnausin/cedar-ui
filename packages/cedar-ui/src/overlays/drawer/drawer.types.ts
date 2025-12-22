import type { SwipeDirection } from '@/gestures';

export interface DrawerControllerProps {
    teleportTarget?: string;
}

export interface DrawerProps {
    title?: string;
    description?: string;
    rootClass?: string;
    direction?: SwipeDirection;
}
