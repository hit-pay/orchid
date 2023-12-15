<script setup>
import { computed } from "vue";
import OcTimeLine from "./components/OcTimeLine.vue";
import OcWebhook from "./components/OcWebhook.vue";
import OcPayment from "./components/OcPayment.vue";

const props = defineProps({
  isActive: Boolean,
  title: String,
  description: String,
  icon: String,
  iconClass: String,
  iconText: String,
  date: String,
  type: {
    type: String,
    default: "timeLine",
  },
  urls: {
    type: Array,
    default: () => [],
  },
  paymentMethods: {
    type: Array,
    default: () => [],
  },
});
defineEmits(["more", "edit", "delete"]);

const getTypeComponent = computed(() => {
  switch (props.type) {
    case "timeLine":
      return OcTimeLine;
    case "webhook":
      return OcWebhook;
    case "payment":
      return OcPayment;
    default:
      return OcTimeLine;
  }
});
</script>

<template>
  <component
    :is="getTypeComponent"
    v-bind="props"
    @more="$emit('more')"
    @edit="$emit('edit')"
    @delete="$emit('delete')"
  >
    <template v-if="$slots.menu" #menu>
      <slot name="menu" />
    </template>
  </component>
</template>
