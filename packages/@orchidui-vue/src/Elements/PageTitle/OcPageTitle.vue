<script setup>
import Title from "./OcTitle.vue";
import { PageTitleRight, Button } from "@/orchidui";

defineProps({
  title: { type: String, required: true },
  description: { type: String },
  primaryButtonProps: Object,
  secondaryButtonProps: Object,
  chipProps: Object,
  isCopy: Boolean,
  isBack: { type: Boolean, default: false },
});
defineEmits({
  changeTab: [],
  back: [],
});
</script>

<template>
  <div class="md:pb-5 pb-4 flex flex-col">
    <div class="flex flex-col gap-y-3 pt-4 md:pt-5 px-5 md:px-10">
      <Button
        v-if="isBack"
        size="small"
        icon-class="rotate-90"
        variant="secondary"
        is-transparent
        label="Back"
        left-icon="chevron-down"
        class="self-start"
        @click="$emit('back')"
      />
      <div class="flex w-full gap-5">
        <Title
          :title="title"
          :description="description"
          :chip-props="chipProps"
          :is-copy="isCopy"
          class="flex-1"
        />

        <slot name="right">
          <PageTitleRight
            class="shrink-0"
            :primary-button-props="primaryButtonProps"
            :secondary-button-props="secondaryButtonProps"
          />
        </slot>
      </div>
    </div>
  </div>
</template>
