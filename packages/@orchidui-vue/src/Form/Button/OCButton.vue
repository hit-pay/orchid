<template>
  <button
    class="oc-btn overflow-hidden rounded-lg relative font-medium gap-x-3 flex items-center"
    :disabled="isDisabled || isLoading"
    :class="[buttonTypeClasses[variant], buttonSizeClasses[size]]"
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
    ? "border border-oc-blue oc-btn-primary text-white"
    : "text-oc-blue hover:text-oc-blue-400 active:text-oc-blue",
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
</script>
<style scoped lang="scss">
.oc-btn {
  @apply disabled:pointer-events-none;

  --button-primary-default: linear-gradient(180deg, #4179e2 0%, #1f5bcc 100%);
  --button-primary-hover: linear-gradient(180deg, #4179e2 0%, #2f6ddf 100%);
  --button-primary-pressed: linear-gradient(180deg, #3873e1 0%, #4179e2 100%);
  --button-primary-disabled: linear-gradient(180deg, #567fcd 0%, #3662b5 100%);

  --button-secondary-default: linear-gradient(180deg, #fff 0%, #f2f2f2 100%);
  --button-secondary-hover: linear-gradient(180deg, #fff 0%, #fafafa 100%);
  --button-secondary-pressed: linear-gradient(180deg, #fafafa 0%, #fff 100%);
  --button-secondary-disabled: linear-gradient(
    180deg,
    #fcfcfc 0%,
    #f7f7f7 100%
  );

  --button-destructive-default: linear-gradient(
    180deg,
    #e44e5c 0%,
    #cc2334 100%
  );
  --button-destructive-hover: linear-gradient(180deg, #e44e5c 0%, #dc3747 100%);
  --button-destructive-pressed: linear-gradient(
    180deg,
    #dc3747 0%,
    #e44e5c 100%
  );
  --button-destructive-disabled: linear-gradient(
    180deg,
    #c66c75 0%,
    #a84851 100%
  );

  &:disabled > * {
    @apply opacity-50;
  }

  &-primary {
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
    background: var(--button-primary-default);
    @apply shadow-[0_1.5px_0_0] shadow-oc-blue;
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
    @apply shadow-[0_1.5px_0_0] shadow-oc-error;
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
