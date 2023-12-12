<script setup lang="ts">
import { ListUrl, Icon } from "@/orchidui";

defineProps({
  urls: {
    type: Array,
    default: () => [],
  },
  title: String,
  date: String,
});
defineEmits(["more"]);
</script>

<template>
  <div
    class="px-5 py-4 flex flex-col gap-y-5 rounded border border-gray-200 group hover:shadow-normal"
  >
    <div class="flex items-center justify-between">
      <div class="flex text-sm text-oc-text-400 items-center gap-x-2">
        <span v-if="title" class="text-base text-oc-text font-medium">
          {{ title }}
        </span>
        -
        <span v-if="date">{{ date }}</span>
      </div>
      <Icon
        name="dots-vertical"
        class="opacity-0 group-hover:opacity-100 cursor-pointer"
        @click="$emit('more')"
      />
    </div>
    <div v-if="urls?.length" class="flex flex-col gap-y-3">
      <ListUrl
        v-for="(url, i) in urls"
        :key="i"
        :title="url.title"
        :url="url.url"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
