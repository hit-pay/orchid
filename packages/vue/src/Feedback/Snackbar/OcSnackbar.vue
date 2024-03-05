<script setup>
import { Icon } from "@/orchidui";
import { nextTick, ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    default: "default",
  },
  content: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "filled-check",
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
  isCloseIcon: {
    type: Boolean,
    default: false,
  },
  isFloating: {
    type: Boolean,
    default: false,
  },
  isRawHtml: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String,
    default: "top-center",
  },
  transitionName: {
    type: String,
    default: "slide-from-top",
  },
});
defineEmits(["update:modelValue"]);
const colorClasses = Object.freeze({
  default: "border-oc-success-200 bg-oc-success-50 text-oc-success-500",
  primary: "border-oc-primary-200 bg-oc-primary-50 text-oc-primary-500",
  error: "border-oc-error-200 bg-oc-error-50 text-oc-error-500",
  warning: "border-oc-warning-200 bg-oc-warning-50 text-oc-warning-500",
  gray: "border-oc-gray-300 bg-oc-gray-100 text-oc-gray-700",
});
const positionClasses = {
  "top-center": "top-4",
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-center": "bottom-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
};
const snackBar = ref();
const halfWindowWidth = ref();

watch(
  () => props.modelValue,
  async () => {
    await nextTick();
    halfWindowWidth.value =
      (document.body.clientWidth - snackBar.value.clientWidth) / 2;
  },
);
</script>

<template>
  <Transition :name="transitionName">
    <div
      v-show="modelValue"
      ref="snackBar"
      :class="[
        colorClasses[color],
        isFloating && positionClasses[position],
        {
          'fixed z-[1004]': isFloating,
        },
      ]"
      class="border rounded-lg p-4 flex items-center gap-x-3 shadow-sm snackbar"
      :style="
        position.includes('center') ? { left: halfWindowWidth + 'px' } : ''
      "
    >
      <Icon v-if="showIcon" :name="icon" class="shrink-0" />
      <slot>
        <div class="w-full flex items-center justify-between">
          <span v-if="!isRawHtml" class="text-oc-text text-sm">
            {{ content }}
          </span>
          <span v-else class="text-oc-text text-sm" v-html="content" />
          <div
            v-if="isCloseIcon"
            class="rounded cursor-pointer text-oc-gray-500 hover:bg-transparent hover:text-oc-text"
            @click="$emit('update:modelValue', false)"
          >
            <Icon name="x" width="20" height="20" />
          </div>
        </div>
      </slot>
    </div>
  </Transition>
</template>
<style lang="scss">
.snackbar {
  transition:
    transform 0.5s,
    opacity 0.5s;
}

.slide-from-top-enter-from {
  transform: translateY(-200%);
}

.slide-from-top-enter-to {
  transform: translateY(0%);
}

.slide-from-top-leave-from {
  opacity: 1;
}

.slide-from-top-leave-to {
  opacity: 0;
}
</style>
