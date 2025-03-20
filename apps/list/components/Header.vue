<script setup lang="ts">
const props = defineProps(["highlight"])
</script>

<template>
    <div class="slant mb-12 bg-light-card-bg dark:bg-dark-card-bg">
        <ThemeController class="h-12" />

        <h1
            class="mb-12 text-center text-4xl leading-[3rem] text-slate-800 dark:text-slate-200"
        >
            <span class="font-semibold">pomp</span>'s<br />
            biased & opinionated
            <br />
            list of
            <span
                class="highlight px-1 font-extrabold text-light-text-default dark:text-dark-text-default"
            >
                {{ props.highlight }}
            </span>
        </h1>
    </div>
</template>

<style scoped>
.highlight {
    @apply underline decoration-blue-400/75 decoration-[12px] underline-offset-[-6px] dark:decoration-blue-600/75;
    text-decoration-skip-ink: none;
}

.slant {
    padding-bottom: 8rem /* 128px (pb-32) */;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 128px));
}
</style>
