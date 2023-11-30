<script setup>
import { Button } from "@/orchidui";
defineProps({
  thumbnail: String,
  title: String,
  description: String,
  active: String,
});
</script>
<template>
  <div class="bg-oc-bg-dark rounded flex flex-col">
    <div class="w-full relative">
      <div class="bg-black/25 absolute top-0 left-0">
        <div v-if="active" class="m-auto">
          <Button variant="secondary" label="Customize" />
        </div>
        <div class="m-auto">
          <Button variant="secondary" label="Preview" />
          <Button label="Active" />
        </div>
      </div>
      <img class="w-full" :src="thumbnail" :alt="title" />
    </div>
    <div class="p-4">
      <div class="text-md">{{ title }}</div>
      <div class="text-md">{{ description }}</div>
    </div>
  </div>
</template>
