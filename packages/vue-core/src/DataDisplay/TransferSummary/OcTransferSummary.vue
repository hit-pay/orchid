<script setup>
import { ListDetail } from '@orchidui/vue-core'
import { computed } from 'vue'

const props = defineProps({
  transfer: {
    type: Object,
    required: true
  },

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
