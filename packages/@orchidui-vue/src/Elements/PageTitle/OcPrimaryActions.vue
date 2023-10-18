<script setup>
import Icon from "../../MediaAndIcons/Icon/OcIcon.vue";
import Tooltip from "../../Overlay/Tooltip/OcTooltip.vue";
import Dropdown from "../../Overlay/Dropdown/OcDropdown.vue";
import DropdownItem from "../../Overlay/Dropdown/OcDropdownItem.vue";
import { ref } from "vue";

defineProps({
  tooltipContent: String,
});
const emit = defineEmits({
  copy: [],
});
const isDropdownOpened = ref(false);
const isActive = ref(false);
const isCopied = ref(false);
const copyToClipBoard = () => {
  isCopied.value = true;
  emit("copy");
  setTimeout(() => (isCopied.value = false), 1500);
};
</script>

<template>
  <div
    class="p-1 gap-x-1 rounded-sm border text-oc-text-400 flex hover:bg-oc-bg group hover:border-oc-accent-3-100"
    :class="
      isDropdownOpened
        ? 'bg-oc-bg border-oc-accent-3-100'
        : 'border-transparent'
    "
  >
    <Tooltip position="top" arrow-hidden :offset="[0, 7]">
      <Icon
        class="p-2 cursor-pointer rounded-sm hover:border-oc-accent-3-50-tr active:text-oc-text-400 hover:text-oc-text hover:bg-oc-accent-3-50-tr"
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
      class="border-l group-hover:border-oc-accent-3-100"
      :class="isDropdownOpened ? 'border-oc-grey-200' : 'border-transparent'"
    />

    <Dropdown :offset="6" @close="isDropdownOpened = false">
      <div class="flex flex-col">
        <div class="p-2 border-b border-gray-200">
          <DropdownItem icon="pencil" text="Customize link" />
          <DropdownItem
            :icon="isCopied ? 'check' : 'copy'"
            :text="isCopied ? 'Link copied!' : 'Copy link'"
            :icon-classes="isCopied ? '!text-oc-success' : ''"
            @click="copyToClipBoard"
          />
          <DropdownItem icon="eye-open" text="View details" />
        </div>
        <div class="p-2">
          <DropdownItem
            :text="isActive ? 'Deactivate' : 'Activate'"
            icon="toggle-right-fill"
            :icon-classes="
              isActive ? 'rotate-180 !text-oc-grey-300' : '!text-oc-success'
            "
          />
        </div>
      </div>
      <template #trigger>
        <Icon
          class="p-2 cursor-pointer rounded-sm hover:bg-oc-accent-3-50-tr"
          name="dots-vertical"
          @click="isDropdownOpened = !isDropdownOpened"
        />
      </template>
    </Dropdown>
  </div>
</template>
