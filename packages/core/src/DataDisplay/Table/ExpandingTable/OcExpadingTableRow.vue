<script setup lang="ts">
import { Icon, ExpandingTableRow, Tooltip, Skeleton } from '@/orchidui-core'
import { ref, computed } from 'vue'

defineProps({
  row: Object,
  depth: {
    type: Number,
    default: 0
  },
  value: {
    type: [String, Number, Date, Object],
    default: 0
  },
  headers: {
    type: Array,
    default: () => []
  },
  important: {
    type: Boolean,
    default: false
  },
  isTotal: {
    type: Boolean,
    default: false
  },
  isAlternative: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})

const isExpanded = ref(false)
const maxHeight = ref('0')
const childrenWrapper = ref()
const itemsCellRef = ref()
const truncatedHeaders = computed(() =>
  itemsCellRef.value?.map((el) => el.scrollWidth > el.clientWidth)
)
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
  if (isExpanded.value) {
    maxHeight.value = `${childrenWrapper.value.scrollHeight}px`
  } else {
    maxHeight.value = '0'
  }
}
</script>

<template>
  <div
    class="h-[58px] w-full flex items-center"
    :class="{
      'font-medium': important || isTotal,
      'bg-oc-gray-900 text-white': isTotal,
      'bg-oc-bg-dark': depth,
      'border-b border-oc-gray-200': !isTotal
    }"
  >
    <div class="w-9" @click="toggleExpand">
      <Icon
        v-if="row.children?.length"
        name="chevron-down"
        width="16"
        height="16"
        class="mx-auto transition-all duration-500"
        :class="isExpanded ? 'rotate-180' : ''"
      />
    </div>
    <template v-if="!isAlternative">
      <div
        class="flex-1 gap-x-2 items-center flex px-4 py-3"
        :style="depth ? { paddingLeft: 12 + depth * 20 + 'px' } : {}"
      >
        {{ row.label }}
        <Tooltip>
          <Icon v-if="row.infoText" name="information" width="16" height="16" />
          <template #popper>
            <div class="rounded-xs text-sm font-medium text-oc-text-400 p-2">
              {{ row.infoText }}
            </div>
          </template>
        </Tooltip>
      </div>
      <div class="flex-1 truncate" :class="row.itemClasses">
        <slot :name="row.key" :value="value">
          {{ value }}
        </slot>
      </div>
    </template>
    <template v-else>
      <div
        v-for="(header, i) in headers"
        :key="header.key"
        ref="itemsCellRef"
        class="flex-1 truncate px-4"
        :class="header.itemClasses"
      >
        <Skeleton v-if="isLoading" class="w-full h-5 rounded" />
        <slot v-else :name="header.key" :data="row?.[header?.key]" :item="row">
          <Tooltip
            v-if="truncatedHeaders?.[i]"
            class="overflow-hidden w-[-webkit-fill-available]"
            arrow-hidden
            position="top"
          >
            <div class="truncate">{{ row?.[header?.key] }}</div>
            <template #popper>
              <div class="py-1 px-2">{{ row?.[header?.key] }}</div>
            </template>
          </Tooltip>
          <template v-else> {{ row?.[header?.key] }}</template>
        </slot>
      </div>
    </template>
    <div class="w-9"></div>
  </div>
  <div
    v-if="row.children?.length"
    ref="childrenWrapper"
    class="transition-all overflow-hidden duration-500"
    :style="{ maxHeight: maxHeight }"
  >
    <ExpandingTableRow
      v-for="(child, i) in row.children"
      :key="i"
      :row="child"
      :important="child.important"
      :is-alternative="isAlternative"
      :is-loading="isLoading"
      :headers="headers"
      :value="value[child.key]"
      :depth="depth + 1"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </ExpandingTableRow>
  </div>
</template>
