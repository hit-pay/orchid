<!-- TODO : add v-model for toggle -->
<script setup>
import { Toggle, Icon, Tooltip } from "@/orchidui";

defineProps({
  title: String,
  description: String,
  icon: String,
  buttonProps: Object,
  inputProps: Object,
  isToggle: Boolean,
});
</script>

<template>
    <div class="flex">
      <div class="flex flex-col gap-y-1 flex-1">
        <div class="font-medium gap-x-3 flex items-center">
          {{ title }}
          <Tooltip position="top" :distance="4">
            <Icon
              v-if="icon"
              width="16"
              height="16"
              class="text-oc-text-400 cursor-pointer"
              :name="icon"
            />
            <template #popper>
              <div class="px-2 py-1 text-sm text-oc-text-400">
                Text information
              </div>
            </template>
          </Tooltip>
        </div>
        <span v-if="description" class="text-oc-text-400 text-sm">
          {{ description }}
        </span>
      </div>
      <Toggle v-if="isToggle" />
    </div>
</template>
