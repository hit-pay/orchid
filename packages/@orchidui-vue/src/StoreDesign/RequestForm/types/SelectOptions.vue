<script setup>
import { BaseInput } from "@/orchidui";

import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "grid",
  },
  label: String,
  hint: String,
  errorMessage: String,
  placeholder: String,
  isDisabled: Boolean,
  options: Array,
  modelValue: [Array, String, Number],
  isRequired: {
    type: Boolean,
    default: false,
  },
  labelIcon: {
    type: String,
    default: "",
  },
  tooltipText: {
    type: String,
    default: "",
  },
  tooltipOptions: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits({
  "update:modelValue": [],
});

const update = (value) => {
  emit("update:modelValue", value);
};

const isVariantGrid = computed(() => {
  return props.variant === "grid";
});
</script>

<template>
  <BaseInput
    :label="isInlineLabel ? '' : label"
    :hint="hint"
    :error-message="errorMessage"
    :is-required="isRequired"
    :label-icon="labelIcon"
    :tooltip-text="tooltipText"
    :tooltip-options="tooltipOptions"
  >
    <div
      class="w-full grid gap-5"
      :class="variant === 'grid' ? 'grid-cols-3' : ''"
    >
      <div
        v-for="opt in options"
        :key="opt.value"
        class="cursor-pointer"
        :class="{
          'flex border border-oc-gray-200 p-4 rounded hover:shadow':
            !isVariantGrid,
          'border-2 border-oc-primary':
            !isVariantGrid && opt.value === modelValue,
        }"
        @click="update(opt.value)"
      >
        <img
          class="hover:shadow rounded"
          :class="{
            'border-2 border-oc-primary':
              isVariantGrid && opt.value === modelValue,
            'border border-oc-gray-200':
              (isVariantGrid && opt.value !== modelValue) || !isVariantGrid,
            'w-full': isVariantGrid,
            'w-1/8': !isVariantGrid,
          }"
          :src="opt.preview"
        />
        <div class="mt-2" :class="isVariantGrid ? 'text-center' : 'px-3'">
          <span class="font-medium" :class="isVariantGrid ? 'text-sm ' : ''">{{
            opt.label
          }}</span>
          <div
            v-if="opt.description"
            class="flex text-sm text-oc-text-400 mt-2"
          >
            {{ opt.description }}
          </div>
        </div>
      </div>
    </div>
  </BaseInput>
</template>
