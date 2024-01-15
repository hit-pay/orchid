<script setup>
import { Modal } from "@/orchidui";
import { computed } from "vue";
import Confirmation from "./OcConfirmation.vue";

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "Are you sure?",
  },
  description: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "delete",
  },
  icon: String,
  labelConfirm: String,
  labelCancel: String,
});
const emit = defineEmits(["confirm", "cancel", "update:model-value"]);
const cancelButton = computed(() => ({
  delete: {},
  warning: {},
  success: {
    class: "hidden",
  },
  question: {
    label: "No",
  },
}));
const confirmButton = computed(() => ({
  delete: {
    label: "Delete",
    variant: "destructive",
  },
  warning: {
    label: "Delete",
    variant: "destructive",
  },
  success: {},
  question: {
    label: "Yes",
  },
}));

const emitModelValue = (e) => {
  emit("update:model-value", e);
  emit("cancel");
};
</script>

<template>
  <Modal
    size="small"
    :model-value="modelValue"
    :title="title"
    is-borderless
    :cancel-button-props="
      labelCancel
        ? {
            ...cancelButton[variant],
            label: labelCancel,
          }
        : cancelButton[variant]
    "
    :confirm-button-props="
      labelConfirm
        ? {
            ...confirmButton[variant],
            label: labelConfirm,
          }
        : confirmButton[variant]
    "
    footer-class="justify-center"
    @update:model-value="emitModelValue"
    @confirm="$emit('confirm')"
    @cancel="$emit('cancel')"
  >
    <Confirmation :variant="variant" :description="description" :icon="icon">
      <template v-if="$slots.description" #description>
        <slot name="description" />
      </template>
    </Confirmation>
  </Modal>
</template>
