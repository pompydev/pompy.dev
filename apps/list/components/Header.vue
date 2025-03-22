<script setup lang="ts">
const route = useRoute()
const props = defineProps<{
    highlight: string
}>()
</script>

<template>
    <div class="slant-shadow">
        <div class="slant mb-12 bg-light-card-bg dark:bg-dark-card-bg">
            <div class="flex justify-between p-2 pb-0">
                <NuxtLink
                    v-if="route.path !== '/'"
                    href="/"
                    class="flex aspect-square h-12 items-center justify-center rounded-full hover:bg-light-ui-hover dark:hover:bg-dark-ui-hover"
                >
                    <Icon name="material-symbols:home-rounded" size="32" />
                </NuxtLink>
                <div v-else></div>
                <ThemeController class="h-12" />
            </div>

            <h1
                class="mb-12 text-center text-4xl leading-[3rem] text-slate-800 dark:text-slate-200"
            >
                <span class="font-semibold">pomp</span>'s<br />
                biased & opinionated list of
                <div
                    class="flex h-12 w-full flex-col items-center gap-8 overflow-hidden"
                >
                    <TransitionGroup name="slide-up">
                        <span
                            class="highlight font-extrabold text-light-text-default underline decoration-blue-400/75 decoration-[12px] underline-offset-[-6px] dark:text-dark-text-default dark:decoration-blue-600/75"
                            :key="highlight"
                        >
                            &nbsp;{{ highlight }}&nbsp;
                        </span>
                    </TransitionGroup>
                </div>
            </h1>
        </div>
    </div>
</template>

<style scoped>
.highlight {
    text-decoration-skip-ink: none;
}

.slant {
    padding-bottom: 8rem /* 128px (pb-32) */;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 128px));
}

.slant-shadow {
    filter: drop-shadow(0px 0px 20px #ccc);
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.2s ease-out;
}

.slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>
