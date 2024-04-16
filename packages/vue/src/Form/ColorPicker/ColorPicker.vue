<script setup>
import { Dropdown, Input, BaseInput } from "@/orchidui";
import ColorPickerPopup from "./ColorPickerPopup.vue";
import { ref } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "#ff0000",
  },
});

const emit = defineEmits(["update:model-value"]);

const isOpen = ref(false);
const inputValue = ref(props.modelValue);

const onUpdate = (value) => {
  if (!value) {
    return;
  }
  inputValue.value = value;
  emit("update:model-value", value);
};
</script>

<template>
  <BaseInput>
    <Dropdown v-model="isOpen" prevent-click-outside>
      <Input
        :model-value="inputValue"
        icon="drop"
        :icon-props="{ style: { color: inputValue } }"
        @update:model-value="onUpdate"
      >
        <template v-if="$slots.leading" #leading>
          <slot name="leading"></slot>
        </template>
      </Input>
      <template #menu>
        <ColorPickerPopup
          :model-value="modelValue"
          @update:model-value="onUpdate"
        />
      </template>
    </Dropdown>
  </BaseInput>
</template>
