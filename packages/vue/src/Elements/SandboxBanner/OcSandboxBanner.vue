<script setup lang="ts">
import { Chip } from "@/orchidui";

defineProps({
  title: {
    type: String,
    default: "",
  },
  chipProps: {
    type: Object,
    default: () => null,
  },
});
</script>

<template>
  <div
    class="w-screen relative h-[40px] bg-oc-error flex items-center justify-center text-white"
  >
    <span>
      {{ title || "You are using test data. Real money won’t be charged" }}
    </span>

    <Chip v-if="chipProps" class="absolute left-[40px]" v-bind="chipProps" />
  </div>
</template>

<style scoped lang="scss"></style>
