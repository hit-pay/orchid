<template>
  <div class="px-2 mt-2">
    <template v-if="gradientType == 'linear' && isShowLinearAngleRange">
      <Slider
        label="Angle"
        :model-value="angle"
        :min-limit="0"
        :max-limit="360"
        @update:modelValue="handleInput($event, 'angle')"
      >
        <template #min-limit-label>0 </template>
        <template #max-limit-label>360<span>&#176;</span></template>
      </Slider>
    </template>

    <template v-if="gradientType == 'radial' && isShowRadialAngleRange">
      <div class="grid grid-cols-2 gap-4 px-1">
        <Slider
          label="Position X"
          :model-value="percentageX"
          :min-limit="0"
          :max-limit="100"
          @update:modelValue="handleInput($event, 'percentageX')"
        >
          <template #min-limit-label>0</template>
          <template #max-limit-label>100%</template>
        </Slider>
        <Slider
          label="Position Y"
          :model-value="percentageY"
          :min-limit="0"
          :max-limit="100"
          @update:modelValue="handleInput($event, 'percentageY')"
        >
          <template #min-limit-label>0</template>
          <template #max-limit-label>100%</template>
        </Slider>
      </div>
    </template>
  </div>
</template>

<script setup>
import { Slider } from "@/orchidui";
import { ref, onMounted } from "vue";

defineProps({
  mode: {
    default: "gradient",
    type: String,
  },
  gradientType: { default: "linear", type: String },
  angle: { default: 90, type: Number },
  percentageX: { default: 50, type: Number },
  percentageY: { default: 50, type: Number },
});

const isShowLinearAngleRange = ref(false);
const isShowRadialAngleRange = ref(false);


onMounted(() => {

  isShowLinearAngleRange.value = true
  isShowRadialAngleRange.value = true

})
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
