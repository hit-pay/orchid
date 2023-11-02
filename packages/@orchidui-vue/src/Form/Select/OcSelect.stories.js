import { Theme, Select, Option, GroupOptions } from "@orchid";
import { ref } from "vue";

export default {
  component: Select,
  tags: ["autodocs"],
};

export const Default = {
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
