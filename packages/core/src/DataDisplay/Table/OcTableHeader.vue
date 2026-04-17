<script setup>
import { computed } from 'vue'
import { Checkbox, Skeleton } from '@/orchidui-core'

const Variants = {
  TEXT: 'text',
  CHECKBOX: 'checkbox'
}

defineProps({
  /**
   * Header cell type.
   * @values text, checkbox
   */
  variant: {
    type: String,
    default: 'text',
    validator: (value) => ['text', 'checkbox'].includes(value)
  },
  /** Header label text (used when no default slot content is provided). */
  text: String,
  /** Show an indeterminate/partial state on the header checkbox. */
  isPartial: Boolean,
  /** Whether the header checkbox is in a checked state. */
  isChecked: Boolean,
  /** Pin the header cell to the left when horizontal scroll is active. */
  isSticky: Boolean,
  /** Show a skeleton placeholder instead of content while loading. */
  isLoading: Boolean,
})
defineEmits({
  /** Header checkbox was toggled. Payload: new boolean value. */
  selectAll: []
})
const variantClass = computed(() => ({
  text: 'px-4 py-3',
  checkbox: 'p-4 md:p-3'
}))
</script>

<template>
  <div
    class="whitespace-nowrap text-start uppercase text-oc-text-400 leading-[18px] text-xs font-medium bg-oc-gray-50 flex items-center gap-3 group/table-header"
    :class="variantClass[variant]"
  >
    <Skeleton v-if="isLoading" class="rounded-full w-full overflow-hidden h-6" />
    <template v-else>
      <slot v-if="variant === Variants.TEXT">{{ text }}</slot>
      <slot v-else>
        <div class="mx-auto">
          <Checkbox
            :model-value="isChecked"
            :is-partial="isPartial"
            @update:model-value="$emit('selectAll', $event)"
          />
        </div>
        <span class="text-oc-text-500" :class="isSticky ? 'hidden' : 'md:hidden'">Select all</span>
      </slot>
    </template>
  </div>
</template>
