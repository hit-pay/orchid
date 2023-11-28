import { Theme, Select, Option, InputSelect, GroupOptions } from "@/orchidui";
import { ref } from "vue";

export default {
  component: Select,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {
    labelIcon: {
      control: "select",
      options: ["", "question-mark"],
    },
  },
  args: {
    label: "Label",
    hint: "Hint",
    placeholder: "Placeholder",
    isInlineLabel: false,
    errorMessage: "",
    options: [
      {
        label: "Option 1",
        value: 1,
      },
      {
        label: "Option 2",
        value: 2,
      },
      {
        label: "Option 3",
        value: 3,
      },
      {
        label: "Option 4",
        value: 4,
      },
    ],
    isFilterable: true,
    isAddNew: true,
    isDisabled: false,
    isRequired: false,
    labelIcon: "",
    tooltipText: "Tooltip text",
    tooltipOptions: {
      position: "top",
      distance: 10,
    },
  },
  render: (args) => ({
    components: { Theme, Select, Option },
    setup() {
      const selectedOption = ref();
      return { selectedOption, args };
    },
    template: `
          <Theme colorMode="light">
            <div class="w-full h-[300px]">
              <div class="mb-4">Selected value: {{ selectedOption }}</div>
              <Select
                  v-model="selectedOption"
                  :options="args.options"
                  :label="args.label"
                  :error-message="args.errorMessage"
                  :is-disabled="args.isDisabled"
                  :is-inline-label="args.isInlineLabel"
                  :hint="args.hint"
                  :is-filterable="args.isFilterable"
                  :is-add-new="args.isAddNew"
                  :placeholder="args.placeholder"
                  :isRequired="args.isRequired"
                  :tooltip-options="args.tooltipOptions"
                  :label-icon="args.labelIcon"
                  :tooltip-text="args.tooltipText"
              />
            </div>
          </Theme>
        `,
  }),
};

export const OcGroupOptions = {
  render: () => ({
    components: { Theme, Select, Option, GroupOptions },
    setup() {
      const options = [
        {
          label: "Group 1",
          value: [
            {
              label: "Option 1",
              value: 1,
            },
            {
              label: "Option 2",
              value: 2,
            },
            {
              label: "Option 3",
              value: 3,
            },
            {
              label: "Option 4",
              value: 4,
            },
          ],
        },
        {
          label: "Group 2",
          value: [
            {
              label: "Option 11",
              value: 11,
            },
            {
              label: "Option 22",
              value: 22,
            },
            {
              label: "Option 33",
              value: 33,
            },
            {
              label: "Option 44",
              value: 44,
            },
          ],
        },
      ];

      const selectedOption = ref();
      return { selectedOption, options };
    },
    template: `
          <Theme colorMode="light">
            <div class="mb-4">Selected value: {{ selectedOption }}</div>
            <Select
                v-model="selectedOption"
                label="Label"
                :options="options"
                hint="Hint"
                is-filterable
                is-add-new
                placeholder="Placeholder"
            >
              <template #default="{fOptions}">
                <GroupOptions v-for="group in fOptions" :label="group.label">
                  <Option
                      v-for="option in group.value"
                      :key="option.value"
                      :label="option.label"
                      :is-selected="selectedOption === option.value"
                      @click="selectedOption = option.value"
                  />
                </GroupOptions>
              </template>
            </Select>
          </Theme>
        `,
  }),
};

export const Multiple = {
  render: () => ({
    components: { Theme, Select, Option, GroupOptions },
    setup() {
      const options = [
        {
          label: "Option 1",
          value: 1,
        },
        {
          label: "Option 2",
          value: 2,
        },
        {
          label: "Option 3",
          value: 3,
        },
        {
          label: "Option 4",
          value: 4,
        },
      ];
      const groups = [
        {
          label: "Group 1",
          values: [
            {
              label: "Option 1",
              value: 1,
            },
            {
              label: "Option 2",
              value: 2,
            },
            {
              label: "Option 3",
              value: 3,
            },
            {
              label: "Option 4",
              value: 4,
            },
          ],
        },
        {
          label: "Group 2",
          values: [
            {
              label: "Option 11",
              value: 11,
            },
            {
              label: "Option 22",
              value: 22,
            },
            {
              label: "Option 33",
              value: 33,
            },
            {
              label: "Option 44",
              value: 44,
            },
          ],
        },
      ];

      const selectedOption = ref([]);
      const selectedGroups = ref([]);
      return { selectedOption, selectedGroups, groups, options };
    },
    template: `
          <Theme colorMode="light">
            <Select
                v-model="selectedOption"
                :options="options"
                label="Label"
                hint="Hint"
                is-filterable
                multiple
                is-add-new
                placeholder="Placeholder"
            />
            <div class="mt-4 mb-8">Selected value: {{ selectedOption }}</div>

            <Select
                v-model="selectedGroups"
                :options="groups"
                label="Label"
                hint="Hint"
                is-filterable
                multiple
                is-add-new
                placeholder="Placeholder"
            >
              <template #default="{fOptions, selectOption}">
                <GroupOptions v-for="group in fOptions" :label="group.label">
                  <Option
                      v-for="option in group.values"
                      :key="option.value"
                      :label="option.label"
                      :is-selected="selectedGroups.find((o) => o === option.value) ? true : false"
                      @click="selectOption(option)"
                  />
                </GroupOptions>
              </template>
            </Select>
            <div class="mt-4">Selected value: {{ selectedGroups }}</div>
          </Theme>
        `,
  }),
};

export const InputMultipleSelect = {
  render: () => ({
    components: { Theme, InputSelect },
    setup() {
      const selectedOption = ref(['Option 1', 'options 2']);
      return { selectedOption };
    },
    template: `
      <Theme colorMode="light">
        <InputSelect
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
