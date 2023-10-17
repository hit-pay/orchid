import Theme from "../../Theme/OcTheme.vue";
import OCInput from "./OcInput.vue";
import Dropdown from "../../Overlay/Dropdown/OcDropdown.vue";
import DropdownItem from "../../Overlay/Dropdown/OcDropdownItem.vue";
import Icon from "../../MediaAndIcons/Icon/OcIcon.vue";
import { ref } from "vue";
import BaseInput from "../BaseInput/OcBaseInput.vue";

export default {
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
    errorMessage: {
      control: "text",
    },
  },
  args: {
    label: "Label",
    hint: "Hint",
    errorMessage: "",
    placeholder: "Placeholder",
    type: "",
    icon: "",
    disabled: false,
    isInlineLabel: false,
  },
  render: (args) => ({
    components: { Theme, OCInput },
    setup() {
      return { args };
    },
    template: `
          <Theme colorMode="light">
            <OCInput
                :label="args.label"
                :error-message="args.errorMessage"
                :hint="args.hint"
                :placeholder="args.placeholder"
                :isInlineLabel="args.isInlineLabel"
                :type="args.type"
                :icon="args.icon"
                :disabled="args.disabled"
            />
          </Theme>
        `,
  }),
};

export const MainComponent = {
  args: {
    label: "Label",
    hint: "Hint",
    errorMessage: "",
    placeholder: "Placeholder",
    type: "",
    icon: "",
    disabled: false,
    isInlineLabel: false,
  },
  render: (args) => ({
    components: { Theme, OCInput },
    setup() {
      const text = ref("Text");
      return { text, args };
    },
    template: `
          <Theme colorMode="light">
            <div class="flex flex-col gap-y-4">
              <div class="flex items-end gap-x-4">
                <OCInput
                    :label="args.label" :error-message="args.errorMessage" :hint="args.hint"
                    :placeholder="args.placeholder"
                    :is-inline-label="args.inlineLabel"
                    :type="args.type"
                    :icon="args.icon"
                    :disabled="args.disabled"
                />
                <OCInput
                    :label="args.label" :error-message="args.errorMessage" :hint="args.hint"
                    :placeholder="args.placeholder"
                    :is-inline-label="args.inlineLabel"
                    :type="args.type"
                    :icon="args.icon"
                    disabled
                />
                <OCInput
                    :label="args.label" :error-message="args.errorMessage" :hint="args.hint"
                    :placeholder="args.placeholder"
                    :is-inline-label="args.label"
                    :type="args.type"
                    :icon="args.icon"
                />
              </div>
              <div class="flex items-end gap-x-4">
                <OCInput
                    :placeholder="args.placeholder"
                    :is-inline-label="args.inlineLabel"
                    :label="args.label" error-message="Default Error" :hint="args.hint"
                    :type="args.type"
                    :icon="args.icon"
                    :disabled="args.disabled"
                />
                <OCInput
                    :label="args.label" error-message="Disabled Error" :hint="args.hint"
                    :placeholder="args.placeholder"
                    :is-inline-label="args.inlineLabel"
                    :type="args.type"
                    :icon="args.icon"
                    disabled
                />
                <OCInput
                    :label="args.label"
                    :placeholder="args.placeholder"
                    is-inline-label
                    :type="args.type"
                    error-message="Inline Error" :hint="args.hint"
                    :icon="args.icon"
                    is-error
                />
              </div>
            </div>
          </Theme>
        `,
  }),
};

