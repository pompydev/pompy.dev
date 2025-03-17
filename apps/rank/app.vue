<script setup>
const colorMode = useColorMode()
</script>

<template>
    <div class="min-h-screen bg-white dark:bg-gray-800 dark:text-gray-200">
        <p class="p-4 pb-2">
            <select
                v-model="colorMode.preference"
                class="h-8 w-24 border dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            >
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </p>
        <NuxtPage class="mx-auto p-4" />
    </div>
</template>
