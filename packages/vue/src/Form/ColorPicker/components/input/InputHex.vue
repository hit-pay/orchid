<template>
  <Input
    class="w-[158px]"
    placeholder="#FFFFFF"
    :model-value="internal"
    @update:model-value="handleInput"
    @blur="emitModelValue"
    @keyup.enter="emitModelValue"
  />
</template>

<script setup>
import { Input } from "@orchidui/vue";
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
  },
});

const emits = defineEmits({
  "update:modelValue": [],
});

const internal = ref("");

const handleInput = (value) => {
  internal.value = value;
  internal.value = `#${value.replace(/#/g, "")}`;
};

const emitModelValue = () => {
  let value = internal.value;

  if (value === props.modelValue) return;

  if (!/^#[0-9a-fA-F]+$/.test(value)) {
    internal.value = props.modelValue;
    return;
  }

  let newValue = value.replace(/#/g, "");

  switch (newValue.length) {
    case 0:
      newValue = props.modelValue.replace("#", "");
      break;
    case 1:
    case 2:
      newValue = newValue.repeat(3);
      break;
    case 4:
    case 5:
      newValue = newValue.slice(0, 3);
      break;
    case 3:
    case 6:
      break;
    default:
      newValue = newValue.slice(0, 6);
  }

  internal.value = `#${newValue.toUpperCase()}`;
  emits("update:modelValue", internal.value);
};

watch(
  () => props.modelValue,
  (newValue, oldValue) => {
    if (newValue !== oldValue) internal.value = newValue;
  },
  { immediate: true }
);
</script>
