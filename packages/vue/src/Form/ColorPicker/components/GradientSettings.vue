<template>
  <div>
    <template v-if="gradientType == 'linear' && isShowLinearAngleRange">
      <div class="ck-cp-linear-angle-container !m-0 !mt-5">
        <div class="w-full flex">
          <input
            class="w-1/2"
            type="range"
            min="0"
            max="360"
            :value="angle"
            @input="handleInput($event, 'angle')"
          />
          <!-- <p class="w-1/2 px-3 ck-gradient-set-label !m-0">{{ angle }}°</p> -->
        </div>
      </div>
    </template>

    <template v-if="gradientType == 'radial' && isShowRadialAngleRange">
      <div class="ck-cp-linear-angle-container flex flex-wrap gap-3 !m-0">
        <div class="w-full flex">
          <input
            class="w-1/2"
            type="range"
            min="0"
            max="100"
            :value="percentageX"
            @input="handleInput($event, 'percentageX')"
          />
          <!-- <p class="w-1/2 px-3 ck-gradient-set-label !m-0">
            X {{ percentageX }}%
          </p> -->
        </div>
        <div class="w-full flex">
          <input
            class="w-1/2"
            type="range"
            min="0"
            max="100"
            :value="percentageY"
            @input="handleInput($event, 'percentageY')"
          />
          <!-- <p class="w-1/2 px-3 ck-gradient-set-label !m-0">
            Y {{ percentageY }}%
          </p> -->
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
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

const handleInput = (event, type) => {
  switch (type) {
    case "angle":
      emits("update:angle", parseInt(event.target.value));
      emits("onInput");
      break;

    case "percentageX":
      emits("update:percentageX", parseInt(event.target.value));
      emits("onInput");
      break;
    case "percentageY":
      emits("update:percentageY", parseInt(event.target.value));
      emits("onInput");
      break;
  }
};
</script>
