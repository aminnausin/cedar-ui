import type { DrawerProps } from './drawer.types';
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
        if (timeoutId.value) clearTimeout(timeoutId.value);

        props.value = drawerProps;
        component.value = drawerComponent;

        isOpen.value = true;
        isAnimating.value = true;

        timeoutId.value = window.setTimeout(() => {
            isAnimating.value = false;
        }, animationTime.value);
    }

    function close() {
        if (timeoutId.value) clearTimeout(timeoutId.value);

        isOpen.value = false;
        isAnimating.value = true;

        timeoutId.value = window.setTimeout(() => {
            isAnimating.value = false;
        }, animationTime.value);
    }

    return { isOpen: readonly(isOpen), isAnimating: readonly(isAnimating), animationTime, props, component, open, close };
}

export function useDrawerCore() {
    if (!_drawer) _drawer = createDrawerCore();
    return _drawer;
}
