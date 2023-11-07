<script setup>
import { Button } from "@/orchidui";
import PaymentMethods from "./OcPaymentMethods.vue";
</script>

<template>
  <div class="flex justify-between">
    <PaymentMethods />

    <div class="flex gap-x-3">
      <Button left-icon="dots-vertical" variant="secondary" />
      <Button variant="secondary" label="Top up balance" />
    </div>
  </div>
</template>
