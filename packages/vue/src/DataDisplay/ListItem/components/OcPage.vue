<script setup lang="ts">
import { Chip, Icon, Dropdown } from "@/orchidui";
import { ref } from "vue";
defineProps({
  id: String,
  title: String,
  description: String,
  enabled: Boolean,
  pagePath: String,
  pageCoverId: String,
  pageCoverUrl: String,
  createdAt: String,
  updatedAt: String,
});
const isOpen = ref(false);
const toggleActionMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div
    class="px-5 py-4 rounded border border-gray-200 group hover:shadow-normal"
  >
    <div class="flex items-center gap-x-4 w-full">
      <div class="flex flex-col flex-1 gap-y-2">
        <div class="flex items-center justify-between">
          <div
            class="flex text-sm text-oc-text-400 items-center gap-x-3 overflow-hidden"
          >
            <span
              v-if="title"
              class="text-base text-oc-text font-medium truncate"
            >
              {{ title }}
            </span>
          </div>
          <Dropdown v-model="isOpen" placement="bottom-end">
            <Icon
              name="dots-vertical"
              class="opacity-0 p-2 group-hover:opacity-100 cursor-pointer active:bg-oc-gray-100 rounded"
              @click.stop="toggleActionMenu"
            />
            <template #menu>
              <div @mouseleave="isOpen = false">
                <slot name="menu" />
              </div>
            </template>
          </Dropdown>
        </div>
        <div class="flex flex-col gap-3">
          <div class="text-oc-text-400 flex gap-x-2 items-center text-sm">
            {{ description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
