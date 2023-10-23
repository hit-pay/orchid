<script setup>
import { Icon } from "@orchid";
defineProps({
  isExpanded: {
    type: Boolean,
    default: true,
  },
  menu: {
    type: Object,
  },
});
</script>

<template>
  <div
    class="grid gap-3 transition-all duration-500 overflow-hidden"
    :class="isExpanded ? 'max-h-screen' : 'max-h-0'"
  >
    <div
      v-for="(submenu, subIndex) in menu.children"
      :key="subIndex"
      class="text-oc-text-400 flex items-center px-5 py-3 rounded hover:bg-[var(--oc-sidebar-menu-hover)]"
      :class="{
        'font-medium bg-[var(--oc-sidebar-menu-active)] text-[var(--oc-sidebar-menu-active-text)]':
          submenu.active,
      }"
    >
      <Icon
        width="22"
        height="22"
        class="flex z-[1]"
        :class="{
          'text-[var(--oc-sidebar-menu-active-icon)]': !submenu.active,
          'text-[var(--oc-sidebar-menu-active-icon-active)]': submenu.active,
        }"
        name="sidebar-submenu-icon"
      />
      <slot name="label" :menu="menu" :submenu="submenu" />
    </div>
  </div>
</template>
