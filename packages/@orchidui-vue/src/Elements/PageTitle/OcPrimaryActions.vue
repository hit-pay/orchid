<script setup>
import { Icon, Tooltip, Dropdown, DropdownItem } from "@orchid";
import { ref } from "vue";

defineProps({
  primaryActions: Object,
});
const emit = defineEmits({
  copy: [],
  'click:primaryActionsDropdown': []
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
    class="p-1 gap-x-1 rounded-sm border text-oc-text-400 flex hover:bg-oc-bg group hover:border-oc-accent-1-100"
    :class="
      isDropdownOpened
        ? 'bg-oc-bg border-oc-accent-1-100'
        : 'border-transparent'
    "
  >
    <Tooltip position="top" arrow-hidden :distance="7">
      <a :href="primaryActions?.mainLinkAction?.url" target="_blank">
        <Icon
            class="p-2 cursor-pointer rounded-sm hover:border-oc-accent-1-50-tr active:text-oc-text-400 hover:text-oc-text hover:bg-oc-accent-1-50-tr"
            name="external-link"
        />
      </a>
      <template #popper>
        <div
          class="py-2 px-3 whitespace-nowrap text-sm font-medium text-oc-text-400"
        >
          {{ primaryActions?.mainLinkAction?.tooltipContent }}
        </div>
      </template>
    </Tooltip>

    <div
      class="border-l group-hover:border-oc-accent-1-100"
      :class="isDropdownOpened ? 'border-oc-gray-200' : 'border-transparent'"
    />

    <Dropdown v-model="isDropdownOpened" :distance="6">
      <Icon
        class="p-2 cursor-pointer rounded-sm hover:bg-oc-accent-1-50-tr"
        name="dots-vertical"
      />

      <template #menu>
        <div class="flex flex-col">
          <div class="p-2 border-b border-gray-200">
            <DropdownItem
                icon="pencil"
                text="Customize link"
                v-bind="primaryActions?.dropdownOptions[0]"
                @click="emit('click:primaryActionsDropdown', primaryActions?.dropdownOptions[1])"
            />
            <DropdownItem
              :icon="isCopied ? 'check' : 'copy'"
              :text="isCopied ? 'Link copied!' : 'Copy link'"
              :icon-classes="isCopied ? '!text-oc-success' : ''"
              @click="copyToClipBoard"
            />
            <DropdownItem
              icon="eye-open"
              text="View details"
              v-bind="primaryActions?.dropdownOptions[1]"
              @click="emit('click:primaryActionsDropdown', primaryActions?.dropdownOptions[1])"
            />
          </div>
          <div class="p-2">
            <DropdownItem
              :text="isActive ? 'Deactivate' : 'Activate'"
              icon="toggle-right-fill"
              :icon-classes="
                isActive ? 'rotate-180 !text-oc-gray-300' : '!text-oc-success'
              "
              v-bind="primaryActions?.dropdownOptions[2]"
              @click="emit('click:primaryActionsDropdown', primaryActions?.dropdownOptions[2])"
            />
          </div>
        </div>
      </template>
    </Dropdown>
  </div>
</template>
