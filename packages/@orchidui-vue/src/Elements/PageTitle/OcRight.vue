<script setup>
import Button from "../../Form/Button/OcButton.vue";
import Dropdown from "../../Overlay/Dropdown/OcDropdown.vue";
import DropdownItem from "../../Overlay/Dropdown/OcDropdownItem.vue";
import Tooltip from "../../Overlay/Tooltip/OcTooltip.vue";
</script>

<template>
  <div class="flex gap-x-3 items-center">
    <Dropdown :offset="10">
      <template #trigger>
        <Button variant="secondary" label="Bulk Create/Export" />
      </template>
      <div class="p-2">
        <DropdownItem icon="upload" text="Bulk create" />
        <DropdownItem icon="download" text="Export" />
      </div>
    </Dropdown>

    <Tooltip position="top" :offset="[0, 4]" arrow-hidden>
      <Button left-icon="plus" label="New Payment Link" />
      <template #popper>
        <div
          class="px-3 py-[5px] font-medium text-sm text-oc-text-400 flex gap-x-3 items-center"
        >
          Add new
          <div class="flex gap-x-2">
            <div
              class="w-6 h-6 rounded-[6px] flex items-center justify-center border border-oc-grey-200 keyboard-cap"
            >
              ⌘
            </div>
            <div
              class="w-6 h-6 rounded-[6px] flex items-center justify-center border border-oc-grey-200 keyboard-cap"
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
