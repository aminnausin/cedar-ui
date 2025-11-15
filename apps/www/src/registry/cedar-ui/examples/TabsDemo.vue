<script setup lang="ts">
import { TabsList, TabsMarkerLine, TabsTrigger, TabsContent } from '@/registry/cedar-ui/components/tabs';
import { TextInputLabelled } from '@/registry/cedar-ui/components/input';
import { ButtonForm } from '@/registry/cedar-ui/components/button';
</script>
<template>
    <div class="space-y-16 self-center text-sm">
        <TabsList :default-value="'Account'" class="max-w-sm">
            <template #triggers>
                <TabsTrigger value="Account" />
                <TabsTrigger value="Password" />
            </template>
            <template #marker>
                <TabsMarkerLine />
            </template>
            <template #content>
                <TabsContent value="Account">
                    <div class="border rounded-lg shadow-xs bg-card text-neutral-900 p-6 space-y-6">
                        <div class="flex flex-col space-y-1.5">
                            <h3 class="text-lg font-semibold leading-none tracking-tight">Account</h3>
                            <p class="text-neutral-500">Make changes to your account here. Click save when you're done.</p>
                        </div>
                        <div class="space-y-4">
                            <TextInputLabelled :placeholder="'John Doe'" title="name" text="Name" />
                            <TextInputLabelled :placeholder="'@johndoe'" title="username" text="Username" />
                        </div>
                        <div class="flex items-center">
                            <ButtonForm variant="submit"> Save Changes </ButtonForm>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="Password">
                    <div class="border rounded-lg shadow-xs bg-card text-neutral-900 p-6 space-y-6">
                        <div class="flex flex-col space-y-1.5">
                            <h3 class="text-lg font-semibold leading-none tracking-tight">Password</h3>
                            <p class="text-neutral-500">Change your password here. After saving, you'll be logged out.</p>
                        </div>
                        <div class="space-y-4">
                            <TextInputLabelled :placeholder="'Current Password'" title="password" text="Current Password" />
                            <TextInputLabelled :placeholder="'New Password'" title="password_new" text="New Password" />
                        </div>

                        <div class="flex items-center">
                            <ButtonForm variant="submit"> Save Password </ButtonForm>
                        </div>
                    </div>
                </TabsContent>
            </template>
        </TabsList>

        <TabsList :default-value="'Account'" orientation="vertical" class="max-w-sm">
            <template #triggers>
                <TabsTrigger value="Account" />
                <TabsTrigger value="Password" />
            </template>

            <template #content>
                <TabsContent value="Account">
                    <div class="border rounded-lg shadow-xs bg-card text-neutral-900">
                        <div class="flex flex-col space-y-1.5 p-6">
                            <h3 class="text-lg font-semibold leading-none tracking-tight">Account</h3>
                            <p class="text-sm text-neutral-500">You do not have an account.</p>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="Password">
                    <div class="border rounded-lg shadow-xs bg-card text-neutral-900">
                        <div class="flex flex-col space-y-1.5 p-6">
                            <h3 class="text-lg font-semibold leading-none tracking-tight">Password</h3>
                            <p class="text-sm text-neutral-500">You cannot change your password.</p>
                        </div>
                    </div>
                </TabsContent>
            </template>
        </TabsList>
    </div>
</template>
