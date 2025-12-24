import type { SwipeDirection, SwipeConstraint, UseSwipeHandlerOptions, SwipeAxis as Axis } from '.';

import { computed, ref } from 'vue';

const SWIPE_LOCK_THRESHOLD = 4; // px
const TAP_THRESHOLD = 6; // px

export function useSwipeHandler({ directions, swipeThreshold, velocityThreshold, getElementSize, onSwipeOut }: UseSwipeHandlerOptions) {
    const isSwiping = ref(false);

    const offset = ref({ x: 0, y: 0 });
    const startOffset = ref({ x: 0, y: 0 });
    const maxOffset = ref({ x: 0, y: 0 });

    const dragStartTime = ref<number>();

    const swipeConstraints = computed<Record<Axis, SwipeConstraint>>(() => resolveConstraints(directions.value));
    const activeAxis = ref<Axis | null>(null);

    function getDampening(delta: number) {
        const factor = Math.abs(delta) / 20;
        return 1 / (1.5 + factor);
    }

    function clampAlongAxis(value: number, c: SwipeConstraint) {
        return Math.min(c.maxDelta, Math.max(c.minDelta, value));
    }

    function isAxisAllowed(axis: Axis) {
        const c = swipeConstraints.value[axis];
        return c.minDelta !== 0 || c.maxDelta !== 0;
    }

    function resolveConstraints(dirs: SwipeDirection[]): Record<Axis, SwipeConstraint> {
        const constraints: Record<Axis, SwipeConstraint> = {
            x: { minDelta: 0, maxDelta: 0 },
            y: { minDelta: 0, maxDelta: 0 },
        };

        for (const dir of dirs) {
            if (dir === 'left') constraints.x.minDelta = -Infinity;
            if (dir === 'right') constraints.x.maxDelta = Infinity;
            if (dir === 'top') constraints.y.minDelta = -Infinity;
            if (dir === 'bottom') constraints.y.maxDelta = Infinity;
        }

        return constraints;
    }

    function resolveActiveAxis(deltas: { x: number; y: number }): Axis | null {
        const axis: Axis = Math.abs(deltas.x) > Math.abs(deltas.y) ? 'x' : 'y';

        // Return axis if at least one direction is unconstrained
        if (isAxisAllowed(axis)) return axis;

        // Default to null axis if selected swipe axis is fully constrained
        return null;
    }

    function resolveSwipeThreshold(axis: Axis | null): number {
        // if swipe delta is greater than pixel threshold ex 64px
        if (swipeThreshold.px) {
            return swipeThreshold.px;
        }

        if (axis && swipeThreshold.percent && getElementSize) {
            return getElementSize(axis) * swipeThreshold.percent;
        }

        // If no valid threshold, then no offset is enough to finish swipe
        return Infinity;
    }

    function onPointerDown(e: PointerEvent) {
        // ignore input elements
        if ((e.target as HTMLElement).closest('button, a, input, textarea, select')) return;

        dragStartTime.value = Date.now();

        //capture pointer for when swiping outside of the element
        (e.target as HTMLElement).setPointerCapture(e.pointerId);

        startOffset.value = { x: e.clientX, y: e.clientY };
        isSwiping.value = true;
    }

    /**
     * Handles swipe offsets
     *
     * Originally based off of vue-sonner
     * @param e Mouse or Touch Pointer Event
     */
    function onPointerMove(e: PointerEvent) {
        if (!isSwiping.value) return;

        const swipeAmount = { x: 0, y: 0 };

        const deltas = { x: e.clientX - startOffset.value.x, y: e.clientY - startOffset.value.y };

        maxOffset.value.x = Math.max(maxOffset.value.x, Math.abs(deltas.x));
        maxOffset.value.y = Math.max(maxOffset.value.y, Math.abs(deltas.y));

        if (!activeAxis.value && (Math.abs(deltas.x) > SWIPE_LOCK_THRESHOLD || Math.abs(deltas.y) > SWIPE_LOCK_THRESHOLD)) {
            activeAxis.value = resolveActiveAxis(deltas);
        }

        if (!activeAxis.value) return;

        // directly map swipe to offset in direction of axis if allowed
        swipeAmount[activeAxis.value] = clampAlongAxis(deltas[activeAxis.value], swipeConstraints.value[activeAxis.value]);

        // dampen in disallowed direction of axis
        if (swipeAmount[activeAxis.value] === 0 && deltas[activeAxis.value] !== 0) {
            const dampened = deltas[activeAxis.value] * getDampening(deltas[activeAxis.value]);
            // stop jump when transitioning to dampened movement
            swipeAmount[activeAxis.value] = Math.abs(dampened) < Math.abs(deltas[activeAxis.value]) ? dampened : deltas[activeAxis.value];
        }

        offset.value = swipeAmount;
    }

    /**
     * Evaluates swipe
     * Only takes into account the swipe delta of the active axis
     */
    function onPointerUp(): boolean {
        if (!isSwiping.value) return false;

        const timeTaken = Date.now() - (dragStartTime.value ?? 0);
        const swipeAmount = activeAxis.value ? offset.value[activeAxis.value] : 0;
        const velocity = Math.abs(swipeAmount) / timeTaken;

        const shouldDismiss = Math.abs(swipeAmount) >= resolveSwipeThreshold(activeAxis.value) || velocity > (velocityThreshold ?? 0.11);

        if (shouldDismiss) onSwipeOut();

        isSwiping.value = false;
        activeAxis.value = null;
        offset.value = { x: 0, y: 0 };

        return shouldDismiss;
    }

    function onPointerCancel() {
        isSwiping.value = false;
        activeAxis.value = null;
        offset.value = { x: 0, y: 0 };
    }

    function isTapGesture() {
        return maxOffset.value.x <= TAP_THRESHOLD && maxOffset.value.y <= TAP_THRESHOLD;
    }

    return {
        offset,
        isSwiping,
        onPointerDown,
        onPointerMove,
        onPointerUp,
        onPointerCancel,
        isTapGesture,
    };
}
