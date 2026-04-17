<script setup>
import { Button, Skeleton, Dropdown, Tooltip, DropdownItem } from '@/orchidui-core'
import PaymentMethods from './OcPaymentMethods.vue'
import { ref } from 'vue'

defineProps({
  /** Props forwarded to the "more" (dots-vertical) Button that triggers the dropdown. */
  moreButtonProps: Object,
  /** Array of payment method image URLs rendered by OcPaymentMethods on the left side. */
  paymentMethods: {
    type: Array,
    default: () => []
  },
  /** Props forwarded to the secondary action Button (e.g. "Top up balance"). Supports an optional `tooltip` string. */
  secondaryButtonProps: Object,
  /** Show skeleton placeholders while data is loading. */
  isLoading: Boolean,
  /** Array of DropdownItem props rendered inside the "more" dropdown menu. */
  dropdownItems: {
    type: Array,
    default: () => []
  },
  /** Extra props forwarded to the Dropdown component. */
  dropdownProps: {
    type: Object,
    default: () => ({})
  }
})
const isOpen = ref(false)
</script>

<template>
  <div class="flex justify-between md:flex-row flex-col gap-y-3 gap-x-4 md:gap-y-0">
    <Skeleton v-if="isLoading" class="h-[20px] w-[322px] rounded-sm" />
    <PaymentMethods v-if="!isLoading && paymentMethods.length" :methods="paymentMethods" />
    <div v-else></div>
    <Skeleton v-if="isLoading" class="h-[20px] w-[168px] rounded-sm" />
    <div v-else class="flex shrink-0 gap-x-3">
      <Dropdown
        v-model="isOpen"
        :popper-options="{ strategy: 'fixed' }"
        placement="bottom"
        class="text-sm"
        v-bind="dropdownProps"
      >
        <Button left-icon="dots-vertical" variant="secondary" v-bind="moreButtonProps" />
        <template #menu>
          <DropdownItem v-for="(item, i) in dropdownItems" :key="i" v-bind="item" />
        </template>
      </Dropdown>
      <Tooltip :popper-options="{ strategy: 'fixed' }" position="top">
        <Button variant="secondary" label="Top up balance" v-bind="secondaryButtonProps" />
        <template v-if="secondaryButtonProps?.tooltip" #popper>
          {{ secondaryButtonProps.tooltip }}
        </template>
      </Tooltip>
    </div>
  </div>
</template>
