import { DummyData } from "@/orchidui";

export default {
  component: DummyData,
  tags: ["autodocs"],
};

export const emptyPage = {
  argTypes: {
    size: {
      control: "select",
      options: ["small", "default", "large"],
    },
  },
  args: {
    title: undefined,
    description: "Description",
  },
  render: (args) => ({
    components: {
      DummyData,
    },
    setup() {
      return { args };
    },
    template: `
          <div class="h-[300px]">
            <DummyData v-bind="args"/>
          </div>
        `,
  }),
};
