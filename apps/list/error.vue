<script setup lang="ts">
import type { NuxtError } from "#app"

const props = defineProps({
    error: Object as () => NuxtError,
})

useHead({ title: props.error?.statusCode })
</script>

<template>
    <div class="flex flex-col items-center">
        <h2 class="text-8xl font-black">{{ $props.error?.statusCode }}</h2>
        <p>{{ $props.error?.statusMessage }}</p>
        <NuxtLink href="/" class="underline">bring me home!</NuxtLink>
    </div>
</template>
