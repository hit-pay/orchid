<template>
  <button
    class="oc-btn overflow-hidden relative font-medium gap-x-3 flex items-center"
    :disabled="isDisabled || isLoading"
    :class="[
      buttonTypeClasses[variant],
      buttonSizeClasses[size],
      roundedClasses,
    ]"
  >
    <Icon v-if="isLoading" name="loading-2" />

    <template v-if="leftIcon && !isLoading">
      <Icon :name="leftIcon" />
    </template>

    <span v-if="label">{{ label }}</span>
    <slot v-else />

    <template v-if="rightIcon">
      <Icon :name="rightIcon" />
    </template>
  </button>
</template>
<script setup>
import { computed, defineAsyncComponent } from "vue";

const Icon = defineAsyncComponent(() =>
  import("../../MediaAndIcons/Icon/OCIcon.vue"),
);
const props = defineProps({
  label: String,
  isDisabled: Boolean,
  isLoading: Boolean,
  leftIcon: String,
  rightIcon: String,
  isTransparent: Boolean,
  isShortcut: Boolean,
  isRoundedFull: Boolean,
  variant: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "default",
  },
});
const isIconOnly = computed(
  () => (props.leftIcon || props.rightIcon) && !props.label,
);

const buttonTypeClasses = computed(() => ({
  primary: !props.isTransparent
    ? "border border-oc-primary oc-btn-primary text-white"
    : "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary",
  secondary: !props.isTransparent
    ? "border border-oc-grey text-oc-text-400 oc-btn-secondary"
    : "text-oc-text-400 hover:text-oc-text-500 active:text-oc-text-400",
  destructive: !props.isTransparent
    ? "border border-oc-error oc-btn-error text-white"
    : "text-oc-error hover:text-oc-error-400 active:text-oc-error",
}));

const buttonSizeClasses = computed(() => ({
  default: !props.isTransparent ? "px-4 py-3" : "py-3",
  small: !props.isTransparent
    ? isIconOnly.value
      ? "h-8 w-8 py-3 px-4 "
      : "h-8 p-3 "
    : "h-8 ",
  big: !props.isTransparent
    ? isIconOnly.value
      ? "h-[44px] py-3 px-4"
      : "h-[44px] py-3 px-[14px]"
    : " py-3 h-[44px]",
}));
const roundedClasses = props.isRoundedFull ? "rounded-full" : "rounded";
</script>
<style scoped lang="scss">
.oc-btn {
  @apply disabled:pointer-events-none;

  &:disabled > * {
    @apply opacity-50;
  }

  &-primary {
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
    background: var(--button-primary-default);
    box-shadow: 0 1.5px 0 0 var(--oc-primary-500);

    &:hover {
      background: var(--button-primary-hover);
    }

    &:active {
      background: var(--button-primary-pressed);
      @apply shadow-none;
    }

    &:disabled {
      background: var(--button-primary-disabled);
      @apply shadow-none;
    }
  }

  &-secondary {
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
    background: var(--button-secondary-default);
    @apply shadow-[0_1.5px_0_0] shadow-black/10;
    &:hover {
      background: var(--button-secondary-hover);
    }

    &:active {
      background: var(--button-secondary-pressed);
      @apply shadow-none;
    }

    &:disabled {
      background: var(--button-secondary-disabled);
    }
  }

  &-error {
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
    background: var(--button-destructive-default);
    box-shadow: 0 1.5px 0 0 var(--oc-error-500);

    &:hover {
      background: var(--button-destructive-hover);
    }

    &:active {
      background: var(--button-destructive-pressed);
      @apply shadow-none;
    }

    &:disabled {
      background: var(--button-destructive-disabled);
      @apply shadow-none;
    }
  }
}
</style>
