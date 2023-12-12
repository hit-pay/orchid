<script setup>
import { computed } from "vue";
import OcTimeLine from "./components/OcTimeLine.vue";
import OcWebhook from "./components/OcWebhook.vue";

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
});
defineEmits(["more"]);

const getTypeComponent = computed(() => {
  switch (props.type) {
    case "timeLine":
      return OcTimeLine;
    case "webhook":
      return OcWebhook;
    default:
      return OcTimeLine;
  }
});
</script>

<template>
  <component :is="getTypeComponent" v-bind="props" @more="$emit('more')" />
</template>
