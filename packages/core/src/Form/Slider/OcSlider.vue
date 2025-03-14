<script setup>
import { ref, onMounted } from 'vue'
import { Input } from '@/orchidui-core'
const props = defineProps({
  maxLimit: {
    type: Number,
    default: 100
  },
  minLimit: {
    type: Number,
    default: 0
  },
  minGap: {
    type: Number,
    default: 0
  },
  type: {
    type: String,
    default: 'default'
  },
  modelValue: {
    type: [Array, Number, String],
    default: 0
  },
  label: String,
  variant: {
    type: String,
    default: 'default'
  }
})

const emit = defineEmits({
  'update:modelValue': []
})

const sliderOne = ref()
const sliderTwo = ref()
const sliderTrack = ref()
const percent1 = ref(0)
const percent2 = ref(0)
const slideOne = () => {
  if (props.type === 'range') {
    if (parseInt(sliderTwo.value?.value) - parseInt(sliderOne.value?.value) <= props.minGap) {
      sliderOne.value.value = parseInt(sliderTwo.value.value) - props.minGap
    }
  }
  fillColor()
}

const slideTwo = () => {
  if (parseInt(sliderTwo.value?.value) - parseInt(sliderOne.value?.value) <= props.minGap) {
    sliderTwo.value.value = parseInt(sliderOne.value?.value) + props.minGap
  }
  fillColor()
}

const fillColor = (onlyFillColor = false) => {
  percent1.value =
    ((sliderOne.value?.value - props.minLimit) / (props.maxLimit - props.minLimit)) * 100
  percent2.value =
    props.type === 'range'
      ? ((sliderTwo.value?.value - props.minLimit) / (props.maxLimit - props.minLimit)) * 100
      : 0
  sliderTrack.value.style.background =
    props.type === 'range'
      ? `linear-gradient(to right, var(--oc-gray-100) ${percent1.value}% , var(--oc-primary-500) ${percent1.value}% , var(--oc-primary-500) ${percent2.value}%, var(--oc-gray-100) ${percent2.value}%)`
      : `linear-gradient(to right, var(--oc-primary-500) ${percent1.value}%, var(--oc-gray-100) ${percent1.value}%)`

  if (!onlyFillColor) {
    emit(
      'update:modelValue',
      props.type === 'range'
        ? [sliderOne.value?.value, sliderTwo.value?.value]
        : sliderOne.value.value
    )
  }
}

const preventEventIfNotNumberInput = (event) => {
  if ((event.key >= '0' && event.key <= '9') || event.key === 'Backspace') {
    return
  }

  event.preventDefault()
}
const updateSlider = (value) => {
  if (value && value[0] && value[1] && props.type === 'range') {
    sliderOne.value.value = Number(value[0])
    sliderTwo.value.value = Number(value[1])
    slideOne()
    if (props.type === 'range') slideTwo()
  } else if (value && props.type === 'default') {
    if (value <= props.maxLimit && value >= props.minLimit) {
      sliderOne.value.value = Number(value)
      slideOne()
    }
  } else {
    fillColor(true)
  }
}
defineExpose({
  updateSlider
})

onMounted(() => updateSlider())
</script>

<template>
  <div class="flex flex-wrap w-full">
    <label
      v-if="label"
      class="flex items-center w-full mb-2 text-sm font-medium gap-x-3 text-oc-text-400"
    >
      <span class="flex items-center gap-x-1">
        {{ label }}
      </span>
    </label>
    <div
      class="relative h-[33px] flex items-center"
      :class="{
        'w-full': variant === 'default',
        'w-[85%]': variant === 'right'
      }"
    >
      <div ref="sliderTrack" class="absolute top-0 w-full h-3 m-auto rounded-full group" />

      <input
        ref="sliderOne"
        type="range"
        :min="minLimit"
        :max="maxLimit"
        :value="type === 'range' ? modelValue?.[0] : modelValue"
        @input="slideOne"
      />

      <input
        v-if="type === 'range'"
        ref="sliderTwo"
        type="range"
        :min="minLimit"
        :max="maxLimit"
        :value="modelValue?.[1]"
        @input="slideTwo"
      />

      <div
        v-if="variant === 'default'"
        class="group-hover:block absolute top-[1rem] z-[1] -translate-x-1/2 rounded-sm py-[3px] px-[6px] min-w-[28px] bg-oc-text-500 text-center text-white text-sm font-medium leading-[20px]"
        :style="`left: ${percent1}%`"
      >
        {{ type === 'range' ? modelValue?.[0] : modelValue }}
      </div>

      <div
        v-if="type === 'range'"
        class="group-hover:block absolute top-[1rem] z-[1] translate-x-1/2 rounded-sm py-[3px] px-[6px] min-w-[28px] bg-oc-text-500 text-center text-white text-sm font-medium leading-[20px]"
        :style="`right: ${100 - percent2}%`"
      >
        {{ modelValue?.[1] }}
      </div>

      <span class="absolute bottom-0 left-0"
        ><slot name="min-limit-label">{{ minLimit }}</slot></span
      >
      <span class="absolute bottom-0 right-0"
        ><slot name="max-limit-label">{{ maxLimit }}</slot></span
      >
    </div>
    <div class="w-[15%] -mt-4 px-2">
      <Input
        v-if="variant === 'right' && type === 'default'"
        :model-value="modelValue"
        placeholder="10"
        @keydown="preventEventIfNotNumberInput"
        @update:model-value="updateSlider"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
input[type='range'] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  @apply w-full absolute m-auto top-0  bg-transparent pointer-events-none;

  &::-webkit-slider-runnable-track {
    @apply h-3;
    -webkit-appearance: none;
  }

  &::-moz-range-track {
    @apply h-3;
    -moz-appearance: none;
  }

  &::-ms-track {
    @apply h-3;
    appearance: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    @apply h-6 w-6 ring-[5px] ring-white ring-inset cursor-pointer bg-[var(--oc-primary-500)] pointer-events-auto rounded-full;
    margin-top: -6px;
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    @apply h-6 w-6 ring-[5px] ring-white ring-inset cursor-pointer bg-[var(--oc-primary-500)] pointer-events-auto rounded-full;
  }

  &::-ms-thumb {
    appearance: none;
    @apply h-6 w-6 ring-[5px] ring-white ring-inset cursor-pointer bg-[var(--oc-primary-500)] pointer-events-auto rounded-full;
  }
}
</style>
