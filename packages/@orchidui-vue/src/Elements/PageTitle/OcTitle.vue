<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
});
</script>

<template>
  <div class="flex text-oc-text justify-center flex-col gap-y-3">
    <div
      class="md:text-xl font-medium whitespace-nowrap text-ellipsis overflow-hidden"
    >
      <slot name="title" :title="title">
        {{ title }}
      </slot>
    </div>
    <div
      v-if="description"
      class="text-oc-text-400 text-sm whitespace-nowrap text-ellipsis"
      :class="$slots.description ? '' : 'overflow-hidden'"
    >
      <slot name="description" :description="description">
        {{ description }}
      </slot>
    </div>
  </div>
</template>
