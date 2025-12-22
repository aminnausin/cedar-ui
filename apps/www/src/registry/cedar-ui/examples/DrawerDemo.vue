<script setup lang="ts">
import { BaseDrawer } from '../components/drawer';
import { ButtonText } from '../components/button/';
import { drawer } from '@aminnausin/cedar-ui';
</script>

<template>
    <div>
        <ButtonText
            :class="'text-sm h-8 ring-1 capitalize'"
            :variant="'default'"
            @click="drawer.open(BaseDrawer, { title: 'Move Goal', description: 'Set your daily activity goal.' })"
        >
            Open Drawer
        </ButtonText>
    </div>
</template>
