<script setup>
import LogoLocation from "./OcLogoLocation.vue";
import HeaderMenu from "./OcHeaderMenu.vue";
import RightMenu from "./OcRightMenu.vue";
import Icon from "../../MediaAndIcons/Icon/OcIcon.vue";
import Button from "../../Form/Button/OcButton.vue";

import { computed } from "vue";

const props = defineProps({
  theme: String,
  menus: Array,
  modelValue: String,
  badgeText: String,
  badgeIcon: String,
  isBackButton: Boolean,
  isUnsavedChanges: Boolean,
  saveButtonProps: Object,
  cancelButtonProps: Object,
});
defineEmits({
  changePath: [],
  "update:modelValue": [],
});
const isDefault = computed(
  () => !props.isBackButton && !props.isUnsavedChanges,
);
</script>

<template>
  <div
    class="px-[40px] border-b border-oc-grey-200 h-[68px] w-full justify-center flex items-center relative"
    :class="theme === 'light' ? 'bg-oc-bg' : 'bg-[var(--oc-accent-3-600)]'"
  >
    <LogoLocation
      :class="isDefault ? 'flex-1' : ''"
      :theme="theme"
      :badge-text="badgeText"
      :badge-icon="badgeIcon"
    />

    <HeaderMenu
      v-if="isDefault"
      class="absolute"
      :model-value="modelValue"
      :menus="menus"
      @change-path="$emit('changePath')"
      @update:model-value="$emit('update:modelValue', $event)"
    />

    <div
      v-else-if="!isDefault"
      class="flex items-center flex-1 ml-[38px] text-oc-text-000 gap-x-1"
    >
      <template v-if="isBackButton">
        <Icon width="18" height="18" name="chevron-down" class="rotate-90" />
        <span class="font-medium">Back</span>
      </template>
      <span v-else-if="isUnsavedChanges" class="text-oc-text-300"
        >Unsaved changes</span
      >
    </div>

    <RightMenu v-if="isDefault">
      <slot name="right-menu" />
    </RightMenu>

    <div v-else class="flex gap-x-3">
      <Button
        v-bind="cancelButtonProps"
        class="w-[100px]"
        variant="secondary"
      />

      <Button v-bind="saveButtonProps" class="w-[100px]" />
    </div>
  </div>
</template>
