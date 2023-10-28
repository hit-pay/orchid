<script setup>
import { Icon, Button } from "@orchid";
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "Title",
  },
  description: {
    type: String,
    default: "Description",
  },
  isCloseIcon: {
    type: Boolean,
    default: true,
  },
  cancelButtonProps: {
    type: Object,
    default: () => ({
      label: "Cancel",
      variant: "secondary",
    }),
  },
  okButtonProps: {
    type: Object,
    default: () => ({
      label: "OK",
      class: "min-w-[112px]",
    }),
  },
  size: {
    type: String,
    default: "default",
    validator: (val) => ["default", "medium", "small"].includes(val),
  },
});
const emit = defineEmits(["update:modelValue"]);

const onClickOutside = async () => {
  if (props.modelValue) {
    emit("update:modelValue", !props.modelValue);
  }
};
const sizeClasses = computed(() => ({
  default: "w-[640px]",
  medium: "w-[480px]",
  small: "w-[320px]",
}));
</script>

<template>
  <div
    v-if="modelValue"
    class="fixed w-screen z-[1007] top-0 left-0 h-screen bg-black/[.45] flex items-center justify-center"
    @click="onClickOutside"
  >
    <div
      class="shadow-normal bg-oc-bg-light rounded-xl flex flex-col"
      :class="sizeClasses[size]"
      @click.stop
    >
      <div
        class="flex border-b border-oc-gray-200 gap-x-9 justify-between p-5 items-start"
      >
        <slot name="header">
          <div class="flex flex-col gap-y-1 overflow-hidden">
            <span
              class="text-lg font-medium text-ellipsis overflow-hidden whitespace-nowrap"
            >
              {{ title }}
            </span>
            <span
              class="text-sm text-oc-text-300 text-ellipsis overflow-hidden whitespace-nowrap"
            >
              {{ description }}
            </span>
          </div>
          <div
            v-if="isCloseIcon"
            class="p-[6px] rounded cursor-pointer text-oc-gray-500 hover:bg-gray-100 hover:text-oc-text"
            @click="$emit('update:modelValue', false)"
          >
            <Icon name="x" width="20" height="20" />
          </div>
        </slot>
      </div>

      <div class="p-7">
        <slot> Default empty body</slot>
      </div>

      <div
        class="px-5 py-6 border-t border-oc-gray-200 flex justify-end gap-x-4"
      >
        <slot name="footer">
          <Button
            label="Cancel"
            variant="secondary"
            class="min-w-[112px]"
            v-bind="cancelButtonProps"
          />
          <Button label="OK" class="min-w-[112px]" v-bind="okButtonProps" />
        </slot>
      </div>
    </div>
  </div>
</template>
