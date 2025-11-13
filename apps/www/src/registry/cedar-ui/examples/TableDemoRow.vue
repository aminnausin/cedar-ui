<script setup lang="ts">
import { HoverCard } from '@/registry/cedar-ui/components/hover-card';

import TablerMicrophone2 from '~icons/tabler/microphone-2';
import ProiconsComment from '~icons/proicons/comment';

const emit = defineEmits(['clickAction', 'otherAction']);

const { data: videoData } = defineProps<{
    data: {
        id: number;
        name: string;
        title: string;
        description?: string;
        lyrics?: string;
        duration: string;
        views: number;
        created_at: string;
    };
    index: number;
    isAudio?: boolean;
}>();
</script>

<template>
    <div
        class="relative flex flex-wrap flex-col gap-x-8 gap-y-4 p-3 w-full shadow-sm rounded-md ring-inset cursor-pointer dark:bg-primary-dark-800/70 dark:hover:bg-violet-700/70 bg-neutral-50 hover:bg-violet-400/30 odd:bg-neutral-100 dark:odd:bg-primary-dark-600"
        :videoData-id="videoData.id"
        :videoData-path="`../`"
        :title="`${videoData.title}\n${videoData.name}`"
    >
        <section class="flex justify-between gap-4 w-full items-center overflow-hidden">
            <HoverCard
                class="items-end"
                v-if="videoData.description"
                :content="videoData.description"
                :content-title="`${videoData.title}\n${videoData.name}`"
                :hover-card-delay="400"
                :hover-card-leave-delay="300"
            >
                <template #trigger>
                    <span class="flex group">
                        <h3 class="line-clamp-1 break-all">
                            {{ videoData.title }}
                        </h3>
                        <ProiconsComment
                            class="my-auto ms-4 group-hover:opacity-20 opacity-100 transition-opacity duration-300 shrink-0 h-5 w-5"
                            title="Description"
                        />
                    </span>
                </template>
            </HoverCard>
            <h3 v-else class="line-clamp-1 break-all" :title="`${videoData.title}\n${videoData.name}`">
                {{ videoData.title }}
            </h3>
            <HoverCard
                class="items-end flex-1 -ms-2 hidden sm:block"
                v-if="isAudio && videoData.lyrics"
                :content-title="'Has Lyrics'"
                :hover-card-delay="400"
                :hover-card-leave-delay="300"
            >
                <template #trigger>
                    <TablerMicrophone2
                        class="*:stroke-[1.4px] shrink-0 h-5 w-5 hover:opacity-20 opacity-100 transition-opacity duration-300"
                        title="Has Lyrics"
                        v-if="isAudio"
                    />
                </template>
            </HoverCard>

            <span class="flex gap-1 truncate text-neutral-600 dark:text-neutral-400 text-sm uppercase min-w-fit">
                <h4 class="text-nowrap truncate" :title="`File Size: 20.4MB`">
                    {{ '20.4MB' }}
                </h4>
                <h4>|</h4>
                <h4 class="text-nowrap" v-if="isAudio" title="File Codec">
                    {{ 'MP3' }}
                </h4>
                <h4 class="text-nowrap" v-else-if="!isAudio" title="Resolution and Codec">{{ '1080' }}P{{ ` | H264` }}</h4>
            </span>
        </section>
        <section
            class="flex flex-wrap justify-between gap-x-4 gap-y-2 w-full items-start text-sm sm:w-auto text-neutral-600 dark:text-neutral-400 group"
        >
            <span class="flex gap-2 items-center w-full flex-1">
                <span class="flex gap-1">
                    <h4 class="min-w-fit" :title="`View Count: ${data.views}`">{{ data.views }} view(s)</h4>

                    <h4>|</h4>
                    <h4 class="text-ellipsis text-wrap line-clamp-1" title="Duration">
                        {{ data.duration }}
                    </h4>
                </span>
            </span>

            <h4 class="text-end truncate" title="Date Created">
                {{ data.created_at }}
            </h4>
        </section>
    </div>
</template>
