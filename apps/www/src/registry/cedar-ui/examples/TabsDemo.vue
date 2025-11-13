<script setup lang="ts">
import { TabsList, TabsTrigger } from '@/registry/cedar-ui/components/tabs';
</script>
<template>
    <TabsList :default-value="'Account'">
        <template #tabsTriggers>
            <TabsTrigger value="Account" />
            <TabsTrigger value="Account2" />
        </template>
    </TabsList>
</template>
