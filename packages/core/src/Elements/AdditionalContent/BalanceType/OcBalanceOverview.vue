<script setup>
import InfoCardButton from './OcInfoCardButton.vue'
import TopActions from './OcTopActions.vue'
import { Overview } from '@/orchidui-core'

defineProps({
  /** Array of overview row objects passed to the Overview component. */
  overviewItems: {
    type: Array,
    default: () => []
  },
  /** Array of tab objects (`value`, `title`, `content`, etc.) shown as InfoCardButtons at the top. */
  overviewTabs: {
    type: Array,
    default: () => []
  },
  /** Value of the currently active overview tab. */
  overviewActiveTab: {
    type: String,
    default: ''
  },
  /** Props forwarded to the secondary action Button in the top-actions bar. */
  secondaryButtonProps: Object,
  /** Props forwarded to the "more" (dots-vertical) Button in the top-actions bar. */
  moreButtonProps: Object,
  /** Extra CSS class applied to the Overview component container. */
  containerClass: String,
  /** Array of DropdownItem props rendered in the "more" dropdown menu. */
  dropdownItems: {
    type: Array,
    default: () => []
  },
  /** Array of payment method image URLs rendered by OcPaymentMethods. */
  paymentMethods: {
    type: Array,
    default: () => []
  },
  /** Show skeleton placeholders while data is loading. */
  isLoading: Boolean,
  /** Extra props forwarded to the Dropdown component in the top-actions bar. */
  dropdownProps: {
    type: Object,
    default: () => ({})
  }
})

defineEmits({
  /** An overview tab was clicked. Payload: the `value` of the selected tab. */
  changeTab: []
})
</script>

<template>
  <div class="flex flex-col gap-y-5">
    <div class="flex gap-x-5 overflow-x-auto">
      <template v-for="tab in isLoading ? 2 : overviewTabs">
        <slot :name="tab.value" :tab="tab">
          <InfoCardButton
            :key="tab.value"
            :title="tab.title"
            :is-loading="isLoading"
            :content="tab.content"
            :chip-options="tab.chipOptions"
            :is-dropdown="tab.isDropdown"
            :dropdown-options="tab.dropdownOptions"
            :is-active="tab.value === overviewActiveTab"
            :country-iso="tab.countryIso"
            @click="$emit('changeTab', tab.value)"
          />
        </slot>
      </template>
    </div>

    <div class="border-t border-oc-gray-200" />

    <TopActions
      :is-loading="isLoading"
      :more-button-props="moreButtonProps"
      :secondary-button-props="secondaryButtonProps"
      :payment-methods="paymentMethods"
      :dropdown-items="dropdownItems"
      :dropdown-props="dropdownProps"
    />

    <Overview
      :is-loading="isLoading"
      title=""
      :items="overviewItems"
      :container-class="containerClass"
    >
    <template v-for="(_, name) in $slots" #[name]="slotProps">
        <slot :name="name" v-bind="slotProps" />
      </template>
    </Overview>
  </div>
</template>
