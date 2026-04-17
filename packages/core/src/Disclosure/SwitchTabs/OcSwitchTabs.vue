<script setup>
defineProps({
  /** Array of tab option objects, each with `value` and `label` fields. */
  options: {
    type: Array,
    required: true
  },
  /** Value of the currently selected option. */
  activeOption: {
    type: String,
    default: ''
  }
})

defineEmits({
  /** A tab was clicked. Payload: the `value` of the selected option. */
  select: null
})
</script>

<template>
  <div class="flex items-center gap-2 p-2 rounded-full shadow-inner border border-oc-gray-200">
    <div
      v-for="option in options"
      :key="option.value"
      class="rounded-full cursor-pointer py-3 px-4 transition duration-300 border-2 border-transparent"
      :class="{ 'bg-oc-gray-800': option.value === activeOption }"
      @click="$emit('select', option.value)"
    >
      <span
        class="text-oc-text-300 font-medium text-sm"
        :class="{ 'text-white': option.value === activeOption }"
      >
        {{ option.label }}
      </span>
    </div>
  </div>
</template>
