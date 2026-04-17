<script setup>
import { ListDetail } from '@/orchidui-core'
import { computed } from 'vue'

const props = defineProps({
  /** Transfer data object with fields: `source_currency`, `payment_currency`, `fee_currency`, `fee`, `exchange_rate`, `transfer_method`. */
  transfer: {
    type: Object,
    required: true
  },
  /** Show the FX Rate row (only relevant when the transfer involves a currency exchange). */
  hasFxData: Boolean
})

const formattedSourceCurrency = computed(() => props.transfer.source_currency?.toUpperCase())
const formattedPaymentCurrency = computed(() => props.transfer.payment_currency?.toUpperCase())
const formattedFeeCurrency = computed(() => props.transfer.fee_currency?.toUpperCase())
const formattedTransferMethod = computed(() => props.transfer.transfer_method?.toUpperCase())
</script>

<template>
  <div class="bg-oc-bg-dark flex flex-col gap-3 p-4 rounded">
    <div v-if="hasFxData">
      <ListDetail
        class="justify-between font-medium [&>span]:text-base"
        label="FX Rate"
        :content="`${formattedSourceCurrency} 1 = ${formattedPaymentCurrency} ${transfer.exchange_rate}`"
        variant="big"
        :show-copy-tooltip="false"
      />
    </div>
    <ListDetail
      class="justify-between font-medium [&>span]:text-base"
      label="Fee"
      :content="`${formattedFeeCurrency} ${transfer.fee}`"
      variant="big"
      :show-copy-tooltip="false"
    />
    <div>
      <ListDetail
        class="justify-between font-medium [&>span]:text-base"
        label="Transfer type"
        :content="`${formattedTransferMethod}`"
        variant="big"
        :show-copy-tooltip="false"
      />
    </div>
  </div>
</template>
