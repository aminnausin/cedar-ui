import type { Ref } from 'vue';

export type SwipeAxis = 'x' | 'y';

export interface SwipeConstraint {
    minDelta: number;
    maxDelta: number;
}

export interface SwipeThreshold {
    px?: number;
    percent?: number;
}

export type SwipeDirection = 'top' | 'right' | 'bottom' | 'left';

export interface UseSwipeHandlerOptions {
    directions: Ref<SwipeDirection[]>;
    swipeThreshold: SwipeThreshold; // min offset in pixels or pct to "finish" a swipe
    velocityThreshold?: number; // min velocity to "finish" a swipe
    getElementSize?: (axis: SwipeAxis) => number;
    onSwipeOut: () => void;
}
