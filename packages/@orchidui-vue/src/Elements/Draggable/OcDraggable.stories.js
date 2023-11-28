import { Theme } from "@/orchidui";

import Draggable from "./OcDraggable.vue";

export default {
  component: Draggable,
  tags: ["autodocs"],
};

export const OcDraggable = {
  args: {
    list: [
      {
        id: "123",
        label: "Label 123",
      },
      {
        id: "234",
        label: "Label 234",
      },
    ],
  },
  render: (args) => ({
    components: {
      Theme,
      Draggable,
    },
    setup() {
      return { args };
    },
    template: `
          <Theme>
            <div class="w-full h-[200px]">
              <Draggable :list="args.list" ></Draggable>
            </div>
          </Theme>
        `,
  }),
};
