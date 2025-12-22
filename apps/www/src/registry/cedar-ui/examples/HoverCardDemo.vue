<script setup lang="ts">
import { HoverCard, RelativeHoverCard } from '@/registry/cedar-ui/components/hover-card';
import { BadgeTag } from '../components/badge';

const stateVideo = { id: 1 };
const title = 'Frieren: S1E01';
const imgUrl = 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx153518-IVXPDY5ph3kO.jpg';
</script>
<template>
    <div class="space-y-4">
        <div class="space-y-1">
            <p class="text-foreground-2 text-sm">Hover Card</p>

            <HoverCard scroll-container="window">
                <template #trigger>
                    <h2 class="hover:underline">
                        {{ !stateVideo.id ? '' : (title ?? '[File Not Found]') }}
                    </h2>
                </template>
                <template #content>
                    {{ title ?? '[File Not Found]' }}
                    <div class="size-4 animate-pulse rounded-full bg-green-600"></div>
                </template>
            </HoverCard>
        </div>
        <div class="space-y-1">
            <p class="text-foreground-2 text-sm">Relative Hover Card</p>

            <RelativeHoverCard
                class="w-full"
                positionClasses="p-0! border-none! z-50 -top-5 lg:-left-24"
                iconHidden
                :hoverCardDelay="50"
                :hoverCardLeaveDelay="50"
            >
                <template #content>
                    <img
                        :src="imgUrl"
                        alt="Folder Thumbnail"
                        class="aspect-2-3 hidden h-32 object-cover shadow-md lg:block"
                        loading="lazy"
                    />
                </template>
                <template #trigger>
                    <a
                        href="#"
                        class="dark:bg-primary-dark-800/70 bg-primary-800 dark:hover:bg-primary-dark-600 group relative flex w-full cursor-pointer flex-col flex-wrap divide-gray-300 rounded-lg text-left text-neutral-600 shadow-sm hover:bg-gray-200 sm:flex-row sm:p-3 dark:divide-gray-400 dark:text-neutral-400"
                    >
                        <img
                            :src="imgUrl"
                            alt="Folder Thumbnail"
                            class="xs:block hidden aspect-square max-h-16 rounded-t-lg object-cover shadow-md sm:me-4 sm:w-12 sm:rounded-xs lg:hidden"
                            loading="lazy"
                        />
                        <span class="relative flex w-full flex-1 flex-col flex-wrap gap-4 p-3 text-left sm:flex-row sm:p-0 lg:gap-2">
                            <section class="flex w-full items-center justify-between gap-4">
                                <h3 class="w-full truncate text-gray-900 dark:text-white" title="5: Dungeon Meshi">
                                    {{ 'Dungeon Meshi' }}
                                </h3>
                            </section>
                            <section class="flex w-full flex-col flex-wrap gap-2 text-sm sm:flex-row sm:justify-between">
                                <h4 class="w-full flex-1 truncate text-wrap sm:text-nowrap" :title="`24 Episodes`">
                                    {{ '24' }} {{ 'Episodes' }}
                                </h4>
                                <h4 class="w-fit truncate text-nowrap sm:text-right lg:hidden xl:block">
                                    {{ '3.56 GB' }}
                                </h4>
                            </section>
                        </span>
                        <section
                            class="flex w-full flex-wrap gap-1 overflow-clip p-3 pt-0 transition-all group-hover:[overflow-clip-margin:4px] sm:max-h-0 sm:p-0 sm:group-hover:max-h-[26px] sm:group-hover:pt-1"
                            title="Tags"
                        >
                            <BadgeTag
                                v-for="(tag, index) in [{ name: 'drama' }, { name: 'fantasy' }]"
                                :key="index"
                                :label="tag.name"
                                :colour="'bg-neutral-200 leading-none shadow-sm dark:bg-neutral-900 hover:bg-violet-600 text-neutral-500 hover:text-neutral-50 dark:hover:bg-violet-600/90 max-h-[22px]!'"
                            />
                        </section>
                    </a>
                </template>
            </RelativeHoverCard>
        </div>
    </div>
</template>

<style lang="css" scoped>
.vp-doc h2 {
    margin: 0%;
    padding-top: 0%;
    border: none;
}
</style>
