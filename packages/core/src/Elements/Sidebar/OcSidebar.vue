<script setup>
import { reactive, onMounted, computed } from 'vue'
import { SidebarHead, SideBarMenu, SidebarSubMenuItem, SidebarFooter } from '@/orchidui-core'

const emit = defineEmits([
  'changeExpanded',
  'click:sidebar-icon',
  'changeExpandedMenus',
  'redirect',
  'user-click',
  'support-click'
])

const props = defineProps({
  class: {
    type: String
  },
  isExpanded: {
    type: Boolean,
    default: true
  },
  sidebarMenu: {
    type: Array
  },
  displayName: {
    type: String
  }
})

const state = reactive({
  loading: true,
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

const allClassName = computed(() => {
  let classNames = props.isExpanded ? 'w-[300px] ' : 'w-[76px] '
  return classNames + props.class
})

onMounted(() => {
  props.sidebarMenu.forEach((sideMenu) => {
    sideMenu.items.forEach((menu) => {
      // check if menu active
      if (menu.children) {
        menu.children.forEach((submenu) => {
          if (submenu.active) {
            expandMenu(menu.name)
          }
        })
      }
    })
  })
  state.loading = false
})
</script>

<template>
  <div
    class="cursor-pointer flex flex-col transition-all duration-300 ease-in-out relative bg-[var(--oc-sidebar-background)]"
    :class="[allClassName, { 'overflow-auto': isExpanded }]"
  >
    <div class="flex flex-col flex-1 py-4 gap-5 px-6">
      <slot name="before" :is-expanded="isExpanded" />

      <template v-for="(sidebar, index) in sidebarMenu" :key="index">
        <div v-if="!isExpanded" class="border-t border-oc-gray-200 last:hidden first:hidden"></div>
        <SidebarHead
          v-if="sidebar.label || sidebar.items.length > 0"
          :label="sidebar.label"
          :is-sidebar-expanded="isExpanded"
        >
          <SideBarMenu
            v-for="(menu, menuIndex) in sidebar.items"
            :key="menuIndex"
            :icon="menu.icon"
            :label="menu.label"
            :is-children="!!menu.children"
            :is-active="menu.active"
            :is-expanded="isExpanded"
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
                :is-expanded="isExpanded"
                @click="$emit('redirect', submenu)"
              />
            
          </SideBarMenu>
        </SidebarHead>
      </template>

      <slot name="after" :is-expanded="isExpanded" />
    </div>
    <SidebarFooter
      :is-expanded="isExpanded"
      :display-name="displayName"
      @user-click="$emit('user-click')"
      @support-click="$emit('support-click')"
    >
      <slot name="banner" />
      <template #user>
        <slot name="user" />
      </template>
    </SidebarFooter>
  </div>
</template>

