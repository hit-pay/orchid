<script setup>
import { computed, ref, useAttrs } from "vue";
import { BaseInput, Icon } from "@/orchidui";
import { pickEventListeners } from "@/orchidui/Form/Input/inputHelper.js";

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  hint: {
    type: String,
    default: "",
  },
  isInlineLabel: {
    type: Boolean,
    default: false,
  },
  isReadonly: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "Placeholder",
  },
  icon: {
    type: String,
    default: "",
  },
  inputType: {
    type: String,
    default: "text",
  },
  preFill: {
    type: String,
    default: "",
  },
  hasError: {
    type: Boolean,
    default: false,
  },
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

defineEmits({
  "update:modelValue": [],
  blur: [],
  focus: [],
});

const attrs = useAttrs();

const eventListeners = pickEventListeners(attrs);

const inputRef = ref();

defineExpose({
  focus: () => inputRef.value.focus(),
});

const isFocused = ref(false);
const inputClasses = computed(() => [
  {
    "shadow-[0_0_0_2px]": isFocused.value,
  },
  !props.disabled && (props.errorMessage || props.hasError)
    ? "border-oc-error shadow-oc-error"
    : "border-oc-gray-200 shadow-oc-gray-200",
  props.disabled ? "bg-oc-bg-dark pointer-events-none" : "bg-oc-bg-light",
]);
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
      class="rounded h-[36px] border flex items-center gap-x-3 px-3 cursor-pointer"
      :class="inputClasses"
      @click="$refs.inputRef?.focus()"
    >
      <div v-if="$slots.trailing" class="border-r border-gray-200 pr-3 py-3">
        <slot name="trailing" />
      </div>

      <slot name="icon">
        <Icon v-if="icon" class="w-5 h-5 text-oc-text-400" :name="icon" />
      </slot>

      <div class="flex flex-1 items-baseline gap-x-2">
        <label v-if="isInlineLabel && label" class="text-oc-text-300">
          {{ label }}:
        </label>

        <div class="flex items-center gap-x-1 w-full">
          <span v-if="preFill" class="text-oc-text-300">{{ preFill }}</span>

          <input
            ref="inputRef"
            :type="inputType"
            :value="modelValue"
            :readonly="isReadonly"
            :placeholder="placeholder"
            :disabled="disabled"
            class="h-7 outline-none w-full text-oc-text disabled:bg-transparent disabled:text-oc-text-300 text-ellipsis placeholder:font-normal placeholder:text-oc-text-300 bg-oc-bg-light"
            v-bind="eventListeners"
            @focus="
              isFocused = true;
              $emit('focus');
            "
            @blur="
              isFocused = false;
              $emit('blur');
            "
            @input="$emit('update:modelValue', $event.target.value)"
          />
        </div>
      </div>

      <div v-if="$slots.leading" class="border-l border-gray-200 pl-3 py-3">
        <slot name="leading" />
      </div>
    </div>
  </BaseInput>
</template>
