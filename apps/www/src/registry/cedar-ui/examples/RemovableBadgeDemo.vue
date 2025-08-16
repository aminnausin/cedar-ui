<script setup lang="ts">
import { BadgeTag } from '@/registry/cedar-ui/components/badge';
import { ref } from 'vue';

const exampleTags = ref(['drama', 'action', 'comedy']);
const removeTag = (tag: string) => {
    exampleTags.value = exampleTags.value.filter((et) => et !== tag);
};
</script>

<template>
    <section class="w-full flex gap-1 flex-wrap justify-center items-center">
        <BadgeTag v-for="tag in exampleTags" :key="tag" removeable @clickAction="removeTag(tag)" :class="'bg-slate-600'">
            {{ tag }}
        </BadgeTag>
    </section>
</template>
