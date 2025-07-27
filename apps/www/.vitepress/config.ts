import { defineConfig } from 'vitepress';
import { docsConfig } from './theme/config/docs';
import { siteConfig } from './theme/config/site';

import ComponentPreviewPlugin from './theme/plugins/previewer';
import CodeWrapperPlugin from './theme/plugins/codewrapper';
import CodeBlockPlugin from './theme/plugins/codeblock';
import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import Icons from 'unplugin-icons/vite';
import path from 'path';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: siteConfig.name,
    titleTemplate: ':title - cedar-ui',
    description: siteConfig.description,
    head: [
        ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        ['link', { rel: 'shortcut icon', href: '/favicon-16x16.png' }],
        ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
        // ['link', { rel: 'manifest', href: '/site.webmanifest' }],

        ['meta', { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' }],
        ['meta', { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: 'black' }],

        ['meta', { name: 'creator', content: 'aminnausin' }],
        ['meta', { name: 'theme-color', content: '#41b883' }],
        ['meta', { name: 'og:type', content: 'website' }],
        ['meta', { name: 'og:locale', content: 'en' }],
        ['meta', { name: 'og:site_name', content: siteConfig.name }],
        // ['meta', { name: 'og:image', content: siteConfig.ogImage }],
        // ['meta', { name: 'twitter:image', content: siteConfig.ogImage }],
    ],
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
        ], //docsConfig.mainNav,

        sidebar: docsConfig.sidebarNav,

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
    markdown: {
        config(md) {
            md.use(ComponentPreviewPlugin);
            md.use(CodeWrapperPlugin);
            md.use(CodeBlockPlugin);
        },
    },
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
