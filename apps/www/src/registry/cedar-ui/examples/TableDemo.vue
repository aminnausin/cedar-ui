<script setup lang="ts">
import { sortObject, toast } from '@aminnausin/cedar-ui';
import { computed, ref } from 'vue';
import { TableBase } from '@/registry/cedar-ui/components/table';

import TableDemoRow from './TableDemoRow.vue';

interface MediaResource {
    id: number;
    name: string;
    title: string;
    description?: string;
    lyrics?: string;
    duration: string;
    views: number;
    created_at: string;
}

const sortingOptions = [
    {
        title: 'Title',
        value: 'title',
        disabled: false,
    },
    {
        title: 'Description',
        value: 'description',
        disabled: false,
    },
    {
        title: 'Views',
        value: 'views',
    },
];

const searchQuery = ref('');
const isLoading = ref(false);
const media = ref<MediaResource[]>([
    {
        id: 1,
        name: 'summer_vibes',
        title: 'Summer Vibes',
        description: 'Upbeat track perfect for sunny days',
        lyrics: 'Sun is shining, waves are crashing...',
        duration: '3m 22s',
        views: 457,
        created_at: '2023-07-14, 02:15 PM',
    },
    {
        id: 2,
        name: 'midnight_thoughts',
        title: 'Midnight Thoughts',
        description: 'Mellow piano composition for late nights',
        duration: '5m 41s',
        views: 1654,
        created_at: '2022-11-03, 11:52 PM',
    },
    {
        id: 3,
        name: 'morning_routine',
        title: 'Morning Routine',
        lyrics: 'Wake up, stretch, start the day...',
        duration: '1m 58s',
        views: 87,
        created_at: '2024-01-20, 07:30 AM',
    },
    {
        id: 4,
        name: 'urban_jungle',
        title: 'Urban Jungle',
        description: 'Electronic track inspired by city life',
        duration: '4m 15s',
        views: 3,
        created_at: '2021-05-09, 09:45 PM',
    },
    {
        id: 5,
        name: 'classical_masterpiece',
        title: 'Symphony No. 5',
        duration: '12m 36s',
        views: 5671,
        created_at: '2020-12-25, 06:00 AM',
    },
    {
        id: 6,
        name: 'podcast_intro',
        title: 'Welcome to the Show',
        description: 'Intro music for weekly podcast',
        duration: '0m 45s',
        views: 237,
        created_at: '2024-04-18, 03:20 PM',
    },
    {
        id: 7,
        name: 'rainy_day',
        title: 'Rainy Day Melancholy',
        description: 'Soft jazz for gloomy weather',
        lyrics: 'Drops keep falling on my window pane...',
        duration: '2m 30s',
        views: 14,
        created_at: '2023-09-30, 10:10 AM',
    },
    {
        id: 8,
        name: 'workout_mix',
        title: 'Power Workout Mix',
        duration: '6m 12s',
        views: 632,
        created_at: '2022-08-15, 05:50 PM',
    },
    {
        id: 9,
        name: 'meditation_guide',
        title: 'Peaceful Meditation',
        description: 'Guided meditation with nature sounds',
        duration: '8m 05s',
        views: 89,
        created_at: '2021-02-28, 08:00 AM',
    },
    {
        id: 10,
        name: 'documentary_theme',
        title: 'Exploring Nature',
        description: 'Orchestral theme for wildlife documentary',
        duration: '3m 50s',
        views: 67,
        created_at: '2024-06-05, 04:15 PM',
    },
]);

const stateFilteredPlaylist = computed(() => {
    const tempList = searchQuery.value
        ? media.value.filter((video: MediaResource) => {
              try {
                  const strRepresentation = [video.name, video.description, video.id].join(' ').toLowerCase();
                  return strRepresentation.includes(searchQuery.value.toLowerCase());
              } catch (error) {
                  console.log(error);
                  return false;
              }
          })
        : media.value;
    return tempList;
});

const handleSort = async (column: keyof MediaResource = 'name', dir: -1 | 1 = 1) => {
    const tempList = [...media.value].sort(sortObject<MediaResource>(column, dir));
    media.value = tempList;
    return tempList;
};
</script>
<template>
    <TableBase
        :data="stateFilteredPlaylist"
        :row="TableDemoRow"
        :clickAction="
            () => {
                toast.info('Primary Action');
            }
        "
        :otherAction="
            () => {
                toast.info('Other Action');
            }
        "
        :loading="isLoading"
        :useToolbar="true"
        :sortAction="handleSort"
        :sortingOptions="sortingOptions"
        :selectedID="-1"
        :startAscending="true"
        :search-query="searchQuery"
        :items-per-page="4"
        v-model="searchQuery"
    />
</template>
