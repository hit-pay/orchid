<script setup lang="ts">
import { Button, Icon } from "@/orchidui";

defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  buttonOptions: {
    type: Object,
    default: () => ({}),
  },
  status: {
    type: String,
    default: "",
  },
  number: {
    type: Number,
    default: 1,
  },
  isButtonVisible: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="bg-oc-bg-light py-5 px-7 gap-x-7 flex items-center">
    <div class="flex-1 flex gap-x-4 items-center">
      <div
        v-if="status === 'completed'"
        class="w-[24px] h-[24px] min-w-[24px] flex items-center text-white justify-center rounded-full bg-oc-primary"
      >
        <Icon name="check-2" width="12" height="12" />
      </div>
      <div
        v-else-if="status === 'pending'"
        class="w-[24px] h-[24px] min-w-[24px] flex items-center justify-center border rounded-full text-oc-warning border-oc-warning"
      >
        <Icon name="time-filled" width="18" height="18" />
      </div>
      <div
        v-else
        class="w-[24px] h-[24px] min-w-[24px] text-oc-text-300 text-sm font-medium flex items-center justify-center border rounded-full border-oc-gray-200"
      >
        {{ number }}
      </div>

      <div class="flex flex-col gap-y-1">
        <slot>
          <span class="font-medium">{{ title }}</span>
          <span class="text-oc-text-300 text-sm">{{ description }}</span>
        </slot>
      </div>
    </div>

    <slot name="action">
      <Button
        v-if="isButtonVisible"
        v-bind="buttonOptions"
        class="shrink-0"
      />
    </slot>
  </div>
</template>
