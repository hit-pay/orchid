<script setup>
import InfoCardButton from './OcInfoCardButton.vue'
import TopActions from './OcTopActions.vue'
import { Overview } from '@orchidui/vue-core'

defineProps({
  overviewItems: {
    type: Array,
    default: () => []
  },
  overviewTabs: {
    type: Array,
    default: () => []
  },
  overviewActiveTab: {
    type: String,
    default: ''
  },
  secondaryButtonProps: Object,
  moreButtonProps: Object,
  containerClass: String,
  dropdownItems: {
    type: Array,
    default: () => []
  },
  paymentMethods: {
    type: Array,
    default: () => []
  },
  isLoading: Boolean,
  dropdownProps: {
    type: Object,
    default: () => ({})
  }
})

defineEmits({
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
      <template #warning>
        <slot name="warning" />
      </template>
    </Overview>
  </div>
</template>
