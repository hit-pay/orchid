import { Theme } from "@/orchidui";

export default {
  component: "",
};

export const Default = {
  args: {
    templates: [
      {
        id: 1,
        thumbnail: "/images/theme1.png",
        name: "Theme Title 1",
        description: "Description of theme will be here",
      },
      {
        id: 2,
        thumbnail: "/images/theme1.png",
        name: "Theme Title 2",
        description: "Description of theme will be here",
      },
      {
        id: 3,
        thumbnail: "/images/theme1.png",
        name: "Theme Title 3",
        description: "Description of theme will be here",
      },
      {
        id: 4,
        thumbnail: "/images/theme1.png",
        name: "Theme Title 4",
        description: "Description of theme will be here",
      },
    ],
  },
  render: (args) => ({
    components: { Theme },
    setup() {
      return { args };
    },
    template: `
          <Theme>
            
          </Theme>
        `,
  }),
};
