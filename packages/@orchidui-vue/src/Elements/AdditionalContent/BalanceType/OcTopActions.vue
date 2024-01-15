<script setup>
import { Button, Dropdown, Tooltip, DropdownItem } from "@/orchidui";
import PaymentMethods from "./OcPaymentMethods.vue";
import { ref } from "vue";

defineProps({
  moreButtonProps: Object,
  paymentMethods: {
    type: Array,
    default: () => [],
  },
  secondaryButtonProps: Object,
  dropdownItems: {
    type: Array,
    default: () => [],
  },
});
const isOpen = ref(false);
</script>

<template>
  <div class="flex justify-between md:flex-row flex-col gap-y-3 md:gap-y-0">
    <PaymentMethods v-if="paymentMethods.length" :methods="paymentMethods" />

    <div class="flex gap-x-3">
      <Dropdown
        v-model="isOpen"
        :popper-options="{ strategy: 'fixed' }"
        placement="bottom"
        class="text-sm"
      >
        <Button
          left-icon="dots-vertical"
          variant="secondary"
          v-bind="moreButtonProps"
        />
        <template #menu>
          <DropdownItem
            v-for="(item, i) in dropdownItems"
            :key="i"
            v-bind="item"
          />
        </template>
      </Dropdown>
      <Tooltip :popper-options="{ strategy: 'fixed' }" position="top">
        <Button
          variant="secondary"
          label="Top up balance"
          v-bind="secondaryButtonProps"
        />
        <template v-if="secondaryButtonProps?.tooltip" #popper>
          {{ secondaryButtonProps.tooltip }}
        </template>
      </Tooltip>
    </div>
  </div>
</template>
