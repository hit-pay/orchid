<script setup>
import { Button } from '@orchidui/vue-core'
const emit = defineEmits(['save', 'cancel', 'addition-click', 'dropdown-action'])
defineProps({
  primaryProps: {
    type: Object
  },
  secondaryProps: {
    type: Object
  },
  isSecondaryButtonVisible: {
    type: Boolean,
    default: true
  }
})
</script>
<template>
  <div class="flex items-center gap-x-7 ml-auto">
    <slot>
      <slot name="before" />
      <div class="flex gap-x-3">
        <Button
          v-if="isSecondaryButtonVisible"
          class="min-w-[100px]"
          variant="secondary"
          label="Cancel"
          v-bind="secondaryProps"
          @click="$emit('cancel')"
        />
        <slot name="primary-button">
          <Button class="min-w-[100px]" label="Save" v-bind="primaryProps" @click="$emit('save')" />
        </slot>
      </div>
      <slot name="after" />
    </slot>
  </div>
</template>
