<script setup>
import { reactive, onMounted, computed } from "vue";
import { Icon, SidebarSubmenu, Tooltip } from "@orchid";

const emit = defineEmits(["changeExpanded"]);

const props = defineProps({
  class: {
    type: String,
  },
  isExpanded: {
    type: Boolean,
    default: true,
  },
  sidebarMenu: {
    type: Array,
  },
});

const state = reactive({
  loading: true,
  expanded: [],
});

const expandMenu = (id) => {
  if (!state.expanded.includes(id)) {
    state.expanded.push(id);
  } else {
    state.expanded = state.expanded.filter((menuId) => menuId !== id);
  }
};

const togglePopover = (e) => {
  try {
    const target = e?.target;
    if (target) target.click();
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const changeExpanded = () => {
  state.loading = true;

  emit("changeExpanded", !props.isExpanded);

  let timeOut = setTimeout(() => {
    state.loading = false;
    clearTimeout(timeOut);
  });
};

const allClassName = computed(() => {
  let classNames = props.isExpanded ? "w-[300px] " : "w-[102px] ";
  return classNames + props.class;
});

onMounted(() => {
  props.sidebarMenu.forEach((sideMenu) => {
    sideMenu.items.forEach((menu) => {
      // check if menu active
      if (menu.children) {
        menu.children.forEach((submenu) => {
          if (submenu.active) {
            expandMenu(menu.path);
          }
        });
      }
    });
  });
  state.loading = false;
});
</script>

<template>
  <div
    class="p-8 cursor-pointer transition-all duration-500 relative bg-[var(--oc-sidebar-background)]"
    :class="allClassName"
  >
    <div class="grid gap-3">
      <button
        type="button"
        aria-label="Expand Collapse"
        class="hidden md:flex bg-oc-text-100 transition-all duration-500 absolute top-[-12px] right-[-12px] z-40 p-3 border rounded-full"
        :class="{
          '-rotate-180': !isExpanded,
        }"
        @click="changeExpanded"
      >
        <Icon width="20" height="20" name="arrow-left-2" />
      </button>
      <slot name="before" :is-expanded="isExpanded" />

      <template v-for="(sidebar, index) in sidebarMenu" :key="index">
        <h2
          v-if="isExpanded && sidebar.label"
          class="text-sm uppercase text-[var(--oc-sidebar-menu-title)]"
        >
          {{ sidebar.label }}
        </h2>

        <div
          v-if="(!sidebar.label || !isExpanded) && index !== 0"
          class="mt-4 mb-6 w-full border-b border-[var(--oc-sidebar-menu-title)] opacity-50"
        />

        <template v-for="(menu, menuIndex) in sidebar.items" :key="menuIndex">
          <div class="flex flex-col">
            <div
              class="flex items-center rounded transition-all duration-500 hover:bg-[var(--oc-sidebar-menu-hover)]"
              :class="{
                'px-5 py-3': isExpanded,
                'font-medium bg-[var(--oc-sidebar-menu-active)] text-[var(--oc-sidebar-menu-active-text)]':
                  menu.active,
              }"
              @click="expandMenu(menu.path)"
            >
              <Icon
                v-if="isExpanded"
                width="22"
                height="22"
                class="z-[1] relative"
                :class="{
                  'text-[var(--oc-sidebar-menu-active-icon)]': !menu.active,
                  'text-[var(--oc-sidebar-menu-active-icon-active)]':
                    menu.active,
                }"
                :name="menu.icon"
              />

              <Tooltip
                v-else
                class="relative flex"
                arrow-hidden
                position="right-start"
                :distance="20"
                trigger="click"
              >
                <button
                  type="button"
                  :class="{
                    'p-4': !isExpanded,
                  }"
                  @mouseenter="togglePopover"
                >
                  <Icon
                    width="22"
                    height="22"
                    class="z-[1]"
                    :class="{
                      'text-[var(--oc-sidebar-menu-active-icon)]': !menu.active,
                      'text-[var(--oc-sidebar-menu-active-icon-active)]':
                        menu.active,
                    }"
                    :name="menu.icon"
                  />
                </button>
                <template #popper>
                  <div
                    class="p-4 gap-4 bg-oc-bg absolute shadow-sm rounded w-[200px] z-50"
                  >
                    <div
                      v-if="!menu.children"
                      class="px-5 py-3 flex items-center rounded hover:bg-[var(--oc-sidebar-menu-hover)]"
                      :class="{
                        'font-medium bg-[var(--oc-sidebar-menu-active)] text-[var(--oc-sidebar-menu-active-text)]':
                          menu.active,
                      }"
                    >
                      <slot v-if="!isExpanded" name="label" :menu="menu" />
                    </div>
                    <SidebarSubmenu
                      v-if="menu.children"
                      :menu="menu"
                      is-expanded
                    >
                      <template #label="{ submenu }">
                        <slot
                          name="submenu_label"
                          :menu="menu"
                          :submenu="submenu"
                        />
                      </template>
                    </SidebarSubmenu>
                  </div>
                </template>
              </Tooltip>

              <transition
                tag="div"
                class="transition-all duration-500"
                leave-active-class="opacity-0"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
              >
                <slot v-if="isExpanded" name="label" :menu="menu" />
              </transition>
            </div>
            <div v-if="isExpanded" class="relative flex flex-col">
              <div class="absolute border-l left-[27px] bottom-[17px] h-full" />
              <SidebarSubmenu
                v-if="menu.children"
                :menu="menu"
                :class="state.expanded.includes(menu.path) && 'mt-3'"
                :is-expanded="state.expanded.includes(menu.path)"
              >
                <template #label="{ submenu }">
                  <slot
                    name="submenu_label"
                    :menu="menu"
                    :submenu="submenu"
                    :is-expanded="isExpanded"
                  />
                </template>
              </SidebarSubmenu>
            </div>
          </div>
        </template>
      </template>

      <slot name="after" :is-expanded="isExpanded" />
    </div>
  </div>
</template>
