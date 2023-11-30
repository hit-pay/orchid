<script setup lang="ts">
import { Modal } from "@/orchidui";
import { computed } from "vue";
import Confirmation from "./OcConfirmation.vue";

defineProps({
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
});
defineEmits(["confirm"]);
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
</script>

<template>
  <Modal
    size="small"
    :model-value="true"
    :title="title"
    is-borderless
    :cancel-button-props="cancelButton[variant]"
    :confirm-button-props="confirmButton[variant]"
    footer-class="justify-center"
    @confirm="$emit('confirm')"
  >
    <Confirmation :variant="variant" :description="description" />
  </Modal>
</template>
