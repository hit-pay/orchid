<script setup>
import { Chip, PrimaryActions } from "@orchid";
import Title from "@orchid/Elements/PageTitle/OcTitle.vue";
import BalanceOverview from "./BalanceType/OcBalanceOverview.vue";
import DynamicType from "./DynamicType/OcDynamicType.vue";

const props = defineProps({
  mainLink: { type: String, default: "" },
  userId: { type: String, default: "" },
  chipVariant: { type: String, default: "" },
  chipLabel: { type: String, default: "" },
  additionalTitle: { type: String, default: "" },
  tooltipContent: { type: String, default: "" },
  overviewActiveTab: { type: String, default: "" },
  customerCardVariant: { type: String, default: "" },
  customer: { type: Object, default: null },
  variant: {
    type: String,
    default: "default",
    validator: (val) => ["default", "dynamic", "balance"].includes(val),
  },
  boxes: { type: Array, default: () => [] },
  isCustomer: { type: Boolean, default: false },
  overviewItems: { type: Array, default: () => [] },
  overviewTabs: { type: Array, default: () => [] },
});

defineEmits({
  changeTab: [],
});
const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(props.mainLink + props.userId);
  } catch (err) {
    console.error("Unable to copy text to clipboard. Error: ", err);
  }
};
</script>

<template>
  <div class="pt-5 px-10">
    <Title
      v-if="variant === 'default'"
      :description="mainLink"
      :title="additionalTitle"
      class="border rounded py-4 px-5 border-oc-gray-200 bg-oc-gray-50 flex flex-col gap-y-2"
    >
      <template #title="{ title }">
        <div class="flex items-center gap-x-3">
          <span class="font-medium">{{ title }}</span>
          <Chip :variant="chipVariant" :label="chipLabel" />
        </div>
      </template>
      <template #description="{ description }">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-oc-text-400">
            {{ description }}<span class="text-oc-text">{{ userId }}</span>
          </span>
          <PrimaryActions :tooltip-content="tooltipContent" @copy="copyLink" />
        </div>
      </template>
    </Title>

    <DynamicType
      v-else-if="variant === 'dynamic'"
      :boxes="boxes"
      :customer-card-variant="customerCardVariant"
      :customer="customer"
      :is-customer="isCustomer"
    />

    <BalanceOverview
      v-else-if="variant === 'balance'"
      :overview-items="overviewItems"
      :overview-tabs="overviewTabs"
      :overview-active-tab="overviewActiveTab"
      @change-tab="$emit('changeTab', $event)"
    />
  </div>
</template>
