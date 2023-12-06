<script setup>
import { Icon } from "@/orchidui";
import { computed } from "vue";
const props = defineProps({
  settings: {
    type: Object,
  },
  active: {
    type: Object,
  },
  sidebar: {
    type: Array,
  },
});
const emit = defineEmits({
  "update:settings": [],
  "update:active": [],
});

const sidebarActive = computed(() => {
  return props.active;
});

const changeSidebarMenu = (value) => {
  emit("update:active", {
    ...sidebarActive.value,
    sidebarMenu: value,
  });
};
const changeSubmenu = (value) => {
  emit("update:active", {
    ...sidebarActive.value,
    submenu: value,
  });
};

const sidebarMenuActive = computed(() => {
  return props.sidebar.find((s) => s.name === sidebarActive.value.sidebarMenu);
});
const sidebarMenuLabel = computed(() => {
  return sidebarMenuActive.value.label;
});
const submenuLabel = computed(() => {
  const submenu = sidebarMenuActive.value.children.find(
    (s) => s.name === sidebarActive.value.submenu,
  );
  return submenu?.label;
});
</script>
<template>
  <div class="h-full relative border border-gray-200">
    <div v-if="!sidebarActive.submenu" class="flex flex-col pt-8">
      <div
        v-for="(sidebarMenu, index) in sidebar"
        :key="index"
        class="border-b flex flex-wrap items-center"
      >
        <div
          class="p-4 w-full flex items-center cursor-pointer hover:bg-oc-accent-1-50-tr"
          @click="changeSidebarMenu(sidebarMenu.name)"
        >
          <Icon
            v-if="sidebarMenu.icon"
            :name="sidebarMenu.icon"
            class="mx-1"
            width="20"
            height="20"
          />
          <div
            class="ml-2"
            :class="
              sidebarActive.sidebarMenu === sidebarMenu.name
                ? 'font-medium'
                : ''
            "
          >
            {{ sidebarMenu.label }}
          </div>
          <Icon
            v-if="sidebarMenu.children"
            name="chevron-down"
            class="ml-auto text-oc-text-400"
            width="18"
            height="18"
          />
          <Icon
            v-else
            name="chevron-right"
            class="ml-auto text-oc-text-400"
            width="18"
            height="18"
          />
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
              @click="
                children.onClick
                  ? children.onClick()
                  : changeSubmenu(children.name)
              "
            >
              <div class="ml-2">
                {{ children.label }}
              </div>
              <Icon
                v-if="children.icon"
                :name="children.icon"
                class="ml-auto text-oc-text-primary"
                width="18"
                height="18"
              />
              <Icon
                v-else
                width="18"
                height="18"
                name="chevron-right"
                class="ml-auto text-oc-text-400"
              />
            </div>
          </template>
          <slot v-else :name="sidebarMenu.type" />
        </div>
      </div>
    </div>
    <div v-else-if="!sidebarActive.section">
      <div class="px-5 py-4 flex cursor-pointer mt-8">
        <div class="text-oc-text-300" @click="changeSubmenu('')">
          {{ sidebarMenuLabel }}
        </div>
        <div class="mx-2">/</div>
        <div class="font-medium">{{ submenuLabel }}</div>
      </div>
      <slot :name="sidebarActive.submenu" />
    </div>
    <slot v-else name="section-settings" />
    <div class="absolute bottom-0">
      <slot name="sidebar-bottom" />
    </div>
  </div>
</template>
