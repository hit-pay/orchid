<script setup>
import { Chip, PrimaryActions, Skeleton } from '@/orchidui-core'
import OcTitle from '@/orchidui-core/Elements/PageTitle/OcTitle.vue'
import BalanceOverview from './BalanceType/OcBalanceOverview.vue'
import DynamicType from './DynamicType/OcDynamicType.vue'

const props = defineProps({
  /** Base URL prefix shown next to the userId link (e.g. `'https://app.hitpay.com/customers/'`). */
  mainLink: { type: String, default: '' },
  /** Extra CSS class applied to the BalanceOverview container element. */
  balanceContainerClass: { type: String, default: '' },
  /** Entity identifier appended to `mainLink` to form the full link URL. */
  userId: { type: String, default: '' },
  /** Chip color variant shown next to the title in the default variant. */
  chipVariant: { type: String, default: '' },
  /** Chip label text shown next to the title in the default variant. */
  chipLabel: { type: String, default: '' },
  /** Title / heading text shown in the default and dynamic variants. */
  additionalTitle: { type: String, default: '' },
  /** Primary actions config object forwarded to OcPrimaryActions (copy, link, dropdown buttons). */
  primaryActions: { type: Object, default: null },
  /** Currently active overview tab value (balance variant only). */
  overviewActiveTab: { type: String, default: '' },
  /** Variant passed to the CustomerCard component. */
  customerCardVariant: { type: String, default: '' },
  /** Customer data object passed to the CustomerCard component. */
  customer: { type: Object, default: null },
  /** Enable hover state on the CustomerCard. */
  customerIsHover: { type: Boolean, default: false },
  /** Enable edit mode on the CustomerCard. */
  customerIsEdit: { type: Boolean, default: false },
  /**
   * Layout variant that controls which child component is rendered.
   * @values default, dynamic, balance
   */
  variant: {
    type: String,
    default: 'default',
    validator: (val) => ['default', 'dynamic', 'balance'].includes(val)
  },
  /** Array of box group objects passed to the dynamic variant (each with `items` array of OverviewItem props). */
  boxes: { type: Array, default: () => [] },
  /** Show a CustomerCard in the dynamic variant. */
  isCustomer: { type: Boolean, default: false },
  /** Show skeleton placeholders while data is loading. */
  isLoading: { type: Boolean, default: false },
  /** Array of overview row objects passed to the balance variant Overview component. */
  overviewItems: { type: Array, default: () => [] },
  /** Array of tab objects shown as InfoCardButtons in the balance variant. */
  overviewTabs: { type: Array, default: () => [] },
  /** Props forwarded to the secondary action Button in the balance variant top-actions bar. */
  secondaryButtonProps: { type: Object, default: null },
  /** Props forwarded to the "more" Button in the balance variant top-actions bar. */
  moreButtonProps: { type: Object, default: null },
  /** Extra props forwarded to the Dropdown component in the balance variant. */
  dropdownProps: {
    type: Object,
    default: () => ({})
  },
  /** Array of DropdownItem props rendered inside the "more" dropdown in the balance variant. */
  dropdownItems: { type: Array, default: () => [] },
  /** Array of payment method image URLs rendered in the balance variant. */
  paymentMethods: { type: Array, default: () => [] },
  /** Extra CSS class applied to the rendered variant's root element. */
  additionalStyling: { type: String, default: '' },
  /** Override URL for the entity link (defaults to `mainLink + userId`). */
  href: { type: String, default: '' }
})

defineEmits({
  /** Overview tab clicked in the balance variant. Payload: the tab value. */
  changeTab: [],
  /** "Add customer" button clicked in the dynamic variant. */
  addCustomer: [],
  /** "Edit customer" action triggered. Payload: customer event data. */
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
  <div class="md:pb-4 md:px-7 px-5">
    <OcTitle
      v-if="variant === 'default'"
      :description="mainLink"
      :title="additionalTitle"
      class="border rounded md:py-4 py-3 md:px-5 px-4 border-oc-gray-200 bg-oc-gray-50 flex flex-col gap-y-2"
      :class="additionalStyling"
    >
      <template #title>
        <div v-if="!isLoading" class="flex items-center gap-x-3">
          <span class="font-medium">{{ additionalTitle }}</span>
          <Chip v-if="chipVariant" :variant="chipVariant" :label="chipLabel" />
        </div>
        <div v-else class="flex h-[24px] items-center gap-x-3">
          <Skeleton class="w-[200px] h-[18px] rounded" />
          <Skeleton v-if="chipVariant" class="w-[100px] h-[24px] rounded" />
        </div>
      </template>
      <template #description>
        <div v-if="!isLoading" class="flex items-center gap-x-2 max-w-full">
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
        <div v-else class="flex items-center h-[30px] gap-x-2 w-full">
          <Skeleton class="w-1/2 h-[20px] rounded" />
          <Skeleton class="w-[30px] h-[24px] rounded" />
          <Skeleton class="w-[30px] h-[24px] rounded" />
          <Skeleton class="w-[30px] h-[24px] rounded" />
          <Skeleton class="w-[30px] h-[24px] rounded" />
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
