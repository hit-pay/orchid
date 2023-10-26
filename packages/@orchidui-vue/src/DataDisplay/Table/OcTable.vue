<script setup>
import { TableHeader, TableCell } from "@orchid";
import { ref } from "vue";

const props = defineProps({
  options: {
    type: Object,
    required: true,
  },
  modelValue: Array,
});

const emit = defineEmits({
  "update:modelValue": [],
});

const { isSelectable, fields, headers } = props.options;

const selectedRows = ref(props.modelValue ? props.modelValue : []);
const selectRow = (element) => {
  if (selectedRows.value.includes(element)) {
    selectedRows.value = selectedRows.value.filter((e) => e !== element);
  } else {
    selectedRows.value = [...selectedRows.value, element];
  }
  emit("update:modelValue", selectedRows.value);
};

const selectAllRows = () => {
  const allRowsSelected = selectedRows.value.length === fields.length;
  selectedRows.value = allRowsSelected ? [] : [...fields.map((e, i) => i)];
  emit("update:modelValue", selectedRows.value);
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
    <div
      v-for="(field, i) in fields"
      :key="i"
      class="flex flex-wrap relative group/row border-oc-gray-200 pl-[40px] md:p-0 py-3"
      :class="{
        'border-b': fields.length !== i + 1,
      }"
    >
      <TableCell
        v-if="isSelectable"
        class="w-[40px] md:w-[5%] flex justify-center absolute left-0 md:relative"
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
        class="flex"
        :class="header.class"
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
    <slot name="after" />
  </div>
</template>
