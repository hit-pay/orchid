<script setup>
import { computed, ref } from 'vue'
import OcSidebarContent from './OcSidebarContent.vue'
import { clickOutside as vClickOutside } from '../../directives/clickOutside.js'

const emit = defineEmits({
  /** Sidebar expanded/collapsed. Payload: new boolean state. */
  changeExpanded: null,
  changeIsHoverSidebar: null,
  /** Sidebar icon was clicked. */
  'click:sidebar-icon': null,
  /** Expanded menu list changed. Payload: array of currently expanded menu `name` values. */
  changeExpandedMenus: null,
  /** A menu or submenu item was clicked to navigate. Payload: the menu item object. */
  redirect: null,
  /** User avatar/name in the footer was clicked. */
  'user-click': null,
  /** Support icon in the footer was clicked. */
  'support-click': null
})

const props = defineProps({
  /** Extra CSS classes applied to the sidebar root element. */
  class: {
    type: String
  },
  /** Show the sidebar in expanded (wide) mode. When false, shows collapsed icon-only mode. */
  isExpanded: {
    type: Boolean,
    default: true
  },
  /**
   * Array of sidebar section objects. Each section has a `label` (String) and `items` (Array of menu objects).
   * Each menu item supports `icon`, `label`, `name`, `active`, `children`, and badge flags (`isNew`, `isBeta`, `isTryIt`, `badgeVisible`).
   */
  sidebarMenu: {
    type: Array
  },
  /** User display name shown in the sidebar footer. */
  displayName: {
    type: String
  }
})

const hoverSidebar = ref(false)

const isHoverSidebar = computed(() => {
  return hoverSidebar.value && !props.isExpanded
})

const allClassName = computed(() => {
  let classNames = props.isExpanded ? 'w-[250px] ' : 'w-[56px] '
  return classNames + props.class
})

const onMouseOverSidebar = () => {
  if (!props.isExpanded) {
    hoverSidebar.value = true
    emit('changeIsHoverSidebar', true)
  }
}

const onChangeExpanded = (value, isHoverSidebar = false) => {
  emit('changeExpanded', isHoverSidebar ? true : value)
  if (!value) {
    hoverSidebar.value = false
    emit('changeIsHoverSidebar', false)
  }
}
const onClickOutside = (event) => {
  console.log('onClickOutside', event)
  hoverSidebar.value = false
  emit('changeIsHoverSidebar', false)
}
</script>

<template>
  <div
    v-click-outside="onClickOutside"
    class="rounded-tl-lg rounded-bl-lg cursor-pointer flex flex-col transition-all duration-300 ease-in-out relative bg-[var(--oc-sidebar-background)]"
    :class="[allClassName, { 'overflow-auto': isExpanded }]"
    style="zoom: 0.88"
  >
    <OcSidebarContent
      v-if="isExpanded"
      :sidebar-menu="sidebarMenu"
      :display-name="displayName"
      :is-expanded="isExpanded"
      :is-sidebar-raw-expanded="isExpanded"
      @change-expanded="onChangeExpanded"
      @change-expanded-menus="emit('changeExpandedMenus', $event)"
      @redirect="emit('redirect', $event)"
      @user-click="emit('user-click')"
      @support-click="emit('support-click')"
    >
      <template #before>
        <slot name="before" :is-expanded="isExpanded" />
      </template>
      <template #after>
        <slot name="after" :is-expanded="isExpanded" />
      </template>
      <template #banner>
        <slot name="banner" />
      </template>
    </OcSidebarContent>
    <div v-else class="h-full w-full min-h-[100vh] relative">
      <div
        class="position absolute transition-all duration-300 ease-in-out bg-[var(--oc-sidebar-background)]"
        :class="{
          'w-[250px] min-h-[100vh]': isHoverSidebar,
          'w-[56px]': !isHoverSidebar
        }"
        @mouseover="onMouseOverSidebar"
      >
        <OcSidebarContent
          :sidebar-menu="sidebarMenu"
          :display-name="displayName"
          :is-expanded="isHoverSidebar"
          :is-sidebar-raw-expanded="isHoverSidebar"
          @change-expanded="onChangeExpanded($event, true)"
          @change-expanded-menus="emit('changeExpandedMenus', $event)"
          @redirect="emit('redirect', $event)"
          @user-click="emit('user-click')"
          @support-click="emit('support-click')"
        >
          <template #before>
            <slot name="before" :is-expanded="isHoverSidebar" />
          </template>
          <template #after>
            <slot name="after" :is-expanded="isHoverSidebar" />
          </template>
          <template #banner>
            <slot name="banner" />
          </template>
        </OcSidebarContent>
      </div>
    </div>
  </div>
</template>
