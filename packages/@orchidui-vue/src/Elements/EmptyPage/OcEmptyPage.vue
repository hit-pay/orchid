<script setup>
import { Button, Icon } from "@/orchidui";

defineEmits("click:Button");
defineProps({
  isButton: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  isUpgrade: {
    type: Boolean,
    default: false,
  },
  upgradeLabel: {
    type: String,
    default: "Upgrade now",
  },
  addButtonLabel: {
    type: String,
    default: "Add new",
  },
});
</script>

<template>
  <div class="flex flex-col gap-y-7 items-center">
    <div class="relative">
      <div
        class="w-[64px] flex justify-center border rounded-full items-center aspect-square"
        :class="
          isUpgrade
            ? 'text-oc-warning-600 border-oc-warning-300 bg-oc-warning-50'
            : 'text-oc-text-400 border-oc-gray-200 bg-oc-gray-50'
        "
      >
        <Icon
          :name="isUpgrade ? 'warning' : 'document'"
          width="32"
          height="32"
        />
      </div>
      <Icon
        v-if="!isUpgrade"
        name="exclamation"
        width="20"
        height="20"
        class="absolute right-0 top-[2px]"
      />
    </div>
    <div class="flex flex-col gap-y-3 items-center">
      <span class="text-lg">{{ title }}</span>
      <span class="text-oc-text-400">{{ description }}</span>
    </div>
    <Button
      v-if="isButton"
      :label="isUpgrade ? upgradeLabel : addButtonLabel"
      :left-icon="isUpgrade ? '' : 'plus'"
      @click="$emit('click:Button')"
    />
  </div>
</template>
