<script setup>
import { Input, Slider } from "@/orchidui";
import { nextTick, onMounted, ref } from "vue";

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
    type: Array,
    required: true,
  },
});

const emit = defineEmits({
  "update:modelValue": [],
});

const localMinValue = ref();
const localMaxValue = ref();
const slider = ref();

const updateRange = async (value) => {
  if (value.some(isNaN)) return;
  emit("update:modelValue", value);
  await nextTick();
  slider.value.updateSlider();
};
onMounted(async () => {
  await nextTick();
  localMinValue.value = props.modelValue[0];
  localMaxValue.value = props.modelValue[1];
  slider.value.updateSlider();
});
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
          updateRange([Number(localMinValue), modelValue[1]])
        "
      />
      <Input
        v-model="localMaxValue"
        label="To"
        is-inline-label
        placeholder=""
        @update:model-value="
          updateRange([modelValue[0], Number(localMaxValue)])
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
        :model-value="modelValue"
        @update:model-value="
          $emit('update:modelValue', $event);
          localMinValue = $event[0];
          localMaxValue = $event[1];
        "
      />
    </div>
  </div>
</template>
