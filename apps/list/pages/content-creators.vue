<script setup lang="ts">
import {
    FlexRender,
    getCoreRowModel,
    useVueTable,
    createColumnHelper,
} from "@tanstack/vue-table"

useHead({
    title: "Content creators",
})

type ContentCreator = {
    channelId: string
    name: string
    subscribers: number
}
const _contentCreators: ContentCreator[] = [
    {
        channelId: "asdf",
        name: "Channel A",
        subscribers: 9999,
    },
]

const columnHelper = createColumnHelper<ContentCreator>()
const contentCreators = ref(_contentCreators)
const t = useVueTable({
    get data() {
        return contentCreators.value
    },
    columns: [
        columnHelper.accessor("name", {
            id: "channelId",
            header: "Name",
        }),
        columnHelper.accessor("subscribers", {
            header: "Subscribers",
        }),
    ],
    getCoreRowModel: getCoreRowModel(),
})
</script>

<template>
    <Header highlight="Content creators" />

    <Main>
        <div class="p-2">
            <table class="border">
                <thead>
                    <tr
                        class="border"
                        v-for="headerGroup in t.getHeaderGroups()"
                        :key="headerGroup.id"
                    >
                        <th
                            class="border p-1"
                            v-for="header in headerGroup.headers"
                            :key="header.id"
                            :colSpan="header.colSpan"
                        >
                            <FlexRender
                                v-if="!header.isPlaceholder"
                                :render="header.column.columnDef.header"
                                :props="header.getContext()"
                            />
                        </th>
                    </tr>
                </thead>

                <tbody class="border">
                    <tr v-for="row in t.getRowModel().rows" :key="row.id">
                        <td
                            class="border p-1"
                            v-for="cell in row.getVisibleCells()"
                            :key="cell.id"
                        >
                            <FlexRender
                                :render="cell.column.columnDef.cell"
                                :props="cell.getContext()"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Main>
</template>
