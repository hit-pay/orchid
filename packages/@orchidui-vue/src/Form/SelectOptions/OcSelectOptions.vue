<script setup>
import { BaseInput, Icon } from "@/orchidui";

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
  borderless: Boolean,
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

const isGridVariant = computed(() => {
  return props.variant === "grid";
});
</script>

<template>
  <BaseInput
    :label="label"
    :hint="hint"
    :error-message="errorMessage"
    :is-required="isRequired"
    :label-icon="labelIcon"
    :tooltip-text="tooltipText"
    :tooltip-options="tooltipOptions"
  >
    <div
      class="w-full grid gap-5"
      :class="
        isGridVariant ? 'grid-cols-3' : variant === 'list2' ? 'grid-cols-2' : ''
      "
    >
      <div
        v-for="opt in options"
        :key="opt.value"
        class="cursor-pointer group flex"
        :class="{
          'flex border border-oc-gray-200 p-3 rounded hover:shadow':
            !isGridVariant,
          'border-2 border-oc-primary':
            !isGridVariant && opt.value === modelValue,
          '!border-0 hover:bg-oc-accent-1-50': borderless,
        }"
        @click="update(opt.value)"
      >
        <img
          v-if="opt.preview"
          class="group-hover:shadow rounded"
          :class="{
            'border-2 border-oc-primary':
              isGridVariant && opt.value === modelValue,
            'border border-oc-gray-200':
              (isGridVariant && opt.value !== modelValue) || !isGridVariant,
            'w-full': isGridVariant,
            'w-1/8': !isGridVariant,
          }"
          :src="opt.preview"
        />
        <div class="mt-2" :class="isGridVariant ? 'text-center' : 'px-3'">
          <span
            class="font-medium"
            :class="{
              'text-sm ': isGridVariant,
              'text-oc-text-400 group-hover:text-oc-text-500':
                isGridVariant && opt.value !== modelValue,
              'text-oc-text-500': isGridVariant && opt.value === modelValue,
            }"
            >{{ opt.label }}</span
          >
          <div
            v-if="opt.description"
            class="flex text-sm text-oc-text-400 mt-2"
          >
            {{ opt.description }}
          </div>
        </div>
        <Icon
          v-if="borderless && opt.value === modelValue"
          width="16"
          height="16"
          name="check_2"
          class="text-oc-primary"
        />
      </div>
    </div>
  </BaseInput>
</template>
