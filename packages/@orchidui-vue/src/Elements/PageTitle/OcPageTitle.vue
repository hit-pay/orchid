<script setup>
import Title from "./OcTitle.vue";
import Right from "./OcRight.vue";
import { AdditionalContent } from "@orchid";

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  mainLink: { type: String, default: "" },
  userId: { type: String, default: "" },
  chipVariant: { type: String, default: "" },
  chipLabel: { type: String, default: "" },
  additionalTitle: { type: String, default: "" },
  tooltipContent: { type: String, default: "" },
  additionalContentVariant: { type: String, default: "" },
  boxes: { type: Array, default: () => [] },
  overviewItems: { type: Array, default: () => [] },
  overviewTabs: { type: Array, default: () => [] },
  overviewActiveTab: { type: String, default: "" },
  customerCardVariant: { type: String, default: "" },
  isCustomer: { type: Boolean, default: false },
  customer: { type: Object, default: null },
  primaryButtonProps: Object,
  secondaryButtonProps: Object,
});
defineEmits({
  changeTab: [],
});
</script>

<template>
  <div class="pb-5 flex flex-col">
    <div class="flex flex-wrap w-full pt-5 px-10 gap-5">
      <Title
        :title="title"
        :description="description"
        class="flex-1 overflow-hidden"
      />

      <slot name="right">
        <Right
          class="shrink-0"
          :primary-button-props="primaryButtonProps"
          :secondary-button-props="secondaryButtonProps"
        />
      </slot>
    </div>

    <AdditionalContent
      :main-link="mainLink"
      :chip-label="chipLabel"
      :additional-title="additionalTitle"
      :chip-variant="chipVariant"
      :user-id="userId"
      :tooltip-content="tooltipContent"
      :variant="additionalContentVariant"
      :boxes="boxes"
      :overview-items="overviewItems"
      :overview-tabs="overviewTabs"
      :customer-card-variant="customerCardVariant"
      :is-customer="isCustomer"
      :customer="customer"
      :overview-active-tab="overviewActiveTab"
      @change-tab="$emit('changeTab', $event)"
    />
  </div>
</template>
