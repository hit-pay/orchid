<script setup>
import TableActions from "./OcTableActions.vue";
import TableSearchFor from "./OcTableSearchFor.vue";
import TableHeader from "./OcTableHeader.vue";
import TableCell from "./OcTableCell.vue";
import { ref } from "vue";

const props = defineProps({
  headers: Array,
  fields: Array,
  filterTabs: Array,
  isSelectable: Boolean,
});
const selectedRows = ref([]);
const queries = ref([]);
const selectRow = (element) => {
  const elementIndex = selectedRows.value.findIndex((e) => e === element);
  if (elementIndex !== -1) {
    selectedRows.value.splice(elementIndex, 1);
  } else {
    selectedRows.value.push(element);
  }
};
const selectAllRows = () => {
  if (
    selectedRows.value.length === props.fields.length &&
    selectedRows.value.length > 0
  ) {
    selectedRows.value = [];
  } else selectedRows.value = [...props.fields.map((e, i) => i)];
};
const addQuery = (query) => {
  if (!query || queries.value.includes(query)) return;
  queries.value.push(query);
};
const removeQuery = (query) => {
  queries.value = queries.value.filter((q) => q !== query);
};
</script>

<template>
  <div
    class="flex text-oc-text flex-col rounded border border-oc-grey-200 overflow-hidden"
  >
    <TableActions :tabs="filterTabs" @add-query="addQuery" />
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
            :variant="header.variant"
          >
            <template #default>
              <slot :name="`header-${header.key}`">{{ header.label }}</slot>
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
          >
            <template #default>
              <slot :name="header.key" :item="field" :data="field[header.key]">
                {{ field[header.key] }}
              </slot>
            </template>
          </TableCell>
        </tr>
      </tbody>
    </table>
  </div>
</template>
