<script setup lang="ts">
import { TabsList, TabsMarkerLine, TabsTrigger, TabsContent } from '@/registry/cedar-ui/components/tabs';
import { LabelledTextInput } from '@/registry/cedar-ui/components/input';
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
                    <div class="bg-card space-y-6 rounded-lg border p-6 shadow-xs">
                        <div class="flex flex-col space-y-1.5">
                            <h3 class="text-lg leading-none font-semibold tracking-tight">Account</h3>
                            <p class="text-foreground-1">Make changes to your account here. Click save when you're done.</p>
                        </div>
                        <div class="space-y-4">
                            <LabelledTextInput :placeholder="'John Doe'" title="name" text="Name" />
                            <LabelledTextInput :placeholder="'@johndoe'" title="username" text="Username" />
                        </div>
                        <div class="flex items-center">
                            <ButtonForm variant="submit"> Save Changes </ButtonForm>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="Password">
                    <div class="bg-card space-y-6 rounded-lg border p-6 shadow-xs">
                        <div class="flex flex-col space-y-1.5">
                            <h3 class="text-lg leading-none font-semibold tracking-tight">Password</h3>
                            <p class="text-foreground-1">Change your password here. After saving, you'll be logged out.</p>
                        </div>
                        <div class="space-y-4">
                            <LabelledTextInput :placeholder="'Current Password'" title="password" text="Current Password" />
                            <LabelledTextInput :placeholder="'New Password'" title="password_new" text="New Password" />
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
                    <div class="bg-card rounded-lg border shadow-xs">
                        <div class="flex flex-col space-y-1.5 p-6">
                            <h3 class="text-lg leading-none font-semibold tracking-tight">Account</h3>
                            <p class="text-foreground-1 text-sm">You do not have an account.</p>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="Password">
                    <div class="bg-card rounded-lg border shadow-xs">
                        <div class="flex flex-col space-y-1.5 p-6">
                            <h3 class="text-lg leading-none font-semibold tracking-tight">Password</h3>
                            <p class="text-foreground-1 text-sm">You cannot change your password.</p>
                        </div>
                    </div>
                </TabsContent>
            </template>
        </TabsList>
    </div>
</template>
