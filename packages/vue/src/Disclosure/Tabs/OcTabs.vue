<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "default",
    validator: (val) => ["default", "pills"].includes(val),
  },
  tabs: Array,
  modelValue: [String, Array],
  maxCount: Number,
});
defineEmits({
  "update:modelValue": [],
});
const isPillVariant = computed(() => props.variant === "pills");
</script>

<template>
  <div
    class="flex normal-case"
    :class="isPillVariant ? 'gap-x-2' : 'border-b border-oc-gray-200'"
  >
    <div
      v-for="tab in tabs"
      :key="tab.value"
      class="cursor-pointer min-w-[48px] gap-x-3 items-center flex justify-center text-sm hover:text-oc-text-500"
      :class="[
        tab.class,
        isPillVariant ? 'py-2 px-3 rounded' : 'px-4 pb-3 border-b-2 -mb-[1px]',
        modelValue?.toString() === tab.value?.toString()
          ? isPillVariant
            ? 'bg-oc-gray-200 text-oc-text-500'
            : 'border-oc-primary-500 font-medium text-oc-text-500'
          : isPillVariant
            ? 'text-oc-text-400'
            : 'border-transparent text-oc-text-400',
      ]"
      @click="$emit('update:modelValue', tab.value)"
    >
      <slot :name="tab.value">
        {{ tab.label }}
        <div
          v-if="tab.count"
          class="bg-oc-error rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold text-white"
        >
          {{ tab.count > maxCount ? `${maxCount}+` : tab.count }}
        </div>
      </slot>
    </div>
  </div>
</template>
