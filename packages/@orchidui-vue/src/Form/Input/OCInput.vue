<script setup>
import { defineAsyncComponent, ref } from "vue";
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
  inlineLabel: {
    type: Boolean,
    default: false,
  },
  hint: {
    type: String,
    default: "This is a hint text to help user.",
  },
  placeholder: {
    type: String,
    default: "Placeholder",
  },
  icon: {
    type: String,
    default: "circle",
  },
  type: {
    type: String,
    default: "leading", // "trailing" | "leading"  | ""
  },
});
</script>

<template>
  <div class="flex flex-col gap-y-1">
    <!--  Label  -->
    <span v-if="!inlineLabel" class="text-xs text-oc-grey-400">{{
      label
    }}</span>

    <!--  Input wrapper  -->
    <div
      class="rounded-lg h-9 border flex items-center gap-x-2 px-2"
      :class="[
        {
          'shadow-[0_0_0_2px] shadow-oc-grey-200': isFocused,
        },
        !disabled && isError ? 'border-oc-error' : 'border-oc-grey-200',
        disabled ? 'bg-oc-bg' : 'bg-white',
      ]"
    >
      <slot v-if="type === 'trailing'" name="trailing">
        <Dropdown>
          <template #trigger>
            <MenuButton
              class="py-2 pr-2 border-r border-oc-grey-200 text-xs font-medium flex items-center gap-x-1 text-oc-grey-400"
            >
              USD
              <Icon class="w-3.5 h-3.5" name="chevron-down" />
            </MenuButton>
          </template>
        </Dropdown>
      </slot>

      <div v-if="icon">
        <Icon class="w-4 h-4 text-oc-grey-400" :name="icon" />
      </div>
      <div class="flex flex-1 items-baseline gap-x-1">
        <label v-if="inlineLabel" class="text-oc-grey-300 text-sm">
          {{ label }}:
        </label>
        <input
          :placeholder="placeholder"
          :disabled="disabled"
          class="text-sm h-6 outline-none text-oc-text disabled:bg-transparent placeholder:text-oc-grey-300"
          @focus="isFocused = true"
          @blur="isFocused = false"
        />
      </div>

      <slot v-if="type === 'leading'" name="leading">
        <Dropdown>
          <template #trigger>
            <MenuButton
              class="py-2 pl-2 border-l border-oc-grey-200 text-xs font-medium flex items-center gap-x-1 text-oc-grey-400"
            >
              USD
              <Icon class="w-3.5 h-3.5" name="chevron-down" />
            </MenuButton>
          </template>
        </Dropdown>
      </slot>
    </div>

    <!--  Hint  -->
    <span
      class="text-xs"
      :class="[!disabled && isError ? 'text-oc-error' : 'text-oc-grey-400']"
    >
      {{ hint }}
    </span>
  </div>
</template>
