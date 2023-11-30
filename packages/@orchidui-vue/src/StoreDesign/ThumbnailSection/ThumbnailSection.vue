<script setup>
import { Button } from "@/orchidui";
defineProps({
  name: String,
  label: String,
  preview: String,
  pro: String,
});
</script>
<template>
  <div class="flex flex-col">
    <div class="w-full relative group">
      <div
        class="w-full h-full bg-black/25 absolute top-0 left-0 hidden group-hover:flex rounded-lg"
      >
        <div class="w-full p-8 gap-3 m-auto flex">
          <Button class="w-1/2" variant="secondary" label="Customize" />
          <Button class="w-1/2" label="Add" />
        </div>
      </div>
      <img class="w-full" :src="preview" :alt="label" />
    </div>
    <div class="mt-4 text-md text-center">
      {{ label }}
    </div>
  </div>
</template>
