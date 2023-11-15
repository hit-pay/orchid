<script setup>
import Title from "./OcTitle.vue";
import { PageTitleRight, AdditionalContent, Button } from "@/orchidui";

defineProps({
  title: { type: String, required: true },
  description: { type: String },
  mainLink: { type: String, default: "" },
  userId: { type: String, default: "" },
  chipVariant: { type: String, default: "" },
  chipLabel: { type: String, default: "" },
  additionalTitle: { type: String, default: "" },
  primaryActions: { type: Object, default: null },
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
  isBack: { type: Boolean, default: false },
});
defineEmits({
  changeTab: [],
  back: [],
});
</script>

<template>
  <div class="md:pb-5 pb-4 flex flex-col">
    <div class="flex flex-col gap-y-3 pt-4 md:pt-5 px-5 md:px-10">
      <Button
        v-if="isBack"
        size="small"
        icon-class="rotate-90"
        variant="secondary"
        is-transparent
        label="Back"
        left-icon="chevron-down"
        class="self-start"
        @click="$emit('back')"
      />
      <div class="flex w-full gap-5">
        <Title
          :title="title"
          :description="description"
          class="flex-1 overflow-hidden"
        />

        <slot name="right">
          <PageTitleRight
            class="shrink-0"
            :primary-button-props="primaryButtonProps"
            :secondary-button-props="secondaryButtonProps"
          />
        </slot>
      </div>
    </div>

    <AdditionalContent
      v-if="additionalContentVariant"
      :main-link="mainLink"
      :chip-label="chipLabel"
      :additional-title="additionalTitle"
      :chip-variant="chipVariant"
      :user-id="userId"
      :primary-actions="primaryActions"
      :variant="additionalContentVariant ?? 'default'"
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
