<script setup>
defineProps({
  variant: String,
  tabs: Array,
  modelValue: String,
});
defineEmits({
  "update:modelValue": [],
});
</script>

<template>
  <div v-if="variant === 'pills'" class="flex gap-x-2 normal-case">
    <div
      v-for="tab in tabs"
      :key="tab.value"
      class="rounded cursor-pointer min-w-[48px] flex justify-center py-2 px-3 text-sm hover:text-oc-text-500"
      :class="
        modelValue === tab.value
          ? 'bg-oc-gray-200 text-oc-text-500'
          : 'text-oc-text-400'
      "
      @click="$emit('update:modelValue', tab.value)"
    >
      {{ tab.label }}
    </div>
  </div>
</template>
