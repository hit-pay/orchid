<script setup>
import { computed, defineAsyncComponent, ref } from "vue";
import BaseInput from "../../Form/BaseInput/OcBaseInput.vue";

const Icon = defineAsyncComponent(() =>
  import("../../MediaAndIcons/Icon/OcIcon.vue"),
);

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
    type: String,
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
  placeholder: {
    type: String,
    default: "Placeholder",
  },
  icon: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "",
  },
});

defineEmits({
  "update:modelValue": [],
  blur: [],
});
const isFocused = ref(false);
const inputClasses = computed(() => [
  {
    "shadow-[0_0_0_2px]": isFocused.value,
  },
  !props.disabled && props.errorMessage
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
  >
    <div
      class="rounded h-[36px] border flex items-center gap-x-3 px-3 cursor-pointer"
      :class="inputClasses"
      @click="$refs.inputRef?.focus()"
    >
      <slot v-if="type === 'trailing'" name="trailing" />

      <slot name="icon">
        <Icon v-if="icon" class="w-5 h-5 text-oc-text-400" :name="icon" />
      </slot>

      <div class="flex flex-1 items-baseline gap-x-2">
        <label v-if="isInlineLabel" class="text-oc-text-300">
          {{ label }}:
        </label>
        <input
          ref="inputRef"
          :value="modelValue"
          :placeholder="placeholder"
          :disabled="disabled"
          class="h-7 outline-none w-full text-oc-text disabled:bg-transparent placeholder:font-normal placeholder:text-oc-text-300"
          @focus="isFocused = true"
          @blur="
            isFocused = false;
            $emit('blur');
          "
          @input="$emit('update:modelValue', $event.target.value)"
        />
      </div>

      <slot v-if="type === 'leading'" name="leading" />
    </div>
  </BaseInput>
</template>
