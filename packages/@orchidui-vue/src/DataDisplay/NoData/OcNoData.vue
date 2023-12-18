<template>
  <div>
    <div class="flex justify-center mb-5">
      <oc-avatar class="relative" type="icon" :size="48">
        <oc-icon :name="icon" class="text-oc-text-400" width="24" height="24" />
        <oc-icon class="absolute top-[-1px] right-[-10px]" name="exclamation" />
      </oc-avatar>
    </div>
    <div class="flex justify-center text-oc-text-500 font-medium text-[14px]">
      {{ title }}
    </div>
    <div
      v-if="description"
      class="flex justify-center text-oc-text-400 font-medium text-[12px] mt-1"
    >
      {{ description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import OcIcon from "@/orchidui/MediaAndIcons/Icon/OcIcon.vue";
import OcAvatar from "@/orchidui/MediaAndIcons/Avatar/OcAvatar.vue";

const props = defineProps({
  icon: {
    type: String,
    default: "document",
  },
  title: {
    type: String,
    default: "No data to display",
  },
  description: String,
});
</script>
