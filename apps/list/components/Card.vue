<script setup lang="ts">
const props = defineProps<{
    href: string
    name: string
    thumbnail: string
}>()

// See https://inclusive-components.design/cards/
</script>

<template>
    <div
        class="relative w-80 rounded-lg rounded-b-lg bg-light-card-bg shadow-lg hover:shadow-glow dark:bg-dark-card-bg"
    >
        <div
            class="flex h-32 items-center justify-center rounded-t-lg dark:bg-dark-ui"
        >
            <img :src="$props.thumbnail" class="rounded-t-lg" />
        </div>
        <div class="p-4">
            <NuxtLink
                :href="$props.href"
                class="text-2xl after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0"
            >
                {{ $props.name }}
            </NuxtLink>
        </div>
    </div>
</template>
