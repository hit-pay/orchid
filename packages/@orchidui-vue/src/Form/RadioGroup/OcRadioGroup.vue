<script setup>
import { computed } from "vue";
import { Radio, BaseInput } from "@/orchidui";

defineProps({
  alignment: {
    type: String,
    default: "vertical",
  },
  radio: Array,
  label: String,
  wrapperClass: String,
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
    <div class="flex" :class="[alignmentClasses[alignment], wrapperClass]">
      <Radio
        v-for="(r, i) in radio"
        :id="r.value"
        :key="i"
        class="!w-fit"
        :model-value="r.value"
        :label="r.label"
        :is-error="!!errorMessage"
        :checked="r.value === modelValue"
        :is-disabled="!!r.isDisabled"
        :group-name="groupName"
        @update:model-value="onInput"
      />
    </div>
  </BaseInput>
</template>
