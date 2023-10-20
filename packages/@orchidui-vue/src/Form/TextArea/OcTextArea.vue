<script setup>
import BaseInput from "../BaseInput/OcBaseInput.vue";
import { ref } from "vue";

const props = defineProps({
  placeholder: String,
  label: String,
  errorMessage: String,
  hint: String,
  modelValue: String,
  rows: Number,
  autoResize: Boolean,
  isDisabled: Boolean,
});

const emit = defineEmits({
  "update:modelValue": [],
});

const isFocused = ref(false);

const MIN_HEIGHT = "18px";

const onInput = (event) => {
  const input = event.target;
  if (!input || !props.autoResize) return;
  input.style.height = MIN_HEIGHT;
  input.style.height = input.scrollHeight + "px";
  emit("update:modelValue", input.value);
};
</script>

<template>
  <BaseInput :label="label" :error-message="errorMessage" :hint="hint">
    <textarea
      class="outline-none p-3 min-h-[120px] rounded border resize-none disabled:bg-oc-bg-dark"
      :class="[
        isFocused ? 'shadow-[0_0_0_2px]' : '',
        errorMessage
          ? 'border-oc-error shadow-oc-error'
          : 'border-oc-gray-200 shadow-oc-gray-200',
      ]"
      :disabled="isDisabled"
      :value="modelValue"
      :rows="rows"
      :placeholder="placeholder"
      @input="onInput"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </BaseInput>
</template>
