<script setup>
import { Input, Slider, BaseInput } from '@/orchidui-core'
import { ref, onMounted } from 'vue'

const props = defineProps({
  /** Upper bound of the range. */
  maxLimit: {
    type: [String, Number],
    default: 10000
  },
  /** Lower bound of the range. */
  minLimit: {
    type: [String, Number],
    default: 0
  },
  /** Minimum gap enforced between the min and max handles. */
  minGap: {
    type: [String, Number],
    default: 0
  },
  /** Current range value as `[min, max]` array (v-model). */
  modelValue: {
    type: [Array, String]
  },
  /** Field label shown above the inputs. */
  label: {
    type: String,
    default: 'Amount'
  },
  /** Helper text shown below the field. */
  hint: {
    type: String,
    default: ''
  },
  /** Validation error message shown in red below the field. */
  errorMessage: {
    type: String,
    default: ''
  },
  /** Hide the slider — show only the two text inputs. */
  onlyInput: Boolean
})

const emit = defineEmits({
  /** Range value changed. Payload: `[min, max]` number array. */
  'update:modelValue': []
})

const localMinValue = ref(props.modelValue?.[0] ?? '')
const localMaxValue = ref(props.modelValue?.[1] ?? '')
const slider = ref()

const updateRange = (value, index) => {
  if (!isNaN(value)) {
    if (index === 1) {
      localMaxValue.value = Number(value)
    } else {
      localMinValue.value = Number(value)
    }
    if (!props.onlyInput) {
      slider.value.updateSlider([localMinValue.value, localMaxValue.value])
    } else {
      if (localMinValue.value > localMaxValue.value) {
        localMaxValue.value = localMinValue.value
      }
      if (localMaxValue.value < localMinValue.value) {
        localMinValue.value = localMaxValue.value
      }
      emit('update:modelValue', [localMinValue.value, localMaxValue.value])
    }
  }
}

const updateRangeSlider = ($event) => {
  if (isNaN($event[0]) || isNaN($event[1])) return
  localMinValue.value = Number($event[0])
  localMaxValue.value = Number($event[1])

  emit('update:modelValue', [Number(localMinValue.value), Number(localMaxValue.value)])
}
onMounted(() => {
  if (!props.onlyInput) {
    slider.value.updateSlider()
  }
})
</script>

<template>
  <div class="flex flex-col gap-y-2 oc-range-input">
    <BaseInput :label="label" :hint="hint" :error-message="errorMessage">
      <div class="flex gap-x-3">
        <Input
          :model-value="localMinValue"
          label="From"
          is-inline-label
          placeholder=""
          @update:model-value="updateRange($event, 0)"
        />
        <Input
          :model-value="localMaxValue"
          label="To"
          is-inline-label
          placeholder=""
          @update:model-value="updateRange($event, 1)"
        />
      </div>
      <div v-if="!onlyInput" class="flex pt-4">
        <Slider
          ref="slider"
          type="range"
          :max-limit="maxLimit"
          :min-limit="minLimit"
          :min-gap="minGap"
          :model-value="[Number(localMinValue), Number(localMaxValue)]"
          @update:model-value="updateRangeSlider"
        />
      </div>
    </BaseInput>
  </div>
</template>
