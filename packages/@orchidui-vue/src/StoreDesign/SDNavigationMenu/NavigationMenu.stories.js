import { Theme } from "@/orchidui";

import NavigationMenu from "./NavigationMenu.vue";

import { ref } from "vue";

export default {
  component: NavigationMenu,
  tags: ["autodocs"],
};

export const OcNavigationMenu = {
  render: (args) => ({
    components: {
      Theme,
      NavigationMenu,
    },
    setup() {
      const model = ref([
        {
          id: "123",
          icon: "banner",
          label: "Menu",
        },
        {
          id: "234",
          label: "Menu ",
        },
        {
          id: "456",
          icon: "top-banner",
          label: "Menu",
          children: [
            {
              id: "123",
              icon: "banner",
              label: "SubMenu ",
            },
            {
              id: "234",
              icon: "banner",
              label: "SubMenu",
            },
          ],
        },
        {
          id: "272",
          label: "Menu ",
          children: [
            {
              id: "123",
              icon: "banner",
              label: "Submenu ",
            },
            {
              id: "272",
              label: "Submenu  ",
              children: [
                {
                  id: "123",
                  icon: "banner",
                  label: "Submenu 2",
                },
                {
                  id: "234",
                  icon: "banner",
                  label: "Submenu 2",
                },
              ],
            },
            {
              id: "667",
              label: "SubMenu ",
            },
            {
              id: "781",
              label: "Submenu ",
            },
          ],
        },
        {
          id: "667",
          label: "Menu ",
        },
        {
          id: "781",
          label: "Menu ",
          link: "https://orchidui.vercel.app",
        },
      ]);
      return { args, model };
    },
    template: `
          <Theme>
            <div class="p-4">{{ model}}</div>
            <div class="w-full">
              <NavigationMenu v-model="model" />
            </div>
          </Theme>
        `,
  }),
};
