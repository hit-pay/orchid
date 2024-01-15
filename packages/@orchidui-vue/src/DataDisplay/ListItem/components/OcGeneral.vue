<script setup lang="ts">
import { Chip, Icon, Dropdown } from "@/orchidui";
import { ref } from "vue";

defineProps({
  title: String,
  description: String,
  chips: {
    type: Array,
    default: () => [],
  },
  details: {
    type: Array,
    default: () => [],
  },
  isDisabled: Boolean,
});
const emit = defineEmits(["more"]);
const isOpen = ref(false);
</script>

<template>
  <div
    class="px-5 py-4 flex flex-col gap-y-2 rounded border border-gray-200 group"
    :class="{ 'hover:shadow-normal': !isDisabled }"
  >
    <div class="flex items-center justify-between">
      <div class="flex text-sm text-oc-text-400 items-center gap-x-3">
        <span v-if="title" class="text-base text-oc-text font-medium">
          {{ title }}
        </span>

        <div v-if="chips.length" class="flex gap-3">
          <Chip
            v-for="(item, i) in chips"
            :key="i"
            :label="item.label"
            :variant="item.variant"
            class="font-medium"
          ></Chip>
        </div>
      </div>
      <template v-if="!isDisabled">
        <Dropdown v-model="isOpen">
          <Icon
            name="dots-vertical"
            class="opacity-0 p-2 group-hover:opacity-100 cursor-pointer active:bg-oc-gray-100 rounded"
            @click.prevent="$emit('more')"
          />
          <template #menu>
            <slot name="menu" />
          </template>
        </Dropdown>
      </template>
    </div>
    <div class="flex flex-col gap-4">
      <div class="text-oc-text-500 text-sm">{{ description }}</div>
      <div v-if="details.length" class="flex gap-5">
        <div
          v-for="(item, i) in details"
          :key="i"
          class="flex items-center gap-2"
        >
          <div
            v-if="item.country"
            class="fi w-[15px] h-[15px] shadow"
            :class="'fi-' + item.country"
          ></div>
          <Icon
            v-else
            :name="item.icon"
            width="16"
            height="16"
            class="text-oc-text-400"
          />
          <div class="font-medium text-oc-text-500 text-sm">
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
