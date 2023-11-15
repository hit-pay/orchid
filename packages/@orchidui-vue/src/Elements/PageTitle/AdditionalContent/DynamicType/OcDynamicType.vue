<script setup>
import { CustomerCard, OverviewItem } from "@/orchidui";
import BoxDetails from "./OcBoxDetails.vue";

defineProps({
  boxes: { type: Array, default: () => [] },
  isCustomer: { type: Boolean, default: false },
  customerCardVariant: { type: String, default: "big" },
  customer: { type: Object, default: null },
});
</script>

<template>
  <div class="flex md:gap-5 gap-3 md:flex-row flex-col">
    <BoxDetails
      v-for="(box, i) in boxes"
      :key="i"
      :class="isCustomer ? '!grid grid-cols-2 grid-rows-2 gap-y-4 !py-4' : ''"
    >
      <OverviewItem
        v-for="(field, j) in box"
        :key="`${i}-${j}`"
        is-transparent
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
