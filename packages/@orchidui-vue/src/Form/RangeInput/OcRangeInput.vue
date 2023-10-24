<script setup>
import { onMounted, ref } from "vue";
import { Input } from "@orchid";
const slider = ref();

const inputStart = ref();
const inputEnd = ref();

const thumbLeft = ref();
const thumbRight = ref();
const rangeBetween = ref();

const minLimit = ref(0);
const maxLimit = ref(100);

const minPercent = ref(0);
const maxPercent = ref(0);

const minValue = ref(0);
const maxValue = ref(100);
const createSlider = () => {
  setStartValueCustomSlider(inputStart.value);
  setEndValueCustomSlider(inputEnd.value);
};

const setStartValueCustomSlider = (inputStart) => {
  if (isNaN(minValue.value)) inputStart.value = minLimit.value;
  if (Number(inputStart.value) >= Number(maxValue.value))
    inputStart.value = Number(maxValue.value) - 1;
  minValue.value = inputStart.value;

  minPercent.value = (inputStart.value / maxLimit.value) * 100;
};

const setEndValueCustomSlider = (inputEnd) => {
  if (isNaN(maxValue.value)) inputEnd.value = maxLimit.value;
  if (Number(inputEnd.value) <= Number(minValue.value))
    inputEnd.value = Number(minValue.value) + 1;
  maxValue.value = inputEnd.value;

  maxPercent.value = ((maxLimit.value - inputEnd.value) / maxLimit.value) * 100;
};

onMounted(() => createSlider(slider.value));
</script>

<template>
  <div class="flex flex-col gap-y-2 oc-range-input">
    <span class="font-medium text-sm text-oc-text-400">Amount</span>
    <div class="flex gap-x-3">
      <Input
        v-model="minValue"
        label="From"
        is-inline-label
        placeholder=""
        @blur="setStartValueCustomSlider(inputStart)"
      />
      <Input
        v-model="maxValue"
        label="To"
        is-inline-label
        placeholder=""
        @blur="setEndValueCustomSlider(inputEnd)"
      />
    </div>
    <div class="flex pt-4">
      <div ref="slider" class="range-slider">
        <input
          ref="inputStart"
          type="range"
          :value="minValue"
          @input="setStartValueCustomSlider(inputStart)"
        />
        <input
          ref="inputEnd"
          type="range"
          :value="maxValue"
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
