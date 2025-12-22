<script setup lang="ts">
import { TextInput, LabelledTextInput } from '@/registry/cedar-ui/components/input';
import { ref } from 'vue';

const artist = ref(null);
const album = ref(null);
</script>
<template>
    <div class="w-2/3 space-y-4 text-sm">
        <LabelledTextInput
            v-model="album"
            title="album"
            placeholder="Use the album name to refine your search"
            text="Album"
            subtext="Use the first official album name."
            class="mt-1"
        />
        <div>
            <p>Unlabelled</p>
            <TextInput v-model="artist" title="artist" placeholder="Use the artist name to refine your search" class="mt-1" />
        </div>
    </div>
</template>
