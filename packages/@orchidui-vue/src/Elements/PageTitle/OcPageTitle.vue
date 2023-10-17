<script setup>
import Title from "./OcTitle.vue";
import Right from "./OcRight.vue";
import AdditionalContent from "./OcAdditionalContent.vue";

defineProps({
  title: String,
  description: String,
  mainLink: String,
  userId: String,
  chipVariant: String,
  chipLabel: String,
  additionalTitle: String,
  tooltipContent: String,
});
</script>

<template>
  <div class="pb-5 flex flex-col">
    <div class="flex w-full pt-5 px-10 gap-x-5">
      <Title
        :title="title"
        :description="description"
        class="w-full overflow-hidden"
      />

      <slot name="right">
        <Right class="shrink-0" />
      </slot>
    </div>

    <AdditionalContent
      :main-link="mainLink"
      :chip-label="chipLabel"
      :additional-title="additionalTitle"
      :chip-variant="chipVariant"
      :user-id="userId"
      :tooltip-content="tooltipContent"
    />
  </div>
</template>
