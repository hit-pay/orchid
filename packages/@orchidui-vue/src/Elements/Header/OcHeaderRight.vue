<script setup>
import { Button } from "@orchid";
import { defineEmits } from "vue";
defineEmits(["save", "cancel"]);
defineProps({
  saveLabel: {
    type: String,
    default: "Save",
  },
});
</script>
<template>
  <div class="flex items-center gap-x-7 ml-auto">
    <slot>
      <div class="flex gap-x-3">
        <Button
          class="min-w-[100px]"
          variant="secondary"
          label="Cancel"
          @click="$emit('cancel')"
        />
        <Button
          class="min-w-[100px]"
          :label="saveLabel"
          @click="$emit('save')"
        />
      </div>
    </slot>
  </div>
</template>
