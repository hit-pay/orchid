<template>
  <div
    :class="[
      'flex gap-4 transition-all duration-300',
      {
        'p-3 pr-5 rounded-xl border border-oc-gray-200 hover:shadow-normal': size === 'small',
        'rounded-xxl': size === 'medium',
        'border-oc-primary-500 !border-[1.5px]': !!model
      }
    ]"
  >
    <div>
      <img v-bind="imageProps" :src="productImageUrl" :alt="title" />
    </div>

    <div class="flex-1">
      <div class="flex items-center">
        <div class="text-lg text-oc-text-500">{{ title }}</div>

        <div v-if="selectable" class="ml-auto">
          <Checkbox v-model="model" />
        </div>
      </div>

      <div class="mt-2 text-oc-text-400">
        {{ description }}
      </div>

			<slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Checkbox } from '@/orchidui-core'

const model = defineModel({
  required: false,
  type: Boolean
})

const props = defineProps({
  /** URL of the product image displayed on the left side of the card. */
  productImageUrl: {
    type: String,
    required: true
  },
  /** Show a checkbox that binds to the `modelValue` for selecting this option. */
  selectable: {
    type: Boolean,
    default: false
  },
  /**
   * Card size — controls image dimensions and border radius.
   * @values small, medium
   */
  size: {
    type: String,
    default: 'small',
    validator: (value) => ['small', 'medium'].includes(value)
  },
  /** Product name shown at the top of the card. */
  title: {
    type: String,
    default: ''
  },
  /** Supporting description text shown below the title. */
  description: {
    type: String,
    default: ''
  }
})

const imageProps = computed(() => ({
  width: props.size === 'small' ? 132 : 212,
  height: props.size === 'small' ? 112 : 132
}))
</script>
