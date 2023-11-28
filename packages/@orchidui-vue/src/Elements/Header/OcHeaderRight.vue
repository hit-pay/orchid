<script setup>
import { Button } from "@/orchidui";
defineEmits(["save", "cancel"]);
defineProps({
  primaryProps: {
    type: Object,
  },
  secondaryProps: {
    type: Object,
  },
});
</script>
<template>
  <div class="flex items-center gap-x-7 ml-auto">
    <slot>
      <slot name="before" />
      <div class="flex gap-x-3">
        <Button
          class="min-w-[100px]"
          variant="secondary"
          label="Cancel"
          v-bind="secondaryProps"
          @click="$emit('cancel')"
        />
        <Button
          class="min-w-[100px]"
          label="Save"
          v-bind="primaryProps"
          @click="$emit('save')"
        />
      </div>
      <slot name="after" />
    </slot>
  </div>
</template>
