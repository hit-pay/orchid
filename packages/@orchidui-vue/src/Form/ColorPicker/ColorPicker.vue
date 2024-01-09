<script setup lang="ts">
import { Dropdown, Input } from "@/orchidui";
import ColorPickerPopup from "./ColorPickerPopup.vue";
import { onMounted, ref } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "#ff0000",
  },
});
defineEmits(["update:model-value"]);
const isOpen = ref(false);
const inputValue = ref("");

onMounted(() => {
  inputValue.value = props.modelValue;
});
</script>

<template>
  <Dropdown v-model="isOpen">
    <Input
      :model-value="modelValue.toUpperCase()"
      icon="drop"
      :icon-props="{ style: { color: modelValue } }"
      is-readonly
    >
    <template #leading><slot name="leading"></slot></template>
    </Input>
    <template #menu>
      <ColorPickerPopup
        :model-value="modelValue"
        @update:model-value="$emit('update:model-value', $event)"
      />
    </template>
  </Dropdown>
</template>
