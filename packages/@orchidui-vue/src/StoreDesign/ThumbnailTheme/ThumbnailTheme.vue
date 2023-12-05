<script setup>
import { Button, Chip } from "@/orchidui";
defineProps({
  theme: Object,
});
defineEmits(["activate", "customize", "preview", "upgrade"]);
</script>
<template>
  <div
    class="bg-oc-bg-dark border-[3px] rounded-lg flex flex-col"
    :class="theme.active ? 'border-oc-primary' : 'border-oc-bg-dark'"
  >
    <div class="w-full relative group">
      <div
        class="w-full h-full bg-black/25 absolute top-0 left-0 hidden group-hover:flex rounded-t-lg"
      >
        <div v-if="theme.active" class="m-auto">
          <Button
            variant="secondary"
            label="Customize"
            @click="$emit('customize', theme)"
          />
        </div>
        <div v-else class="m-auto flex gap-3">
          <Button
            variant="secondary"
            label="Preview"
            @click="$emit('preview', theme)"
          />
          <Button label="Activate" @click="$emit('activate', theme)" />
        </div>
      </div>
      <img
        class="w-full rounded-t-md"
        :src="theme.thumbnail"
        :alt="theme.title"
      />
    </div>
    <div class="p-4 flex items-center">
      <div>
        <div class="text-md font-medium">{{ theme.title }}</div>
        <div class="text-oc-text-400 text-sm">{{ theme.description }}</div>
      </div>
      <Chip v-if="theme.active" class="ml-auto">Active</Chip>
      <Chip
        v-else-if="theme.pro"
        class="ml-auto"
        variant="accent-2"
        @click="$emit('upgrade', theme)"
        >Upgrade</Chip
      >
    </div>
  </div>
</template>
