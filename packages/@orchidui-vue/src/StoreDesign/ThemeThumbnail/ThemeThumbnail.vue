<script setup>
import { Button, Chip } from "@/orchidui";
defineProps({
  thumbnail: String,
  title: String,
  description: String,
  active: String,
  pro: String,
});
defineEmits(["activate", "customize", "preview", "upgrade"]);
</script>
<template>
  <div class="bg-oc-bg-dark rounded-lg flex flex-col">
    <div class="w-full relative group">
      <div
        class="w-full h-full bg-black/25 absolute top-0 left-0 hidden group-hover:flex rounded-t-lg"
      >
        <div v-if="active" class="m-auto">
          <Button variant="secondary" label="Customize" />
        </div>
        <div v-else class="m-auto flex gap-3">
          <Button variant="secondary" label="Preview" />
          <Button label="Activate" />
        </div>
      </div>
      <img class="w-full rounded-t-lg" :src="thumbnail" :alt="title" />
    </div>
    <div class="p-4 flex items-center">
      <div>
        <div class="text-md font-medium">{{ title }}</div>
        <div class="text-oc-text-400 text-sm">{{ description }}</div>
      </div>
      <Chip v-if="active" class="ml-auto">Active</Chip>
      <Chip v-else-if="pro" class="ml-auto" variant="accent-2">Upgrade</Chip>
    </div>
  </div>
</template>
