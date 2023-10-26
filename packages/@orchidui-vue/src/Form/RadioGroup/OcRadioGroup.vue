<script setup>
import { computed } from "vue";
import { Radio, BaseInput } from "@orchid";

defineProps({
  alignment: {
    type: String,
    default: "vertical",
  },
  radio: Array,
  label: String,
  groupName: String,
  errorMessage: String,
  hint: String,
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
  <BaseInput :label="label" :error-message="errorMessage" :hint="hint">
    <div class="flex" :class="alignmentClasses[alignment]">
      <Radio
        v-for="(r, i) in radio"
        :id="r.value"
        :key="i"
        :model-value="r.value"
        :label="r.label"
        :is-error="!!errorMessage"
        :is-disabled="r.isDisabled ? true : false"
        :group-name="groupName"
        @update:model-value="onInput"
      />
    </div>
  </BaseInput>
</template>
