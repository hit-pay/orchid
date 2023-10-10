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
    inlineLabel: "",
  },
  render: (args) => ({
    components: { Theme, OCInput, BaseInput },
    setup() {
      return { args };
    },
    template: `
          <Theme colorMode="light">
            <BaseInput :label="args.label" :error-message="args.errorMessage" :hint="args.hint">
              <OCInput
                  :placeholder="args.placeholder"
                  :inlineLabel="args.inlineLabel"
                  :type="args.type"
                  :icon="args.icon"
                  :isError="!!args.errorMessage"
                  :disabled="args.disabled"
              />
            </BaseInput>
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
    inlineLabel: "",
  },
  render: (args) => ({
    components: { Theme, OCInput, BaseInput },
    setup() {
      const text = ref("Text");
      return { text, args };
    },
    template: `
          <Theme colorMode="light">
            <div class="flex flex-col gap-y-4">
              <div class="flex items-end gap-x-4">
                <BaseInput :label="args.label" :error-message="args.errorMessage" :hint="args.hint">
                  <OCInput
                      :placeholder="args.placeholder"
                      :inlineLabel="args.inlineLabel"
                      :type="args.type"
                      :icon="args.icon"
                      :isError="!!args.errorMessage"
                      :disabled="args.disabled"
                  />
                </BaseInput>
                <BaseInput :label="args.label" :error-message="args.errorMessage" :hint="args.hint">
                  <OCInput
                      :placeholder="args.placeholder"
                      :inlineLabel="args.inlineLabel"
                      :type="args.type"
                      :icon="args.icon"
                      :isError="!!args.errorMessage"
                      disabled
                  />
                </BaseInput>
                <BaseInput :error-message="args.errorMessage" :hint="args.hint">
                  <OCInput
                      :placeholder="args.placeholder"
                      :inline-label="args.label"
                      :type="args.type"
                      :icon="args.icon"
                      :isError="!!args.errorMessage"
                  />
                </BaseInput>
              </div>
              <div class="flex items-end gap-x-4">
                <BaseInput :label="args.label" error-message="Default Error" :hint="args.hint">
                  <OCInput
                      :placeholder="args.placeholder"
                      :inlineLabel="args.inlineLabel"
                      :type="args.type"
                      :icon="args.icon"
                      is-error
                      :disabled="args.disabled"
                  />
                </BaseInput>
                <BaseInput :label="args.label" error-message="Disabled Error" :hint="args.hint">
                  <OCInput
                      :placeholder="args.placeholder"
                      :inlineLabel="args.inlineLabel"
                      :type="args.type"
                      :icon="args.icon"
                      is-error
                      disabled
                  />
                </BaseInput>
                <BaseInput error-message="Inline Error" :hint="args.hint">
                  <OCInput
                      :placeholder="args.placeholder"
                      :inline-label="args.label"
                      :type="args.type"
                      :icon="args.icon"
                      is-error
                  />
                </BaseInput>
              </div>
            </div>
          </Theme>
        `,
  }),
};

export const Trailing = {
  render: () => ({
    components: { Theme, OCInput, Dropdown, DropdownItem, Icon, BaseInput },
    template: `
          <Theme colorMode="light">
            <div class="flex items-end gap-x-4">
              <BaseInput label="Label" hint="This is a hint text to help user">
                <OCInput type="trailing">
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
                            class="py-3 pr-3 border-r border-oc-grey-200 text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                        >
                          <span class="flex items-center text-sm">USD</span>
                          <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                        </div>
                      </template>
                    </Dropdown>
                  </template>
                </OCInput>
              </BaseInput>
              <BaseInput label="Label" hint="This is a hint text to help user">
                <OCInput type="trailing" disabled>
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
                            class="py-3 pr-3 border-r border-oc-grey-200 text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                        >
                          <span class="flex items-center text-sm">USD</span>
                          <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                        </div>
                      </template>
                    </Dropdown>
                  </template>
                </OCInput>
              </BaseInput>
              <BaseInput label="Label" hint="This is a hint text to help user" error-message="Error message">
                <OCInput type="trailing" is-error>
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
                            class="py-3 pr-3 border-r border-oc-grey-200 text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                        >
                          <span class="flex items-center text-sm">USD</span>
                          <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                        </div>
                      </template>
                    </Dropdown>
                  </template>
                </OCInput>
              </BaseInput>
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
              <BaseInput label="Label" hint="This is a hint text to help user">
                <OCInput type="leading">
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
                            class="py-3 pl-3 border-l border-oc-grey-200 text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                        >
                          <span class="flex items-center text-sm">USD</span>
                          <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                        </div>
                      </template>
                    </Dropdown>
                  </template>
                </OCInput>
              </BaseInput>
              <BaseInput label="Label" hint="This is a hint text to help user">
                <OCInput type="leading" disabled>
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
                            class="py-3 pl-3 border-l border-oc-grey-200 text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                        >
                          <span class="flex items-center text-sm">USD</span>
                          <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                        </div>
                      </template>
                    </Dropdown>
                  </template>
                </OCInput>
              </BaseInput>
              <BaseInput label="Label" hint="This is a hint text to help user" error-message="Error message">
                <OCInput type="leading" is-error>
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
                            class="py-3 pl-3 border-l border-oc-grey-200 text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                        >
                          <span class="flex items-center text-sm">USD</span>
                          <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                        </div>
                      </template>
                    </Dropdown>
                  </template>
                </OCInput>
              </BaseInput>
            </div>
          </Theme>
        `,
  }),
};
