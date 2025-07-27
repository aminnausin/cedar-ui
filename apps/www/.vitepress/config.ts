import { defineConfig } from 'vitepress';
import { siteConfig } from './theme/config/site';

import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import Icons from 'unplugin-icons/vite';
import path from 'path';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: siteConfig.name,
    titleTemplate: ':title - cedar-ui',
    description: siteConfig.description,

    sitemap: {
        hostname: 'https://www.shadcn-vue.com',
        transformItems(items) {
            return items.filter((item) => !item.url.includes('migration'));
        },
    },
    lastUpdated: true,
    themeConfig: {
        search: {
            provider: 'local',
        },

        editLink: {
            pattern: 'https://github.com/aminnausin/cedar-ui/tree/dev/apps/www/src/:path',
            text: 'Edit this page on GitHub',
        },

        nav: [
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/docs/markdown-examples' },
        ],

        // sidebar: [
        //     {
        //         text: 'Examples',
        //         items: [
        //             { text: 'Markdown Examples', link: '/markdown-examples' },
        //             { text: 'Runtime API Examples', link: '/api-examples' },
        //         ],
        //     },
        // ],

        socialLinks: [{ icon: 'github', link: 'https://github.com/aminnausin/cedar-ui' }],
    },
    srcDir: path.resolve(__dirname, '../src'),
    rewrites: {
        'content/(.*)': '(.*)',
    },
    vite: {
        css: {
            postcss: {
                plugins: [tailwind() as any, autoprefixer()],
            },
        },
        plugins: [Icons({ compiler: 'vue3', autoInstall: true }) as any],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '../src'),
            },
        },
    },
});
