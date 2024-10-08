<script setup lang="ts">
import ExpandingTableRow from './OcExpadingTableRow.vue'
import ExpandingHeaderRow from './OcExpandingHeaderRow.vue'
import { computed } from 'vue'

const props = defineProps({
  total: {
    type: Number,
    default: 0
  },
  headers: {
    type: Array,
    required: true
  },
  fields: {
    type: Object,
    required: true
  },
  isAlternative: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  loadingRows: {
    type: Number,
    default: 5
  }
})
const emptyRow = computed(() => Object.fromEntries(props.headers.map((h) => [h.key, ''])))
</script>

<template>
  <div class="flex flex-col border rounded w-full border-oc-gray-200 overflow-hidden">
    <template v-if="isAlternative">
      <ExpandingHeaderRow :headers="headers" />

      <template v-if="isLoading && !fields.length">
        <ExpandingTableRow
          v-for="rowInd in loadingRows"
          :key="rowInd"
          is-loading
          :is-alternative="isAlternative"
          :row="emptyRow"
          :headers="headers"
        />
      </template>
      <template v-else>
        <ExpandingTableRow
          v-for="(row, i) in fields"
          :key="i"
          :row="row"
          :headers="headers"
          :is-loading="isLoading"
          :is-alternative="isAlternative"
          :important="row.important"
        >
          <template v-for="(_, name) in $slots" #[name]="slotData">
            <slot :name="name" v-bind="slotData" />
          </template>
        </ExpandingTableRow>
      </template>
    </template>
    <template v-else>
      <ExpandingTableRow
        v-for="(row, i) in headers"
        :key="i"
        :row="row"
        :headers="headers"
        :is-loading="isLoading"
        :is-alternative="isAlternative"
        :value="fields[row.key]"
        :important="row.important"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
      </ExpandingTableRow>
    </template>
    <slot name="total">
      <ExpandingTableRow is-total :headers="headers" :row="{ label: 'Total' }" :value="total" />
    </slot>
  </div>
</template>
