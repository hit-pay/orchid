<script setup>
import { computed, defineAsyncComponent } from "vue";

const Checkbox = defineAsyncComponent(() =>
  import("../Checkbox/OcCheckbox.vue"),
);

const props = defineProps({
  alignment: {
    type: String,
    default: "vertical",
  },
  checkboxes: Array,
  modelValue: Array,
  label: String,
});
const emit = defineEmits({
  "update:modelValue": [],
});
const alignmentClasses = computed(() => ({
  horizontal: "gap-x-5 flex-wrap",
  vertical: "flex-col gap-y-3",
}));
const isSelectedCheckbox = (value) => props.modelValue?.includes(value);
const toggleCheckbox = (value) => {
  emit(
    "update:modelValue",
    isSelectedCheckbox(value)
      ? props.modelValue.filter((v) => v !== value)
      : [...props.modelValue, value],
  );
};
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <span class="text-sm text-oc-text-400 leading-[18px]">{{ label }}</span>
    <div class="flex" :class="alignmentClasses[alignment]">
      <Checkbox
        v-for="(checkbox, i) in checkboxes"
        :key="i"
        :label="checkbox.label"
        :value="checkbox.value"
        :disabled="checkbox.disabled"
        :model-value="isSelectedCheckbox(checkbox.value)"
        @update:model-value="toggleCheckbox(checkbox.value)"
      />
    </div>
  </div>
</template>
