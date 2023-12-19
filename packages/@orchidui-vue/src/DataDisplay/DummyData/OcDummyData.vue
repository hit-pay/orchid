<script setup>
import { Chip, Tooltip } from "@/orchidui";

defineProps({
  title: {
    type: String,
    default: "Dummy data",
  },
  absolute: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="flex flex-col justify-center items-center h-full w-full"
    :class="{ 'absolute top-0 left-0': absolute }"
  >
    <div
      class="absolute left-0 right-0 top-0 bottom-0 opacity-80 bg-white"
    ></div>
    <Tooltip position="top" :distance="10">
      <Chip :label="title" variant="warning" class="cursor-default" />
      <template #popper>
        <div
          class="py-2 px-3 font-medium text-sm text-oc-text-400 w-max text-center"
        >
          <slot>
            Demo reports will be replaced once <br />
            you made transactions
          </slot>
        </div>
      </template>
    </Tooltip>
  </div>
</template>
