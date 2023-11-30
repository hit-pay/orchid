import { Theme } from "@/orchidui";

import { Toggle, DropdownItem } from "@/orchidui";
import { DraggableList } from "@/orchidui/DraggableList";

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
          title: "123 Label ",
          isToggle: true,
          isDisable: true,
        },
        {
          id: "234",
          title: "234 Label ",
          beforeAction: true,
        },
        {
          id: "456",
          icon: "top-banner",
          title: "456 Label ",
          isToggle: true,
          children: [
            {
              id: "123",
              icon: "banner",
              title: "123 Label ",
            },
            {
              id: "234",
              icon: "banner",
              title: "234 Label ",
            },
          ],
        },
        {
          id: "272",
          title: "272 Label ",
          children: [
            {
              id: "123",
              icon: "banner",
              title: "123 Label ",
              isToggle: true,
              isDisable: true,
            },
            {
              id: "234",
              title: "234 Label ",
              beforeAction: true,
            },
            {
              id: "456",
              icon: "top-banner",
              title: "456 Label ",
              isToggle: true,
            },
            {
              id: "272",
              title: "272 Label ",
              children: [
                {
                  id: "123",
                  icon: "banner",
                  title: "123 Label ",
                },
                {
                  id: "234",
                  icon: "banner",
                  title: "234 Label ",
                },
              ],
            },
            {
              id: "667",
              title: "667 Label ",
            },
            {
              id: "781",
              title: "781 Label ",
            },
          ],
        },
        {
          id: "667",
          title: "667 Label ",
        },
        {
          id: "781",
          title: "781 Label ",
          link: "https://orchidui.vercel.app",
        },
      ]);
      return { args, model };
    },
    template: `
          <Theme>
            <div class="p-4">{{ model}}</div>
            <div class="w-full min-h-[200px]">
              <DraggableList v-model="model" is-link>
                <template #action-item="{item}">
                    <DropdownItem text="Menu" icon="pencil" @click="isOpenedDropdown=false"/>
                    <DropdownItem text="Menu" icon="pencil" @click="isOpenedDropdown=false"/>
                </template>
                <template #action="{item}"><span v-if="item.isToggle"><Toggle size="small" /></span></template>
                <template #content="{item}">
                    <div v-if="item.children" class="flex w-full my-5">
                        <DraggableList class="w-full" v-model="item.children" is-children is-link>
                            <template #action-item="{item}">
                                <DropdownItem text="Menu" icon="pencil" @click="isOpenedDropdown=false"/>
                                <DropdownItem text="Menu" icon="pencil" @click="isOpenedDropdown=false"/>
                            </template>
                            <template #action="{item}"><span v-if="item.isToggle"><Toggle size="small" /></span></template>
                            <template #content="{item}">
                              <div v-if="item.children" class="flex w-full my-5">
                                  <DraggableList class="w-full" v-model="item.children" is-children is-link>
                                      <template #action-item="{item}">
                                          <DropdownItem text="Menu" icon="pencil" @click="isOpenedDropdown=false"/>
                                          <DropdownItem text="Menu" icon="pencil" @click="isOpenedDropdown=false"/>
                                      </template>
                                      <template #action="{item}"><span v-if="item.isToggle"><Toggle size="small" /></span></template>
                                  </DraggableList>
                              </div>
                          </template>
                        </DraggableList>
                    </div>
                </template>
              </DraggableList>
            </div>
          </Theme>
        `,
  }),
};
