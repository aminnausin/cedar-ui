<script setup lang="ts">
import { TextInput } from '@/registry/cedar-ui/components/input';
import { FormLabel } from '../components/form';
import { ref } from 'vue';

const artist = ref(null);
</script>
<template>
    <div class="w-2/3 text-sm">
        <FormLabel for="artist">Album Artist</FormLabel>
        <TextInput v-model="artist" id="artist" placeholder="Use the artist name to refine your search" class="mt-1" />
    </div>
</template>
