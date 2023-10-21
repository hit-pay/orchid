<script setup>
import { 
  TableActions, 
  TableBulkActions, 
  TableSearchFor,
  TableHeader,
  TableCell } from '@orchid'
import { ref } from "vue";

defineEmits({
  publish: [],
  unPublish: [],
  delete: [],
});

const props = defineProps({
  headers: Array,
  fields: Array,
  filterTabs: Array,
  isSelectable: Boolean,
});
const selectedRows = ref([]);
const queries = ref([]);
const selectRow = (element) => {
  if (selectedRows.value.includes(element)) {
    selectedRows.value = selectedRows.value.filter((e) => e !== element);
  } else {
    selectedRows.value = [...selectedRows.value, element];
  }
};
const selectAllRows = () => {
  const allRowsSelected = selectedRows.value.length === props.fields.length;
  selectedRows.value = allRowsSelected
    ? []
    : [...props.fields.map((e, i) => i)];
};
const addQuery = (query) => {
  if (!query.trim() || queries.value.includes(query)) return;
  queries.value.push(query);
};
const removeQuery = (query) => {
  queries.value = queries.value.filter((q) => q !== query);
};
</script>

<template>
  <div
    class="flex text-oc-text flex-col rounded border border-oc-gray-200"
  >
    <TableBulkActions
      v-if="selectedRows.length"
      @publish="$emit('publish', selectedRows)"
      @un-publish="$emit('unPublish', selectedRows)"
      @delete="$emit('delete', selectedRows)"
    />
    <TableActions v-else :tabs="filterTabs" @add-query="addQuery" />
    <TableSearchFor
      v-if="queries.length"
      :queries="queries"
      @remove-query="removeQuery"
    />
    <table>
      <!--   Headers   -->
      <thead>
        <tr>
          <TableHeader
            v-if="isSelectable"
            variant="checkbox"
            :is-partial="
              selectedRows.length !== fields.length && selectedRows.length > 0
            "
            :is-checked="
              selectedRows.length === fields.length && selectedRows.length > 0
            "
            @select-all="selectAllRows"
          />

          <TableHeader
            v-for="header in headers"
            :key="header.key"
            :text="header.label"
            :variant="header.headerVariant"
          >
            <template #default>
              <slot :name="`header-${header.key}`" />
            </template>
          </TableHeader>
        </tr>
      </thead>
      <tbody>
        <!--   Fields   -->
        <tr v-for="(field, i) in fields" :key="i" class="group/row">
          <TableCell
            v-if="isSelectable"
            :is-last="fields.length === i + 1"
            :is-selected="selectedRows.includes(i)"
            variant="checkbox"
            @selected="selectRow(i)"
          />

          <TableCell
            v-for="(header, j) in headers"
            :key="`${j}-${i}`"
            :is-last="fields.length === i + 1"
            :variant="header.variant"
            :is-copy="header.isCopy"
            :data="field[header.key] || ''"
          >
            <template #default>
              <slot
                v-if="$slots[header.key]"
                :name="header.key"
                :item="field"
                :data="field[header.key]"
              />
            </template>
          </TableCell>
        </tr>
      </tbody>
    </table>
  </div>
</template>
