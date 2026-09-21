<script setup>
import { ref, computed, useId } from 'vue'
import { Button, Dropdown, Icon, RadioGroup } from '@/orchidui-core'

const emit = defineEmits({
  /** Sort changed. Payload: `{ field, direction }`. */
  'update:modelValue': []
})

const props = defineProps({
  /** Field options for the "Sort by" radio group. Array of `{ label, value }`. */
  sortOptions: {
    type: Array,
    default: () => []
  },
  /**
   * v-model — current sort as `{ field, direction }`.
   * `field` is one of `sortOptions` values, or `null` for the default sort.
   * `direction` is `'asc'` or `'desc'`.
   */
  modelValue: {
    type: Object,
    default: () => ({ field: null, direction: 'asc' })
  }
})

const isOpen = ref(false)
// Unique per instance so the radio inputs' name/id (and their label `for`) don't
// collide when more than one Sort is rendered on the same page.
const groupName = `oc-sort-${useId()}`

const selectedField = computed(() => props.modelValue?.field ?? null)
const selectedDirection = computed(() => props.modelValue?.direction ?? 'asc')
// Show the indicator dot whenever a non-default sort field is selected.
const isActive = computed(() => !!selectedField.value)

const onSelectField = (field) => {
  emit('update:modelValue', { field, direction: selectedDirection.value })
}

const onSelectDirection = (direction) => {
  emit('update:modelValue', { field: selectedField.value, direction })
}
</script>

<template>
  <Dropdown v-model="isOpen" :distance="12">
    <div class="relative">
      <Button
        variant="secondary"
        size="small"
        class="w-8"
        icon-class="shrink-0"
        left-icon="transfer"
      />
      <span
        v-if="isActive"
        class="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-oc-primary border-2 border-white"
      />
    </div>

    <template #menu>
      <div class="p-4 flex flex-col gap-y-3 min-w-[220px]">
        <span class="text-oc-text-400 text-sm font-medium">Sort by</span>

        <RadioGroup
          :radio="sortOptions"
          :model-value="selectedField"
          :group-name="groupName"
          @update:model-value="onSelectField"
        />

        <div class="border-t border-oc-gray-200" />

        <div
          class="flex items-center gap-x-2 text-sm cursor-pointer"
          :class="selectedDirection === 'asc' ? 'text-oc-primary font-medium' : 'text-oc-text'"
          @click="onSelectDirection('asc')"
        >
          <Icon name="arrow-down" width="14" height="14" />
          <span>Ascending</span>
        </div>

        <div
          class="flex items-center gap-x-2 text-sm cursor-pointer"
          :class="selectedDirection === 'desc' ? 'text-oc-primary font-medium' : 'text-oc-text'"
          @click="onSelectDirection('desc')"
        >
          <Icon name="arrow-up" width="14" height="14" />
          <span>Descending</span>
        </div>
      </div>
    </template>
  </Dropdown>
</template>
