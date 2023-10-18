<template>
  <div class="flex overflow-hidden" :class="[showShadow, roundedClasses]">
    <button
      class="oc-btn relative w-full text-center justify-center font-medium gap-x-3 flex items-center"
      :disabled="isDisabled || isLoading"
      :class="[
        buttonTypeClasses[variant],
        buttonSizeClasses[size],
        isActive ? 'active' : '',
        isAdditionalArea ? 'rounded-l-[inherit]' : 'rounded-[inherit]',
      ]"
      @mousedown="isPressed = true"
      @mouseup="isPressed = false"
      @mouseleave="isPressed = false"
    >
      <Icon
        v-if="isLoading"
        :width="iconSize[size]"
        :height="iconSize[size]"
        name="loading-2"
      />

      <template v-if="leftIcon && !isLoading">
        <Icon
          :width="iconSize[size]"
          :class="iconClass"
          :height="iconSize[size]"
          :name="leftIcon"
        />
      </template>

      <span v-if="label" class="overflow-hidden text-ellipsis">
        {{ label }}
      </span>
      <slot v-else />

      <template v-if="rightIcon">
        <Icon
          :width="iconSize[size]"
          :height="iconSize[size]"
          :name="rightIcon"
          :class="iconClass"
        />
      </template>
    </button>
    <div
      v-if="isAdditionalArea && !isTransparent"
      class="border-y border-r flex cursor-pointer items-center justify-center oc-btn-add-area px-[6px] py-3 rounded-r-[inherit]"
      :class="[additionalAreaSize[size], variant]"
    >
      <Icon :name="additionalAreaIcon" :class="additionalAreaIconSize[size]" />
    </div>
  </div>
</template>
<script setup>
import { computed, defineAsyncComponent, ref } from "vue";

const Icon = defineAsyncComponent(() =>
  import("../../MediaAndIcons/Icon/OcIcon.vue"),
);
const props = defineProps({
  label: String,
  isDisabled: Boolean,
  isLoading: Boolean,
  leftIcon: String,
  iconClass: [Array, String],
  additionalAreaIcon: String,
  isAdditionalArea: Boolean,
  rightIcon: String,
  isActive: Boolean,
  isTransparent: Boolean,
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
const isPressed = ref(false);
const isIconOnly = computed(
  () => (props.leftIcon || props.rightIcon) && !props.label,
);
const additionalAreaSize = computed(() => ({
  default: "w-10 h-[36px]",
  small: "w-9 h-8",
  big: "w-[48px] h-[44px]",
}));

const shadowContainer = computed(() => ({
  primary: "shadow-[0_1.5px_0_0_var(--oc-primary-500)]",
  secondary: " shadow-[0_1.5px_0_0] shadow-black/10",
  destructive: "shadow-[0_1.5px_0_0_var(--oc-error-500)]",
}));

const additionalAreaIconSize = computed(() => ({
  default: "w-[18px] h-[18px]",
  small: "w-5 h-5",
  big: "w-6 h-6",
}));

const showShadow = computed(
  () =>
    !isPressed.value &&
    !props.isTransparent &&
    !props.isDisabled &&
    !props.isLoading &&
    !props.isActive &&
    shadowContainer.value[props.variant],
);

const buttonTypeClasses = computed(() => ({
  primary: !props.isTransparent
    ? "border border-oc-primary oc-btn-primary text-oc-text-100"
    : "text-oc-primary hover:text-oc-primary-400 active:text-oc-primary",
  secondary: !props.isTransparent
    ? "border border-oc-grey text-oc-text-400 oc-btn-secondary"
    : "text-oc-text-400 hover:text-oc-text-500 active:text-oc-text-400",
  destructive: !props.isTransparent
    ? "border border-oc-error oc-btn-error text-oc-text-100"
    : "text-oc-error hover:text-oc-error-400 active:text-oc-error",
}));

const buttonSizeClasses = computed(() => ({
  default: !props.isTransparent
    ? isIconOnly.value
      ? "p-3"
      : "px-4 py-3"
    : "py-3",
  small:
    (!props.isTransparent ? (isIconOnly.value ? "w-8 p-3" : "p-3") : "") +
    " h-8 text-sm",
  big:
    (!props.isTransparent
      ? isIconOnly.value
        ? "py-3 px-4"
        : "py-3 px-[14px]"
      : "py-3 ") + " text-lg h-[44px]",
}));
const roundedClasses = computed(() =>
  props.isRoundedFull ? "rounded-full" : "rounded",
);

const iconSize = computed(() => ({
  default: "18",
  small: "16",
  big: "20",
}));
</script>
<style scoped lang="scss">
.oc-btn {
  @apply disabled:pointer-events-none;

  &:disabled > * {
    @apply opacity-50;
  }

  &:disabled + &-add-area {
    & > * {
      @apply opacity-50;
    }

    &.primary {
      background: var(--button-primary-disabled);
    }

    &.secondary {
      background: var(--button-secondary-disabled);
    }

    &.destructive {
      background: var(--button-destructive-disabled);
    }
  }

  &-add-area {
    &.primary {
      background: var(--button-primary-default);
      @apply border-[var(--oc-accent-3-500)] text-[var(--oc-text-100)];
      &:hover {
        background: var(--button-primary-hover);
      }

      &:active {
        background: var(--button-primary-pressed);
      }
    }

    &.secondary {
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
      background: var(--button-secondary-default);
      @apply border-[var(--oc-grey-500)] text-[var(--oc-text-400)];
      &:hover {
        background: var(--button-secondary-hover);
      }

      &:active {
        background: var(--button-secondary-pressed);
      }
    }

    &.destructive {
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
      background: var(--button-destructive-default);
      @apply border-[var(--oc-error-500)] text-[var(--oc-text-100)];

      &:hover {
        background: var(--button-destructive-hover);
      }

      &:active {
        background: var(--button-destructive-pressed);
      }
    }
  }

  &-primary {
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
    background: var(--button-primary-default);

    &:hover {
      background: var(--button-primary-hover);
    }

    &:active,
    &.active {
      background: var(--button-primary-pressed);
    }

    &:disabled {
      background: var(--button-primary-disabled);
    }
  }

  &-secondary {
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
    background: var(--button-secondary-default);

    &:hover {
      background: var(--button-secondary-hover);
    }

    &:active,
    &.active {
      background: var(--button-secondary-pressed);
    }

    &:disabled {
      background: var(--button-secondary-disabled);
    }
  }

  &-error {
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
    background: var(--button-destructive-default);

    &:hover {
      background: var(--button-destructive-hover);
    }

    &:active,
    &.active {
      background: var(--button-destructive-pressed);
    }

    &:disabled {
      background: var(--button-destructive-disabled);
    }
  }
}
</style>
