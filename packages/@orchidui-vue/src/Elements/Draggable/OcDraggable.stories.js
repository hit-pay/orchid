import { Theme } from "@/orchidui";

import DraggableList from "./OcDraggableList.vue";
import DraggableCard from "./OcDraggableCard.vue";

import { ref } from "vue";

export default {
  component: DraggableList,
  tags: ["autodocs"],
};

export const OcDraggableList = {
  render: (args) => ({
    components: {
      Theme,
      DraggableList,
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
              <DraggableList v-model="model"></DraggableList>
            </div>
          </Theme>
        `,
  }),
};

export const OcDraggableCard = {
  render: (args) => ({
    components: {
      Theme,
      DraggableCard,
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
              <DraggableCard 
              v-model="model" 
              class="grid-cols-4"
              >
              </DraggableCard>
            </div>
          </Theme>
        `,
  }),
};
