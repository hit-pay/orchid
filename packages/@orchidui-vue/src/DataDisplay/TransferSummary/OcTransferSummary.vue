<script setup>
import { ListDetail } from '@/orchidui';

defineProps({
  transfer: {
    type: Object,
    required: true,
  },

  hasFxData: Boolean,
});
</script>

<template>
  <div class="bg-oc-bg-dark flex flex-col gap-3 p-4 rounded">
    <div v-if="hasFxData">
      <ListDetail
        class="justify-between"
        label="FX Rate"
        :content="`+${transfer.base_currency_amount}`"
        variant="big"
      />
      <span class="block text-right text-sm text-oc-text-400">{{
        `${transfer.transfer_currency} 1 = ${transfer.base_currency} ${transfer.fx_rate}`
      }}</span>
    </div>
    <ListDetail
      class="justify-between"
      label="Fee"
      :content="`${transfer.base_currency} ${transfer.fee}`"
      variant="big"
    />
    <div v-if="hasFxData">
      <ListDetail
        class="justify-between"
        label="Transfer type"
        :content="`${transfer.type?.toUpperCase()}`"
        variant="big"
      />
    </div>
  </div>
</template>
