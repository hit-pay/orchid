<script setup>
import { computed  } from "vue";
import {  Icon } from "@/orchidui";

const props = defineProps({
  modelValue: {
    type: Array,
    default:() => [],
  },
  form: Object
});

defineEmits({
  "update:modelValue": [],
  blur: [],
  focus: [],
});


const inputClasses = computed(() => [
  !props.disabled && (props.errorMessage || props.hasError)
    ? "border-oc-error shadow-oc-error"
    : "border-oc-gray-200 shadow-oc-gray-200",
  props.disabled ? "bg-oc-bg-dark pointer-events-none" : "bg-oc-bg-light",
]);

const getNewValues = (index, newVal) => {
    let newValues = props.modelValue
    newValues[index] = newVal
    return newValues
}
</script>

<template>
  <div class="w-full grid grid-cols-2 gap-3">
    <div  
        v-for="name, index in form.name" :key="index">
        <label class="text-sm flex items-center gap-x-3 font-medium text-oc-text-400">{{name.props.label}}</label>
        <div 
            class="rounded h-[36px] border flex items-center gap-x-3 px-3 relative"
            :class="inputClasses">
            <Icon name="drop" :style="`color:${modelValue[index]};border-style:solid`" />
            {{ modelValue[index] }}
            <input
                type="color"
                :value="modelValue[index]"
                class="opacity-0 w-full absolute h-full cursor-pointer "
                @input="$emit('update:modelValue', getNewValues(index, $event.target.value))"
            />
            <Icon class="ml-auto" name="paint" />
        </div>
    </div>
</div>
</template>
