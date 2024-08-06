<script setup lang="ts">
import ExpandingTableRow from './OcExpadingTableRow.vue'

defineProps({
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
  }
})
</script>

<template>
  <div class="flex flex-col border rounded w-full border-oc-gray-200 overflow-hidden">
    <ExpandingTableRow
      v-for="(row, i) in headers"
      :key="i"
      :row="row"
      :value="fields[row.key]"
      :important="row.important"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </ExpandingTableRow>
    <slot name="total">
      <ExpandingTableRow is-total :row="{ label: 'Total' }" :value="total" />
    </slot>
  </div>
</template>
