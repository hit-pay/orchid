import { Theme, SupportMenu } from "@/orchidui";

export default {
  component: SupportMenu,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    modelValue: true,
    type: "default",
    title: undefined,
    info: undefined,
    confirmButtonProps: undefined,
    topMenu: [
      {
        title: "support",
        items: [
          {
            text: "Whatsapp",
            icon: "whatsapp-colored",
          },
          {
            text: "Email Us",
            icon: "email",
          },
          {
            text: "Record a Bug",
            icon: "bug",
          },
        ],
      },
      {
        title: "Resources",
        items: [
          {
            text: "User Guides",
            icon: "document",
          },
          {
            text: "Blog",
            icon: "news",
          },
        ],
      },
    ],
    bottomMenu: [
      {
        text: "What’s new",
        icon: "sparkle-2",
        pointed: true,
      },
      {
        text: "Feedback",
        icon: "chat-2",
      },
      {
        text: "Changelog",
        icon: "list-check",
      },
    ],
  },
  argTypes: {
    type: {
      control: "select",
      options: ["default", "nudge"],
    },
  },
  render: (args) => ({
    components: { SupportMenu, Theme },
    setup() {
      return { args };
    },
    template: `
          <Theme class="h-[450px] w-full">
            <SupportMenu v-model="args.modelValue" :type="args.type" :confirmButtonProps="args.confirmButtonProps"
                         :title="args.title" :info="args.info" :topMenu="args.topMenu" :bottomMenu="args.bottomMenu"/>
          </Theme>
        `,
  }),
};
