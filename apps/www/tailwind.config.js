import plugin from 'tailwindcss/plugin';

const customVariants = plugin(({ addVariant }) => {
    addVariant('hocus', ['&:hover', '&:focus']);
    addVariant('default', 'html :where(&)');
    addVariant('scrollbar', '&::-webkit-scrollbar');
    addVariant('scrollbar-track', '&::-webkit-scrollbar-track');
    addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb');
});

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
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
            borderRadius: {
                xl: 'calc(var(--radius) + 4px)',
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
        },
    },
    plugins: [customVariants],
};
