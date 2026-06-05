<script setup>
import { reactive, onMounted, watch } from 'vue'
import { SidebarHead, SideBarMenu, SidebarSubMenuItem, SidebarFooter, Icon } from '@/orchidui-core'

const emit = defineEmits({
  changeExpanded: null,
  changeExpandedMenus: null,
  redirect: null,
  'user-click': null,
  'support-click': null
})

const props = defineProps({
  sidebarMenu: {
    type: Array
  },
  displayName: {
    type: String
  },
  /** Computed value: true when sidebar is expanded or hovered. Used for rendering. */
  isExpanded: {
    type: Boolean,
    default: true
  },
  /** Raw isExpanded prop from parent — watched to reset expanded menus on collapse. */
  isSidebarRawExpanded: {
    type: Boolean,
    default: true
  }
})

const state = reactive({
  expanded: []
})

const expandMenu = (id) => {
  if (!state.expanded.includes(id)) {
    state.expanded.push(id)
  } else {
    state.expanded = state.expanded.filter((menuId) => menuId !== id)
  }
  emit('changeExpandedMenus', state.expanded)
}

const expandOrRedirect = (menuItem) => {
  if (menuItem.children?.length) {
    expandMenu(menuItem.name)
  } else {
    emit('redirect', menuItem)
  }
}

onMounted(() => {
  props.sidebarMenu.forEach((sideMenu) => {
    sideMenu.items.forEach((menu) => {
      if (menu.children) {
        menu.children.forEach((submenu) => {
          if (submenu.active) {
            expandMenu(menu.name)
          }
        })
      }
    })
  })
})

watch(
  () => props.isSidebarRawExpanded,
  (value) => {
    if (!value) {
      state.expanded = []
    }
  }
)
</script>

<template>
  <div
    v-if="sidebarMenu[0]?.label"
    class="flex items-center text-md px-4 py-4 border-b border-gray-100 mx-auto w-full"
  >
    <span v-if="isExpanded" class="font-medium">{{ sidebarMenu[0]?.label }}</span>
    <div
      class="border p-2 rounded-md"
      :class="{
        'ml-auto': isExpanded,
        'mx-auto': !isExpanded
      }"
      @click="emit('changeExpanded', !isExpanded)"
    >
      <Icon name="plus" width="20" height="20" class="text-oc-primary-500" />
    </div>
  </div>
  <div class="flex flex-col flex-1 py-4 gap-5 px-4 animated-section">
    <slot name="before" :is-expanded="isExpanded" />
    <template v-for="(sidebar, index) in sidebarMenu" :key="index">
      <div v-if="!isExpanded" class="border-t border-oc-gray-200 last:hidden first:hidden"></div>
      <SidebarHead
        v-if="sidebar.label || sidebar.items.length > 0"
        :label="index > 0 ? sidebar.label : ''"
        :is-sidebar-expanded="isExpanded"
      >
        <SideBarMenu
          v-for="(menu, menuIndex) in sidebar.items"
          :key="menuIndex"
          :icon="menu.icon"
          :label="menu.label"
          :is-children="!!menu.children"
          :is-active="
            menu.active || (menu.children && menu.children?.some((child) => child.active))
          "
          :is-expanded="isExpanded"
          :is-new="menu.isNew"
          :is-try-it="menu.isTryIt"
          :is-beta="menu.isBeta"
          :is-show-badge="menu.badgeVisible ? menu.badgeVisible(menu) : true"
          :is-menu-expanded="state.expanded.includes(menu.name)"
          @click="expandOrRedirect(menu)"
          @close-menu="expandMenu(menu.name)"
        >
          <SidebarSubMenuItem
            v-for="(submenu, submenuIndex) in menu.children"
            :key="submenuIndex"
            :icon="submenu.icon"
            :label="submenu.label"
            :is-active="submenu.active"
            :is-new="submenu.isNew"
            :is-beta="submenu.isBeta"
            :is-try-it="submenu.isTryIt"
            :is-expanded="isExpanded"
            :is-show-badge="submenu.badgeVisible ? submenu.badgeVisible(submenu) : true"
            @click="emit('redirect', submenu)"
          />
        </SideBarMenu>
      </SidebarHead>
    </template>

    <slot name="after" :is-expanded="isExpanded" />
  </div>
  <SidebarFooter
    :is-expanded="isExpanded"
    :display-name="displayName"
    @user-click="emit('user-click')"
    @support-click="emit('support-click')"
  >
    <slot name="banner" />
  </SidebarFooter>
</template>
