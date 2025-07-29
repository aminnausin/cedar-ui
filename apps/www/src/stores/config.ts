import { useStorage } from '@vueuse/core';
import { useData } from 'vitepress';
import { computed } from 'vue';

type PackageManager = 'pnpm' | 'npm' | 'yarn' | 'bun';

export interface Config {
    radius: number;
    packageManager: PackageManager;
    style: 'cedar-ui';
}

interface CodeConfig {
    prefix: string;
    componentsPath: string;
    utilsPath: string;
}

export const RADII = [0, 0.25, 0.5, 0.75, 1];

export function useConfigStore() {
    const { isDark } = useData();
    const config = useStorage('config-1', {
        radius: 0.5,
        style: 'cedar-ui',
        packageManager: 'pnpm',
    } satisfies Config);
    const codeConfig = useStorage<CodeConfig>('code-config', {
        prefix: '',
        componentsPath: '@/components',
        utilsPath: '@/utils',
    });

    const radius = computed(() => config.value.radius);
    const style = computed(() => config.value.style);

    function setRadius(newRadius: number) {
        config.value.radius = newRadius;
    }

    const setCodeConfig = (payload: CodeConfig) => {
        codeConfig.value = payload;
    };

    return {
        config,
        radius,
        setRadius,
        style,

        codeConfig,
        setCodeConfig,
    };
}
