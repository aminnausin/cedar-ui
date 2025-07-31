<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/new-york/tabs';
import { computed, ref, watch } from 'vue';
import { ButtonClipboard } from '@/registry/cedar-ui/components/clipboard';
import { highlight } from '../config/shiki';
import { cn } from '@/lib/utils';

import ComponentLoader from './ComponentLoader.vue';
import MagicString from 'magic-string';

// import { useConfigStore } from '@/stores/config';

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(
    defineProps<{
        name: string;
        align?: 'center' | 'start' | 'end';
    }>(),
    { align: 'center' },
);
const style = ref('cedar-ui');
const codeConfig = ref({ componentsPath: '@/components', utilsPath: '@/util' });

const rawString = ref('');
const codeHtml = ref('');
const transformedRawString = computed(() => transformImportPath(rawString.value));

function transformImportPath(code: string) {
    const s = new MagicString(code);
    s.replaceAll(`@/registry/${style.value}`, codeConfig.value.componentsPath);
    s.replaceAll(`@/lib/utils`, codeConfig.value.utilsPath);
    return s.toString();
}

watch(
    [style, codeConfig],
    async () => {
        try {
            rawString.value = await import(`../../../src/registry/${style.value}/examples/${props.name}.vue?raw`).then((res) =>
                res.default.trim(),
            );
            codeHtml.value = highlight(transformedRawString.value, 'vue');
        } catch (err) {
            console.error(err);
        }
    },
    { immediate: true, deep: true },
);
</script>

<template>
    <div class="not-docs group relative my-4 flex flex-col space-y-2">
        <Tabs default-value="preview" class="relative mr-auto w-full">
            <div class="flex items-center justify-between pb-3">
                <TabsList class="w-full justify-start rounded-none bg-transparent p-0 border-b">
                    <TabsTrigger
                        value="preview"
                        class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                    >
                        Preview
                    </TabsTrigger>
                    <TabsTrigger
                        value="code"
                        class="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                    >
                        Code
                    </TabsTrigger>
                    <ButtonClipboard
                        class="ms-auto"
                        :button-style="'transition-all hover:ring-purple-600 w-8 h-8 !ring-0 hover:border-b border-purple-600'"
                        :text="transformedRawString"
                        :title="'Copy code'"
                    />
                </TabsList>
            </div>
            <TabsContent value="preview" class="relative rounded-md border">
                <div
                    :class="
                        cn('preview flex min-h-[350px] w-full justify-center p-10 items-center', {
                            'items-center': align === 'center',
                            'items-start': align === 'start',
                            'items-end': align === 'end',
                        })
                    "
                >
                    <ComponentLoader v-bind="$attrs" :name="name" :type-name="'example'" />
                </div>
            </TabsContent>
            <TabsContent value="code" class="">
                <div v-if="codeHtml" class="language-vue" style="flex: 1" v-html="codeHtml"></div>
                <slot v-else />
            </TabsContent>
        </Tabs>
    </div>
</template>
