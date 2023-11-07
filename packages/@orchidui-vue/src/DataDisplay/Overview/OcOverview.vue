<script setup>
import { OverviewItem } from "@/orchidui";

defineProps({
  title: String,
  items: Array,
});
</script>

<template>
  <div class="flex gap-y-3 flex-col text-lg font-medium">
    <span v-if="title">{{ title }}</span>
    <div class="flex gap-x-5">
      <OverviewItem
        v-for="(item, i) in items"
        :key="i"
        :title="item.title"
        :variant="item.variant"
        :icon="item.icon"
        :content="item.content"
        :info="item.info"
      />
    </div>
  </div>
</template>
