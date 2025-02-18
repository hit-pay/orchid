<script setup>
import { Tooltip, Icon } from '@/orchidui-core'
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
  <div class="flex flex-col w-full gap-y-2">
    <label
      v-if="label"
      class="flex items-center text-sm font-medium gap-x-3 text-oc-text-400"
      :class="labelClass"
    >
      <span class="flex items-center gap-x-1">
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
