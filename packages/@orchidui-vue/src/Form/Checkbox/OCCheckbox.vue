<script setup>
import { defineAsyncComponent } from "vue";

const Icon = defineAsyncComponent(() =>
  import("../../MediaAndIcons/Icon/OCIcon.vue"),
);

const props = defineProps({
  modelValue: Boolean,
});
const emit = defineEmits({
  "update:modelValue": [],
});
const onInput = () => emit("update:modelValue", !props.modelValue);
</script>

<template>
  <div>
    <label
      class="w-4 h-4 border flex items-center justify-center rounded"
      :class="[
        modelValue
          ? 'border-oc-primary bg-oc-primary'
          : 'border-oc-primary-200',
      ]"
    >
      <Icon class="w-3 h-3 text-white" name="check-2" />
      <input
        :value="modelValue"
        type="checkbox"
        :checked="modelValue"
        class="h-0 w-0"
        @change="onInput"
      />
    </label>
  </div>
</template>

<style scoped></style>
