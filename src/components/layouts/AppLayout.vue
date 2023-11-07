<script setup>
import {
  Theme,
  Sidebar,
  Header,
  HeaderLeft,
  HeaderCenter,
  HeaderRight,
  TabToSelect,
  Icon,
  Button,
} from "@orchidui/vue";
import { reactive, computed } from "vue";

const props = defineProps({
  page: String,
});

const currentActiveMenu = props.page.replaceAll("/", "")
  ? props.page.replaceAll("/", "")
  : "foundation";

let sidebarMenus = [
  {
    name: "foundation",
    label: "Foundation",
    items: [
      {
        icon: "brush",
        name: "colors",
        label: "Colors",
      },
      {
        icon: "pencil",
        name: "typography",
        label: "Typography",
      },
      {
        icon: "sort-descending",
        name: "spacing",
        label: "Spacing",
      },
      {
        icon: "grid",
        name: "icons",
        label: "Icons",
      },
      {
        icon: "hitpay/logo",
        name: "logos",
        label: "Logos",
      },
    ],
  },
];

if (currentActiveMenu === "components") {
  sidebarMenus = [
    {
      name: "components",
      label: "Components",
      items: [
        {
          icon: "grid",
          name: "components",
          label: "Button",
        },
      ],
    },
  ];
}

if (currentActiveMenu === "case-studies") {
  sidebarMenus = [
    {
      name: "case-studies",
      label: "Case Studies",
      items: [
        {
          icon: "grid",
          name: "datatable",
          label: "Data Table",
        },
        {
          icon: "grid",
          name: "form-builder",
          label: "Form Builder",
        },
      ],
    },
  ];
}

let state = reactive({
  darkMode: localStorage.getItem("dark_mode") ?? false,
  activeMenu: currentActiveMenu,
  menus: [
    {
      label: "Foundation",
      value: "foundation",
      color: "#002771",
    },
    {
      label: "Components",
      value: "components",
      color: "#FDB012",
    },
    {
      label: "Case Studies",
      value: "case-studies",
      color: "#0EA81B",
    },
  ],
  sidebar_menu: sidebarMenus,
  isExpanded: true,
});

const toggleDarkMode = () => {
  state.darkMode = !state.darkMode;
  if (state.darkMode) {
    localStorage.setItem("dark_mode", true);
  } else {
    localStorage.removeItem("dark_mode");
  }
};

const updateActiveSidebar = (name, menus) => {
  let newSidebarMenu = [];
  menus.forEach((menuGroup) => {
    let newMenuGroup = [];
    let newMenuGroupItems = [];
    menuGroup.items.forEach((menu) => {
      let activeMenu = false;
      if (menu.name === name) {
        activeMenu = true;
      }
      if (menu.children) {
        let newSubmenu = [];
        menu.children.forEach((submenu) => {
          let activeSubmenu = false;
          if (submenu.name === name) {
            activeSubmenu = true;
          }
          newSubmenu.push({
            ...submenu,
            active: activeSubmenu,
          });
        });
        menu.children = newSubmenu;
      }
      newMenuGroupItems.push({
        ...menu,
        active: activeMenu,
      });
    });
    newMenuGroup = menuGroup;
    newMenuGroup.items = newMenuGroupItems;
    newSidebarMenu.push(newMenuGroup);
  });
  return newSidebarMenu;
};

const changeActiveSidebar = (name) => {
  state.sidebar_menu = updateActiveSidebar(name, state.sidebar_menu);
};
const toggleMobileMenu = () => {};

const changeActiveMenu = () => {
  location.href = "/" + state.activeMenu;
};
const isLandingPage = computed(() => {
  return props.page === "/";
});
</script>
<template>
  <Theme
    :color-mode="state.darkMode ? 'dark' : 'light'"
    :class="currentActiveMenu"
  >
    <section class="flex flex-wrap mx-auto h-screen">
      <Header class="w-full fixed top-0 bg-oc-bg-light z-[30] px-4">
        <HeaderLeft class="md:w-[260px]">
          <Button
            class="md:hidden"
            variant="secondary"
            size="small"
            left-icon="menu"
            @click="toggleMobileMenu"
          />
          <a
            class="flex items-center gap-3 text-oc-accent-1"
            href="/"
            aria-label="Home Page"
          >
            <span class="font-bold">Orchid UI </span>
            <span class="hidden md:block">by</span>
            <Icon
              class="hidden md:block"
              name="hitpay/logo"
              width="24"
              height="24"
            />
            <Icon
              class="hidden md:block mt-2"
              name="hitpay/hitpay"
              width="74"
              height="24"
            />
          </a>
        </HeaderLeft>
        <HeaderCenter
          class="flex-1"
          :class="{
            'md:flex-initial': !isLandingPage,
          }"
        >
          <div v-if="isLandingPage">
            <a href="/foundation" class="font-medium">Documentations</a>
          </div>
          <TabToSelect
            v-else
            v-model="state.activeMenu"
            :menus="state.menus"
            @update:modelValue="changeActiveMenu"
          />
        </HeaderCenter>
        <HeaderRight>
          <div class="flex gap-5 items-center">
            <Button
              variant="secondary"
              size="small"
              :left-icon="state.darkMode ? 'sun' : 'moon'"
              @click="toggleDarkMode"
            />
            <a href="/storybook/" class="text-oc-primary">
              <Icon name="storybook" />
            </a>
            <a href="https://github.com/hit-pay/orchid" target="_blank">
              <Icon name="github" />
            </a>
          </div>
        </HeaderRight>
      </Header>
      <div
        v-if="!isLandingPage"
        class="hidden md:block fixed top-[60px] h-full z-[40]"
      >
        <Sidebar
          title="Orchid UI"
          class="min-h-full"
          :sidebar-menu="state.sidebar_menu"
          :is-expanded="state.isExpanded"
          @change-expanded="state.isExpanded = $event"
        >
          <template #label="{ menu }">
            <a :href="`#${menu.name}`" class="ml-3 py-3 h-full">{{
              menu.label
            }}</a>
          </template>
          <template #submenu_label="{ submenu }">
            <a
              :href="`#${submenu.name}`"
              class="ml-3 py-3 h-full"
              @click="changeActiveSidebar(submenu.name)"
              >{{ submenu.label }}</a
            >
          </template>
        </Sidebar>
      </div>
      <div
        class="flex-1 md:px-[20px] pt-[80px]"
        :class="{
          'md:ml-[300px]': !isLandingPage && state.isExpanded,
          'md:ml-[103px]': !isLandingPage && !state.isExpanded,
        }"
      >
        <section class="p-5 grid gap-5 items-start">
          <slot></slot>
        </section>
      </div>
    </section>
  </Theme>
</template>
