<script setup>
import { TableHeader, TableCell } from "@/orchidui";
import { ref, computed } from "vue";

const props = defineProps({
  options: {
    type: Object,
    required: true,
  },
  isLoading: Boolean,
  loadingRows: {
    type: Number,
    default: 10,
  },
  selected: {
    type: Array,
    required: false,
  },
  rowKey: {
    type: String, Function,
    default: 'id',
  }
});

const emit = defineEmits({
  "click:row": [],
  "update:selected": [],
});

const isSelectable = computed(() => props.options.isSelectable);
const fields = computed(() => props.options.fields);
const headers = computed(() => props.options.headers);

const getRowKey = computed(() => (
  typeof props.rowKey === 'function'
    ? props.rowKey
    : (row) => row[props.rowKey]
));

const selectedRows = computed({
  get() {
    return props.selected || [];
  },
  set(rows) {
    emit('update:selected', rows);
  },
})

const selectRow = (row) => {
  const selectingRow = selectedRows.value.find((r) => getRowKey.value(r) === getRowKey.value(row));

  if (selectingRow) {
    selectedRows.value = selectedRows.value.filter((r) => getRowKey.value(r) !== getRowKey.value(row));
  } else {
    selectedRows.value = [...selectedRows.value, row];
  }
};

const selectAllRows = () => {
  const allRowsSelected = selectedRows.value.length === fields.value.length;

  selectedRows.value = allRowsSelected
    ? []
    : [...fields.value];
};

const isCopied = ref(false);

const onCopied = (to) => {
  isCopied.value = to;
};

const onClickRow = (field, header) => {
  if (!isCopied.value) {
    emit("click:row", {
      field: field,
      header: header,
    });
  }
};
</script>

<template>
  <div
    class="flex overflow-hidden text-oc-text flex-col rounded border border-oc-gray-200"
  >
    <div v-if="$slots.before" class="border-b border-oc-gray-200">
      <slot name="before" />
    </div>
    <div class="flex flex-wrap border-b border-oc-gray-200">
      <TableHeader
        v-if="isSelectable"
        class="w-[40px] md:w-[5%] md:ml-0"
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
        :class="header.class"
        class="hidden md:flex"
      >
        <template #default>
          <slot :name="`header-${header.key}`" />
        </template>
      </TableHeader>
    </div>
    <template v-if="isLoading">
      <div
        v-for="i in loadingRows"
        :key="i"
        class="flex flex-wrap relative group/row border-oc-gray-200 md:p-0 py-3"
        :class="{
          'pl-[40px]': isSelectable,
        }"
      >
        <TableCell
          v-if="isSelectable"
          class="w-[40px] opacity-0 md:w-[5%] flex justify-center absolute left-0 md:relative"
        />

        <TableCell
          v-for="(header, j) in headers"
          :key="`${j}-${i}`"
          :class="header.class"
          is-loading
          :is-last="i === loadingRows"
        />
      </div>
    </template>
    <template v-else>
      <div
        v-for="(field, i) in fields"
        :key="i"
        class="flex flex-wrap relative group/row border-oc-gray-200 md:p-0 py-3 cursor-pointer"
        :class="{
          'border-b': fields.length !== i + 1,
          'pl-[40px]': isSelectable,
        }"
      >
        <TableCell
          v-if="isSelectable"
          class="w-[40px] md:w-[5%] flex justify-center absolute left-0 md:relative"
          :is-last="fields.length === i + 1"
          :is-selected="selectedRows.some((r) => getRowKey(r) === getRowKey(field))"
          variant="checkbox"
          @selected="selectRow(field)"
        />

        <TableCell
          v-for="(header, j) in headers"
          :key="`${j}-${i}`"
          class="flex"
          :is-last="fields.length === i + 1"
          :variant="header.variant"
          :is-copy="header.isCopy"
          :data="field[header.key] || ''"
          :content="{
            important: header.important ?? false,
            title: field[header.title],
            description: field[header.description],
          }"
          :chip-options="header.chipOptions"
          :class="header.class"
          :image-class="header.imageClass"
          @click="onClickRow(field, header)"
          @copied="onCopied"
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
      </div>
    </template>
    <slot name="after" />
  </div>
</template>
