import type { PropType } from 'vue';
import type { Theme } from 'vitepress';

import { defineComponent, h } from 'vue';

import * as components from './components';

// import DefaultTheme from 'vitepress/theme';
import DocsLayout from './layout/DocsLayout.vue';
import Layout from './layout/MainLayout.vue';

import './styles/vp-doc.css';
import './styles/shiki.css';
import './style.css';
export default {
    // extends: DefaultTheme,
    Layout,
    enhanceApp({ app, router, siteData }) {
        // eslint-disable-next-line vue/multi-word-component-names
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
