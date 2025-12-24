<script setup lang="ts">
import { drawer, toast, type DrawerCloseReason } from '@aminnausin/cedar-ui';
import { BaseDrawer } from '../components/drawer';
import { ButtonText } from '../components/button/';

const onDrawerClose = (reason: DrawerCloseReason) => {
    toast.success(`Drawer closed because of ${reason}!`);
};
</script>

<template>
    <div>
        <ButtonText
            :class="'h-8 text-sm capitalize ring-1'"
            :variant="'default'"
            @click="
                drawer.open(BaseDrawer, {
                    title: 'Move Goal',
                    description: 'Set your daily activity goal.',
                    onClose: onDrawerClose,
                })
            "
        >
            Open Drawer
        </ButtonText>
    </div>
</template>
