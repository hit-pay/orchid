import { Theme, ListDetail } from "@/orchidui";

export default {
  component: ListDetail,
  tags: ["autodocs"],
};

export const overview = {
  name: "ListDetail",
  argTypes: {
    variant: {
      control: "select",
      options: ["small", "big"],
    },
    alignment: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
  },
  args: {
    variant: "small",
    label: "Alex",
    content: "alex@arcticmonkey.io",
    alignment: "horizontal",
  },
  render: (args) => ({
    components: { ListDetail, Theme },
    setup() {
      return {
        args,
      };
    },
    template: `
          <Theme class="items-center mb-3">
            <ListDetail :label="args.label" :content="args.content" :alignment="args.alignment" />
          </Theme>
        `,
  }),
};

export const vertical = {
  name: "Vertical alignment",
  argTypes: {
    variant: {
      control: "select",
      options: ["small", "big"],
    },
    alignment: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
  },
  args: {
    variant: "big",
    label: "Alex Turner",
    content: "alex@arcticmonkey.io",
    alignment: "vertical",
  },
  render: (args) => ({
    components: { ListDetail, Theme },
    setup() {
      return {
        args,
      };
    },
    template: `
      <Theme class="items-center mb-3">
        <ListDetail :label="args.label" :content="args.content" :alignment="args.alignment" />
      </Theme>
    `,
  }),
};

export const usingSlot = {
  name: "Using content slot",
  argTypes: {
    variant: {
      control: "select",
      options: ["small", "big"],
    },
    alignment: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
  },
  args: {
    variant: "big",
    label: "Alex Turner",
    alignment: "vertical",
  },
  render: (args) => ({
    components: { ListDetail, Theme },
    setup() {
      return {
        args,
      };
    },
    template: `
      <Theme class="items-center mb-3">
        <ListDetail :label="args.label" :content="args.content" :alignment="args.alignment">
          <template #content><span>alex@arcticmonkey.io</span></template>
        </ListDetail>
      </Theme>
    `,
  }),
};
