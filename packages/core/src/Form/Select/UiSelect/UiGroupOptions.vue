<script setup>
import { ComboboxGroup, SelectGroup, SelectLabel } from 'reka-ui';

defineProps({
  label: String,
  isMultiple: Boolean
})
</script>

<template>
  <!-- For use with Select (single selection) -->
  <SelectGroup v-if="!isMultiple" class="flex flex-col">
    <SelectLabel class="px-3 pt-3 pb-2 border-y border-white text-oc-text uppercase text-xs font-medium">
      {{ label }}
    </SelectLabel>
    <slot />
  </SelectGroup>

  <!-- For use with Combobox (multiple selection) -->
  <ComboboxGroup v-else class="flex flex-col">
    <div class="px-3 pt-3 pb-2 border-y border-white text-oc-text uppercase text-xs font-medium">
      {{ label }}
    </div>
    <slot />
  </ComboboxGroup>
</template>