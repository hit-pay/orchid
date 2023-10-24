<script setup>
import { Theme, Sidebar, Header, HeaderLeft, HeaderRight, Icon } from "@orchid";
import { reactive, computed } from "vue";
import ThemeSettings from "./ThemeSettings.vue";
import ExampleDataTable from "./example/DataTable.vue";
// import ExampleFormBuilder from "./example/FormBuilder.vue";

let state = reactive({
  darkMode: false,
  primary_colors: {
    teal: `teal-primary-color`,
  },
  primary_color: "",
  sidebar_menu: [
    {
      name: "builder",
      label: "Orchid UI Builder",
      items: [
        {
          icon: "circle",
          name: "datatable",
          label: "DataTable",
          children: [
            {
              active: true,
              name: "dt-payment-link",
              label: "Payment Links",
            },
            {
              name: "dt-products",
              label: "Products",
            },
            {
              name: "dt-invoices",
              label: "Invoices",
            },
            {
              name: "dt-customers",
              label: "Customers",
            },
            {
              name: "dt-product-logs",
              label: "Product Logs",
            },
          ],
        },
        {
          icon: "circle",
          name: "formbuilder",
          label: "Form Builder",
        },
      ],
    },
  ],
  isExpanded: true,
});

const primaryColor = computed(() => {
  return state.primary_color ? state.primary_colors[state.primary_color] : "";
});

const toggleDarkMode = () => {
  state.darkMode = !state.darkMode;
};
const changePrimaryColor = () => {
  if (!state.primary_color) {
    state.primary_color = "teal";
  } else {
    state.primary_color = "";
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
</script>
<template>
  <Theme
    class="layout-payment"
    :color-mode="state.darkMode ? 'dark' : 'light'"
    :class="primaryColor"
  >
    <section class="flex flex-wrap mx-auto px-4 h-screen">
      <Header class="w-full">
        <HeaderLeft class="md:w-[260px]">
          <a
            class="flex items-center gap-3 text-oc-accent-1"
            href="#"
            aria-label="Home Page"
          >
            <span class="font-bold">Orchid UI </span> <span>by</span>
            <Icon name="hitpay/logo" width="24" height="24" />
            <Icon class="mt-2" name="hitpay/hitpay" width="74" height="24" />
          </a>
        </HeaderLeft>
        <HeaderRight>
          <a
            href="https://storybook-orchidui.vercel.app/"
            class="text-oc-primary"
          >
            Storybook
          </a>
          <a href="https://github.com/hit-pay/orchid" target="_blank">
            <Icon name="github" />
          </a>
        </HeaderRight>
      </Header>
      <div class="hidden xl:block">
        <Sidebar
          title="Orchid UI"
          class="min-h-full"
          :sidebar-menu="state.sidebar_menu"
          :is-expanded="state.isExpanded"
          @change-expanded="state.isExpanded = $event"
        >
          <template #label="{ menu }">
            <a :href="`#${menu.name}`" class="ml-3 h-full">{{ menu.label }}</a>
          </template>
          <template #submenu_label="{ submenu }">
            <a
              :href="`#${submenu.name}`"
              class="ml-3 h-full"
              @click="changeActiveSidebar(submenu.name)"
              >{{ submenu.label }}</a
            >
          </template>
        </Sidebar>
      </div>
      <div class="flex-1 md:px-[20px] pt-[20px]">
        <section class="py-5 grid gap-5 items-start">
          <ExampleDataTable />
          <!-- <ExampleFormBuilder /> -->
        </section>
      </div>
      <div class="hidden max-w-[400px] lg:block mt-[20px]">
        <ThemeSettings
          @toggle-dark-mode="toggleDarkMode"
          @change-primary-color="changePrimaryColor"
        />
      </div>
    </section>
  </Theme>
</template>
