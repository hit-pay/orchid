<script setup>
import { defineAsyncComponent } from "vue";
const ColorPicker = defineAsyncComponent(
  () => import("../../../Form/ColorPicker/ColorPicker.vue"),
);
import { Icon } from "@/orchidui";
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  form: Object,
});

defineEmits({
  "update:modelValue": []
});

const getNewValues = (index, newVal) => {
  let newValues = (props.modelValue && props.modelValue.length > 0) ? props.modelValue :  [];
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
          :model-value="(modelValue && modelValue.length > 0) ? modelValue[index] : '#FFFFFF'" 
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
