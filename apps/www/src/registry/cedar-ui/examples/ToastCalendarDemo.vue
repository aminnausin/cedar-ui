<script setup lang="ts">
import { ButtonText } from '@/registry/cedar-ui/components/button';
import { toast } from '@aminnausin/cedar-ui';
</script>

<template>
    <ButtonText
        variant="form"
        @click="
            () => {
                toast.success('Event has been created', {
                    description: 'Sunday, December 03, 2023 at 9:00 AM',
                });
            }
        "
    >
        Add to calendar
    </ButtonText>
</template>
