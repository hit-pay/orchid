import Dropdown from "./OcDropdown.vue";
import Theme from "../../Theme/OcTheme.vue";
import DropdownItem from "./OcDropdownItem.vue";

export default {
  component: Dropdown,
  tags: ["autodocs"],
};

export const Default = {
  render: () => ({
    components: { Dropdown, Theme, DropdownItem },
    template: `
          <Theme>
            <Dropdown :offset="10">
              <template #trigger>Dropdown Button</template>
              <div class="flex flex-col">
                <div class="p-2 border-b border-gray-200">
                  <DropdownItem text="Menu" icon="pencil"/>
                  <DropdownItem text="Menu" icon="pencil"/>
                </div>
                <div class="p-2">
                  <DropdownItem text="Menu" icon="pencil" variant="destructive"/>
                </div>
              </div>
            </Dropdown>
          </Theme>
        `,
  }),
};
