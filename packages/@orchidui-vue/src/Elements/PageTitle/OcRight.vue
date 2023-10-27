<script setup>
import { Button, Dropdown, DropdownItem, Tooltip } from "@orchid";

defineProps({
  primaryButtonProps: Object,
  secondaryButtonProps: Object,
});
</script>
<template>
  <div class="flex gap-x-3 items-center">
    <Dropdown :offset="10">
      <template #trigger>
        <Button v-bind="secondaryButtonProps" />
      </template>
      <div v-if="secondaryButtonProps?.dropdownOptions" class="p-2">
        <DropdownItem
          v-for="(option, i) in secondaryButtonProps.dropdownOptions"
          :key="i"
          v-bind="option"
        />
      </div>
    </Dropdown>

    <Tooltip position="top" :offset="[0, 4]" arrow-hidden>
      <Button v-bind="primaryButtonProps" />
      <template #popper>
        <div
          class="px-3 py-[5px] font-medium text-sm text-oc-text-400 flex gap-x-3 items-center"
        >
          Add new
          <div class="flex gap-x-2">
            <div
              class="w-6 h-6 rounded-[6px] flex items-center justify-center border border-oc-gray-200 keyboard-cap"
            >
              ⌘
            </div>
            <div
              class="w-6 h-6 rounded-[6px] flex items-center justify-center border border-oc-gray-200 keyboard-cap"
            >
              W
            </div>
          </div>
        </div>
      </template>
    </Tooltip>
  </div>
</template>
<style scoped lang="scss">
.keyboard-cap {
  background: linear-gradient(180deg, #efefef 0%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
}
</style>
