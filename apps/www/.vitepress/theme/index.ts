// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress';

import { h } from 'vue';

import * as components from './components';
import DefaultTheme from 'vitepress/theme';
import './style.css';

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        });
    },
    enhanceApp({ app, router, siteData }) {
        for (const component of Object.keys(components)) app.component(component, (components as any)[component]);
    },
} satisfies Theme;
