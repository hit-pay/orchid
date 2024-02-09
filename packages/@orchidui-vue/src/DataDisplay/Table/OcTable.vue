<script setup>
import { Icon, TableHeader, TableCell } from "@/orchidui";
import { Draggable } from "@/orchidui/Draggable";
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
  rowClass: [String, Function],
  isSticky: {
    type: Boolean,
    default: false,
  },
  isResponsive: {
    type: Boolean,
    default: false,
  },
  isDraggable: {
    type: Boolean,
    default: false,
  },
  rowLink: String,
});

const emit = defineEmits({
  "click:row": [],
  "update:selected": [],
  "update:modelValue": [],
});

const isHovered = ref([]);

const isSelectable = computed(() => props.options.isSelectable);
const isCursorPointer = computed(() => props.options.isCursorPointer ?? true);
const fields = computed(() => props.options.fields);
const headers = computed(() => props.options.headers);

const getRowKey = computed(() =>
  typeof props.rowKey === "function"
    ? props.rowKey
    : (row) => row[props.rowKey],
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
    (r) => getRowKey.value(r) === getRowKey.value(row),
  );

  if (selectingRow) {
    selectedRows.value = selectedRows.value.filter(
      (r) => getRowKey.value(r) !== getRowKey.value(row),
    );
  } else {
    selectedRows.value = [...selectedRows.value, row];
  }
};

const selectAllRows = () => {
  const allRowsSelected = selectedRows.value.length === fields.value.length;

  selectedRows.value = allRowsSelected ? [] : [...fields.value];
};

const calculateRowClass = computed(() => {
  if (typeof props.rowClass === "function") {
    // insert class by parent component to resolve layout issue.
    // https://linear.app/hitpay/issue/HIT-5244/variant-products-issue#comment-db6e06ed
    return (row, i) => {
      return props.rowClass(row, i);
    };
  }

  return () => props.rowClass;
});

const onClickRow = (field, header) => {
  if (!header.disableClickRow && header.key !== "actions") {
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
    class="flex text-oc-text flex-col border border-oc-gray-200 isolate z-10"
    :class="[
      isSticky ? 'overflow-x-auto' : 'overflow-hidden',
      isResponsive ? 'rounded' : 'md:rounded',
    ]"
    @scroll="onScroll"
  >
    <div v-if="$slots.before" class="border-b border-oc-gray-200">
      <slot name="before" />
    </div>
    <div
      class="flex md:border-b-0 border-b border-oc-gray-200"
      :class="
        isResponsive
          ? 'w-full'
          : isSticky
            ? 'w-max'
            : 'flex-wrap md:flex-nowrap'
      "
    >
      <TableHeader
        v-if="isDraggable"
        :is-sticky="isSticky"
        class="md:ml-0 md:border-b border-oc-gray-200 min-w-[44px]"
        :class="[
          isSticky ? 'shrink-0 sticky left-0 z-10' : 'w-[40px] md:w-[5%]',
        ]"
      />
      <TableHeader
        v-if="isSelectable"
        :is-sticky="isSticky"
        class="md:ml-0 md:border-b border-oc-gray-200 min-w-[32px]"
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
          isSticky || isResponsive ? 'flex md:min-h-auto' : 'hidden md:flex',
          header.stickyLeft && isSelectable
            ? 'left-[40px] md:left-[32px]'
            : 'left-0',
          header.stickyRight ? 'right-0' : '',
          typeof header.class === 'function' ? header.class() : header.class,
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
        class="flex flex-wrap md:flex-nowrap group/row border-oc-gray-200 md:p-0 py-3"
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
      <Draggable
        v-slot="{ list }"
        :model-value="fields"
        class="grid gap-3"
        @update:model-value="$emit('update:modelValue', $event)"
      >
        <div
          v-for="(field, i) in list"
          :key="i"
          :class="{
            'border-b': list.length !== i + 1,
          }"
          @mouseleave="isHovered[i] = false"
          @mouseover="isHovered[i] = true"
        >
          <div
            class="flex relative group/row md:p-0 py-3 min-h-[58px]"
            :class="[
              {
                'pl-[40px]': isSelectable,
                'cursor-pointer': isCursorPointer,
              },
              isResponsive
                ? 'w-full'
                : isSticky
                  ? 'w-max !p-0'
                  : 'flex-wrap md:flex-nowrap',
              calculateRowClass(field, i),
            ]"
          >
            <TableCell
              v-if="isDraggable"
              class="flex border-oc-gray-200 justify-center left-0"
            >
              <div :class="isDraggable ? 'drag-el cursor-move' : ''">
                <Icon
                  name="draggable"
                  class="opacity-0 group-hover/row:opacity-100 w-[20px]"
                />
              </div>
            </TableCell>
            <TableCell
              v-if="isSelectable"
              class="flex border-oc-gray-200 justify-center left-0 min-w-[32px]"
              :is-last="list.length === i + 1"
              :is-selected="
                selectedRows.some((r) => getRowKey(r) === getRowKey(field))
              "
              :class="[
                isSticky
                  ? 'shrink-0 z-10 left-0 sticky'
                  : 'md:relative absolute w-[40px] md:w-[5%]',
              ]"
              variant="checkbox"
              @selected="selectRow(field)"
            />

            <TableCell
              v-for="(header, j) in headers"
              :key="`${j}-${i}`"
              class="flex border-oc-gray-200"
              :is-last="list.length === i + 1"
              :variant="header.variant"
              :is-copy="header.isCopy"
              :add-description-to-copy-clipboard="
                header.addDescriptionToCopyClipboard ?? true
              "
              :data="field[`${header.key}`] ?? ''"
              :content="{
                important: header.important ?? false,
                title: field[`${header.title}`],
                description: field[`${header.description}`],
                href: field[`${header.href}`],
              }"
              :chip-options="header.chipOptions"
              :class="[
                typeof header.class === 'function'
                  ? header.class(field)
                  : header.class,
                header.stickyLeft && isSelectable
                  ? 'left-[40px] md:left-[32px]'
                  : 'left-0',
                header.stickyRight ? 'right-0' : '',
                header.stickyLeft || header.stickyRight
                  ? 'shrink-0 sticky z-10'
                  : '',
                header.stickyLeft && !isScrollOnStart
                  ? 'shadow-right-sticky'
                  : '',
                header.stickyRight && !isScrollOnEnd ? 'shadow-left-sticky' : '',
              ]"
              :image-class="header.imageClass"
              :link="rowLink && field[rowLink] ? field[rowLink] : ''"
              @click="onClickRow(field, header)"
            >
              <template #default>
                <slot
                  v-if="$slots[header.key]"
                  :name="header.key"
                  :item="field"
                  :data="field[header.key]"
                  :index="i"
                />
              </template>
            </TableCell>
          </div>
          <div
            v-if="$slots['extra']"
            class="flex relative group/row md:p-0 py-3 w-full"
          >
            <slot name="extra" :item="field" :index="i" />
          </div>
        </div>
      </Draggable>
      <slot v-if="!fields.length" name="empty" />
    </template>
    <slot name="after" />
  </div>
</template>
