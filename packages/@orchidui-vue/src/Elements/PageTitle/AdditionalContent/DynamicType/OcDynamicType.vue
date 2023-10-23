<script setup>
import BoxDetail from "./OcBoxDetail.vue";
import { CustomerCard } from "@orchid";
import BoxDetails from "./OcBoxDetails.vue";

defineProps({
  boxes: { type: Array, default: () => [] },
  isCustomer: { type: Boolean, default: false },
  customerCardVariant: { type: String, default: "big" },
  customer: { type: Object, default: null },
});
</script>

<template>
  <div class="flex gap-x-5">
    <BoxDetails
      v-for="(box, i) in boxes"
      :key="i"
      :class="isCustomer ? '!grid grid-cols-2 grid-rows-2 gap-y-4 !py-4' : ''"
    >
      <BoxDetail
        v-for="(field, j) in box"
        :key="`${i}-${j}`"
        :title="field.title"
        :content="field.content"
      />
    </BoxDetails>
    <CustomerCard
      v-if="isCustomer"
      :variant="customerCardVariant"
      :customer="customer"
    />
  </div>
</template>
