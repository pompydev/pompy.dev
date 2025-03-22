<script setup lang="ts">
type Item = {
    name: string
    href: string
    thumbnail: string
}

const items: Item[] = [
    {
        name: "Content Creators",
        href: "/content-creators",
        thumbnail: "content-creators",
    },
]

const glob = import.meta.glob("~/assets/thumbnail/*", { eager: true })
const thumbnails = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [
        key.split("/").pop().split(".")[0],
        value.default,
    ]),
)
</script>

<template>
    <Header highlight="anything" />

    <Main>
        <div class="flex gap-6">
            <Card
                v-for="(item, _index) in items"
                :key="item.href"
                :href="item.href"
                :name="item.name"
                :thumbnail="thumbnails[item.thumbnail]"
            />
        </div>
    </Main>
</template>
