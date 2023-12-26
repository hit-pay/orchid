<script setup>
import { TableHeader, TableCell } from "@/orchidui";
import { ref, computed, onMounted } from "vue";

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
    type: String,
    Function,
    default: "id",
  },
  rowClass: String,
  isSticky: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits({
  "click:row": [],
  "update:selected": [],
});

const isSelectable = computed(() => props.options.isSelectable);
const isCursorPointer = computed(() => props.options.isCursorPointer ?? true);
const fields = computed(() => props.options.fields);
const headers = computed(() => props.options.headers);

const getRowKey = computed(() =>
  typeof props.rowKey === "function" ? props.rowKey : (row) => row[props.rowKey]
);

const selectedRows = computed({
  get() {
    return props.selected || [];
  },
  set(rows) {
    emit("update:selected", rows);
  },
});

const selectRow = (row) => {
  const selectingRow = selectedRows.value.find(
    (r) => getRowKey.value(r) === getRowKey.value(row)
  );

  if (selectingRow) {
    selectedRows.value = selectedRows.value.filter(
      (r) => getRowKey.value(r) !== getRowKey.value(row)
    );
  } else {
    selectedRows.value = [...selectedRows.value, row];
  }
};

const selectAllRows = () => {
  const allRowsSelected = selectedRows.value.length === fields.value.length;

  selectedRows.value = allRowsSelected ? [] : [...fields.value];
};

const isCopied = ref(false);

const onCopied = (to) => {
  isCopied.value = to;
};

const onClickRow = (field, header) => {
  if (!isCopied.value && header.key !== "actions") {
    emit("click:row", {
      field: field,
      header: header,
    });
  }
};
const isScrollOnStart = ref(true);
const isScrollOnEnd = ref(true);
const scrollTable = ref();
const onScroll = () => {
  if (!props.isSticky) return;
  isScrollOnStart.value = scrollTable.value.scrollLeft === 0;
  isScrollOnEnd.value =
    scrollTable.value.scrollLeft + scrollTable.value.clientWidth ===
    scrollTable.value.scrollWidth;
};
onMounted(() => onScroll());
</script>

<template>
  <div
    ref="scrollTable"
    class="flex text-oc-text flex-col md:rounded border border-oc-gray-200 isolate"
    :class="isSticky ? 'overflow-x-auto' : 'overflow-hidden'"
    @scroll="onScroll"
  >
    <div v-if="$slots.before" class="border-b border-oc-gray-200">
      <slot name="before" />
    </div>
    <div
      class="flex md:border-b-0 border-b border-oc-gray-200"
      :class="isSticky ? 'w-max' : 'flex-wrap md:flex-nowrap'"
    >
      <TableHeader
        v-if="isSelectable"
        :is-sticky="isSticky"
        class="md:ml-0 md:border-b border-oc-gray-200"
        :class="[
          isSticky ? 'shrink-0 sticky left-0 z-10' : 'w-[40px] md:w-[5%]',
        ]"
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
        :is-sticky="isSticky"
        :class="[
          isSticky ? 'flex' : 'hidden md:flex',
          header.stickyLeft && isSelectable
            ? 'left-[40px] md:left-[32px]'
            : 'left-0',
          header.stickyRight ? 'right-0' : '',
          header.class,
          header.stickyLeft || header.stickyRight ? 'sticky shrink-0 z-10' : '',
          header.stickyLeft && !isScrollOnStart ? 'shadow-right-sticky' : '',
          header.stickyRight && !isScrollOnEnd ? 'shadow-left-sticky' : '',
        ]"
        class="md:border-b border-oc-gray-200"
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
        class="flex flex-wrap md:flex-nowrap relative group/row border-oc-gray-200 md:p-0 py-3"
        :class="{
          'pl-[40px]': isSelectable,
        }"
      >
        <TableCell
          v-if="isSelectable"
          class="opacity-0 flex justify-center absolute left-0 md:relative w-[5%]"
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
        class="flex relative group/row md:p-0 py-3"
        :class="[
          {
            'border-b md:border-b-0': fields.length !== i + 1,
            'pl-[40px]': isSelectable,
            'flex-wrap md:flex-nowrap': !isSticky,
            'w-max !p-0': isSticky,
            'cursor-pointer': isCursorPointer,
          },
          rowClass,
        ]"
      >
        <TableCell
          v-if="isSelectable"
          class="flex border-oc-gray-200 justify-center left-0"
          :is-last="fields.length === i + 1"
          :is-selected="
            selectedRows.some((r) => getRowKey(r) === getRowKey(field))
          "
          :class="[
            isSticky
              ? 'shrink-0 z-10 left-0 sticky'
              : 'md:relative absolute w-[40px] md:w-[5%]',
            fields.length !== i + 1 ? 'md:border-b' : '',
          ]"
          variant="checkbox"
          @selected="selectRow(field)"
        />

        <TableCell
          v-for="(header, j) in headers"
          :key="`${j}-${i}`"
          class="flex border-oc-gray-200"
          :is-last="fields.length === i + 1"
          :variant="header.variant"
          :is-copy="header.isCopy"
          :data="field[header.key] || ''"
          :content="{
            important: header.important ?? false,
            title: field[header.title],
            description: field[header.description],
            href: field[header.href],
          }"
          :chip-options="header.chipOptions"
          :class="[
            header.class,
            header.stickyLeft && isSelectable
              ? 'left-[40px] md:left-[32px]'
              : 'left-0',
            header.stickyRight ? 'right-0' : '',
            header.stickyLeft || header.stickyRight
              ? 'shrink-0 sticky z-10'
              : '',
            fields.length !== i + 1 ? 'md:border-b' : '',
            header.stickyLeft && !isScrollOnStart ? 'shadow-right-sticky' : '',
            header.stickyRight && !isScrollOnEnd ? 'shadow-left-sticky' : '',
          ]"
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
      <slot v-if="!fields.length" name="empty" />
    </template>
    <slot name="after" />
  </div>
</template>
