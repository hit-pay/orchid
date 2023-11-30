import { Theme } from "@/orchidui";

import SDMenus from "./SDMenus.vue";
import { ref } from "vue";
export default {
  component: SDMenus,
  tags: ["autodocs"],
};

export const SDMenusDefault = {
  args: {
    hasSubmenu: true,
    submenuLevel: 2,
  },
  render: (args) => ({
    components: {
      Theme,
      SDMenus,
    },
    setup() {
      const model = ref([
        {
          id: "123",
          icon: "banner",
          title: "Menu",
          link: "https://orchidui.vercel.app",
        },
        {
          id: "234",
          title: "Menu ",
          link: "https://orchidui.vercel.app",
        },
        {
          id: "456",
          icon: "top-banner",
          title: "Menu",
          children: [
            {
              id: "123",
              icon: "banner",
              title: "SubMenu ",
              link: "https://orchidui.vercel.app",
            },
            {
              id: "234",
              icon: "banner",
              title: "SubMenu",
              link: "https://orchidui.vercel.app",
            },
          ],
        },
        {
          id: "272",
          title: "Menu ",
          children: [
            {
              id: "123",
              icon: "banner",
              title: "Submenu ",
              link: "https://orchidui.vercel.app",
            },
            {
              id: "272",
              title: "Submenu  ",
              children: [
                {
                  id: "123",
                  icon: "banner",
                  title: "Submenu 2",
                  link: "https://orchidui.vercel.app",
                },
                {
                  id: "234",
                  icon: "banner",
                  title: "Submenu 2",
                  link: "https://orchidui.vercel.app",
                },
              ],
            },
            {
              id: "667",
              title: "SubMenu ",
              link: "https://orchidui.vercel.app",
            },
            {
              id: "781",
              title: "Submenu ",
              link: "https://orchidui.vercel.app",
            },
          ],
        },
        {
          id: "667",
          title: "Menu ",
          link: "https://orchidui.vercel.app",
        },
        {
          id: "781",
          title: "Menu ",
          link: "https://orchidui.vercel.app",
        },
      ]);
      return { args, model };
    },
    template: `
          <Theme>
            <div class="p-4">{{ model }}</div>
            <div class="w-full">
              <SDMenus  :has-submenu="args.hasSubmenu" :submenuLevel="args.submenuLevel" v-model="model" />
            </div>
          </Theme>
        `,
  }),
};
