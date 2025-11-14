<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/new-york/tabs';
import { ButtonClipboard } from '@/registry/cedar-ui/components/clipboard';
import { ClipboardIcon } from 'lucide-vue-next';
import { ref } from 'vue';

type PackageManager = 'pnpm' | 'npm' | 'yarn' | 'bun';

export interface Config {
    radius: number;
    packageManager: PackageManager;
}

defineProps<{
    tabs: Record<Config['packageManager'], string>;
}>();

const packageManager = ref<PackageManager>('npm');
</script>

<template>
    <div class="language-bash relative mt-6 max-h-[650px] overflow-x-auto rounded-xl bg-zinc-950 dark:bg-zinc-900">
        <Tabs v-model="packageManager">
            <div class="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-3 pt-2.5">
                <TabsList class="h-7 translate-y-0.5 gap-3 bg-transparent p-0 pl-1">
                    <TabsTrigger
                        v-for="key in Object.keys(tabs)"
                        :key="key"
                        :value="key"
                        class="rounded-none border-b border-transparent bg-transparent p-0 pb-1.5 font-mono text-zinc-400 data-[state=active]:border-b-zinc-50 data-[state=active]:bg-transparent data-[state=active]:text-zinc-50"
                    >
                        {{ key }}
                    </TabsTrigger>
                </TabsList>
            </div>
            <TabsContent v-for="[key, value] in Object.entries(tabs)" :key="key" :value="key" class="mt-0">
                <pre
                    class="shiki shiki-themes github-light github-dark vp-code"
                ><code><span class="line"><span>{{ value }}</span></span></code></pre>
            </TabsContent>
        </Tabs>
        <div class="absolute right-2.5 top-2 z-10 h-6 w-6">
            <ButtonClipboard
                :text="tabs[packageManager]"
                button-style="h-6 w-6 bg-zinc-900 hover:bg-zinc-700 text-zinc-50 dark:text-zinc-50 stroke-1 transition-all duration-300 [&_svg]:h-3 [&_svg]:w-3 p-0!"
            >
                <ClipboardIcon />
            </ButtonClipboard>
        </div>
    </div>
</template>
