<script setup>
import { Select, Icon } from "@/orchidui";
defineEmits("update:model-value");
const props = defineProps({
  modelValue: Array,
  label: String,
  options: {
    type: Array,
  },
});

const getClassName = (font) => {
  return font.replace(/[^a-zA-Z]/g, "");
};
let css = ``;
for (let index = 0; index < props.options.length; index++) {
  css += `@import url('${props.options[index].value[1]}');`;
  css += `.oc-font-${getClassName(props.options[index].value[0])}{
    font-family: ${props.options[index].value[0]};
    font-weight: ${props.options[index].weight};
  }`;
  console.log(`.oc-font-${getClassName(props.options[index].value[0])}`);
}
let head = document.head || document.getElementsByTagName("head")[0];
let style = document.createElement("style");
head.appendChild(style);
style.type = "text/css";
if (style.styleSheet) {
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}
</script>
<template>
  <Select
    :model-value="modelValue"
    :label="label"
    :options="options"
    is-filterable
    placeholder="Placeholder"
  >
    <template #default="{ fOptions, selectOption }">
      <div
        v-for="option in fOptions"
        :key="option"
        class="p-3 flex items-center text-oc-text-400 justify-between cursor-pointer hover:bg-oc-accent-1-50 gap-x-3 rounded-sm"
        :class="modelValue === option.value ? 'bg-oc-accent-1-50' : ''"
        @click="
          selectOption(option.value);
          $emit('update:model-value', option.value);
        "
      >
        <div
          class="flex flex-col gap-3"
          :class="`oc-font-${getClassName(option.value[0])}`"
        >
          {{ option.label }}
        </div>
        <Icon
          v-if="modelValue === option.value"
          class="w-5 h-5 text-oc-primary"
          name="check-2"
        />
      </div>
    </template>
  </Select>
</template>
