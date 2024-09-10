<script setup>
import { ref } from 'vue'
import { Icon, Checkbox } from '@/orchidui'

defineEmits(['select', 'show:children', 'hide:children'])
defineProps({
  label: String,
  subLabel: String,
  isSelected: [Boolean, Number],
  isCheckboxes: Boolean,
  isPartial: Boolean,
  hasChildren: Boolean,
  showChildren: Boolean,
  isDisabled: Boolean
})

const optionItemRef = ref()

defineExpose({
  optionItemRef
})
</script>

<template>
  <div
    ref="optionItemRef"
    class="w-full flex flex-wrap relative hover:bg-oc-accent-1-50 rounded-sm"
  >
    <div
      class="w-full p-3 flex items-center text-oc-text-400 justify-between cursor-pointer gap-x-3"
      :class="{
        'bg-oc-accent-1-50': isSelected && !isCheckboxes,
        'opacity-50 hover:bg-white !cursor-default': isDisabled
      }"
      @click="$emit('select')"
    >
      <Checkbox
        v-if="isCheckboxes"
        :model-value="!!isSelected"
        :is-partial="isPartial"
        class="!w-fit pointer-events-none"
      />
      <div class="w-full flex items-center gap-x-3">
        <slot name="trailing"></slot>

        <div class="flex flex-col gap-3 overflow-hidden" :class="{ 'flex-1': isCheckboxes }">
          <span class="truncate">{{ label }}</span>
          <span v-if="subLabel" class="text-sm text-oc-text-300">{{ subLabel }}</span>
        </div>

        <slot name="leading"></slot>
      </div>
      <Icon v-if="isSelected && !isCheckboxes" class="w-5 h-5 text-oc-primary" name="check-2" />
    </div>
    <Icon
      v-if="hasChildren"
      class="w-6 h-6 absolute right-[10px] top-[8px] cursor-pointer"
      :class="showChildren ? 'rotate-180' : ''"
      name="chevron-down"
      @click="showChildren ? $emit('hide:children') : $emit('show:children')"
    />
    <slot name="after"></slot>
  </div>
</template>
