import type { DefaultTheme } from 'vitepress';

export interface NavItem {
    title: string;
    href?: string;
    disabled?: boolean;
    external?: boolean;
    icon?: string;
    label?: string;
}

export type SidebarNavItem = NavItem & {
    items?: SidebarNavItem[];
};

export type NavItemWithChildren = NavItem & {
    items?: NavItemWithChildren[];
};

interface DocsConfig {
    mainNav: NavItem[];
    sidebarNav: SidebarNavItem[];
}

/**
 * Transforms a SidebarNavItem into a VitePress SidebarItem.
 *
 * @param item - The SidebarNavItem to transform
 * @returns A VitePress compatible SidebarItem with renamed properties and recursively transformed children
 */
export function transformSidebarNavItemToVitePressSidebarItem(item: SidebarNavItem): DefaultTheme.SidebarItem {
    const { title, href, items } = item;
    return {
        text: title,
        link: href,
        ...(items ? { items: items.map(transformSidebarNavItemToVitePressSidebarItem) } : {}),
    };
}

/**
 * Transforms an array of SidebarNavItems into VitePress sidebar configuration.
 *
 * @param items - Array of SidebarNavItems to transform
 * @returns Array of VitePress compatible SidebarItems with renamed properties
 */
export function transformSidebarNavToVitePressSidebar(items: SidebarNavItem[]): DefaultTheme.SidebarItem[] {
    return items.map(transformSidebarNavItemToVitePressSidebarItem);
}

