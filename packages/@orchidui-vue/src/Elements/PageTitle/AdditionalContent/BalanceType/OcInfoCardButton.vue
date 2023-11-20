<script setup>
defineProps({
  isActive: Boolean,
  title: String,
  content: String,
});
</script>

<template>
  <div
    class="px-5 py-4 cursor-pointer rounded group font-medium justify-center border gap-y-2 h-[76px] md:w-fit w-full flex flex-col hover:shadow-normal"
    :class="
      isActive ? 'border-b-[3px] border-oc-primary' : 'border-oc-accent-1-100'
    "
  >
    <span class="text-oc-text-400 text-sm">{{ title }}</span>
    <span
      class="text-xl group-hover:text-oc-text"
      :class="isActive ? 'text-oc-text' : 'text-oc-text-400'"
    >
      {{ content }}
    </span>
  </div>
</template>
