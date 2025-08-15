<template>
  <tr class="hoverable-row group/row" @click="$emit('click', $event)">
    <td
      v-if="isExpand"
      class="p-0 border-r border-oc-gray-200 sticky left-0 z-20"
      data-expand-column
      :class="[
        index !== sortedFields.length - 1 ? 'border-b' : '',
        isChild ? 'bg-oc-bg-dark' : 'bg-oc-bg-light'
      ]"
    >
      <div class="flex justify-center items-center min-h-[35px]">
        <Icon
          v-if="row?.children?.length"
          name="chevron-down"
          width="16"
          height="16"
          @click="toggleChildren"
        />
      </div>
    </td>
    <td
      v-if="isSelectable"
      class="p-0 border-r border-oc-gray-200 sticky z-20"
      :class="[
        isExpand ? 'left-[31px]' : 'left-0',
        index !== sortedFields.length - 1 ? 'border-b' : '',
        isChild ? 'bg-oc-bg-dark' : 'bg-oc-bg-light'
      ]"
      data-checkbox-column
    >
      <div class="flex p-3 items-center min-h-[35px]">
        <Checkbox
          class="items-center"
          :model-value="selectedRows.some((r) => getRowKey(r) === getRowKey(row))"
          @update:model-value="selectRow(row)"
        />
      </div>
    </td>
    <td
      v-for="(header, headerIndex) in headers"
      :key="header.key + index"
      class="p-0"
      :class="[
        { 'border-b border-oc-gray-200': index !== sortedFields.length - 1 },
        isChild ? 'bg-oc-bg-dark' : 'bg-oc-bg-light',
        isChild && !headerIndex ? '!pl-4' : '',
        getStickyClasses(header, header.key, false)
      ]"
      @click="$emit('click:col', row, header)"
    >
      <div
        class="px-5 py-3 text-[13px] flex gap-2 items-center justify-between w-full"
        :class="[header.class, getStyleVariants(header)]"
      >
        <slot :name="header.key" :item="row" :data="row[header.key]">
          <Tooltip
            v-if="header.variant === 'tooltip' && row[header.key]?.length > header.tooltipMinLength"
            :popper-options="{ strategy: 'fixed' }"
            position="top"
            arrow-hidden
            popper-class="!rounded"
            is-popover
            is-attach-to-body
            class="w-[inherit] block"
          >
            <div class="truncate">{{ row[header.key] ?? 'N/A' }}</div>

            <template #popper>
              <div
                class="text-oc-text-400 rounded py-2 px-3 whitespace-nowrap font-medium bg-oc-bg-light"
              >
                {{ row[header.key] }}
              </div>
            </template>
          </Tooltip>
          <div v-else-if="header.variant === 'date'" class="truncate">
            {{
              row[header.key]
                ? dayjs(row[header.key]).format(header.dateFormat || 'MMM DD HH:mm:ss')
                : 'N/A'
            }}
          </div>
          <div v-else class="truncate">{{ row[header.key] || 'N/A' }}</div>
        </slot>

        <CopyTooltip
          v-if="header.isCopy && row[header.key]"
          :value="row[header.key]"
          :tooltip-options="{ isAttachToBody: true }"
          class="opacity-0 group-hover/row:opacity-100"
        />
      </div>
    </td>
  </tr>

  <template v-if="row?.children?.length && isChildrenVisible">
    <OcTableRow
      v-for="(childRow, childIndex) in row.children"
      :key="getRowKey(childRow)"
      :row="childRow"
      :headers="headers"
      :index="childIndex"
      :parent-row-key="getRowKey(row)"
      :is-expand="isExpand"
      :is-selectable="isSelectable"
      is-child
      :sorted-fields="sortedFields"
      :selected-rows="selectedRows"
      :get-row-key="getRowKey"
      :select-row="selectRow"
      :get-sticky-classes="getStickyClasses"
    >
      <template v-for="(_, name) in $slots" #[name]="slotProps">
        <slot :name="name" v-bind="{ ...slotProps, isChild: true }" />
      </template>
    </OcTableRow>
  </template>
</template>

<script setup>
import { CopyTooltip, Icon, Checkbox, Tooltip } from '@/orchidui-core'
import { ref } from 'vue'
import dayjs from 'dayjs'

const props = defineProps({
  headers: {
    type: Array,
    default: () => []
  },
  row: {
    type: Object,
    default: () => {}
  },
  index: {
    type: Number,
    default: 0
  },
  isExpand: {
    type: Boolean,
    default: false
  },
  isSelectable: {
    type: Boolean,
    default: false
  },
  sortedFields: {
    type: Array,
    default: () => []
  },
  selectedRows: {
    type: Array,
    default: () => []
  },
  getRowKey: {
    type: Function,
    default: (row) => row?.id
  },
  selectRow: {
    type: Function,
    default: (row) => row?.id
  },
  getStickyClasses: {
    type: Function,
    default: () => ''
  },
  isChild: {
    type: Boolean,
    default: false
  },
  parentRowKey: {
    type: [String, Number],
    default: null
  }
})

const emit = defineEmits(['toggleChildren', 'click', 'click:col'])

const getStyleVariants = (header) => {
  return {
    'font-reddit-mono': header.variant === 'date',
    'font-reddit-mono font-semibold': header.variant === 'amount',
    'text-oc-text-400': header.variant === 'secondary'
  }
}

const isChildrenVisible = ref(false)

const toggleChildren = () => {
  isChildrenVisible.value = !isChildrenVisible.value
  emit('toggleChildren')
}
</script>

<style>
/* Add hover effect for table rows */
.hoverable-row:hover td {
  background-color: var(--oc-gray-50) !important;
  cursor: pointer;
}
</style>
