<script setup>
import { ref } from 'vue'
import { AdditionalContent } from '@orchidui/core'

const activeTab = ref('hitpay')

const overviewItems = [
  { title: 'Total revenue', content: 'SGD 11,170.00', icon: 'coins',    iconProps: { class: 'text-oc-primary' },   isFooter: true },
  { title: 'This month',    content: 'SGD 1,870.00',  icon: 'coin',     iconProps: { class: 'text-oc-accent-1' } },
  { title: 'Completed',     content: '20',            icon: 'check',    iconProps: { class: 'text-oc-success' } },
  { title: 'Refunded',      content: '3',             icon: 'backward', iconProps: { class: 'text-oc-error' } }
]

const overviewTabs = [
  { title: 'HitPay Balance', content: 'SGD 1,110.00', value: 'hitpay', countryIso: 'SG' },
  { title: 'Card Balance',   content: 'SGD 1,000.00', value: 'card' }
]
</script>

<template>
  <AdditionalContent
    variant="balance"
    :overview-items="overviewItems"
    :overview-tabs="overviewTabs"
    :overview-active-tab="activeTab"
    @change-tab="activeTab = $event"
  />
</template>
