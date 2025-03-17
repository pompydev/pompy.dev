<script setup>
const colorMode = useColorMode()
</script>

<template>
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
</template>
