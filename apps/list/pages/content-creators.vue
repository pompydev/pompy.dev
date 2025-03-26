<script setup lang="ts">
import {
    FlexRender,
    getCoreRowModel,
    useVueTable,
    type SortingState,
    createColumnHelper,
    getSortedRowModel,
} from "@tanstack/vue-table"

useHead({
    title: "Content creators",
})

type ContentCreator = {
    channelId: string
    name: string
    subscribers: number
}
const contentCreators = ref([
    {
        channelId: "asdf",
        name: "Channel A",
        subscribers: 9999,
    },
    {
        channelId: "xyzw",
        name: "Channel B",
        subscribers: 1111,
    },
])

function sortIcon(isSorted: false | "asc" | "desc") {
    if (isSorted === "asc") return "fa6-solid:sort-up"
    if (isSorted === "desc") return "fa6-solid:sort-down"
    return "fa6-solid:sort"
}

const sorting = ref<SortingState>([])
const columnHelper = createColumnHelper<ContentCreator>()
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
    state: {
        get sorting() {
            return sorting.value
        },
    },
    onSortingChange: (updaterOrValue) => {
        sorting.value =
            typeof updaterOrValue === "function"
                ? updaterOrValue(sorting.value)
                : updaterOrValue
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
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
                            class="cursor-pointer border p-1"
                            v-for="header in headerGroup.headers"
                            :key="header.id"
                            :colSpan="header.colSpan"
                            @click="
                                header.column.getToggleSortingHandler()?.(
                                    $event,
                                )
                            "
                        >
                            <div class="flex items-center justify-center gap-1">
                                <FlexRender
                                    v-if="!header.isPlaceholder"
                                    :render="header.column.columnDef.header"
                                    :props="header.getContext()"
                                />
                                <Icon
                                    :name="
                                        sortIcon(header.column.getIsSorted())
                                    "
                                    size="24"
                                />
                            </div>
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