export const Trailing = {
  render: () => ({
    components: { Theme, OCInput, Dropdown, DropdownItem, Icon },
    template: `
          <Theme colorMode="light">
            <div class="flex items-end gap-x-4">
              <OCInput type="trailing" label="Label" hint="This is a hint text to help user">
                <template #trailing>
                  <Dropdown>
                    <template #default="{close}">
                      <div class="flex p-2 flex-col">
                        <DropdownItem text="Menu" icon="pencil" @click="close"/>
                        <DropdownItem text="Menu" icon="pencil" @click="close"/>
                        <DropdownItem text="Menu" icon="pencil" @click="close"/>
                      </div>
                    </template>
                    <template #trigger>
                      <div
                          class="py-3 pr-3 border-r border-oc-gray-200 text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                      >
                        <span class="flex items-center text-sm">USD</span>
                        <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                      </div>
                    </template>
                  </Dropdown>
                </template>
              </OCInput>
              <OCInput type="trailing" disabled label="Label" hint="This is a hint text to help user">
                <template #trailing>
                  <Dropdown>
                    <template #default="{close}">
                      <div class="flex p-2 flex-col">
                        <DropdownItem text="Menu" icon="pencil" @click="close"/>
                        <DropdownItem text="Menu" icon="pencil" @click="close"/>
                        <DropdownItem text="Menu" icon="pencil" @click="close"/>
                      </div>
                    </template>
                    <template #trigger>
                      <div
                          class="py-3 pr-3 border-r border-oc-gray-200 text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                      >
                        <span class="flex items-center text-sm">USD</span>
                        <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                      </div>
                    </template>
                  </Dropdown>
                </template>
              </OCInput>
              <OCInput type="trailing" label="Label" hint="This is a hint text to help user"
                       error-message="Error message">
                <template #trailing>
                  <Dropdown>
                    <template #default="{close}">
                      <div class="flex p-2 flex-col">
                        <DropdownItem text="Menu" icon="pencil" @click="close"/>
                        <DropdownItem text="Menu" icon="pencil" @click="close"/>
                        <DropdownItem text="Menu" icon="pencil" @click="close"/>
                      </div>
                    </template>
                    <template #trigger>
                      <div
                          class="py-3 pr-3 border-r border-oc-gray-200 text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                      >
                        <span class="flex items-center text-sm">USD</span>
                        <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                      </div>
                    </template>
                  </Dropdown>
                </template>
              </OCInput>
            </div>
          </Theme>
        `,
  }),
};

export const Leading = {
  render: () => ({
    components: { Theme, OCInput, Dropdown, DropdownItem, Icon, BaseInput },
    template: `
          <Theme colorMode="light">
            <div class="flex items-end gap-x-4">
              <OCInput type="leading" label="Label" hint="This is a hint text to help user">
                <template #leading>
                  <Dropdown>
                    <template #default="{close}">
                      <div class="flex p-2 flex-col">
                        <DropdownItem text="Menu" icon="pencil" @click="close"/>
                        <DropdownItem text="Menu" icon="pencil" @click="close"/>
                        <DropdownItem text="Menu" icon="pencil" @click="close"/>
                      </div>
                    </template>
                    <template #trigger>
                      <div
                          class="py-3 pl-3 border-l border-oc-gray-200 text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                      >
                        <span class="flex items-center text-sm">USD</span>
                        <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                      </div>
                    </template>
                  </Dropdown>
                </template>
              </OCInput>
              <OCInput type="leading" disabled label="Label" hint="This is a hint text to help user">
                <template #leading>
                  <Dropdown>
                    <template #default="{close}">
                      <div class="flex p-2 flex-col">
                        <DropdownItem text="Menu" icon="pencil" @click="close"/>
                        <DropdownItem text="Menu" icon="pencil" @click="close"/>
                        <DropdownItem text="Menu" icon="pencil" @click="close"/>
                      </div>
                    </template>
                    <template #trigger>
                      <div
                          class="py-3 pl-3 border-l border-oc-gray-200 text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                      >
                        <span class="flex items-center text-sm">USD</span>
                        <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                      </div>
                    </template>
                  </Dropdown>
                </template>
              </OCInput>
              <OCInput type="leading" label="Label" hint="This is a hint text to help user"
                       error-message="Error message">
                <template #leading>
                  <Dropdown>
                    <template #default="{close}">
                      <div class="flex p-2 flex-col">
                        <DropdownItem text="Menu" icon="pencil" @click="close"/>
                        <DropdownItem text="Menu" icon="pencil" @click="close"/>
                        <DropdownItem text="Menu" icon="pencil" @click="close"/>
                      </div>
                    </template>
                    <template #trigger>
                      <div
                          class="py-3 pl-3 border-l border-oc-gray-200 text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                      >
                        <span class="flex items-center text-sm">USD</span>
                        <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                      </div>
                    </template>
                  </Dropdown>
                </template>
              </OCInput>
            </div>
          </Theme>
        `,
  }),
};
