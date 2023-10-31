import { Theme, Dropdown, DropdownItem } from "@orchid";
import { ref } from "vue";

export default {
  component: Dropdown,
  tags: ["autodocs"],
};

export const Default = {
  render: () => ({
    components: { Dropdown, Theme, DropdownItem },
    setup() {
      const isDropdownOpened = ref(false);
      return {
        isDropdownOpened,
      };
    },
    template: `
          <Theme>
            <div class="w-full h-[200px]">
              <Dropdown v-model="isDropdownOpened" :distance="10">
                Dropdown Button

                <template #menu>
                  <div class="flex flex-col">
                    <div class="p-2 border-b border-gray-200">
                      <DropdownItem text="Menu" icon="pencil"/>
                      <DropdownItem text="Menu" icon="pencil"/>
                    </div>
                    <div class="p-2">
                      <DropdownItem text="Menu" icon="pencil" variant="destructive"/>
                    </div>
                  </div>
                </template>
              </Dropdown>
            </div>
          </Theme>
        `,
  }),
};
