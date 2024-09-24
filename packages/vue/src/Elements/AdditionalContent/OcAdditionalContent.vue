<script setup>
import { Chip, PrimaryActions } from '@/orchidui'
import OcTitle from '@/orchidui/Elements/PageTitle/OcTitle.vue'
import BalanceOverview from './BalanceType/OcBalanceOverview.vue'
import DynamicType from './DynamicType/OcDynamicType.vue'

const props = defineProps({
  mainLink: { type: String, default: '' },
  balanceContainerClass: { type: String, default: '' },
  userId: { type: String, default: '' },
  chipVariant: { type: String, default: '' },
  chipLabel: { type: String, default: '' },
  additionalTitle: { type: String, default: '' },
  primaryActions: { type: Object, default: null },
  overviewActiveTab: { type: String, default: '' },
  customerCardVariant: { type: String, default: '' },
  customer: { type: Object, default: null },
  customerIsHover: { type: Boolean, default: false },
  customerIsEdit: { type: Boolean, default: false },
  variant: {
    type: String,
    default: 'default',
    validator: (val) => ['default', 'dynamic', 'balance'].includes(val)
  },
  boxes: { type: Array, default: () => [] },
  isCustomer: { type: Boolean, default: false },
  isLoading: { type: Boolean, default: false },
  overviewItems: { type: Array, default: () => [] },
  overviewTabs: { type: Array, default: () => [] },
  secondaryButtonProps: { type: Object, default: null },
  moreButtonProps: { type: Object, default: null },
  dropdownProps: {
    type: Object,
    default: () => ({})
  },
  dropdownItems: { type: Array, default: () => [] },
  paymentMethods: { type: Array, default: () => [] },
  additionalStyling: { type: String, default: '' },
  href: { type: String, default: '' }
})

defineEmits({
  changeTab: [],
  addCustomer: [],
  editCustomer: []
})
const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(props.mainLink + props.userId)
  } catch (err) {
    console.error('Unable to copy text to clipboard. Error: ', err)
  }
}
</script>

<template>
  <div class="md:pt-5 pt-0 md:px-10 px-5">
    <OcTitle
      v-if="variant === 'default'"
      :description="mainLink"
      :title="additionalTitle"
      class="border rounded md:py-4 py-3 md:px-5 px-4 border-oc-gray-200 bg-oc-gray-50 flex flex-col gap-y-2"
      :class="additionalStyling"
    >
      <template #title>
        <div class="flex items-center gap-x-3">
          <span class="font-medium">{{ additionalTitle }}</span>
          <Chip v-if="chipVariant" :variant="chipVariant" :label="chipLabel" />
        </div>
      </template>
      <template #description>
        <div class="flex items-center gap-x-2 max-w-full">
          <a
            :href="href || `${mainLink}${userId}`"
            target="_blank"
            class="text-oc-text-400 flex items-center overflow-hidden cursor-pointer"
          >
            <div class="truncate">{{ mainLink }}</div>
            <div class="text-oc-text whitespace-nowrap">{{ userId }}</div>
          </a>
          <PrimaryActions :primary-actions="primaryActions" @copy="copyLink" />
        </div>
      </template>
    </OcTitle>

    <DynamicType
      v-else-if="variant === 'dynamic'"
      :boxes="boxes"
      :customer-card-variant="customerCardVariant"
      :customer="customer"
      :is-customer="isCustomer"
      :customer-is-hover="customerIsHover"
      :customer-is-edit="customerIsEdit"
      :class="additionalStyling"
      @add-customer="$emit('addCustomer')"
      @edit-customer="$emit('editCustomer', $event)"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </DynamicType>

    <BalanceOverview
      v-else-if="variant === 'balance'"
      :overview-items="overviewItems"
      :overview-tabs="overviewTabs"
      :secondary-button-props="secondaryButtonProps"
      :more-button-props="moreButtonProps"
      :overview-active-tab="overviewActiveTab"
      :container-class="balanceContainerClass"
      :payment-methods="paymentMethods"
      :dropdown-items="dropdownItems"
      :dropdown-props="dropdownProps"
      :class="additionalStyling"
      :is-loading="isLoading"
      @change-tab="$emit('changeTab', $event)"
    >
      <template v-for="(_, name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData" />
      </template>
    </BalanceOverview>
  </div>
</template>
