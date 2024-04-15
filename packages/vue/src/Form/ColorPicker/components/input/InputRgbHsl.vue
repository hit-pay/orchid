<template>
  <Input v-model="internal.r" class="w-[52px]" @blur="updateValue('r')" />
  <Input v-model="internal.g" class="w-[52px]" @blur="updateValue('g')" />
  <Input v-model="internal.b" class="w-[52px]" @blur="updateValue('b')" />
</template>

<script setup>
import { Input } from "@orchidui/vue";
import { ref, watch } from "vue";

const props = defineProps({
  inputType: {
    default: "RGB",
    type: String,
  },
  rgbValue: {
    type: Object,
  },
  hslValue: {
    type: Object,
  },
});

const emits = defineEmits({
  "update-rgb-value": [],
  "update-hsl-value": [],
});

const internal = ref("");

const updateValue = (rgbType) => {
  let maxLength = 255;
  if (props.inputType == "HSL") {
    maxLength = 100;
    if (rgbType == "r") {
      maxLength = 360;
    }
  }
  // validate
  if (rgbType == "r") {
    let rInput = parseInt(internal.value.r);
    if (rInput <= maxLength) {
      if (props.inputType == "RGB") {
        updateRgb("r");
      } else {
        updateHsl();
      }
    } else {
      if (props.inputType == "RGB") {
        internal.value.r = props.rgbValue.r;
      } else {
        internal.value.r = props.hslValue.h;
      }
    }
  } else if (rgbType == "g") {
    let rInput = parseInt(internal.value.g);
    if (rInput <= maxLength) {
      if (props.inputType == "RGB") {
        updateRgb("g");
      } else {
        updateHsl();
      }
    } else {
      if (props.inputType == "RGB") {
        internal.value.g = props.rgbValue.g;
      } else {
        internal.value.g = props.hslValue.s;
      }
    }
  } else if (rgbType == "b") {
    let rInput = parseInt(internal.value.b);
    if (rInput <= maxLength) {
      if (props.inputType == "RGB") {
        updateRgb("b");
      } else {
        updateHsl();
      }
    } else {
      if (props.inputType == "RGB") {
        internal.value.b = props.rgbValue.b;
      } else {
        internal.value.g = props.hslValue.l;
      }
    }
  }
};

const updateRgb = (tp) => {
  emits("update-rgb-value", {
    type: tp,
    value: {
      r: parseInt(internal.value.r),
      g: parseInt(internal.value.g),
      b: parseInt(internal.value.b),
    },
  });
};

const updateHsl = () => {
  emits("update-hsl-value", {
    h: parseInt(internal.value.r),
    s: parseInt(internal.value.g),
    l: parseInt(internal.value.b),
  });
};

if (props.inputType === "RGB") {
  watch(
    () => props.rgbValue,
    (newValue, oldValue) => {
      if (newValue !== oldValue) internal.value = newValue;
    },
    { immediate: true, deep: true },
  );
} else {
  watch(
    () => props.hslValue,
    (val) => {
      internal.value = {
        r: val.h,
        g: val.s,
        b: val.l,
      };
    },
    { immediate: true, deep: true },
  );
}
</script>
