<script setup lang="ts">
import { BaseDrawer } from '../components/drawer';
import { ButtonText } from '../components/button';
import { toast } from '@aminnausin/cedar-ui';
</script>

<template>
    <BaseDrawer title="Calendar Options">
        <ButtonText
            variant="form"
            @click="
                toast.success('Event has been created', {
                    description: 'Sunday, December 03, 2023 at 9:00 AM',
                })
            "
        >
            Add to calendar
        </ButtonText>
    </BaseDrawer>
</template>
