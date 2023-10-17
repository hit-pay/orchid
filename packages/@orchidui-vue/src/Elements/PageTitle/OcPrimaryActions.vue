<script setup>
import Icon from "../../MediaAndIcons/Icon/OcIcon.vue";
import Tooltip from "../../Overlay/Tooltip/OcTooltip.vue";
import Dropdown from "../../Overlay/Dropdown/OcDropdown.vue";
import DropdownItem from "../../Overlay/Dropdown/OcDropdownItem.vue";
import { ref } from "vue";

defineProps({
  tooltipContent: String,
});
const isDropdownOpened = ref(false);
</script>

<template>
  <div
    class="p-1 gap-x-1 rounded-sm border text-oc-text-400 flex"
    :class="
      isDropdownOpened
        ? 'bg-oc-bg border-oc-dark-blue-100'
        : 'border-transparent'
    "
  >
    <Tooltip position="top" arrow-hidden :offset="[0, 7]">
      <Icon
        class="p-2 cursor-pointer rounded-sm hover:bg-oc-dark-blue-50-tr active:text-oc-text-400 hover:text-oc-text"
        name="external-link"
      />
      <template #popper>
        <div
          class="py-2 px-3 whitespace-nowrap text-sm font-medium text-oc-text-400"
        >
          {{ tooltipContent }}
        </div>
      </template>
    </Tooltip>

    <div
      class="border-l"
      :class="isDropdownOpened ? 'border-oc-grey-200' : 'border-transparent'"
    />

    <Dropdown :offset="6">
      <div class="flex flex-col">
        <div class="p-2 border-b border-gray-200">
          <DropdownItem icon="pencil" text="Customize link" />
          <DropdownItem icon="copy" text="Copy link" />
        </div>
        <div class="p-2">
          <DropdownItem
            text="Deactivate"
            icon="toggle-right-fill"
            variant="destructive"
          />
        </div>
      </div>
      <template #trigger>
        <Icon
          class="p-2 cursor-pointer rounded-sm hover:bg-oc-grey-100"
          name="dots-vertical"
          @click="isDropdownOpened = !isDropdownOpened"
        />
      </template>
    </Dropdown>
  </div>
</template>
