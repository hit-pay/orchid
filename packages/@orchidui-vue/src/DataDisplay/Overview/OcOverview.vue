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
    <div
      class="flex gap-x-5 items-start md:flex-row flex-col gap-y-3 md:gap-y-0"
    >
      <OverviewItem
        v-for="(item, i) in items"
        :key="i"
        :title="item.title"
        class="flex-1"
        :class="item.class"
        :variant="item.variant"
        :tooltip="item.tooltip"
        :icon="item.icon"
        :content="item.content"
        :info="item.info"
      >
        <template v-if="item.isWarning" #warning>
          <slot name="warning" />
        </template>
      </OverviewItem>
    </div>
  </div>
</template>
