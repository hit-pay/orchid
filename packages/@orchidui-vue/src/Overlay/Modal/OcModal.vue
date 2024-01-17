<script setup>
import { Icon, Button } from "@/orchidui";
import { computed } from "vue";

const props = defineProps({
  isBorderless: Boolean,
  footerClass: {
    type: String,
    default: "justify-end",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  persistent: {
    type: Boolean,
    default: false,
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
  preventClose: {
    type: Boolean,
    default: false,
  },
  confirmButtonProps: {
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
const emit = defineEmits([
  "update:modelValue",
  "confirm",
  "cancel",
  "click:outside",
]);

const closeModal = () => {
  if (props.preventClose) {
    return;
  }

  emit("update:modelValue", false);
};

const onClickOutside = async () => {
  emit("click:outside");

  if (props.persistent) {
    return;
  }

  if (props.modelValue) {
    closeModal();
  }
};

const cancel = () => {
  emit("cancel");
  closeModal();
};

const sizeClasses = computed(() => ({
  default: "max-w-[640px]",
  medium: "max-w-[480px]",
  small: "max-w-[320px]",
}));
</script>

<template>
  <div
    v-if="modelValue"
    class="fixed w-screen z-[1007] top-0 left-0 h-full min-h-screen bg-black/[.45] flex items-center justify-center"
    @click="onClickOutside"
  >
    <div
      class="shadow-normal w-[calc(100%-40px)] bg-oc-bg-light rounded-xl flex flex-col"
      :class="sizeClasses[size]"
      @click.stop
    >
      <div
        class="flex border-oc-gray-200 gap-x-9 justify-between p-5 items-start"
        :class="!isBorderless ? 'border-b' : ''"
      >
        <slot name="header">
          <div class="flex flex-col gap-y-1 overflow-hidden">
            <span
              class="text-lg font-medium text-ellipsis overflow-hidden whitespace-nowrap"
            >
              {{ title }}
            </span>
            <span
              v-if="description"
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

      <div :class="isBorderless ? 'px-7' : 'p-7'">
        <slot></slot>
      </div>

      <div
        class="px-5 py-6 border-oc-gray-200 flex gap-x-4"
        :class="[
          footerClass,
          {
            'border-t': !isBorderless,
          },
        ]"
      >
        <slot name="footer">
          <Button
            label="Cancel"
            variant="secondary"
            class="min-w-[112px]"
            v-bind="cancelButtonProps"
            @click="cancel"
          />
          <Button
            label="OK"
            class="min-w-[112px]"
            v-bind="confirmButtonProps"
            @click="$emit('confirm')"
          />
        </slot>
      </div>
    </div>
  </div>
</template>
