import type { Component } from 'vue';

import { shallowRef, ref } from 'vue';

let _drawer: ReturnType<typeof createDrawerCore> | null = null;

function createDrawerCore() {
    const isAnimating = ref(false);
    const isOpen = ref(false);
    const animationTime = ref(200);
    const timeoutId = ref<number | null>(null);

    const props = shallowRef<Record<string, any>>({});
    const component = shallowRef<Component | null>(null);

    function open(comp: Component, newProps: Record<string, any> = {}) {
        if (timeoutId.value) clearTimeout(timeoutId.value);

        props.value = newProps;
        component.value = comp;

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

    return { isOpen, isAnimating, animationTime, props, component, open, close };
}

export function useDrawerCore() {
    if (!_drawer) _drawer = createDrawerCore();
    return _drawer;
}
