<script setup lang="ts">
import type { FormField } from '@aminnausin/cedar-ui';

import { InputMultiChip } from '@/registry/cedar-ui/components/multi-select';
import { FormInputLabel } from '@/registry/cedar-ui/components/form';
import { toast } from '@aminnausin/cedar-ui';
import { nextTick, ref } from 'vue';

interface VideoTagResource {
    id: number;
    name: string;
}

const allTags = ref<VideoTagResource[]>([
    {
        id: 1,
        name: 'Drama',
    },
    {
        id: 2,
        name: 'Thriller',
    },
    {
        id: 3,
        name: 'Tragedy',
    },
]);

const field = ref<FormField>({
    name: 'video_tags',
    text: 'Tags',
    type: 'multi',
    value: [],
    default: [],
    subtext: `Describe the video with tags`,
    max: 24,
});

const video_tags = ref<VideoTagResource[]>([]);
const idCounter = ref(4);
const handleCreateTag = async (name: string) => {
    try {
        toast.add('Success', { type: 'success', description: `Tag "${name}" created!`, life: 3000 });
        const tag = { id: idCounter.value, name };
        allTags.value = [...allTags.value, tag];
        handleSetTags([...video_tags.value, tag]); // No idea why this doesn't work without an api setup
        idCounter.value += 1;
    } catch (error) {
        toast.error('Unable to create tag. It may already exist.');
    }
};

const handleSetTags = (newTags: VideoTagResource[]) => {
    video_tags.value = newTags.map((tag) => ({
        id: tag.id,
        name: tag.name,
    }));
};

const handleRemoveTag = (tag: VideoTagResource) => {
    video_tags.value = video_tags.value?.filter((itm) => itm.name !== tag.name);
};
</script>
<template>
    <form class="flex flex-col gap-1 w-full">
        <FormInputLabel :field="field" />
        <InputMultiChip
            :fieldName="field.name"
            :placeholder="'Add tags'"
            :defaultItems="[]"
            :options="allTags"
            :max="field.max"
            :class="'-mt-0'"
            @createAction="handleCreateTag"
            @selectItems="handleSetTags"
            @removeAction="handleRemoveTag"
        />
    </form>
</template>
