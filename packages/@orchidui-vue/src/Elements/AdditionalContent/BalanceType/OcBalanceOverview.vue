<script setup>
import InfoCardButton from "./OcInfoCardButton.vue";
import TopActions from "./OcTopActions.vue";
import { Overview } from "@/orchidui";

defineProps({
  overviewItems: {
    type: Array,
    default: () => [],
  },
  overviewTabs: {
    type: Array,
    default: () => [],
  },
  overviewActiveTab: {
    type: String,
    default: "",
  },
});

defineEmits({
  changeTab: [],
});
</script>

<template>
  <div class="flex flex-col gap-y-5">
    <div class="flex gap-x-5">
      <InfoCardButton
        v-for="tab in overviewTabs"
        :key="tab.value"
        :title="tab.title"
        :content="tab.content"
        :is-active="tab.value === overviewActiveTab"
        @click="$emit('changeTab', tab.value)"
      />
    </div>

    <div class="border-t border-oc-gray-200" />

    <TopActions />

    <Overview title="" :items="overviewItems" />
  </div>
</template>
