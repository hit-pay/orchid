<script setup>
import { Input, Slider } from "@/orchidui";
import { nextTick, ref } from "vue";

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

const localValue = ref(props.modelValue ?? []);
const defaultLocalMinValue = localValue.value?.[0] ?? props.minLimit
const defaultLocalMaxValue = localValue.value?.[1] ?? props.maxLimit

const localMinValue = ref(defaultLocalMinValue);
const localMaxValue = ref(defaultLocalMaxValue);
const slider = ref();

const updateRange = async (value) => {
  if (value.some(isNaN)) return;
  emit("update:modelValue", value);
  await nextTick();
  slider.value.updateSlider();
};

const updateRangeSlider = ($event) => {
  localMinValue.value = $event?.[0];
  localMaxValue.value = $event?.[1];
  emit("update:modelValue", $event);
};
</script>

<template>
  <div class="flex flex-col gap-y-2 oc-range-input">
    <span class="font-medium text-sm text-oc-text-400">Amount</span>
    <div class="flex gap-x-3">
      <Input
        v-model="localMinValue"
        label="From"
        is-inline-label
        placeholder=""
        @update:model-value="
          updateRange([Number(localMinValue), localValue?.[1]])
        "
      />
      <Input
        v-model="localMaxValue"
        label="To"
        is-inline-label
        placeholder=""
        @update:model-value="
          updateRange([localValue?.[0], Number(localMaxValue)])
        "
      />
    </div>
    <div class="flex pt-4">
      <Slider
        ref="slider"
        type="range"
        :max-limit="maxLimit"
        :min-limit="minLimit"
        :min-gap="minGap"
        :model-value="[localMinValue, localMaxValue]"
        @update:model-value="updateRangeSlider"
      />
    </div>
  </div>
</template>
