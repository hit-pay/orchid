<template>
  <button class="oc-btn" :disabled="isDisabled || isLoading" :class="buttonClassName">
    <Icon class="mr-2" v-if="isLoading" name="loading-2" />
    <template v-if="icon && !isLoading">
      <Icon :class="{
        'mr-2': icon && label,
      }" :name="icon" />
    </template>
    <template v-if="label">{{ label }}</template>
    <slot v-else />
    <template v-if="iconAfter">
      <Icon class="ml-2" :name="iconAfter" />
    </template>
  </button>
</template>
<script setup>
import Icon from '../Icon/Icon.vue'
import { computed, defineProps } from "vue";
const props = defineProps({
  label: String,
  isSecondary: Boolean,
  isDestructive: Boolean,
  isSmall: Boolean,
  isLarge: Boolean,
  isDisabled: Boolean,
  isLoading: Boolean,
  icon: String,
  iconAfter: String,
  isRounded: Boolean,
  isText: Boolean
});

const buttonClassName = computed(() => {
  let className = "border-1 border-oc-primary-500 ";

  let typeClass = "";

  if (props.isDestructive) {
    typeClass = props.isText ? "text-oc-error ": "oc-btn-error text-oc-text-000 ";
  } else if (props.isSecondary) {
    typeClass = props.isText ? "text-oc-text-400 ": "oc-btn-secondary text-oc-text-400 "
  } else {
    typeClass = props.isText ? "text-oc-primary " : "oc-btn-primary  text-oc-text-000 ";
  }

  
  className += typeClass;

  if (props.icon && !props.label) {
    // this only icon
    className += "p-2 text-sm ";
  } else if (props.isSmall) {
    className += "px-3 py-1 text-sm ";
  } else if (props.isLarge) {
    className += "px-4 py-2 text-lg ";
  } else {
    className += "px-4 py-2 ";
  }


  if (props.isDisabled || props.isLoading) {
    className += "opacity-50 ";
  }

  if (props.icon || props.iconAfter || props.isLoading) {
    className += "flex items-center ";
  }

  className += props.isRounded ? "rounded-full " : "rounded-lg ";

  return className;
});

</script>
<style scoped>
.oc-btn:active{
  box-shadow: none;
}
.oc-btn-primary {
  background: linear-gradient(220deg, var(--oc-primary-400) 0%, var(--oc-primary-500) 100%);
  box-shadow: 0px 2px 0px 0px var(--oc-primary-500);
}

.oc-btn-secondary {
  background: linear-gradient(220deg, var(--oc-text-000) 0%, var(--oc-grey-100) 100%);
  box-shadow: 0px 1.5px 0px 0px rgba(0, 0, 0, 0.1);
}

.oc-btn-error {
  background: linear-gradient(220deg, var(--oc-error-400) 0%, var(--oc-error-500) 100%);
  box-shadow: 0px 2px 0px 0px var(--oc-error-500);
}
</style>