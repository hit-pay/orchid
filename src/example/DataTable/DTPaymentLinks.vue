<script setup>
import { DataTable, TableCellContent, Icon, Chip } from "@orchid";
import { ref, onMounted } from "vue";

let DataTableOptions = {
  pagination: {
    total: 50,
    last_page: 20,
  },
  filterOptions: {
    current_page: {
      key: "current_page",
    },
    per_page: {
      key: "per_page",
    },
    tabs: {
      key: "tabs",
      options: [
        { label: "All", value: "" },
        { label: "Pending", value: "pending" },
        { label: "Paid", value: "paid" },
        { label: "Canceled", value: "canceled" },
      ],
    },
    search: {
      key: "keywords",
    },
  },
  tableOptions: {
    isSelectable: true,
    headers: [
      {
        key: "col1",
        label: "CREATED AT",
        class: "w-full md:w-[15%]",
      },
      {
        key: "url",
        label: "URL/ID",
        class: "w-full md:w-[25%]",
        isCopy: true,
      },
      {
        key: "col3",
        label: "STATUS",
        class: "w-1/2 md:w-[15%]",
      },
      {
        key: "col4",
        label: "AMOUNT",
        class: "w-1/2 md:w-[15%]",
      },
      {
        key: "col5",
        label: "REFERENCE",
        class: "w-3/4 md:w-[20%]",
      },
      {
        key: "actions",
        label: "",
        headerVariant: "text",
        variant: "icon",
        class: "w-1/4 md:w-[5%]",
      },
    ],
    fields: [],
  },
};

let fieldData = [];
for (let index = 0; index < 10; index++) {
  fieldData.push({
    date: "Nov, 22 2023",
    time: "11:03AM",
    url: "https://staging.hitpay.shop/s/age0md",
    email: "nn@yopmail.com",
    status: "completed",
    amount: "SGD 1,870.00",
    reference: "9a2f500c-545d-4db6-84fa-c40d65146f43",
  });
}

DataTableOptions.tableOptions.fields = fieldData;

const Filter = {
  current_page: 1,
  per_page: 10,
  tabs: "",
  keywords: "",
};

const filterData = ref(Filter);
const loading = ref(true);

onMounted(() => {
  loading.value = false;
});
</script>
<template>
  <article v-if="!loading" class="grid gap-3">
    <h2>Data Table Payment Links</h2>
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
        your action {{ selectedRows }}
      </template>

      <template #col1="{ item }">
        <TableCellContent
          important
          :title="item.date"
          :description="item.time"
        />
      </template>
      <template #url="{ item }">
        <TableCellContent :title="item.url" :description="item.email" />
      </template>

      <template #col3="{ item }">
        <Chip variant="primary" class="w-fit" :label="item.status" />
      </template>
      <template #col4="{ item }">
        <span class="text-oc-text-400">{{ item.amount }}</span>
      </template>
      <template #col5="{ item }">
        <span class="text-oc-text-300">{{ item.reference }}</span>
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
