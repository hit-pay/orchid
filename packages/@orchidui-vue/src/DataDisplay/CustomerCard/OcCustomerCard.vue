<script setup>
import { Avatar, ListDetail, Button, Icon } from "@/orchidui";

defineProps({
  variant: {
    type: String,
    default: "small",
    validator: (val) => ["small", "big", "float"].includes(val),
  },
  customer: Object,
});
defineEmits(["addCustomer"]);
</script>

<template>
  <div
    class="rounded shrink-0 border border-oc-gray-200 bg-oc-bg-light flex items-center justify-between gap-4 px-4 py-5 customer-card"
    :class="variant"
  >
    <div
      class="flex flex-col items-center justify-center gap-y-3"
    >
      <template v-if="customer">
        <!--  Main  -->
        <div class="w-full flex gap-x-3 items-center">
          <Avatar class="shrink-0 uppercase" :size="32">
            {{ customer?.name?.[0] || "J" }}
          </Avatar>
          <div class="flex flex-col font-medium">
            <span>{{ customer?.name || "John" }}</span>
            <span class="text-sm text-oc-text-400">
              {{ customer?.email || "Doe" }}
            </span>
          </div>
        </div>

        <!--  Detail  -->
        <div v-if="variant !== 'small'" class="flex flex-col gap-y-4 pt-4 w-full">
          <ListDetail
            label="Phone"
            :content="customer?.phone_number ? `+${customer.phone_number}` : '-'"
          />
          <ListDetail
            label="Address"
            :content="
              [
                customer?.address?.postal_code || '',
                customer?.address.country || '',
                customer?.address?.city || '',
              ]
                .join(' ')
                .trim() || '-'
            "
          />
        </div>
      </template>

      <template v-else>
        <div class="flex flex-col gap-y-2 w-full items-center">
          <Avatar :size="32">
            <Icon name="user-add" width="16" height="16" />
          </Avatar>
          <div class="flex flex-col font-medium text-center">
            <span>No customer attached</span>
            <span class="text-sm text-oc-text-400">
              Add customer detail to this transaction
            </span>
          </div>
        </div>
        <Button
          variant="secondary"
          size="small"
          class="w-full"
          label="Add customer"
          @click="$emit('addCustomer')"
        />
      </template>
    </div>
    <div v-if="$slots.leading">
      <slot name="leading" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.customer-card {
  &.float {
    box-shadow: var(--oc-shadow-normal);
  }
}
</style>
