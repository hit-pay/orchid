<script setup>
import { Theme, Sidebar, Header, HeaderLeft, HeaderRight, Icon } from "@orchid";
import { reactive, computed } from "vue";
import ThemeSettings from "./ThemeSettings.vue";
import ExampleDataTable from "./example/DataTable.vue";
import ExampleFormBuilder from "./example/FormBuilder.vue";
import { ONLINE_STORE_SIDEBAR_GROUP } from "@orchid/Elements/Sidebar/HitpaySidebar.js";

let state = reactive({
  darkMode: false,
  primary_colors: {
    teal: `teal-primary-color`,
  },
  primary_color: "",
  sidebar_menu: ONLINE_STORE_SIDEBAR_GROUP,
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
            <a href="#" class="ml-3">{{ menu.label }}</a>
          </template>
          <template #submenu_label="{ submenu }">
            <a href="#" class="ml-3">{{ submenu.label }}</a>
          </template>
        </Sidebar>
      </div>
      <div class="flex-1 px-[20px] pt-[20px]">
        <section class="py-5 grid gap-5 items-start">
          <h1 class="flex mb-3 font-bold">Orchid UI Playground</h1>
          <div class="flex gap-3 mb-3">
            <a href="/docs" class="text-oc-primary"> Documentation </a> /
            <a
              href="https://storybook-orchidui.vercel.app/"
              class="text-oc-primary"
            >
              Storybook
            </a>
          </div>
          <ExampleDataTable />
          <ExampleFormBuilder />
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
