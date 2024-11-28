<template>
  <div class="grid grid-cols-3 gap-3">
    <Input
      ref="rInputEl"
      :model-value="internal.r"
      placeholder="100"
      @update:model-value="updateValue('r', $event)"
    />
    <Input
      ref="gInputEl"
      :model-value="internal.g"
      placeholder="100"
      @update:model-value="updateValue('g', $event)"
    />
    <Input
      ref="bInputEl"
      :model-value="internal.b"
      placeholder="100"
      @update:model-value="updateValue('b', $event)"
    />
  </div>
</template>

<script setup>
import { Input } from '@/orchidui-core'
import { ref, watch } from 'vue'

const props = defineProps({
  inputType: {
    default: 'RGB',
    type: String
  },
  rgbValue: {
    type: Object
  },
  hslValue: {
    type: Object
  }
})

const emits = defineEmits({
  'update-rgb-value': [],
  'update-hsl-value': []
})

const internal = ref({
  r: 0,
  g: 0,
  b: 0
})

const rInputEl = ref()
const gInputEl = ref()
const bInputEl = ref()

const updateValue = (rgbType, value) => {
  let maxLength = 255
  if (props.inputType == 'HSL') {
    maxLength = 100
    if (rgbType == 'r') {
      maxLength = 360
    }
  }
  // validate

  if (isNaN(parseInt(value))) {
    return
  }

  if (rgbType == 'r') {
    let rInput = parseInt(value)
    if (rInput <= maxLength) {
      internal.value.r = rInput
      if (props.inputType == 'RGB') {
        updateRgb('r')
      } else {
        updateHsl()
      }
    }
    rInputEl.value?.focus()
  } else if (rgbType == 'g') {
    let gInput = parseInt(value)
    if (gInput <= maxLength) {
      internal.value.g = gInput
      if (props.inputType == 'RGB') {
        updateRgb('g')
      } else {
        updateHsl()
      }
    }
    gInputEl.value?.focus()
  } else if (rgbType == 'b') {
    let bInput = parseInt(value)
    if (bInput <= maxLength) {
      internal.value.b = bInput
      if (props.inputType == 'RGB') {
        updateRgb('b')
      } else {
        updateHsl()
      }
    }
    bInputEl.value?.focus()
  }
}

const updateRgb = (tp) => {
  emits('update-rgb-value', {
    type: tp,
    value: {
      r: parseInt(internal.value.r),
      g: parseInt(internal.value.g),
      b: parseInt(internal.value.b)
    }
  })
}

const updateHsl = () => {
  emits('update-hsl-value', {
    h: parseInt(internal.value.r),
    s: parseInt(internal.value.g),
    l: parseInt(internal.value.b)
  })
}

if (props.inputType === 'RGB') {
  watch(
    () => props.rgbValue,
    (newValue, oldValue) => {
      if (newValue !== oldValue) internal.value = newValue
    },
    { immediate: true, deep: true }
  )
} else {
  watch(
    () => props.hslValue,
    (val) => {
      internal.value = {
        r: val.h,
        g: val.s,
        b: val.l
      }
    },
    { immediate: true, deep: true }
  )
}
</script>
