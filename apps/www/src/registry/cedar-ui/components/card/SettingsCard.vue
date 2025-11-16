<template>
    <section class="flex gap-3 p-3 sm:p-6 flex-wrap sm:flex-nowrap rounded-xl shadow-md bg-card dark:bg-card/70 ring-1 ring-r-default/5">
        <slot name="heading"></slot>

        <slot name="content"></slot>
    </section>
</template>
