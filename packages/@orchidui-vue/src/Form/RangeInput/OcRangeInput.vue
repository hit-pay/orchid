<script setup>
import { Input, Slider } from "@/orchidui";
import { ref, onMounted } from "vue";

const props = defineProps({
  maxLimit: {
    type: [String, Number],
    default: 100,
  },
  minLimit: {
    type: [String, Number],
    default: 0,
  },
  minGap: {
    type: [String, Number],
    default: 0,
  },
  modelValue: {
    type: [Array, String],
  },
});

const emit = defineEmits({
  "update:modelValue": [],
});

const localMinValue = ref(props.modelValue?.[0] ?? props.minLimit);
const localMaxValue = ref(props.modelValue?.[1] ?? props.maxLimit);
const slider = ref();

const updateRange = (value, index) => {
  if (!isNaN(value)) {
    if (index === 1) {
      localMaxValue.value = Number(value);
    } else {
      localMinValue.value = Number(value);
    }
    slider.value.updateSlider([localMinValue.value, localMaxValue.value]);
  }
};

const updateRangeSlider = ($event) => {
  if (isNaN($event[0]) || isNaN($event[1])) return;
  localMinValue.value = Number($event[0]);
  localMaxValue.value = Number($event[1]);
  emit("update:modelValue", [
    Number(localMinValue.value),
    Number(localMaxValue.value),
  ]);
};
onMounted(() => {
  slider.value.updateSlider();
});
</script>

<template>
  <div class="flex flex-col gap-y-2 oc-range-input">
    <span class="font-medium text-sm text-oc-text-400">Amount</span>
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
    <div class="flex pt-4">
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
  </div>
</template>
