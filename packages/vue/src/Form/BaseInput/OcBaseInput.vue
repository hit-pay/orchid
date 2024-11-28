<script setup>
import { Tooltip, Icon } from '@orchidui/vue'
defineProps({
  label: String,
  hint: String,
  errorMessage: String,
  isRequired: Boolean,
  labelIcon: String,
  tooltipText: String,
  tooltipOptions: Object,
  labelClass: String
})
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
        <template #popper>
          <slot name="tooltipText">
            <div v-if="tooltipText" class="px-3 py-2">
              {{ tooltipText }}
            </div>
          </slot>
        </template>
      </Tooltip>
    </label>
    <slot />
    <div
      v-if="(hint || $slots.hint) && !errorMessage"
      class="text-sm flex items-center text-oc-text-400"
    >
      <slot name="hint">
        {{ hint }}
      </slot>
    </div>
    <div v-if="errorMessage" class="text-sm text-oc-error flex items-center">
      {{ errorMessage }}
    </div>
  </div>
</template>
