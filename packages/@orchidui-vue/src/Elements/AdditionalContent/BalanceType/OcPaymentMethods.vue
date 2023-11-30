<script setup>
const methods = ["paynow", "shopee-pay", "shop-back", "grab-pay", "atome"];
</script>

<template>
  <div class="flex items-center gap-x-4">
    <span class="text-xs font-medium text-oc-text-300 uppercase">
      Payment methods
    </span>
    <div class="flex gap-x-2">
      <!--   Need use img instead Icon component because pattern tag in svg icons (Icon not load svg files with pattern tag)   -->
      <img
        v-for="method in methods"
        :key="method"
        width="35"
        :alt="method"
        height="24"
        :src="`/icons/orchidui/payment-methods/${method}.svg`"
      />
    </div>
  </div>
</template>
