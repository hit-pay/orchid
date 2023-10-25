<script setup>
import { computed } from "vue";
import { Radio } from "@orchid";
defineProps({
  alignment: {
    type: String,
    default: "vertical",
  },
  radio: Array,
  label: String,
  groupName: String,
  modelValue: String,
});
const emit = defineEmits({
  "update:modelValue": [],
});
const alignmentClasses = computed(() => ({
  horizontal: "gap-x-5 flex-wrap",
  vertical: "flex-col gap-y-3",
}));
const onInput = (value) => {
  emit("update:modelValue", value);
};
</script>

<template>
  <div class="flex flex-col gap-y-3">
    <span class="text-sm text-oc-text-400 leading-[18px]">{{ label }}</span>
    <div class="flex" :class="alignmentClasses[alignment]">
      <Radio
        v-for="(r, i) in radio"
        :id="r.value"
        :key="i"
        :model-value="r.value"
        :label="r.label"
        :is-error="r.isError"
        :is-disabled="r.isDisabled ? true : false"
        :group-name="groupName"
        @update:model-value="onInput"
      />
    </div>
  </div>
</template>
