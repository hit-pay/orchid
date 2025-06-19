<script setup>
import { Checkbox, Icon } from '@/orchidui-core'
import { ComboboxItem, SelectItem } from 'reka-ui'
import { ref } from 'vue'

defineEmits(['select', 'show:children', 'hide:children'])
const props = defineProps({
  label: String,
  subLabel: String,
  value: [String, Number],
  isSelected: [Boolean, Number],
  isCheckboxes: Boolean,
  isPartial: Boolean,
  hasChildren: Boolean,
  showChildren: Boolean,
  isDisabled: Boolean,
  isMultiple: Boolean
})

const optionItemRef = ref()

defineExpose({
  optionItemRef
})
</script>

<template>
  <!-- For use with Reka UI SelectItem -->
  <SelectItem
    v-if="!isMultiple"
    ref="optionItemRef"
    :value="value"
    :disabled="isDisabled"
    class="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-oc-accent-1-50 data-[highlighted]:bg-oc-accent-1-50 relative"
    @select="$emit('select')"
  >
    <div class="flex items-center gap-x-3 flex-1">
      <slot name="trailing"></slot>

      <div class="flex flex-col gap-1 overflow-hidden flex-1">
        <span class="truncate">{{ label }}</span>
        <slot name="sub-label">
          <span v-if="subLabel" class="text-sm text-oc-text-300">{{ subLabel }}</span>
        </slot>
      </div>

      <slot name="leading"></slot>
    </div>

    <Icon 
      v-if="isSelected && !isCheckboxes" 
      class="w-5 h-5 text-oc-primary shrink-0" 
      name="check-2" 
    />

    <Icon
      v-if="hasChildren"
      class="w-6 h-6 absolute right-[10px] top-[8px] cursor-pointer"
      :class="showChildren ? 'rotate-180' : ''"
      name="chevron-down"
      @click.stop="showChildren ? $emit('hide:children') : $emit('show:children')"
    />

    <slot name="after"></slot>
  </SelectItem>

  <!-- For use with Reka UI ComboboxItem (multiple selection) -->
  <ComboboxItem
    v-else
    ref="optionItemRef"
    :value="value"
    :disabled="isDisabled"
    class="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-oc-accent-1-50 data-[highlighted]:bg-oc-accent-1-50 relative"
    @select="$emit('select')"
  >
    <Checkbox
      v-if="isCheckboxes"
      :model-value="!!isSelected"
      :is-partial="isPartial"
      class="!w-fit pointer-events-none"
    />

    <div class="flex items-center gap-x-3 flex-1">
      <slot name="trailing"></slot>

      <div class="flex flex-col gap-1 overflow-hidden flex-1">
        <span class="truncate">{{ label }}</span>
        <slot name="sub-label">
          <span v-if="subLabel" class="text-sm text-oc-text-300">{{ subLabel }}</span>
        </slot>
      </div>

      <slot name="leading"></slot>
    </div>

    <Icon 
      v-if="isSelected && !isCheckboxes" 
      class="w-5 h-5 text-oc-primary shrink-0" 
      name="check-2" 
    />

    <Icon
      v-if="hasChildren"
      class="w-6 h-6 absolute right-[10px] top-[8px] cursor-pointer"
      :class="showChildren ? 'rotate-180' : ''"
      name="chevron-down"
      @click.stop="showChildren ? $emit('hide:children') : $emit('show:children')"
    />

    <slot name="after"></slot>
  </ComboboxItem>
</template>