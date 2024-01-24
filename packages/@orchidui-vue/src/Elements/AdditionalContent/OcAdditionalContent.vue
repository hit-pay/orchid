<script setup>
import { Chip, PrimaryActions } from "@/orchidui";
import Title from "@/orchidui/Elements/PageTitle/OcTitle.vue";
import BalanceOverview from "./BalanceType/OcBalanceOverview.vue";
import DynamicType from "./DynamicType/OcDynamicType.vue";

const props = defineProps({
  mainLink: { type: String, default: "" },
  userId: { type: String, default: "" },
  chipVariant: { type: String, default: "" },
  chipLabel: { type: String, default: "" },
  additionalTitle: { type: String, default: "" },
  primaryActions: { type: Object, default: null },
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
  secondaryButtonProps: { type: Object, default: null },
  moreButtonProps: { type: Object, default: null },
  dropdownItems: { type: Array, default: () => [] },
  paymentMethods: { type: Array, default: () => [] },
});

defineEmits({
  changeTab: [],
  addCustomer: [],
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
  <div class="md:pt-5 pt-0 md:px-10 px-5">
    <Title
      v-if="variant === 'default'"
      :description="mainLink"
      :title="additionalTitle"
      class="border rounded md:py-4 py-3 md:px-5 px-4 border-oc-gray-200 bg-oc-gray-50 flex flex-col gap-y-2"
    >
      <template #title="{ title }">
        <div class="flex items-center gap-x-3">
          <span class="font-medium">{{ title }}</span>
          <Chip :variant="chipVariant" :label="chipLabel" />
        </div>
      </template>
      <template #description="{ description }">
        <div class="flex items-center gap-x-2">
          <div class="text-oc-text-400 flex items-center overflow-hidden">
            <div class="truncate">{{ description }}</div>
            <div class="text-oc-text">{{ userId }}</div>
          </div>
          <PrimaryActions :primary-actions="primaryActions" @copy="copyLink" />
        </div>
      </template>
    </Title>

    <DynamicType
      v-else-if="variant === 'dynamic'"
      :boxes="boxes"
      :customer-card-variant="customerCardVariant"
      :customer="customer"
      :is-customer="isCustomer"
      @add-customer="$emit('addCustomer')"
    >
      <template v-for="box in boxes" v-slot:[box.slot]="{ data }">
        <slot :name="box.slot" :data="data"></slot>
      </template>
    </DynamicType>

    <BalanceOverview
      v-else-if="variant === 'balance'"
      :overview-items="overviewItems"
      :overview-tabs="overviewTabs"
      :secondary-button-props="secondaryButtonProps"
      :more-button-props="moreButtonProps"
      :overview-active-tab="overviewActiveTab"
      :payment-methods="paymentMethods"
      :dropdown-items="dropdownItems"
      @change-tab="$emit('changeTab', $event)"
    >
      <template v-if="$slots.warning" #warning>
        <slot name="warning" />
      </template>
    </BalanceOverview>
  </div>
</template>
