<template>
  <div>
    <template v-if="gradientType == 'linear' && isShowLinearAngleRange">
      <div class="ck-cp-linear-angle-container !m-0 !mt-5">
        <div class="w-full grid grid-cols-2 gap-2">
          <!-- TODO : use degree picker -->
          <input
            type="range"
            min="0"
            max="360"
            :value="angle"
            @input="handleInput($event.target.value, 'angle')"
          />
          <div class="relative">
            <Input
              :model-value="angle"
              placeholder="360"
              input-type="number"
              input-mode="numeric"
              @update:model-value="handleInput($event, 'angle')"
            />
            <span class="absolute top-[10px] right-[12px]">°</span>
          </div>
        </div>
      </div>
    </template>

    <template v-if="gradientType == 'radial' && isShowRadialAngleRange">
      <div class="ck-cp-linear-angle-container flex flex-wrap gap-3 !m-0">
        <div class="w-full grid grid-cols-2 gap-2">
          <input
            type="range"
            min="0"
            max="100"
            :value="percentageX"
            @input="handleInput($event.target.value, 'percentageX')"
          />
          <div class="relative">
            <Input
              :model-value="percentageX"
              placeholder="100"
              input-type="number"
              input-mode="numeric"
              @update:model-value="handleInput($event, 'percentageX')"
            />
            <span class="absolute top-[10px] right-[10px]">%</span>
          </div>
        </div>
        <div class="w-full grid grid-cols-2 gap-2">
          <input
            type="range"
            min="0"
            max="100"
            :value="percentageY"
            @input="handleInput($event.target.value, 'percentageY')"
          />
          <div class="relative">
            <Input
              :model-value="percentageY"
              placeholder="100"
              input-type="number"
              input-mode="numeric"
              @update:model-value="handleInput($event, 'percentageY')"
            />
            <span class="absolute top-[10px] right-[10px]">%</span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { Input } from "@/orchidui";

import { ref } from "vue";
defineProps({
  mode: {
    default: "gradient",
    type: String,
  },
  gradientType: { default: "linear", type: String },
  angle: { default: 90, type: Number },
  percentageX: { default: 50, type: Number },
  percentageY: { default: 50, type: Number },
  local: {
    default: () => {
      return { angle: "", positionX: "", positionY: "" };
    },
    type: Object,
  },
});

const isShowLinearAngleRange = ref(true);
const isShowRadialAngleRange = ref(true);

const emits = defineEmits([
  "update:angle",
  "update:percentageX",
  "update:percentageY",
  "onInput",
]);

const handleInput = (value, type) => {
  let newValue = parseInt(value);
  switch (type) {
    case "angle":
      if (value > 360) {
        newValue = 360;
      } else if (value < 0) {
        newValue = 0;
      }
      emits("update:angle", newValue);
      emits("onInput");
      break;

    case "percentageX":
      if (value > 100) {
        newValue = 100;
      } else if (value < 0) {
        newValue = 0;
      }
      emits("update:percentageX", newValue);
      emits("onInput");
      break;
    case "percentageY":
      if (value > 100) {
        newValue = 100;
      } else if (value < 0) {
        newValue = 0;
      }
      emits("update:percentageY", newValue);
      emits("onInput");
      break;
  }
};
</script>
