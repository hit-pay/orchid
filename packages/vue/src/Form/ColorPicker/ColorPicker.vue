<script setup>
import { Dropdown, Input, BaseInput } from "@/orchidui";
import ColorPickerPopup from "./components/VueColorPicker.vue";
import { ref } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "#ff0000",
  },
  variant: {
    type: String,
    default: "solid",
  },
  showOpacity: {
    type: Boolean,
    default: true,
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
          :variant="variant"
          :show-alpha="showOpacity"
          :type="!showOpacity ? 'hex' : 'hex8'"
          :model-value="modelValue"
          @update:model-value="onUpdate"
        />
      </template>
    </Dropdown>
  </BaseInput>
</template>
