import { defineConfig } from 'vite';

import path from 'path';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        vue(),
        dts({
            include: ['src'],
            insertTypesEntry: true,
            tsconfigPath: './tsconfig.app.json',
            rollupTypes: true,
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'CedarUI',
            // fileName: (format) => `cedar-ui.${format}.js`,
        },
        rollupOptions: {
            external: ['vue', 'vue-router'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
