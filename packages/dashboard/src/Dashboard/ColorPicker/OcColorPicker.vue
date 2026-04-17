<script setup>
import { ColorPickerPopup } from '@/orchidui-dashboard'
import { Dropdown, Input, BaseInput, Icon } from '@orchidui/core'
import { computed, ref } from 'vue'

const props = defineProps({
  /** Current color value (v-model). Hex string — 6-digit `#RRGGBB` or 8-digit `#RRGGBBAA` when opacity is enabled. For gradient variant, a CSS gradient string. */
  modelValue: {
    type: String,
    default: ''
  },
  /** Color mode. `'solid'` outputs a flat hex color; `'gradient'` outputs a CSS gradient string. */
  variant: {
    type: String,
    default: 'solid'
  },
  /** Hide the opacity/alpha slider. When true, output is always a 6-digit hex (`#RRGGBB`). */
  hideOpacity: Boolean,
  /** Hide the hex text input and show only the color swatch icon as the trigger. */
  hideInputColor: Boolean,
  /** Preset color swatches shown in the picker popup. Array of hex color strings. */
  presetColors: {
    type: Array
  },
  /** Dropdown placement passed to the Popper positioning engine. */
  placement: {
    type: String,
    default: 'auto'
  }
})

const emit = defineEmits({
  /** New color value selected. Payload: hex or gradient string. */
  'update:model-value': []
})

const isOpen = ref(false)
const inputValue = ref(props.modelValue)

const onUpdate = (value) => {
  if (!value) {
    return
  }
  inputValue.value = value
  emit('update:model-value', value)
}

const iconProps = computed(() => {
  if (props.variant === 'gradient') {
    return {
      class: 'w-[20px] h-[20px] hide-svg-icon',
      style: {
        background: inputValue.value
      }
    }
  }
  return {
    style: {
      color: inputValue.value
    }
  }
})
const dropdownRef = ref()

const localColorList = ref([])

const updateColorListStorage = () => {
  if (localColorList.value.length > 8) {
    localColorList.value = localColorList.value.filter((localColor, index) => index < 8)
  }
  localStorage.setItem('ck-cp-local-color-list', JSON.stringify(localColorList.value))
}

let val = localStorage.getItem('ck-cp-local-color-list')
if (val) {
  localColorList.value = [...new Set(JSON.parse(val))]
  updateColorListStorage()
}

const onCloseDropdown = (dropdownOpen) => {
  if (!dropdownOpen && inputValue.value) {
    const colorExist = localColorList.value.find((color) => color === inputValue.value)
    if (!colorExist) {
      if (localColorList.value.length >= 9) {
        localColorList.value.pop()
      }
      let _v = inputValue.value
      localColorList.value.unshift(_v)

      updateColorListStorage()
    } else {
      localColorList.value = [
        inputValue.value,
        ...localColorList.value.filter((c) => c !== inputValue.value)
      ]
      updateColorListStorage()
    }
  }
}
const isLoading = ref(false)
const handleClickLastUsedColor = (color) => {
  inputValue.value = color
  emit('update:model-value', color)
  isOpen.value = false
}
</script>

<template>
  <BaseInput :class="hideInputColor ? 'w-[40px]' : ''" @click="() => dropdownRef?.toggleDropdown()">
    <Dropdown
      ref="dropdownRef"
      v-model="isOpen"
      :max-menu-height="800"
      :placement="placement"
      :popper-options="{
        strategy: 'fixed'
      }"
      @update:model-value="onCloseDropdown"
    >
      <Input
        v-if="!hideInputColor"
        :model-value="inputValue"
        icon="drop"
        :icon-props="iconProps"
        placeholder=""
        @update:model-value="onUpdate"
      >
        <template v-if="$slots.leading" #leading>
          <slot name="leading"></slot>
        </template>
      </Input>
      <div v-else>
        <slot name="picker-icon">
          <Icon class="cursor-pointer" :style="`color: ${inputValue}`" name="drop" />
        </slot>
      </div>
      <template #menu>
        <ColorPickerPopup
          v-if="!isLoading"
          :variant="variant"
          :show-alpha="!hideOpacity"
          :type="hideOpacity ? 'HEX' : 'HEX8'"
          :model-value="modelValue"
          :last-used-colors="localColorList"
          :preset-colors="presetColors"
          @update:model-value="onUpdate"
          @last-used-pick="handleClickLastUsedColor"
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
