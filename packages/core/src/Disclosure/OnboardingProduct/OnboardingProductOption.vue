<template>
  <div
    :class="[
      'rounded-xxl border border-oc-gray-200 flex gap-4',
      {
        'p-3 pr-5': size === 'small'
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
          <Checkbox />
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

const props = defineProps({
  productImageUrl: {
    type: String,
    required: true
  },
  modelValue: {
    type: [Boolean, null],
    default: null
  },
  selectable: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'small',
    validator: (value) => ['small', 'medium'].includes(value)
  },
  title: {
    type: String,
    default: ''
  },
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
