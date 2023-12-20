<script setup>
import { Icon } from "@/orchidui";

defineProps({
  title: {
    type: String,
    default: "Title",
  },
  paymentMethods: {
    type: Array,
    default: () => [],
  },
});

defineEmits(["edit", "delete"]);
</script>

<template>
  <div
    class="px-5 py-4 flex flex-col gap-y-4 rounded border border-gray-200 group hover:shadow-normal"
  >
    <div class="flex items-center gap-x-5">
      <div class="flex-1 flex items-center gap-x-3 font-medium capitalize">
        <slot name="logo" />
        {{ title }}
      </div>
      <div
        class="border opacity-0 group-hover:opacity-100 border-oc-accent-1-100 rounded-sm p-1 flex gap-x-1"
      >
        <Icon
          name="pencil"
          class="cursor-pointer text-oc-text-400 p-2"
          @click="$emit('edit')"
        />
        <div class="border-r border-gray-200" />
        <Icon
          name="bin"
          class="cursor-pointer text-oc-error p-2"
          @click="$emit('delete')"
        />
      </div>
    </div>

    <div class="flex items-center gap-x-2">
      <span class="text-sm font-medium text-oc-text-300">Payment methods</span>
      <img
        v-for="method in paymentMethods"
        :key="method.method"
        width="35"
        height="24"
        :alt="method.method"
        :src="method.svg"
      />
    </div>
  </div>
</template>
