import Theme from "../../Theme/OCTheme.vue";
import OCInput from "./OCInput.vue";
import Dropdown from "../../Overlay/Dropdown/OCDropdown.vue";
import Icon from "../../MediaAndIcons/Icon/OCIcon.vue";
import { ref } from "vue";
import { MenuButton } from "@headlessui/vue";

export default {
  components: { MenuButton },
  component: OCInput,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {
    type: {
      control: "select",
      options: ["", "trailing", "leading"],
    },
    icon: {
      control: "select",
      options: ["", "circle"],
    },
  },
  render: (args) => ({
    components: { Theme, OCInput },
    setup() {
      return { args };
    },
    template: `
          <Theme colorMode="light">
            <OCInput v-bind="args"/>
          </Theme>
        `,
  }),
};
export const Example = {
  argTypes: {
    type: {
      control: "select",
      options: ["", "trailing", "leading"],
    },
    icon: {
      control: "select",
      options: ["", "circle"],
    },
  },
  args: {
    hint: "This is a hint text to help user.",
    icon: "circle",
  },
  render: (args) => ({
    components: { Theme, OCInput },
    setup() {
      return { args };
    },
    template: `
          <Theme colorMode="light">
            <OCInput v-bind="args"/>
          </Theme>
        `,
  }),
};

export const MainComponent = {
  render: () => ({
    components: { Theme, OCInput },
    setup() {
      const text = ref("Text");
      return { text };
    },
    template: `
          <Theme colorMode="light">
            <div class="flex flex-col gap-y-4">
              <div class="flex items-end gap-x-4">
                <OCInput label="Label"/>
                <OCInput disabled label="Label"/>
                <OCInput v-model="text" label="Label" inline-label/>
              </div>
              <div class="flex items-end gap-x-4">
                <OCInput is-error inline-label label="Label"/>
                <OCInput disabled inline-label is-error label="Label"/>
                <OCInput is-error v-model="text" label="Label" inline-label/>
              </div>
            </div>
          </Theme>
        `,
  }),
};

export const LeadingTrailing = {
  render: () => ({
    components: { Theme, OCInput, Dropdown, MenuButton, Icon },
    template: `
          <Theme colorMode="light">
            <div class="flex flex-col gap-y-4">
              <!--     TRAILING         -->
              <div class="flex items-end gap-x-4">
                <OCInput hint="This is a hint text to help user" type="trailing">
                  <template #trailing>
                    <Dropdown>
                      <template #trigger>
                        <MenuButton
                            class="py-3 pr-3 border-r border-oc-grey-200 text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                        >
                          <span class="flex items-center h-[18px]">USD</span>
                          <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                        </MenuButton>
                      </template>
                    </Dropdown>
                  </template>
                </OCInput>
                <OCInput disabled hint="This is a hint text to help user" type="trailing">
                  <template #trailing>
                    <Dropdown>
                      <template #trigger>
                        <MenuButton
                            class="py-3 pr-3 border-r border-oc-grey-200 text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                        >
                          <span class="flex items-center h-[18px]">USD</span>
                          <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                        </MenuButton>
                      </template>
                    </Dropdown>
                  </template>
                </OCInput>
                <OCInput is-error hint="This is a hint text to help user" type="trailing">
                  <template #trailing>
                    <Dropdown>
                      <template #trigger>
                        <MenuButton
                            class="py-3 pr-3 border-r border-oc-grey-200 text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                        >
                          <span class="flex items-center h-[18px]">USD</span>
                          <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                        </MenuButton>
                      </template>
                    </Dropdown>
                  </template>
                </OCInput>
              </div>

              <!--     LEADING         -->
              <div class="flex items-end gap-x-4">
                <OCInput hint="This is a hint text to help user" type="leading">
                  <template #leading>
                    <Dropdown>
                      <template #trigger>
                        <MenuButton
                            class="py-3 pl-3 border-l border-oc-grey-200 text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                        >
                          <span class="flex items-center h-[18px]">USD</span>
                          <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                        </MenuButton>
                      </template>
                    </Dropdown>
                  </template>
                </OCInput>
                <OCInput disabled is-error hint="This is a hint text to help user" type="leading">
                  <template #leading>
                    <Dropdown>
                      <template #trigger>
                        <MenuButton
                            class="py-3 pl-3 border-l border-oc-grey-200 text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                        >
                          <span class="flex items-center h-[18px]">USD</span>
                          <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                        </MenuButton>
                      </template>
                    </Dropdown>
                  </template>
                </OCInput>
                <OCInput is-error hint="This is a hint text to help user" type="leading">
                  <template #leading>
                    <Dropdown>
                      <template #trigger>
                        <MenuButton
                            class="py-3 pl-3 border-l border-oc-grey-200 text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                        >
                          <span class="flex items-center h-[18px]">USD</span>
                          <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                        </MenuButton>
                      </template>
                    </Dropdown>
                  </template>
                </OCInput>
              </div>
            </div>
          </Theme>
        `,
  }),
};
