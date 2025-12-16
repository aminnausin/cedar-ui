<script setup lang="ts">
import { ButtonText } from '../components/button/';
import { drawer } from '@aminnausin/cedar-ui';

import CustomDrawer from './CustomDrawer.vue';
</script>

<template>
    <div>
        <ButtonText
            :class="'text-sm h-8 ring-1 capitalize'"
            :variant="'default'"
            @click="drawer.open(CustomDrawer, { title: 'Move Goal', description: 'Set your daily activity goal.' })"
        >
            Open Custom Drawer
        </ButtonText>
    </div>
</template>
