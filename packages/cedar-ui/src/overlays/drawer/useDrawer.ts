import type { DrawerProps } from './drawer.types';
import type { Component } from 'vue';

import { useDrawerCore } from './useDrawerCore';

export function useDrawer() {
    return useDrawerCore();
}

export const drawer = {
    open: (comp: Component, props: DrawerProps) => useDrawerCore().open(comp, props),
    close: () => useDrawerCore().close(),
};
