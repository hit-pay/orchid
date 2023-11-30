import { Theme } from "@/orchidui";
import ThemeThumbnail from "./ThemeThumbnail.vue";

export default {
  tags: ["autodocs"],
  component: ThemeThumbnail,
};

export const Default = {
  args: {
    templates: [
      {
        id: 1,
        thumbnail: "/images/theme1.png",
        title: "Theme Title 1",
        description: "Description of theme will be here",
      },
      {
        id: 2,
        thumbnail: "/images/theme1.png",
        title: "Theme Title 2",
        description: "Description of theme will be here",
        active: true,
      },
      {
        id: 3,
        thumbnail: "/images/theme1.png",
        title: "Theme Title 3",
        description: "Description of theme will be here",
        pro: true,
      },
    ],
  },
  render: (args) => ({
    components: { Theme, ThemeThumbnail },
    setup() {
      return { args };
    },
    template: `
          <Theme>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-5">
                <ThemeThumbnail  v-for="theme in args.templates" :theme="theme" />
               </div>
          </Theme>
        `,
  }),
};
