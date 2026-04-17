<template>
  <div class="oc-section">
    <div class="font-medium text-lg flex">
      <slot name="header">
        <span v-if="title">{{ title }}</span>
        <slot name="header-right" />
      </slot>
    </div>

    <div class="mt-5">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  /** Section heading text shown in the header when no custom `header` slot is provided. */
  title: {
    type: String,
    required: false,
  },
});
</script>