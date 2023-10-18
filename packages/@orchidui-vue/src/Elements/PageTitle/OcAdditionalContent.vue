<script setup>
import Chip from "../../Feedback/Chip/OcChip.vue";
import PrimaryActions from "./OcPrimaryActions.vue";

const props = defineProps({
  mainLink: { type: String, default: "" },
  userId: { type: String, default: "" },
  chipVariant: { type: String, default: "" },
  chipLabel: { type: String, default: "" },
  additionalTitle: { type: String, default: "" },
  tooltipContent: { type: String, default: "" },
});
const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(props.mainLink + props.userId);
  } catch (err) {
    console.error("Unable to copy text to clipboard. Error: ", err);
  }
};
</script>

<template>
  <div class="pt-5 px-10">
    <div
      class="border rounded py-4 px-5 border-oc-gray-200 bg-oc-gray-50 flex flex-col gap-y-2"
    >
      <div class="flex items-center gap-x-3">
        <span class="font-medium">{{ additionalTitle }}</span>
        <Chip :variant="chipVariant" :label="chipLabel" />
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <span class="text-oc-text-400">
          {{ mainLink }}<span class="text-oc-text">{{ userId }}</span>
        </span>
        <PrimaryActions :tooltip-content="tooltipContent" @copy="copyLink" />
      </div>
    </div>
  </div>
</template>
