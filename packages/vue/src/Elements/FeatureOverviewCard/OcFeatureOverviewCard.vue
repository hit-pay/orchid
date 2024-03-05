<script setup>
import { Icon } from "@/orchidui";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  features: {
    type: Array,
    default: () => [],
    validator: (features) =>
      features.every((feature) => "title" in feature && "icon" in feature),
  },
});
</script>

<template>
  <div class="send-money-initial-state relative border rounded">
    <div class="z-10 p-7 flex flex-col relative">
      <h2 class="text-xl font-medium mb-4">{{ title }}</h2>

      <p v-if="description" class="text-oc-text-400 mb-10">
        {{ description }}
      </p>

      <div v-if="features?.length" class="flex gap-4 flex-wrap">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="rounded bg-white flex flex-col gap-2 p-6 items-center justify-center"
        >
          <Icon :name="feature.icon" height="56" width="56" />
          <span class="text-sm font-medium">{{ feature.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.send-money-initial-state {
  &::after {
    position: absolute;
    height: 100px;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    border-radius: 8px;
    background: linear-gradient(
      90deg,
      rgba(232, 201, 250, 0.5) 0%,
      rgba(255, 224, 162, 0.5) 100%
    );
    box-shadow: 0 20px 50px 30px #ffffff inset;
  }
}
</style>
