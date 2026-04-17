<script setup>
import { Icon } from '@/orchidui-core'
defineProps({
  /** Show or hide the submenu items (animated expand/collapse). */
  isExpanded: {
    type: Boolean,
    default: true
  },
  /** Whether the parent sidebar is in expanded (wide) mode — controls icon visibility. */
  isExpandedSidebar: {
    type: Boolean,
    default: false
  },
  /** Menu object with a `children` array of submenu items. Each child has an `active` flag. */
  menu: {
    type: Object
  }
})
</script>

<template>
  <div
    class="grid gap-3 transition-all duration-500 overflow-hidden"
    :class="isExpanded ? 'max-h-screen' : 'max-h-0'"
  >
    <div
      v-for="(submenu, subIndex) in menu.children"
      :key="subIndex"
      class="text-oc-text-400 flex items-center rounded hover:bg-[var(--oc-sidebar-menu-hover)]"
      :class="{
        'font-medium bg-[var(--oc-sidebar-menu-active)] text-[var(--oc-sidebar-menu-active-text)]':
          submenu.active
      }"
    >
      <Icon
        v-if="isExpandedSidebar"
        width="22"
        height="22"
        class="flex z-[1] ml-[17.5px]"
        :class="{
          'text-[var(--oc-sidebar-menu-active-icon)]': !submenu.active,
          'text-[var(--oc-sidebar-menu-active-icon-active)]': submenu.active
        }"
        name="sidebar-submenu-icon"
      />
      <slot name="label" :menu="menu" :submenu="submenu" />
    </div>
  </div>
</template>
