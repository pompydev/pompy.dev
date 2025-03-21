<script setup>
const colorMode = useColorMode()

const icon = computed(() => {
    switch (colorMode.preference) {
        case "system":
            return "material-symbols:monitor-outline"
        case "dark":
            return "material-symbols:moon-stars-outline"
        case "light":
            return "material-symbols:sunny-outline-rounded"
        default:
            return "material-symbols:monitor-outline"
    }
})
</script>

<template>
    <div class="flex gap-2">
        <Icon :name="icon" size="32" />

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
