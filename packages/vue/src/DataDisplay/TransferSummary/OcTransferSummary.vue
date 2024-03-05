<script setup>
import { ListDetail } from '@/orchidui';
import { computed } from 'vue';

const props = defineProps({
  transfer: {
    type: Object,
    required: true,
  },

  hasFxData: Boolean,
});

const formattedSourceCurrency = computed(() => props.transfer.source_currency?.toUpperCase());
const formattedPaymentCurrency = computed(() => props.transfer.payment_currency?.toUpperCase());
const formattedTransferMethod = computed(() => props.transfer.transfer_method?.toUpperCase());
</script>

<template>
  <div class="bg-oc-bg-dark flex flex-col gap-3 p-4 rounded">
    <div v-if="hasFxData">
      <ListDetail
        class="justify-between font-medium [&>span]:text-base"
        label="FX Rate"
        :content="`${formattedSourceCurrency} ${transfer.source_amount}`"
        variant="big"
      />
      <span class="block text-right text-sm text-oc-text-400">
        {{ `${formattedPaymentCurrency} 1 = ${formattedSourceCurrency} ${transfer.exchange_rate}` }}
      </span>
    </div>
    <ListDetail
      class="justify-between font-medium [&>span]:text-base"
      label="Fee"
      :content="`${formattedSourceCurrency} ${transfer.fee}`"
      variant="big"
    />
    <div v-if="hasFxData">
      <ListDetail
        class="justify-between font-medium [&>span]:text-base"
        label="Transfer type"
        :content="`${formattedTransferMethod}`"
        variant="big"
      />
    </div>
  </div>
</template>
