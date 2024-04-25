<script setup>
import { Tooltip, Icon } from "@/orchidui";
import { computed } from "vue";
import { getTextWithLink } from "../../composables/helpers";
const props = defineProps({
  label: String,
  hint: String,
  hintWithLink: Boolean,
  errorMessage: String,
  isRequired: Boolean,
  labelIcon: String,
  tooltipText: String,
  tooltipOptions: Object,
  labelClass: String,
});

const getHintWithLink = computed(() => {
  return getTextWithLink(props.hint);
});
</script>

<template>
  <div class="flex flex-col gap-y-2 w-full">
    <label
      v-if="label"
      class="text-sm flex items-center gap-x-3 font-medium text-oc-text-400"
      :class="labelClass"
    >
      <span class="flex gap-x-1 items-center">
        {{ label }}
        <span v-if="isRequired" class="text-oc-error">*</span>
      </span>
      <Tooltip v-if="labelIcon" v-bind="tooltipOptions">
        <Icon width="16" height="16" :name="labelIcon" />
        <template v-if="tooltipText" #popper>
          <div class="px-3 py-2">
            {{ tooltipText }}
          </div>
        </template>
      </Tooltip>
    </label>
    <slot />
    <div
      v-if="(hint || $slots.hint) && !errorMessage"
      class="text-sm flex items-center text-oc-text-400"
    >
      <slot name="hint">
        <template v-if="hintWithLink">
          <span v-html="getHintWithLink"></span>
        </template>
        <template v-else>{{ hint }}</template>
      </slot>
    </div>
    <div v-if="errorMessage" class="text-sm text-oc-error flex items-center">
      {{ errorMessage }}
    </div>
  </div>
</template>
