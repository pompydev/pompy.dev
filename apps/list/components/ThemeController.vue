<script setup>
const colorMode = useColorMode()
</script>

<template>
    <div class="flex items-center gap-2">
        <Icon class="block dark:hidden" name="akar-icons:sun-fill" size="24" />
        <Icon class="hidden dark:block" name="akar-icons:moon-fill" size="24" />

        <select
            v-model="colorMode.preference"
            class="h-8 w-24 border dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    </div>
</template>
