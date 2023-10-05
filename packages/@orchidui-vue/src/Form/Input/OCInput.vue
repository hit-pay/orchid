<script setup>
import { defineAsyncComponent, ref, defineModel } from "vue";
import { MenuButton } from "@headlessui/vue";

const Icon = defineAsyncComponent(() =>
  import("../../MediaAndIcons/Icon/OCIcon.vue"),
);
const Dropdown = defineAsyncComponent(() =>
  import("../../Overlay/Dropdown/OCDropdown.vue"),
);
const isFocused = ref(false);
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  isError: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "Label",
  },
  modelValue: {
    type: String,
    default: "",
  },
  inlineLabel: {
    type: Boolean,
    default: false,
  },
  hint: {
    type: String,
    default: "",
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
});
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <!--  Label  -->
    <span
      v-if="!inlineLabel"
      class="flex items-center h-[18px] font-medium text-oc-text-400"
      >{{ label }}</span
    >

    <!--  Input wrapper  -->
    <div
      class="rounded-lg h-[36px] border flex items-center gap-x-3 px-3"
      :class="[
        {
          'shadow-[0_0_0_2px]': isFocused,
        },
        !disabled && isError
          ? 'border-oc-error shadow-oc-error'
          : 'border-oc-grey-200 shadow-oc-grey-200',
        disabled ? 'bg-oc-bg-dark pointer-events-none' : 'bg-white',
      ]"
    >
      <slot v-if="type === 'trailing'" name="trailing">
        <Dropdown>
          <template #trigger>
            <MenuButton
              class="py-3 pr-3 border-r border-oc-grey-200 text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
            >
              <span class="flex items-center h-[18px]">USD</span>
              <Icon class="w-[14px] h-[14px]" name="chevron-down" />
            </MenuButton>
          </template>
        </Dropdown>
      </slot>

      <div v-if="icon">
        <Icon class="w-4 h-4 text-oc-text-400" :name="icon" />
      </div>
      <div class="flex flex-1 items-baseline gap-x-2">
        <label v-if="inlineLabel" class="text-oc-text-300">
          {{ label }}:
        </label>
        <input
          :value="modelValue"
          :placeholder="placeholder"
          :disabled="disabled"
          class="h-7 outline-none text-oc-text font-medium disabled:bg-transparent placeholder:font-normal placeholder:text-oc-text-300"
          @focus="isFocused = true"
          @blur="isFocused = false"
          @input="$emit('update:modelValue', $event.target.value)"
        />
      </div>

      <slot v-if="type === 'leading'" name="leading">
        <Dropdown>
          <template #trigger>
            <MenuButton
              class="py-3 pl-3 border-l border-oc-grey-200 text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
            >
              <span class="flex items-center h-[18px]">USD</span>
              <Icon class="w-[14px] h-[14px]" name="chevron-down" />
            </MenuButton>
          </template>
        </Dropdown>
      </slot>
    </div>

    <!--  Hint  -->
    <span
      v-if="hint"
      class="h-[18px] flex items-center"
      :class="[!disabled && isError ? 'text-oc-error' : 'text-oc-text-400']"
    >
      {{ hint }}
    </span>
  </div>
</template>
