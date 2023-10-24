<script setup>
import { Table, Pagination, Select } from "@orchid";
import { ref, computed } from "vue";
const props = defineProps({
  options: {
    type: Object,
  },
});
// 1. Filter Tab
// 2. Filter Search
// 2. Filter Form
const { paginationOptions, tableOptions } = props.options;

const currentPage = ref(paginationOptions.current_page);
const perPage = ref({
  label: paginationOptions.per_page,
  value: paginationOptions.per_page,
});

const perPageOptions = computed(() => {
  let page = 10;
  let per_page_option = [
    {
      label: page.toString(),
      value: page,
    },
    {
      label: (page * 2).toString(),
      value: page * 2,
    },
    {
      label: paginationOptions.total.toString(),
      value: paginationOptions.total,
    },
  ];
  const maxLength =
    paginationOptions.total < 100 ? paginationOptions.total : 100;
  return [
    ...new Set(
      per_page_option.filter((p) => {
        return p.value <= maxLength;
      }),
    ),
  ];
});
</script>
<template>
  <div class="flex flex-col">
    <div></div>
    <slot name="table">
      <Table :options="tableOptions"></Table>
    </slot>
    <div class="flex gap-3 items-center m-5">
      <Pagination
        class="justify-start"
        :model-value="currentPage"
        :max-page="paginationOptions.last_page"
        total-visible="5"
        @update:model-value="currentPage = $event"
      />
      <div class="flex items-center">
        <div class="min-w-[100px]">Item per page:</div>
        <Select v-model="perPage" :options="perPageOptions" />
      </div>
    </div>
  </div>
</template>
