<script setup>
import { Popper } from "@/orchidui";
import { clickOutside as vClickOutside } from "../../directives/clickOutside.js";
import { ref } from "vue"; // Import the directive

const emit = defineEmits({
  "update:modelValue": [],
});

const props = defineProps({
  distance: {
    type: Number,
    default: 4,
  },
  skidding: {
    type: Number,
    default: 0,
  },
  isDisabled: Boolean,
  menuClasses: String,
  placement: {
    type: String,
    default: "bottom-start",
  },
  popperOptions: Object,
  modelValue: Boolean,
});
const popper = ref();
const toggleDropdown = async () => {
  if (props.isDisabled) return;
  // Need to add a timeout because the popup position cannot be determined while the element is display:none (v-show), which is required for the appearance animation
  setTimeout(() => popper.value.popperInstance.update(), 0);
  emit("update:modelValue", !props.modelValue);
};
const onClickOutside = () => {
  if (props.modelValue) emit("update:modelValue", false);
};
</script>

<template>
  <span v-click-outside="onClickOutside" class="flex" @click.stop>
    <Popper
      ref="popper"
      :placement="placement"
      :distance="distance"
      :skidding="skidding"
      :popper-options="popperOptions"
    >
      <div class="w-[inherit] flex" @click="toggleDropdown">
        <slot />
      </div>
      <template #popper>
        <Transition name="fade">
          <div
            v-show="modelValue"
            :class="menuClasses"
            class="rounded bg-oc-bg-light shadow min-w-[162px]"
            @click.stop
          >
            <slot name="menu" />
          </div>
        </Transition>
      </template>
    </Popper>
  </span>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
