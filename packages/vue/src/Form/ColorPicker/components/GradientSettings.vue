<template>
  <div
    v-if="mode == 'gradient'"
    v-show="gradientType == 'linear' && isShowLinearAngleRange"
    class="ck-cp-linear-angle-container"
  >
    <div>
      <p class="ck-gradient-set-label">
        {{ local.angle ? local.angle : "Angle" }} <span>{{ angle }}°</span>
      </p>
      <input
        type="range"
        min="0"
        max="360"
        :value="angle"
        @input="handleInput($event, 'angle')"
      />
    </div>
  </div>

  <div
    v-if="mode == 'gradient'"
    v-show="gradientType == 'radial' && isShowRadialAngleRange"
    class="ck-cp-linear-angle-container flex gap-3"
  >
    <div class="w-1/2">
      <p class="ck-gradient-set-label">
        {{ local.positionX ? local.positionX : "Position X" }}
        <span>{{ percentageX }}%</span>
      </p>
      <input
        type="range"
        min="0"
        max="100"
        :value="percentageX"
        @input="handleInput($event, 'percentageX')"
      />
    </div>
    <div class="w-1/2">
      <p class="ck-gradient-set-label">
        {{ local.positionY ? local.positionY : "Position Y" }}
        <span>{{ percentageY }}%</span>
      </p>
      <input
        type="range"
        min="0"
        max="100"
        :value="percentageY"
        @input="handleInput($event, 'percentageY')"
      />
    </div>
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
