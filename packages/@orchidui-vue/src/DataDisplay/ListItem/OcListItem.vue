<script setup>
import { computed } from "vue";
import OcTimeLine from "./components/OcTimeLine.vue";
import OcWebhook from "./components/OcWebhook.vue";
import OcPayment from "./components/OcPayment.vue";
import OcGeneral from "./components/OcGeneral.vue";

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
  chips: {
    type: Array,
    default: () => [],
  },
  details: {
    type: Array,
    default: () => [],
  },
  isDisabled: Boolean,
});
defineEmits(["more", "edit", "delete", "click:item"]);

const getTypeComponent = computed(() => {
  switch (props.type) {
    case "timeLine":
      return OcTimeLine;
    case "webhook":
      return OcWebhook;
    case "payment":
      return OcPayment;
    case "general":
      return OcGeneral;
    default:
      return OcTimeLine;
  }
});
</script>

<template>
  <component
    :is="getTypeComponent"
    v-bind="props"
    :class="{ 'opacity-50': isDisabled }"
    @more="$emit('more')"
    @edit="$emit('edit')"
    @delete="$emit('delete')"
    @click="$emit('click:item')"
  >
    <template v-if="$slots.menu" #menu>
      <slot name="menu" />
    </template>
    <template v-if="$slots.logo" #logo>
      <slot name="logo" />
    </template>
    <template v-if="$slots.description" #description>
      <slot name="description" />
    </template>
  </component>
</template>
