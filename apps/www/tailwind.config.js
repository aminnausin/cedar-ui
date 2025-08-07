import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{vue,js,ts,jsx,tsx,md}', './.vitepress/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1536px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
                    foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))',
                },
                'primary-dark': {
                    600: '#2a2a2d', // Card Hover
                    700: '#26262a', // Card 2
                    800: '#27272a', // Card
                    900: '#18181b', // Panel
                    950: '#101014', // bg
                },
            },
            borderRadius: {
                xl: 'calc(var(--radius) + 4px)',
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            aspectRatio: {
                video: '16 / 9',
                square: '1 / 1',
                portrait: '9 / 16',
                '1/2': '1 / 2',
                '2/3': '2 / 3',
                '3/4': '3 / 4',
            },
            screens: {
                xs: '320px',
                xms: '400px',
                '3xl': '2000px',
            },
        },
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant('hocus', ['&:hover', '&:focus']);
        }),
        // tailwindcssAnimate,
        require('@tailwindcss/forms'),

        require('@tailwindcss/aspect-ratio'),

        require('tailwind-scrollbar-hide'),
    ],
};
