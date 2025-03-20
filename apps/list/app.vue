<template>
    <NuxtPage />
</template>

<style>
html,
body {
    /* style */

    @apply flex flex-col;

    /* spacing */

    @apply min-h-screen;

    /* text */

    @apply break-words font-noto-sans text-base font-normal leading-8 antialiased;

    /* color */

    @apply bg-light-ui-bg fill-light-text-default text-light-text-default dark:bg-dark-ui-bg dark:fill-dark-text-default dark:text-dark-text-default;
}

* {
    @apply m-0;
}
</style>
