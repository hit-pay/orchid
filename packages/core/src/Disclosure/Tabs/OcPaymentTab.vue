<template>
  <div
    class="flex items-center rounded-sm cursor-pointer text-sm p-3 gap-x-3 border h-[40px] border-oc-gray-200"
    :class="{ 'border-oc-primary border-2 font-medium': modelValue === tab.value }"
    @click="$emit('update:modelValue', tab.value)"
  >
    <slot name="logo">
      <img v-if="tab.logo" :src="tab.logo" alt="logo" />
    </slot>
    <div class="shrink-0">
      {{ tab.label }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  /** Tab object with `value`, `label`, and optional `logo` (image URL) fields. */
  tab: {
    type: Object,
    required: true
  },
  /** v-model — value of the currently active tab. */
  modelValue: {
    type: String,
    required: true
  }
})

defineEmits({
  /** Tab clicked. Payload: the `value` of the clicked tab. */
  'update:modelValue': []
})
</script>
