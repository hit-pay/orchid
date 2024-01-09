<script setup>
import { Icon } from "@/orchidui";
import { ColorPicker } from "@/orchidui/ColorPicker";

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  form: Object,
});

defineEmits({
  "update:modelValue": [],
  blur: [],
  focus: [],
});

const getNewValues = (index, newVal) => {
  let newValues = props.modelValue;
  newValues[index] = newVal;
  return newValues;
};
</script>

<template>
  <div class="w-full grid grid-cols-2 gap-3">
    <div v-for="(name, index) in form.name" :key="index">
      <label
        class="text-sm flex items-center gap-x-3 font-medium text-oc-text-400 mb-2"
        >{{ name.props.label }}</label
      >
      <ColorPicker 
          :model-value="modelValue[index]" 
          @update:model-value="
            $emit('update:modelValue', getNewValues(index, $event))
          ">
        <template #leading>
          <Icon class="ml-auto" name="paint" />
        </template>  
        </ColorPicker>
    </div>
  </div>
</template>
