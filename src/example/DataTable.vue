<script setup>
import {
  DataTable,
  Button,
  TableCellContent,
  Toggle,
  Icon,
  Chip,
} from "@orchid";
import { ref } from "vue";
import {
  DataTableOptions,
  Filter,
} from "@orchid/builder/DataTable/DataTableOptions";

const filterData = ref(Filter);
</script>
<template>
  <article class="grid gap-3">
    <h2>Data Table Builder</h2>
    <p class="text-oc-text-400">Create data table more simple</p>
    <p>
      {{ filterData }}
    </p>
    <DataTable
      :filter="filterData"
      :options="DataTableOptions"
      @update:filter="filterData = $event"
    >
      <template #bulk-actions="{ selectedRows }">
        <Button
          label="Publish"
          size="small"
          is-transparent
          left-icon="eye-open"
        />
        <Button
          label="Unpublish"
          is-transparent
          size="small"
          variant="secondary"
          left-icon="eye-close"
        />
        <Button
          label="Delete"
          is-transparent
          size="small"
          variant="destructive"
          left-icon="bin"
        />
        {{ selectedRows }}
      </template>
      <template #col1="{ item }">
        <TableCellContent
          important
          :title="item.title"
          :description="item.descriptions"
        />
      </template>
      <template #col4="{ data }">
        <span class="text-oc-text-400 text-sm">{{ data }}</span>
      </template>
      <template #col5="{ data }">
        <Chip variant="success" class="w-fit" :label="data" />
      </template>
      <template #col6="{ data }">
        <div class="flex gap-3 items-center">
          <Toggle :model-value="data" size="small" />
          <span class="md:hidden"> status </span>
        </div>
      </template>
      <template #actions>
        <Icon
          class="w-6 h-6 group-hover/row:block md:hidden cursor-pointer mx-auto"
          name="dots-vertical"
        />
      </template>
    </DataTable>
  </article>
</template>
