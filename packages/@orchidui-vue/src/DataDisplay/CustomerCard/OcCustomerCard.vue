<script setup>
import { Avatar, ListDetail } from "@/orchidui";

defineProps({
  variant: {
    type: String,
    default: "small",
    validator: (val) => ["small", "big", "float"].includes(val),
  },
  customer: Object,
});
</script>

<template>
  <div
    class="rounded w-[250px] shrink-0 border border-oc-gray-200 bg-oc-bg-light flex flex-col gap-y-3 p-4 customer-card"
    :class="variant"
  >
    <!--  Main  -->
    <div class="w-[166px] flex gap-x-3 items-center">
      <Avatar class="shrink-0" :size="32">
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
    <div v-if="variant !== 'small'" class="flex flex-col gap-y-4 pt-4">
      <ListDetail label="Phone" :content="customer.phone" />
      <ListDetail label="Address" :content="customer.address" />
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
