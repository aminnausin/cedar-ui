<script setup lang="ts">
import { TextInput } from '@/registry/cedar-ui/components/input';
import { ref } from 'vue';

const artist = ref(null);
</script>
<template>
    <TextInput v-model="artist" title="artist" placeholder="Use the artist name to refine your search" class="w-64 mt-1" />
</template>
