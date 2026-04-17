<script setup>
import { Tooltip, Icon } from '@/orchidui-core'
defineProps({
  /** Field label shown above the input. */
  label: String,
  /** Helper text shown below the input when there is no error. */
  hint: String,
  /** AI-assisted state — shows a sparkle icon next to the label. */
  ai: Boolean,
  /** Validation error message shown in red below the input. Hides `hint` when set. */
  errorMessage: String,
  /** Mark the field as required — shows a `*` indicator next to the label. */
  isRequired: Boolean,
  /** Icon name rendered in the label area as a tooltip trigger. */
  labelIcon: String,
  /** Text shown in the tooltip when hovering `labelIcon`. */
  tooltipText: String,
  /** Props forwarded to the Tooltip component on the label icon. */
  tooltipOptions: Object,
  /** CSS class applied to the label element. */
  labelClass: String
})
</script>

<template>
  <div class="flex flex-col w-full gap-y-2">
    <label
      v-if="label"
      class="flex items-center text-sm font-medium gap-x-3 text-oc-text-400"
      :class="labelClass"
    >
      <span class="flex items-center gap-x-1">
        {{ label }}
        <Icon v-if="ai" class="text-oc-accent-2-400" name="sparkle-filled" width="16" height="16" />
        <span v-else-if="isRequired" class="text-oc-error">*</span>
      </span>
      <Tooltip v-if="labelIcon" v-bind="tooltipOptions">
        <Icon width="16" height="16" :name="labelIcon" />
        <template #popper>
          <slot name="tooltipText">
            <div v-if="tooltipText" class="px-3 py-2">
              {{ tooltipText }}
            </div>
          </slot>
        </template>
      </Tooltip>

      <slot name="right-label" />
    </label>
    <slot />
    <div
      v-if="(hint || $slots.hint) && !errorMessage"
      class="flex items-center text-sm text-oc-text-400"
    >
      <slot name="hint">
        {{ hint }}
      </slot>
    </div>
    <div v-if="errorMessage" class="flex items-center text-sm text-oc-error">
      {{ errorMessage }}
    </div>
  </div>
</template>
