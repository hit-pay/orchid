<script setup>
import { Dropdown, Input, BaseInput, Icon } from "@/orchidui";
import ColorPickerPopup from "./components/VueColorPicker.vue";
import { computed, ref } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "solid",
  },
  hideOpacity: Boolean,
  hideInputColor: Boolean,
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

const iconProps = computed(() => {
  if (props.variant === "gradient") {
    return {
      class: "w-[20px] h-[20px] hide-svg-icon",
      style: {
        background: inputValue.value,
      },
    };
  }
  return {
    style: {
      color: inputValue.value,
    },
  };
});
const dropdownRef = ref();
</script>

<template>
  <BaseInput
    :class="hideInputColor ? 'w-[40px]' : ''"
    @click.stop="() => dropdownRef?.toggleDropdown()"
  >
    <Dropdown ref="dropdownRef" v-model="isOpen">
      <Input
        v-if="!hideInputColor"
        :model-value="inputValue"
        icon="drop"
        :icon-props="iconProps"
        placeholder="#FFFFFF"
        @update:model-value="onUpdate"
      >
        <template v-if="$slots.leading" #leading>
          <slot name="leading"></slot>
        </template>
      </Input>
      <div v-else>
        <Icon
          class="cursor-pointer"
          :style="`color: ${inputValue}`"
          name="drop"
        />
      </div>
      <template #menu>
        <ColorPickerPopup
          :variant="variant"
          :show-alpha="!hideOpacity"
          :type="hideOpacity ? 'HEX' : 'HEX8'"
          :model-value="modelValue"
          @update:model-value="onUpdate"
        />
      </template>
    </Dropdown>
  </BaseInput>
</template>

<style>
.hide-svg-icon svg {
  display: none;
}
</style>
