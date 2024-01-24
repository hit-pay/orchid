import Theme from "../../Theme/OcTheme.vue";
import OCInput from "./OcInput.vue";
import Dropdown from "../../Overlay/Dropdown/OcDropdown.vue";
import DropdownItem from "../../Overlay/Dropdown/OcDropdownItem.vue";
import Icon from "../../MediaAndIcons/Icon/OcIcon.vue";
import { ref } from "vue";
import BaseInput from "../BaseInput/OcBaseInput.vue";
import { InputOption } from "@/orchidui";

export default {
  component: OCInput,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {
    icon: {
      control: "select",
      options: ["", "circle"],
    },
    errorMessage: {
      control: "text",
    },
    labelIcon: {
      control: "select",
      options: ["", "question-mark"],
    },
  },
  args: {
    label: "Label",
    hint: "Hint",
    errorMessage: "",
    placeholder: "Placeholder",
    icon: "",
    disabled: false,
    isInlineLabel: false,
    isRequired: false,
    labelIcon: "",
    tooltipText: "Tooltip text",
    tooltipOptions: {
      position: "top",
      distance: 10,
    },
  },
  render: (args) => ({
    components: { Theme, OCInput },
    setup() {
      const modelValue = ref();

      return { modelValue, args };
    },
    template: `
          <Theme colorMode="light" class="py-4">
            <OCInput
                v-model="modelValue"
                :label="args.label"
                :error-message="args.errorMessage"
                :hint="args.hint"
                :placeholder="args.placeholder"
                :isInlineLabel="args.isInlineLabel"
                :icon="args.icon"
                :disabled="args.disabled"
                :isRequired="args.isRequired"
                :tooltip-options="args.tooltipOptions"
                :label-icon="args.labelIcon"
                :tooltip-text="args.tooltipText"
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
    setup() {
      const isDropdownOpen = ref([]);
      return {
        isDropdownOpen,
      };
    },
    template: `
          <Theme colorMode="light">
            <div class="flex items-end gap-x-4">
              <OCInput label="Label" hint="This is a hint text to help user">
                <template #trailing>
                  <Dropdown v-model="isDropdownOpen[1]">
                    <template #menu>
                      <div class="flex p-2 flex-col">
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[1]=false"/>
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[1]=false"/>
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[1]=false"/>
                      </div>
                    </template>
                    <div
                        class=" text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                    >
                      <span class="flex items-center text-sm">USD</span>
                      <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                    </div>
                  </Dropdown>
                </template>
              </OCInput>
              <OCInput disabled label="Label" hint="This is a hint text to help user">
                <template #trailing>
                  <Dropdown v-model="isDropdownOpen[2]">
                    <template #menu>
                      <div class="flex p-2 flex-col">
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[2]=false"/>
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[2]=false"/>
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[2]=false"/>
                      </div>
                    </template>
                    <div
                        class=" text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                    >
                      <span class="flex items-center text-sm">USD</span>
                      <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                    </div>
                  </Dropdown>
                </template>
              </OCInput>
              <OCInput label="Label" hint="This is a hint text to help user"
                       error-message="Error message">
                <template #trailing>
                  <Dropdown v-model="isDropdownOpen[3]">
                    <template #menu>
                      <div class="flex p-2 flex-col">
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[3]=false"/>
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[3]=false"/>
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[3]=false"/>
                      </div>
                    </template>
                    <div
                        class=" text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                    >
                      <span class="flex items-center text-sm">USD</span>
                      <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                    </div>
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
    setup() {
      const isDropdownOpen = ref([]);
      return {
        isDropdownOpen,
      };
    },
    template: `
          <Theme colorMode="light">
            <div class="flex items-end gap-x-4">
              <OCInput label="Label" hint="This is a hint text to help user">
                <template #leading>
                  <Dropdown v-model="isDropdownOpen[1]" :distance="10">
                    <template #menu>
                      <div class="flex p-2 flex-col">
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[1]=false"/>
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[1]=false"/>
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[1]=false"/>
                      </div>
                    </template>
                    <div class=" text-sm font-medium flex items-center gap-x-2 text-oc-text-400"  >
                      <span class="flex items-center text-sm">USD</span>
                      <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                    </div>
                  </Dropdown>
                </template>
              </OCInput>
              <OCInput disabled label="Label" hint="This is a hint text to help user">
                <template #leading>
                  <Dropdown v-model="isDropdownOpen[2]">
                    <template #menu>
                      <div class="flex p-2 flex-col">
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[2]=false"/>
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[2]=false"/>
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[2]=false"/>
                      </div>
                    </template>
                    <div
                        class=" text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                    >
                      <span class="flex items-center text-sm">USD</span>
                      <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                    </div>
                  </Dropdown>
                </template>
              </OCInput>
              <OCInput label="Label" hint="This is a hint text to help user"
                       error-message="Error message">
                <template #leading>
                  <Dropdown v-model="isDropdownOpen[3]" >
                    <template #menu>
                      <div class="flex p-2 flex-col">
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[3]=false"/>
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[3]=false"/>
                        <DropdownItem text="Menu" icon="pencil" @click="isDropdownOpen[3]=false"/>
                      </div>
                    </template>
                    <div
                        class=" text-sm font-medium flex items-center gap-x-2 text-oc-text-400"
                    >
                      <span class="flex items-center text-sm">USD</span>
                      <Icon class="w-[14px] h-[14px]" name="chevron-down"/>
                    </div>
                  </Dropdown>
                </template>
              </OCInput>
            </div>
          </Theme>
        `,
  }),
};

export const InputOptions = {
  render: () => ({
    components: { Theme, InputOption },
    setup() {
      const selectedOption = ref(["Option 1", "options 2"]);
      return { selectedOption };
    },
    template: `
          <Theme colorMode="light">
            <InputOption
                v-model="selectedOption"
                label="Label"
                hint="Hint"
                placeholder="Placeholder"
            />

            <div class="mt-4">Selected value: {{ selectedOption }}</div>
          </Theme>
        `,
  }),
};

export const FormatValue = {
  args: {
    label: "Currency value",
    placeholder: "Currency format",
  },
  render: (args) => ({
    components: { Theme, OCInput },
    setup() {
      const modelValue = ref(0);

      const formatValue = (value) => {
        let output = value;

        if (Number(value) === 0) return '0.00'

        // removing non-digit characters
        output = +(`${output}`.replace(/\D/g, ''))

        // 
        return (output / 100).toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })
      }

      const handleUpdateModelValue = (value) => {
        modelValue.value = value.replaceAll(',', '')
      }

      return { modelValue, args, formatValue, handleUpdateModelValue };
    },
    template: `
          <Theme colorMode="light" class="py-4">
            <OCInput
                v-model="modelValue"
                :label="args.label"
                :placeholder="args.placeholder"
                :formatValue="formatValue"
            />
          </Theme>
        `,
  }),
};
