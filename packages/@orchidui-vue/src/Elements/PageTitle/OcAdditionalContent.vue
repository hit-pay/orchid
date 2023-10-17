<script setup>
import Chip from "../../Feedback/Chip/OcChip.vue";
import PrimaryActions from "./OcPrimaryActions.vue";

defineProps({
  mainLink: String,
  userId: String,
  chipVariant: String,
  chipLabel: String,
  additionalTitle: String,
  tooltipContent: String,
});
</script>

<template>
  <div class="pt-5 px-10">
    <div
      class="border rounded py-4 px-5 border-oc-grey-200 bg-oc-grey-50 flex flex-col gap-y-2"
    >
      <div class="flex items-center gap-x-3">
        <span class="font-medium">{{ additionalTitle }}</span>
        <Chip :variant="chipVariant" :label="chipLabel" />
      </div>
      <div class="flex items-center gap-x-2">
        <span class="text-oc-text-400">
          {{ mainLink }}<span class="text-oc-text">{{ userId }}</span>
        </span>
        <PrimaryActions :tooltip-content="tooltipContent" />
      </div>
    </div>
  </div>
</template>
