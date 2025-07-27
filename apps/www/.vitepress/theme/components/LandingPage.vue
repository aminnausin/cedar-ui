<template>
    <div class="relative">
        <PageHeader>
            <Announcement />
            <PageHeaderHeading>Build your component library</PageHeaderHeading>
            <PageHeaderDescription>
                Beautifully designed components that you can copy and paste into your apps. Made with Tailwind CSS. Open source.
            </PageHeaderDescription>

            <PageAction>
                <Button as-child size="sm">
                    <a href="/docs/introduction"> Get Started </a>
                </Button>
                <Button as-child size="sm" variant="ghost">
                    <a href="https://github.com/unovue/shadcn-vue" target="_blank" rel="noreferrer"> GitHub </a>
                </Button>
            </PageAction>
        </PageHeader>

        <div class="border-grid border-b">
            <div class="container-wrapper">
                <div class="container py-4">
                    <ExamplesNav />
                </div>
            </div>
        </div>

        <div class="container-wrapper">
            <div class="container py-6">
                <section class="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
                    <VPImage
                        alt="Card"
                        width="1280"
                        height="866"
                        class="block"
                        :image="{
                            dark: '/examples/cards-dark.png',
                            light: '/examples/cards-light.png',
                        }"
                    />
                </section>
                <section class="hidden md:block">
                    <LandingExample />
                </section>
            </div>
        </div>
    </div>
</template>
