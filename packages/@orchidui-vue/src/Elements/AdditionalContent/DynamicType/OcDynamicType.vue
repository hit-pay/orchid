<script setup>
import { CustomerCard, OverviewItem, Icon, Tooltip } from "@/orchidui";
import BoxDetails from "./OcBoxDetails.vue";

defineProps({
  boxes: { type: Array, default: () => [] },
  isCustomer: { type: Boolean, default: false },
  customerCardVariant: { type: String, default: "big" },
  customer: { type: Object, default: null },
});
defineEmits(["addCustomer"]);
</script>

<template>
  <div class="flex md:gap-5 gap-3 md:flex-row flex-col">
    <BoxDetails
      v-for="(box, i) in boxes"
      :key="i"
      :class="
        isCustomer ? '!grid grid-cols-4 grid-rows-2 gap-y-4 w-full !py-4' : ''
      "
    >
      <OverviewItem
        v-for="(field, j) in box.items"
        :key="`${i}-${j}`"
        is-transparent
        :title="field.title"
        :content="field.content"
      />
      <div v-if="box.showInfo" class="p-2">
        <Tooltip>
          <Icon
            width="16"
            height="16"
            class="!w-[20px] !h-[20px] text-oc-text-300"
            name="information"
          />
          <template #popper>
            <div class="py-2 px-3">{{ box.infoTooltip }}</div>
          </template>
        </Tooltip>
      </div>
    </BoxDetails>
    <CustomerCard
      v-if="isCustomer"
      :variant="customerCardVariant"
      :customer="customer"
      @add-customer="$emit('addCustomer')"
    />
  </div>
</template>
