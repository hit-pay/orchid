<script setup>
import { Chip, Tooltip } from "@/orchidui";
import { ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Dummy data",
  },
  description: {
    type: String,
    default: "Demo reports will be replaced once you made transactions",
  },
  absolute: {
    type: Boolean,
    default: false,
  },
});

const hide = ref(true);
</script>

<template>
  <div
    @mouseenter="hide = false"
    @mouseleave="hide = true"
    class="flex flex-col justify-center items-center h-full w-full transition duration-300"
    :class="{
      'absolute top-0 left-0': absolute,
      'opacity-100': !hide,
      'opacity-0': hide,
    }"
  >
    <div
      class="absolute left-0 right-0 top-0 bottom-0 opacity-80 bg-white"
    ></div>
    <Tooltip
      position="top"
      :distance="10"
      popper-class="min-w-[220px] bg-white"
    >
      <Chip :label="title" variant="warning" class="cursor-default" />
      <template #popper>
        <div class="py-2 px-3 font-medium text-sm text-oc-text-400 text-center">
          {{ description }}
        </div>
      </template>
    </Tooltip>
  </div>
</template>
