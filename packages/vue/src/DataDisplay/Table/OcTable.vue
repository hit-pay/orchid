<script setup>
import { TableHeader, TableCell } from '@orchidui/vue'
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  options: {
    type: Object,
    required: true
  },
  isLoading: Boolean,
  isBorderless: Boolean,
  loadingRows: {
    type: Number,
    default: 10
  },
  selected: {
    type: Array,
    required: false
  },
  rowKey: {
    type: [String, Function],
    default: 'id'
  },
  rowClass: [String, Function],
  isSticky: {
    type: Boolean,
    default: false
  },
  isResponsive: {
    type: Boolean,
    default: false
  },
  rowLink: String
})

const emit = defineEmits({
  'click:row': [],
  'update:selected': [],
  'hover:cell': []
})

const isSelectable = computed(() => props.options.isSelectable)
const isCursorPointer = computed(() => props.options.isCursorPointer ?? true)
const fields = computed(() => props.options.fields)
const headers = computed(() => props.options.headers)

const getRowKey = computed(() =>
  typeof props.rowKey === 'function' ? props.rowKey : (row) => row[props.rowKey]
)

const selectedRows = computed({
  get() {
    return props.selected || []
  },
  set(rows) {
    emit('update:selected', rows)
  }
})

const selectRow = (row) => {
  const selectingRow = selectedRows.value.find((r) => getRowKey.value(r) === getRowKey.value(row))

  if (selectingRow) {
    selectedRows.value = selectedRows.value.filter(
      (r) => getRowKey.value(r) !== getRowKey.value(row)
    )
  } else {
    selectedRows.value = [...selectedRows.value, row]
  }
}

const selectAllRows = () => {
  const allRowsSelected = selectedRows.value.length === fields.value.length

  selectedRows.value = allRowsSelected ? [] : [...fields.value]
}

const calculateRowClass = computed(() => {
  if (typeof props.rowClass === 'function') {
    // insert class by parent component to resolve layout issue.
    // https://linear.app/hitpay/issue/HIT-5244/variant-products-issue#comment-db6e06ed
    return (row, i) => {
      return props.rowClass(row, i)
    }
  }

  return () => props.rowClass
})

const onClickRow = (field, header) => {
  if (!header.disableClickRow && header.key !== 'actions') {
    emit('click:row', {
      field: field,
      header: header
    })
  }
}
const isScrollOnStart = ref(true)
const isScrollOnEnd = ref(true)
const scrollTable = ref()
const onScroll = () => {
  if (!props.isSticky) return
  isScrollOnStart.value = scrollTable.value.scrollLeft === 0
  isScrollOnEnd.value =
    scrollTable.value.scrollLeft + scrollTable.value.clientWidth === scrollTable.value.scrollWidth
}
onMounted(() => onScroll())
</script>

