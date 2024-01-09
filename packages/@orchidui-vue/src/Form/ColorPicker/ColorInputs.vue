<script setup>
import { Input } from "@/orchidui";
import { computed, ref, watch } from "vue";

const props = defineProps({
  activeColor: {
    type: String,
    default: "#000000",
  },
});
const emit = defineEmits(["update:activeColor"]);
const isColorHex = computed(() => props.activeColor.startsWith("#"));
const localValue = ref();
const localRGB = ref();
const getRGBColor = computed(() => {
  if (isColorHex.value) {
    const hexCode = props.activeColor.replace("#", "");
    const r = parseInt(hexCode.substring(0, 2), 16);
    const g = parseInt(hexCode.substring(2, 4), 16);
    const b = parseInt(hexCode.substring(4, 6), 16);
    return { r, g, b };
  } else {
    const rgbCode = props.activeColor.replace("rgb(", "").replace(")", "");
    const [r, g, b] = rgbCode.split(",").map((item) => parseInt(item));
    return { r, g, b };
  }
});

const getHexColor = computed(() =>
  (isColorHex.value
    ? props.activeColor
    : `#${getRGBColor.value.r
        .toString(16)
        .padStart(2, "0")}${getRGBColor.value.g
        .toString(16)
        .padStart(2, "0")}${getRGBColor.value.b.toString(16).padStart(2, "0")}`
  ).toUpperCase(),
);
const isHexColorValid = computed(() => {
  const hexCode = localValue.value.replace("#", "");
  return hexCode.length === 6 && !isNaN(parseInt(hexCode, 16));
});

const changeHexColor = () => {
  if (localValue.value.startsWith("#") && isHexColorValid.value) {
    console.log(localValue.value);
    emit("update:activeColor", localValue.value);
  } else {
    emit("update:activeColor", "#000000");
  }
};
const changeRGBColor = (value) => {
  if (value === "") return;

  if (
    localRGB.value.r >= 0 &&
    localRGB.value.r <= 255 &&
    localRGB.value.g >= 0 &&
    localRGB.value.g <= 255 &&
    localRGB.value.b >= 0 &&
    localRGB.value.b <= 255
  ) {
    emit(
      "update:activeColor",
      `rgb(${localRGB.value.r},${localRGB.value.g},${localRGB.value.b})`,
    );
  } else {
    emit("update:activeColor", "#000000");
  }
};
watch(
  () => props.activeColor,
  () => {
    localValue.value = getHexColor.value;
    localRGB.value = getRGBColor.value;
  },
  { immediate: true },
);
</script>

<template>
  <div class="flex gap-x-3">
    <Input
      v-model="localValue"
      class="max-w-[104px]"
      label="Hex"
      placeholder="#000"
      @blur="changeHexColor"
      @keydown.enter="changeHexColor"
    />
    <Input
      v-model="localRGB.r"
      class="max-w-[64px]"
      label="R"
      placeholder="0"
      @update:model-value="changeRGBColor"
      @blur="localRGB.r = localRGB.r === '' ? '0' : localRGB.r"
    />
    <Input
      v-model="localRGB.g"
      class="max-w-[64px]"
      label="G"
      placeholder="0"
      @update:model-value="changeRGBColor"
      @blur="localRGB.g = localRGB.g === '' ? '0' : localRGB.g"
    />
    <Input
      v-model="localRGB.b"
      class="max-w-[64px]"
      label="B"
      placeholder="0"
      @update:model-value="changeRGBColor"
      @blur="localRGB.b = localRGB.b === '' ? '0' : localRGB.b"
    />
  </div>
</template>
