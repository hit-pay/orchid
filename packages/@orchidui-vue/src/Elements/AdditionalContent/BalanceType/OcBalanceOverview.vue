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
  secondaryButtonProps: Object,
  moreButtonProps: Object,
  dropdownItems: {
    type: Array,
    default: () => [],
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

    <TopActions
      :more-button-props="moreButtonProps"
      :secondary-button-props="secondaryButtonProps"
      :dropdown-items="dropdownItems"
    />

    <Overview title="" :items="overviewItems">
      <template #warning>
        <slot name="warning" />
      </template>
    </Overview>
  </div>
</template>
