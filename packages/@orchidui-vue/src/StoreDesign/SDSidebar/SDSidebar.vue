<script setup>
import { Icon } from "@/orchidui";
import { computed } from "vue";
const props = defineProps({
  modelValue: {
    type: Object,
  },
  sidebar: {
    type: Array,
  },
});
const emit = defineEmits({
  "update:modelValue": [],
});

const sidebarActive = computed(() => {
  return props.modelValue;
});

const changeSidebarMenu = (value) => {
  emit("update:modelValue", {
    ...sidebarActive.value,
    sidebarMenu: value,
  });
};
const changeSubmenu = (value) => {
  emit("update:modelValue", {
    ...sidebarActive.value,
    submenu: value,
  });
};
const changeSection = (value) => {
  emit("update:modelValue", {
    ...sidebarActive.value,
    section: value,
  });
};
</script>
<template>
  <div class="h-full relative border border-gray-200">
    <div v-if="!sidebarActive.submenu" class="flex flex-col">
      <div
        v-for="(sidebarMenu, index) in sidebar"
        :key="index"
        class="border-b flex flex-wrap items-center"
        @click="changeSidebarMenu(sidebarMenu.name)"
      >
        <div
          class="p-4 w-full flex items-center cursor-pointer hover:bg-oc-accent-1-50-tr"
        >
          <Icon name="circle" class="mx-1" />
          <div class="ml-2">
            {{ sidebarMenu.label }}
          </div>
          <Icon
            v-if="sidebarMenu.children"
            name="chevron-down"
            class="ml-auto text-oc-text-400"
          />
          <Icon v-else name="chevron-right" class="ml-auto text-oc-text-400" />
        </div>
        <div
          v-if="
            sidebarMenu.children &&
            sidebarActive.sidebarMenu === sidebarMenu.name
          "
          class="w-full flex flex-col"
        >
          <template v-if="sidebarMenu.type === 'list'">
            <div
              v-for="(children, childIndex) in sidebarMenu.children"
              :key="childIndex"
              class="pl-9 p-4 w-full flex items-center cursor-pointer hover:bg-oc-accent-1-50-tr"
              @click="changeSubmenu(children.name)"
            >
              <div class="ml-2">
                {{ children.label }}
              </div>
              <Icon name="chevron-right" class="ml-auto text-oc-text-400" />
            </div>
          </template>
          <slot v-else :name="sidebarMenu.type" />
        </div>
      </div>
    </div>
    <div v-else-if="!sidebarActive.section">
      <div class="flex cursor-pointer">
        <div @click="changeSubmenu('')">{{ sidebarActive.sidebarMenu }}</div>
        / {{ sidebarActive.submenu }}
      </div>
      <slot :name="sidebarActive.submenu" @changeSection="changeSection" />
    </div>
    <div v-else-if="sidebarActive.section">
      back -> Save edit close
      <slot :name="sidebarActive.section" />
    </div>
    <div class="absolute bottom-0">Change Theme</div>
  </div>
</template>
