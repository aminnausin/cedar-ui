<script setup lang="ts">
import { InputSelect } from '@/registry/cedar-ui/components/select';
import { computed } from 'vue';

const sortingOptions = computed(() => {
    return [
        {
            title: 'Title',
            value: 'title',
            disabled: false,
        },
        {
            title: 'Date Uploaded',
            value: 'date',
            disabled: false,
        },
        {
            title: 'Views',
            value: 'view_count',
            disabled: false,
        },
        {
            title: 'Duration',
            value: 'duration',
            disabled: false,
        },
        {
            title: 'File Size',
            value: 'file_size',
            disabled: false,
        },
        {
            title: 'Date Released',
            value: 'date_released',
            disabled: false,
        },
        {
            title: `Episode`,
            value: 'episode',
            disabled: false,
        },
        {
            title: 'Season',
            value: 'season',
            disabled: false,
        },
    ];
});
</script>
<template>
    <div class="w-full">
        <InputSelect
            :name="'sort'"
            :placeholder="'Sort by...'"
            :prefix="'By '"
            :options="sortingOptions"
            :defaultItem="0"
            class="w-full"
            title="Sort by..."
            @selectItem="() => {}"
        />
    </div>
</template>
