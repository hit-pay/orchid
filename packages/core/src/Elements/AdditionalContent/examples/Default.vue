<script setup>
import { AdditionalContent } from '@orchidui/core'

const primaryActions = {
  mainLinkAction: {
    tooltipContent: 'Preview Link',
    url: 'https://securecheckout.staging.hit-pay.com/payment-request/@minstore-edit43'
  },
  copyTooltipContent: 'Copy payment link',
  copiedTooltipContent: 'Payment link copied!',
  actions: [
    { isCopyButton: true },
    {
      icon: 'pencil',
      tooltipContent: 'Edit',
      onClick: () => console.log('edit clicked')
    }
  ]
}
</script>

<template>
  <AdditionalContent
    variant="default"
    main-link="https://securecheckout.staging.hit-pay.com/payment-request"
    user-id="/@minstore-edit43"
    additional-title="Premium Store"
    chip-variant="success"
    chip-label="Active"
    :primary-actions="primaryActions"
  />
</template>
