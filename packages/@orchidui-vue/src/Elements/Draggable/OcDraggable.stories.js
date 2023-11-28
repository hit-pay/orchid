import { Theme } from "@/orchidui";

import Draggable from "./OcDraggable.vue";
import { ref } from "vue";
export default {
  component: Draggable,
  tags: ["autodocs"],
};

export const OcDraggable = {
  render: (args) => ({
    components: {
      Theme,
      Draggable,
    },
    setup() {
      const model = ref([
        {
          id: "123",
          label: "123 Label ",
        },
        {
          id: "234",
          label: "234 Label ",
        },
        {
          id: "456",
          label: "456 Label ",
        },
        {
          id: "272",
          label: "272 Label ",
        },
        {
          id: "667",
          label: "667 Label ",
        },
        {
          id: "781",
          label: "781 Label ",
        },
      ]);
      return { args, model };
    },
    template: `
          <Theme>
            <div class="p-4">{{ model}}</div>
            <div class="w-full min-h-[200px]">
               
              <Draggable v-model="model"></Draggable>
            </div>
          </Theme>
        `,
  }),
};
