<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  maxLimit: {
    type: Number,
    default: 100,
  },
  minLimit: {
    type: Number,
    default: 0,
  },
  minGap: {
    type: Number,
    default: 0,
  },
  type: {
    type: String,
    default: "default",
  },
  modelValue: {
    type: [Array, Number, String],
    default: 0,
  },
});

const emit = defineEmits({
  "update:modelValue": [],
});

const sliderOne = ref();
const sliderTwo = ref();
const sliderTrack = ref();
const percent1 = ref(0);
const percent2 = ref(0);
const slideOne = () => {
  if (props.type === "range") {
    if (
      parseInt(sliderTwo.value?.value) - parseInt(sliderOne.value?.value) <=
      props.minGap
    ) {
      sliderOne.value.value = parseInt(sliderTwo.value.value) - props.minGap;
    }
  }
  fillColor();
};

const slideTwo = () => {
  if (
    parseInt(sliderTwo.value?.value) - parseInt(sliderOne.value?.value) <=
    props.minGap
  ) {
    sliderTwo.value.value = parseInt(sliderOne.value?.value) + props.minGap;
  }
  fillColor();
};

const fillColor = () => {
  percent1.value =
    ((sliderOne.value?.value - props.minLimit) /
      (props.maxLimit - props.minLimit)) *
    100;
  percent2.value =
    props.type === "range"
      ? ((sliderTwo.value?.value - props.minLimit) /
          (props.maxLimit - props.minLimit)) *
        100
      : 0;
  sliderTrack.value.style.background =
    props.type === "range"
      ? `linear-gradient(to right, var(--oc-gray-100) ${percent1.value}% , var(--oc-primary-500) ${percent1.value}% , var(--oc-primary-500) ${percent2.value}%, var(--oc-gray-100) ${percent2.value}%)`
      : `linear-gradient(to right, var(--oc-primary-500) ${percent1.value}%, var(--oc-gray-100) ${percent1.value}%)`;
  emit(
    "update:modelValue",
    props.type === "range"
      ? [sliderOne.value?.value, sliderTwo.value?.value]
      : sliderOne.value.value,
  );
};
const updateSlider = (value) => {
  if (value && value[0] && value[1] && props.type === "range") {
    sliderOne.value.value = Number(value[0]);
    sliderTwo.value.value = Number(value[1]);
  }
  slideOne();
  if (props.type === "range") slideTwo();
};
defineExpose({
  updateSlider,
});

onMounted(() => updateSlider());
</script>

<template>
  <div class="relative w-full h-[33px]">
    <div
      ref="sliderTrack"
      class="rounded-full h-3 absolute m-auto top-0 w-full group"
    />

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
      class="group-hover:block absolute top-[1rem] z-[1] -translate-x-1/2 rounded-sm py-[3px] px-[6px] min-w-[28px] bg-oc-text-500 text-center text-white text-sm font-medium leading-[20px]"
      :style="`left: ${percent1}%`"
    >
      {{ type === "range" ? modelValue?.[0] : modelValue }}
    </div>

    <div
      v-if="type === 'range'"
      class="group-hover:block absolute top-[1rem] z-[1] translate-x-1/2 rounded-sm py-[3px] px-[6px] min-w-[28px] bg-oc-text-500 text-center text-white text-sm font-medium leading-[20px]"
      :style="`right: ${100 - percent2}%`"
    >
      {{ modelValue?.[1] }}
    </div>

    <span class="absolute bottom-0 left-0">{{ minLimit }}</span>
    <span class="absolute bottom-0 right-0">{{ maxLimit }}</span>
  </div>
</template>

<style scoped lang="scss">
input[type="range"] {
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
