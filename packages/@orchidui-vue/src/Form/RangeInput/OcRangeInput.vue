<script setup>
import { onMounted, ref, watch } from "vue";
import { Input } from "@orchid";

const props = defineProps({
  maxLimit: {
    type: [String, Number],
    default: 100,
  },
  minLimit: {
    type: [String, Number],
    default: 0,
  },
  minValue: {
    type: [String, Number],
    default: 100,
  },
  maxValue: {
    type: [String, Number],
    default: 0,
  },
});
const emit = defineEmits({
  "update:minValue": [],
  "update:maxValue": [],
});
const slider = ref();

const inputStart = ref();
const inputEnd = ref();

const thumbLeft = ref();
const thumbRight = ref();
const rangeBetween = ref();

const minPercent = ref(0);
const maxPercent = ref(0);

const createSlider = () => {
  setStartValueCustomSlider(inputStart.value);
  setEndValueCustomSlider(inputEnd.value);
};

const setStartValueCustomSlider = (inputStart) => {
  if (isNaN(props.minValue) || props.minValue < props.minLimit)
    inputStart.value = props.minLimit;
  if (Number(inputStart.value) >= Number(props.maxValue))
    inputStart.value = Number(props.maxValue) - 1;
  emit("update:minValue", inputStart.value);

  minPercent.value =
    ((inputStart.value - props.minLimit) / (props.maxLimit - props.minLimit)) *
    100;
};

const setEndValueCustomSlider = (inputEnd) => {
  if (isNaN(props.maxValue) || props.maxValue > props.maxLimit)
    inputEnd.value = props.maxLimit;
  if (Number(inputEnd.value) <= Number(props.minValue))
    inputEnd.value = Number(props.minValue) + 1;
  emit("update:maxValue", inputEnd.value);

  maxPercent.value =
    ((inputEnd.value - props.maxLimit) / (props.minLimit - props.maxLimit)) *
    100;
};

onMounted(() => createSlider(slider.value));

watch(
  () => [props.minLimit, props.maxLimit],
  () => createSlider(),
);
</script>

<template>
  <div class="flex flex-col gap-y-2 oc-range-input">
    <span class="font-medium text-sm text-oc-text-400">Amount</span>
    <div class="flex gap-x-3">
      <Input
        :model-value="minValue"
        label="From"
        is-inline-label
        placeholder=""
        @blur="setStartValueCustomSlider(inputStart)"
        @update:model-value="$emit('update:minValue', $event)"
      />
      <Input
        :model-value="maxValue"
        label="To"
        is-inline-label
        placeholder=""
        @blur="setEndValueCustomSlider(inputEnd)"
        @update:model-value="$emit('update:maxValue', $event)"
      />
    </div>
    <div class="flex pt-4">
      <div ref="slider" class="range-slider">
        <input
          ref="inputStart"
          type="range"
          :min="minLimit"
          :max="maxLimit"
          :value="minValue"
          @input="setStartValueCustomSlider(inputStart)"
        />
        <input
          ref="inputEnd"
          type="range"
          :value="maxValue"
          :min="minLimit"
          :max="maxLimit"
          @input="setEndValueCustomSlider(inputEnd)"
        />

        <div class="track-wrapper">
          <div class="track"></div>
          <div
            ref="rangeBetween"
            class="range-between"
            :style="{
              left: `max(${minPercent}% - 20px, 0px)`,
              right: `max(${maxPercent}% - 20px, 0px)`,
            }"
          ></div>
          <div
            ref="thumbLeft"
            class="thumb left"
            :style="{ left: `max(${minPercent}% - 20px, 0px)` }"
          />
          <div
            ref="thumbRight"
            class="thumb right"
            :style="{ right: `max(${maxPercent}% - 20px, 0px)` }"
          />
        </div>

        <div class="range-labels">
          <span class="range-label range-label-start">{{ minLimit }}</span>
          <span class="range-label range-label-end">{{ maxLimit }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.oc-range-input {
  .range-slider {
    --_height: 8px;
    --_thumb-size: 20px;

    @apply gap-y-2 w-full relative grid mb-[calc(var(--_thumb-size)*-1)];

    .range-labels {
      @apply flex justify-between;

      .range-label {
        @apply inline-flex leading-[21px];

        &-start {
          @apply self-start;
        }

        &-end {
          @apply self-end;
        }
      }
    }

    .track-wrapper {
      @apply relative z-[1] grid items-center;
      height: var(--_height);

      .track {
        @apply absolute z-[1] left-0 right-0 top-0 bottom-0 rounded-full bg-[var(--oc-gray-100)];
      }

      .range-between {
        @apply absolute z-[2] left-0 right-0 top-0 bottom-0 rounded-full bg-[var(--oc-primary-500)];
      }

      .thumb {
        width: var(--_thumb-size);
        height: var(--_thumb-size);
        @apply absolute z-[3] rounded-full shadow bg-[var(--oc-background-light)] border border-[var(--oc-gray-200)] flex items-center justify-center before:w-1/2 before:h-1/2 before:bg-[var(--oc-primary-500)] before:rounded-full before:pointer-events-none;
      }
    }

    input[type="range"] {
      @apply absolute pointer-events-none z-[2] w-full opacity-0 top-0 cursor-pointer;
      -webkit-appearance: none;
      height: var(--_height);
    }

    input[type="range"]::-webkit-slider-thumb {
      @apply pointer-events-auto;
      width: var(--_thumb-size);
      height: var(--_thumb-size);
      -webkit-appearance: none;
    }

    input[type="range"]::-moz-range-thumb {
      @apply pointer-events-auto;
      width: var(--_thumb-size);
      height: var(--_thumb-size);
      -webkit-appearance: none;
    }
  }
}
</style>