<template>
  <div
    ref="scrollTable"
    class="flex text-oc-text flex-col border-oc-gray-200 isolate z-10"
    :class="[
      isSticky ? 'overflow-x-auto' : 'overflow-hidden',
      isResponsive ? 'rounded' : 'md:rounded',
      isBorderless ? '' : 'border'
    ]"
    @scroll="onScroll"
  >
    <div
      v-if="$slots.before"
      class="border-b border-oc-gray-200"
      :class="{
        'sticky left-0': isSticky
      }"
    >
      <slot name="before" />
    </div>
    <slot
      name="table-header"
      :fields="fields"
      :headers="headers"
      :is-selectable="isSelectable"
      :is-responsive="isResponsive"
      :select-all-rows="selectAllRows"
    >
      <div
        class="flex md:border-b-0 border-b border-oc-gray-200"
        :class="isResponsive ? 'w-full' : isSticky ? 'w-max' : 'flex-wrap md:flex-nowrap'"
      >
        <TableHeader
          v-if="isSelectable"
          :is-sticky="isSticky"
          class="md:ml-0 md:border-b border-oc-gray-200 min-w-[32px]"
          :class="[isSticky ? 'shrink-0 sticky left-0 z-10' : 'w-[40px] md:w-[5%]']"
          variant="checkbox"
          :is-partial="selectedRows.length !== fields.length && selectedRows.length > 0"
          :is-checked="selectedRows.length === fields.length && selectedRows.length > 0"
          @select-all="selectAllRows"
        />

        <TableHeader
          v-for="header in headers"
          :key="header.key"
          :text="header.label"
          :is-loading="isLoading"
          :variant="header.headerVariant"
          :is-sticky="isSticky"
          :class="[
            isSticky || isResponsive ? 'flex md:min-h-auto' : 'hidden md:flex',
            header.stickyLeft && isSelectable ? 'left-[40px] md:left-[32px]' : 'left-0',
            header.stickyRight ? 'right-0' : '',
            typeof header.class === 'function' ? header.class() : header.class,
            header.stickyLeft || header.stickyRight ? 'sticky shrink-0 z-10' : '',
            header.stickyLeft && !isScrollOnStart ? 'shadow-right-sticky' : '',
            header.stickyRight && !isScrollOnEnd ? 'shadow-left-sticky' : ''
          ]"
          class="md:border-b border-oc-gray-200"
        >
          <template #default>
            <slot :name="`header-${header.key}`" />
          </template>
        </TableHeader>
      </div>
    </slot>
    <template v-if="isLoading">
      <div
        v-for="i in loadingRows"
        :key="i"
        class="flex flex-wrap md:flex-nowrap group/row border-oc-gray-200 md:p-0 py-3"
        :class="{
          'pl-[40px]': isSelectable,
          'border-b': isBorderless
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
      <slot
        name="table-body"
        :fields="fields"
        :headers="headers"
        :is-scroll-on-end="isScrollOnEnd"
        :on-click-row="onClickRow"
        :is-selectable="isSelectable"
        :is-cursor-pointer="isCursorPointer"
        :is-responsive="isResponsive"
        :is-sticky="isSticky"
        :row-link="rowLink"
        :calculate-row-class="calculateRowClass"
      >
        <div
          v-for="(field, i) in fields"
          :key="`${getRowKey(field)}-${i}`"
          :class="{
            'border-b': fields.length !== i + 1,
            'w-max': isSticky
          }"
        >
          <div
            class="flex relative group/row md:p-0 py-3 min-h-[58px]"
            :class="[
              {
                'pl-[40px]': isSelectable,
                'cursor-pointer': isCursorPointer
              },
              isResponsive ? 'w-full' : isSticky ? 'w-max !p-0' : 'flex-wrap md:flex-nowrap',
              calculateRowClass(field, i)
            ]"
          >
            <TableCell
              v-if="isSelectable"
              class="flex border-oc-gray-200 justify-center left-0 min-w-[32px]"
              :is-last="fields.length === i + 1"
              :is-selected="selectedRows.some((r) => getRowKey(r) === getRowKey(field))"
              :class="[
                isSticky ? 'shrink-0 z-10 left-0 sticky' : 'md:relative absolute w-[40px] md:w-[5%]'
              ]"
              variant="checkbox"
              @selected="selectRow(field)"
              @hover:field="$emit('hover:cell', $event)"
            />

            <TableCell
              v-for="(header, j) in headers"
              :key="`${j}-${i}`"
              class="flex border-oc-gray-200"
              :is-last="fields.length === i + 1"
              :variant="header.variant"
              :is-copy="header.isCopy"
              :add-description-to-copy-clipboard="header.addDescriptionToCopyClipboard ?? true"
              :data="field[`${header.key}`] ?? ''"
              :content="{
                important: header.important ?? false,
                title: field[`${header.title}`],
                description: field[`${header.description}`],
                href: field[`${header.href}`]
              }"
              :chip-options="header.chipOptions"
              :class="[
                typeof header.class === 'function' ? header.class(field) : header.class,
                header.stickyLeft && isSelectable ? 'left-[40px] md:left-[32px]' : 'left-0',
                header.stickyRight ? 'right-0' : '',
                header.stickyLeft || header.stickyRight ? 'shrink-0 sticky z-10' : '',
                header.stickyLeft && !isScrollOnStart ? 'shadow-right-sticky' : '',
                header.stickyRight && !isScrollOnEnd ? 'shadow-left-sticky' : ''
              ]"
              :image-class="header.imageClass"
              :link="rowLink && field[rowLink] ? field[rowLink] : ''"
              @click="onClickRow(field, header)"
              @hover:field="$emit('hover:cell', $event)"
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
          <div v-if="$slots['extra']" class="flex relative group/row md:p-0 py-3 w-full">
            <slot name="extra" :item="field" :index="i" />
          </div>
        </div>
      </slot>
      <slot v-if="!fields.length" name="empty" />
    </template>
    <slot name="after" />
  </div>
</template>
