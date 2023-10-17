<script setup>
import Title from "./OcTitle.vue";
import Right from "./OcRight.vue";
import AdditionalContent from "./OcAdditionalContent.vue";

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  mainLink: { type: String, default: "" },
  userId: { type: String, default: "" },
  chipVariant: { type: String, default: "" },
  chipLabel: { type: String, default: "" },
  additionalTitle: { type: String, default: "" },
  tooltipContent: { type: String, default: "" },
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
