<script setup lang="ts">
import { BadgeTag } from '@/registry/cedar-ui/components/badge';
import { ref } from 'vue';

const exampleStatus = ref('processing');
</script>

<template>
    <section class="w-full flex flex-col gap-8 items-center">
        <BadgeTag> {{ exampleStatus }} </BadgeTag>
    </section>
</template>
