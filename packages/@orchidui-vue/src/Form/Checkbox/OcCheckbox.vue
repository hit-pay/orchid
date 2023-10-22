<script setup>
import { Icon } from '@orchid'
const props = defineProps({
  modelValue: Boolean,
  isError: Boolean,
  isPartial: Boolean,
  disabled: Boolean,
  label: String,
});
const emit = defineEmits({
  "update:modelValue": [],
});
const onInput = () => emit("update:modelValue", !props.modelValue);
</script>

<template>
  <div class="w-fit">
    <label class="flex items-center gap-x-3 cursor-pointer">
      <div
        class="w-5 h-5 shrink-0 border flex items-center justify-center rounded-sm"
        :class="[
          modelValue
            ? disabled
              ? 'border-oc-primary-100 bg-oc-primary-100'
              : 'border-oc-primary bg-oc-primary'
            : isError
            ? 'border-oc-error'
            : disabled
            ? 'bg-oc-primary-50 border-oc-primary-200'
            : 'border-oc-primary-200',
          isPartial
            ? disabled
              ? '!border-oc-primary-200 !bg-oc-primary-50'
              : '!border-oc-primary !bg-oc-primary-100'
            : '',
        ]"
      >
        <Icon
          v-if="isPartial ? true : modelValue"
          class="w-4 h-4"
          :class="
            isPartial
              ? disabled
                ? 'text-oc-primary-200'
                : 'text-oc-primary'
              : 'text-oc-text-100'
          "
          :name="isPartial ? 'minus' : 'check-2'"
        />
      </div>

      <span v-if="label">{{ label }}</span>
      <input
        :value="modelValue"
        type="checkbox"
        :checked="modelValue"
        class="h-0 w-0 hidden"
        @change="onInput"
      />
    </label>
  </div>
</template>
