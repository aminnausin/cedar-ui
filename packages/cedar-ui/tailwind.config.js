/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant('hocus', ['&:hover', '&:focus']);
        }),

        require('@tailwindcss/forms'),

        require('@tailwindcss/aspect-ratio'),

        require('tailwind-scrollbar-hide'),
    ],
};
