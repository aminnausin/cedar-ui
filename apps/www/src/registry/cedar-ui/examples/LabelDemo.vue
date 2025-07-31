<script setup lang="ts">
import { TextInput, InputLabel } from '@/registry/cedar-ui/components/input';
import { ref } from 'vue';

const artist = ref(null);
</script>
<template>
    <div class="w-full">
        <InputLabel name="artist">Album Artist</InputLabel>
        <TextInput v-model="artist" id="artist" placeholder="Use the artist name to refine your search" class="w-64 mt-1" />
    </div>
</template>
