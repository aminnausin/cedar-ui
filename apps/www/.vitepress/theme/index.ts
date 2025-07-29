// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress';

import { defineComponent, h, type PropType } from 'vue';

import * as components from './components';
import DefaultTheme from 'vitepress/theme';
import Layout from './layout/MainLayout.vue';
import DocsLayout from './layout/DocsLayout.vue';
import './style.css';

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app, router, siteData }) {
        app.component('docs', DocsLayout);
        app.component(
            'RouterLink',
            defineComponent({
                name: 'RouterLink',
                props: {
                    to: {
                        type: [String, Object] as PropType<string | Record<string, any>>,
                        required: true,
                    },
                },
                setup(props, { slots }) {
                    return () =>
                        h(
                            'a',
                            {
                                href: typeof props.to === 'string' ? props.to : '#',
                                class: 'mock-router-link',
                            },
                            slots.default?.(),
                        );
                },
            }),
        );
        for (const component of Object.keys(components)) app.component(component, (components as any)[component]);
    },
} satisfies Theme;
