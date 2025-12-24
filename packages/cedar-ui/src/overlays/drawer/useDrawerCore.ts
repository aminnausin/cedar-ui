import type { DrawerCloseReason, DrawerProps } from './drawer.types';
import type { Component } from 'vue';

import { shallowRef, ref, readonly } from 'vue';

let _drawer: ReturnType<typeof createDrawerCore> | null = null;

export function createDrawerCore() {
    const isAnimating = ref(false);
    const isOpen = ref(false);
    const animationTime = ref(200);
    const timeoutId = ref<number | null>(null);

    const props = shallowRef<Partial<DrawerProps>>({});
    const component = shallowRef<Component | null>(null);

    function open(drawerComponent: Component, drawerProps: DrawerProps = {}) {
        if (isOpen.value) {
            close('programmatic');
            return;
        }
        if (timeoutId.value) clearTimeout(timeoutId.value);

        props.value = drawerProps;
        component.value = drawerComponent;

        isOpen.value = true;
        isAnimating.value = true;

        props.value?.onOpen?.();

        timeoutId.value = window.setTimeout(() => {
            isAnimating.value = false;
        }, animationTime.value);

        // Can Implement onAfterOpen
    }

    function close(reason: DrawerCloseReason) {
        if (!isOpen.value) return;
        if (timeoutId.value) clearTimeout(timeoutId.value);

        if (reason !== 'programmatic' && props.value.preventClose) return; // Disallow Swipe and Keyboard close
        if (reason === 'escape' && !(props.value.closeOnEsc ?? true)) return; // Disallow Keyboard close
        if (reason === 'backdrop' && !(props.value.closeOnBackdrop ?? true)) return; // Disallow Backdrop close
        if (reason === 'swipe' && !(props.value.closeOnSwipe ?? true)) return; // Disallow Swipe close

        isOpen.value = false;
        isAnimating.value = true;

        props.value?.onClose?.(reason);

        timeoutId.value = window.setTimeout(() => {
            isAnimating.value = false;
            component.value = null;
            props.value = {};
        }, animationTime.value);

        // Can Implement onAfterClose
    }

    return { isOpen: readonly(isOpen), isAnimating: readonly(isAnimating), animationTime, props, component, open, close };
}

export function useDrawerCore() {
    if (!_drawer) _drawer = createDrawerCore();
    return _drawer;
}
