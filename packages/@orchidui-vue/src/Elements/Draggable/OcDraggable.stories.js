import { Theme } from "@/orchidui";

import DraggableList from "./OcDraggableList.vue";
import DraggableCard from "./OcDraggableCard.vue";
import { Toggle, DropdownItem } from "@/orchidui";

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
      Toggle,
      DropdownItem,
    },
    setup() {
      const model = ref([
        {
          id: "123",
          icon: "banner",
          label: "123 Label ",
          isToggle: true,
        },
        {
          id: "234",
          label: "234 Label ",
          beforeAction: true,
        },
        {
          id: "456",
          icon: "top-banner",
          label: "456 Label ",
          isToggle: true,
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
              <DraggableList v-model="model">
                <template #before-action="{item}">
                    <span v-if="item.beforeAction">Use For {{item.id}}</span>
                </template>
                <template #action-item="{item}">
                    <DropdownItem text="Menu" icon="pencil" @click="isOpenedDropdown=false"/>
                    <DropdownItem text="Menu" icon="pencil" @click="isOpenedDropdown=false"/>
                    <DropdownItem text="Menu" icon="pencil" @click="isOpenedDropdown=false"/>
                </template>
                <template #action="{item}"><span v-if="item.isToggle"><Toggle size="small" /></span></template>
              </DraggableList>
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
          url: "/images/cover.png",
        },
        {
          id: "234",
          url: "/images/cover.png",
        },
        {
          id: "456",
          url: "/images/cover.png",
        },
        {
          id: "272",
          url: "/images/cover.png",
        },
        {
          id: "667",
          url: "/images/cover.png",
        },
        {
          id: "781",
          url: "/images/cover.png",
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
                <template #action-item="{item}">
                   Action for {{item.id}}
                </template>
              </DraggableCard>
            </div>
          </Theme>
        `,
  }),
};
