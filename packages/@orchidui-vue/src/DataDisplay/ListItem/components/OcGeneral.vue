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
const emit = defineEmits(["more", "click:item"]);
const isOpen = ref(false);
</script>

<template>
  <div
    class="px-5 py-4 flex flex-col gap-y-2 rounded border border-gray-200 group"
    :class="{ 'hover:shadow-normal': !isDisabled }"
  >
    <div class="flex items-center justify-between">
      <div
        class="flex text-sm text-oc-text-400 items-center gap-x-3"
        @click="emit('click:item', $event)"
      >
        <span v-if="title" class="text-base text-oc-text font-medium">
          {{ title }}
        </span>

        <div class="flex gap-3" v-if="chips.length">
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
            @click="$emit('more')"
          />
          <template #menu>
            <slot name="menu" />
          </template>
        </Dropdown>
      </template>
    </div>
    <div class="flex flex-col gap-4" @click="emit('click:item', $event)">
      <div class="text-oc-text-500 text-sm">{{ description }}</div>
      <div class="flex gap-5" v-if="details.length">
        <div
          class="flex items-center gap-2"
          v-for="(item, i) in details"
          :key="i"
        >
          <Icon
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

<style scoped lang="scss"></style>
