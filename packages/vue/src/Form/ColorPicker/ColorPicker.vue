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

const localColorList = ref([]);

const updateColorListStorage = () => {
  if (localColorList.value.length > 9) {
    localColorList.value = localColorList.value.filter(
      (localColor, index) => index < 9
    );
    localStorage.setItem(
      "ck-cp-local-color-list",
      JSON.stringify(localColorList.value)
    );
  }
};

let val = localStorage.getItem("ck-cp-local-color-list");
if (val) {
  localColorList.value = [...new Set(JSON.parse(val))];
  updateColorListStorage();
}

const onCloseDropdown = (dropdownOpen) => {
  if (
    !dropdownOpen &&
    inputValue.value &&
    !inputValue.value.includes("linear") &&
    !inputValue.value.includes("radial")
  ) {
    const colorExist = localColorList.value.find(
      (color) => color === inputValue.value
    );
    if (!colorExist) {
      if (localColorList.value.length >= 9) {
        localColorList.value.pop();
      }
      let _v = inputValue.value;
      localColorList.value.unshift(_v);

      updateColorListStorage();
    } else {
      localColorList.value = [
        inputValue.value,
        ...localColorList.value.filter((c) => c !== inputValue.value),
      ];
      updateColorListStorage();
    }
  }
};
</script>

<template>
  <BaseInput
    :class="hideInputColor ? 'w-[40px]' : ''"
    @click.stop="() => dropdownRef?.toggleDropdown()"
  >
    <Dropdown
      ref="dropdownRef"
      v-model="isOpen"
      @update:model-value="onCloseDropdown"
    >
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
          :last-used-colors="localColorList"
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