export const docsConfig: DocsConfig = {
    mainNav: [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'Documentation',
            href: '/docs/introduction',
        },
        {
            title: 'Components',
            href: '/docs/components/accordion',
        },
    ],
    sidebarNav: [
        {
            title: 'Getting Started',
            items: [
                {
                    title: 'Introduction',
                    href: '/docs/introduction',
                },
                {
                    title: 'Installation',
                    href: '/docs/installation',
                },
                // {
                //     title: 'components.json',
                //     href: '/docs/components-json',
                // },
                // {
                //     title: 'CLI',
                //     href: '/docs/cli',
                // },
                // {
                //     title: 'Changelog',
                //     href: '/docs/changelog',
                // },
                {
                    title: 'About',
                    href: '/docs/about',
                },
            ],
        },
        // {
        //     title: 'Installation',
        //     items: [
        //         // {
        //         //     title: 'Vite',
        //         //     href: '/docs/installation/vite',
        //         // },
        //         // {
        //         //     title: 'Nuxt',
        //         //     href: '/docs/installation/nuxt',
        //         // },
        //         // {
        //         //     title: 'Astro',
        //         //     href: '/docs/installation/astro',
        //         // },
        //         // {
        //         //     title: 'Laravel',
        //         //     href: '/docs/installation/laravel',
        //         // },
        //         {
        //             title: 'Manual',
        //             href: '/docs/installation/manual',
        //         },
        //     ],
        // },
        {
            title: 'Components',
            items: [
                {
                    title: 'Accordion',
                    href: '/docs/components/accordion',
                },
                {
                    title: 'Badge',
                    href: '/docs/components/badge',
                },
                {
                    title: 'BreadCrumbs',
                    href: '/docs/components/breadcrumbs',
                },
                {
                    title: 'Button',
                    href: '/docs/components/button',
                },
                {
                    title: 'Clipboard',
                    href: '/docs/components/clipboard',
                },
                {
                    title: 'Context Menu',
                    href: '/docs/components/context-menu',
                },
                {
                    title: 'Date Picker',
                    href: '/docs/components/date-picker',
                },
                {
                    title: 'Dropdown Menu',
                    href: '/docs/components/dropdown-menu',
                },
                {
                    title: 'Form',
                    href: '/docs/components/form',
                    label: 'Incomplete',
                },
                {
                    title: 'Hover Card',
                    href: '/docs/components/hover-card',
                },
                {
                    title: 'Input',
                    href: '/docs/components/input',
                },
                {
                    title: 'Label',
                    href: '/docs/components/label',
                },
                {
                    title: 'Modal',
                    href: '/docs/components/modal',
                },
                {
                    title: 'Multi-Select',
                    href: '/docs/components/multi-select',
                },
                {
                    title: 'Number Field',
                    href: '/docs/components/number-field',
                },
                {
                    title: 'Popover',
                    href: '/docs/components/popover',
                },
                {
                    title: 'Select',
                    href: '/docs/components/select',
                },
                {
                    title: 'Table',
                    href: '/docs/components/table',
                },
                {
                    title: 'Tabs',
                    href: '/docs/components/tabs',
                    label: 'Incomplete',
                },
                {
                    title: 'Textarea',
                    href: '/docs/components/textarea',
                },
                {
                    title: 'Toast',
                    href: '/docs/components/toast',
                },
            ],
        },
        // {
        //     title: 'Dev Components',
        //     items: [
        //         {
        //             title: 'Sidebar',
        //             href: '/docs/components/sidebar',
        //         },
        //         {
        //             title: 'Accordion',
        //             href: '/docs/components/accordion',
        //         },
        //         {
        //             title: 'Alert',
        //             href: '/docs/components/alert',
        //         },
        //         {
        //             title: 'Alert Dialog',
        //             href: '/docs/components/alert-dialog',
        //         },
        //         {
        //             title: 'Aspect Ratio',
        //             href: '/docs/components/aspect-ratio',
        //         },
        //         {
        //             title: 'Avatar',
        //             href: '/docs/components/avatar',
        //         },
        //         {
        //             title: 'Badge',
        //             href: '/docs/components/badge',
        //         },
        //         {
        //             title: 'Breadcrumb',
        //             href: '/docs/components/breadcrumb',
        //             items: [],
        //         },
        //         {
        //             title: 'Button',
        //             href: '/docs/components/button',
        //         },
        //         {
        //             title: 'Calendar',
        //             href: '/docs/components/calendar',
        //             items: [],
        //         },
        //         {
        //             title: 'Clipboard',
        //             href: '/docs/components/clipboard',
        //             items: [],
        //         },
        //         {
        //             title: 'Card',
        //             href: '/docs/components/card',
        //         },
        //         {
        //             title: 'Carousel',
        //             href: '/docs/components/carousel',
        //             items: [],
        //         },
        //         {
        //             title: 'Checkbox',
        //             href: '/docs/components/checkbox',
        //         },
        //         {
        //             title: 'Collapsible',
        //             href: '/docs/components/collapsible',
        //         },
        //         {
        //             title: 'Combobox',
        //             href: '/docs/components/combobox',
        //         },
        //         {
        //             title: 'Command',
        //             href: '/docs/components/command',
        //         },
        //         {
        //             title: 'Context Menu',
        //             href: '/docs/components/context-menu',
        //         },
        //         {
        //             title: 'Data Table',
        //             href: '/docs/components/data-table',
        //         },
        //         {
        //             title: 'Date Picker',
        //             href: '/docs/components/date-picker',
        //             items: [],
        //         },
        //         {
        //             title: 'Dialog',
        //             href: '/docs/components/dialog',
        //         },
        //         {
        //             title: 'Drawer',
        //             href: '/docs/components/drawer',
        //             items: [],
        //         },

        //         {
        //             title: 'Menubar',
        //             href: '/docs/components/menubar',
        //         },
        //         {
        //             title: 'Navigation Menu',
        //             href: '/docs/components/navigation-menu',
        //         },
        //         {
        //             title: 'Number Field',
        //             href: '/docs/components/number-field',
        //         },
        //         {
        //             title: 'Pagination',
        //             href: '/docs/components/pagination',
        //         },
        //         {
        //             title: 'PIN Input',
        //             href: '/docs/components/pin-input',
        //             items: [],
        //         },
        //         {
        //             title: 'Popover',
        //             href: '/docs/components/popover',
        //         },
        //         {
        //             title: 'Progress',
        //             href: '/docs/components/progress',
        //         },
        //         {
        //             title: 'Radio Group',
        //             href: '/docs/components/radio-group',
        //         },
        //         {
        //             title: 'Range Calendar',
        //             href: '/docs/components/range-calendar',
        //             items: [],
        //         },
        //         {
        //             title: 'Resizable',
        //             href: '/docs/components/resizable',
        //             items: [],
        //         },
        //         {
        //             title: 'Scroll Area',
        //             href: '/docs/components/scroll-area',
        //         },

        //         {
        //             title: 'Separator',
        //             href: '/docs/components/separator',
        //         },
        //         {
        //             title: 'Sheet',
        //             href: '/docs/components/sheet',
        //         },
        //         {
        //             title: 'Skeleton',
        //             href: '/docs/components/skeleton',
        //         },
        //         {
        //             title: 'Slider',
        //             href: '/docs/components/slider',
        //         },
        //         {
        //             title: 'Sonner',
        //             href: '/docs/components/sonner',
        //             items: [],
        //         },
        //         {
        //             title: 'Stepper',
        //             href: '/docs/components/stepper',
        //         },
        //         {
        //             title: 'Switch',
        //             href: '/docs/components/switch',
        //         },

        //         {
        //             title: 'Toggle',
        //             href: '/docs/components/toggle',
        //         },
        //         {
        //             title: 'Toggle Group',
        //             href: '/docs/components/toggle-group',
        //         },
        //         {
        //             title: 'Tooltip',
        //             href: '/docs/components/tooltip',
        //         },
        //     ],
        // },
    ],
};

interface Example {
    name: string;
    href: string;
    label?: string;
    code: string;
}
export const examples: Example[] = [
    {
        name: 'Authentication',
        href: '/examples/authentication',
        code: 'https://github.com/aminnausin/cedar-ui/tree/main/apps/www/src/examples/authentication',
    },
];
