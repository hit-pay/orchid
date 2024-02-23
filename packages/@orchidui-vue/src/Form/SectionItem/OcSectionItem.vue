<script setup>
import { Toggle, Icon, Tooltip } from "@/orchidui";

defineProps({
  title: String,
  description: {
    type: String,
    default: "",
  },
  icon: String,
  modelValue: {
    type: Boolean,
    default: false,
  },
  isToggle: Boolean,
  toggleProps: Object,
  popperMessage: String,
  errorMessage: String,
});
defineEmits(["update:modelValue"]);
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
              {{ popperMessage }}
            </div>
          </template>
        </Tooltip>
      </div>
      <span v-if="description" class="text-oc-text-400 text-sm">
        {{ description }}
      </span>
      <div v-if="errorMessage" class="text-sm text-oc-error flex items-center">
        {{ errorMessage }}
      </div>
    </div>

    <slot name="actions">
      <Toggle
        v-if="isToggle"
        :model-value="modelValue"
        v-bind="toggleProps"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </slot>
  </div>
</template>
