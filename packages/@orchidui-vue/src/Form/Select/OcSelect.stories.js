import { Theme, Select, Option, GroupOptions } from '@/orchidui';
import { ref } from 'vue';

export default {
  component: Select,
  tags: ['autodocs'],
};

export const Default = {
  argTypes: {
    labelIcon: {
      control: 'select',
      options: ['', 'question-mark'],
    },
  },
  args: {
    label: 'Label',
    hint: 'Hint',
    placeholder: 'Placeholder',
    isInlineLabel: false,
    errorMessage: '',
    options: [
      {
        label: 'Option 1',
        subLabel: 'sub label of Option 1',
        value: 1,
      },
      {
        label: 'Option 2',
        subLabel: 'sub label of Option 2',
        value: 2,
      },
      {
        label: 'Option 3',
        value: 3,
      },
      {
        label: 'Option 4',
        value: 4,
      },
      {
        label: 'Option 1',
        subLabel: 'sub label of Option 1',
        value: 1,
      },
      {
        label: 'Option 2',
        subLabel: 'sub label of Option 2',
        value: 2,
      },
      {
        label: 'Option 3',
        value: 3,
      },
      {
        label: 'Option 4',
        value: 4,
      },
      {
        label: 'Option 1',
        subLabel: 'sub label of Option 1',
        value: 1,
      },
      {
        label: 'Option 2',
        subLabel: 'sub label of Option 2',
        value: 2,
      },
      {
        label: 'Option 3',
        value: 3,
      },
      {
        label: 'Option 4',
        value: 4,
      },
      {
        label: 'Option 1',
        subLabel: 'sub label of Option 1',
        value: 1,
      },
      {
        label: 'Option 2',
        subLabel: 'sub label of Option 2',
        value: 2,
      },
      {
        label: 'Option 3',
        value: 3,
      },
      {
        label: 'Option 4',
        value: 4,
      },
    ],
    isFilterable: true,
    isAsynchronousSearch: true,
    isAddNew: false,
    isDisabled: false,
    isRequired: false,
    isCheckboxes: false,
    isSelectAll: false,
    labelIcon: '',
    tooltipText: 'Tooltip text',
    tooltipOptions: {
      position: 'top',
      distance: 10,
    },
    selectIconPrefix: '',
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
                  :is-checkboxes="args.isCheckboxes"
                  :is-select-all="args.isSelectAll"
                  :is-asynchronous-search="args.isAsynchronousSearch"
                  :is-add-new="args.isAddNew"
                  :placeholder="args.placeholder"
                  :isRequired="args.isRequired"
                  :tooltip-options="args.tooltipOptions"
                  :label-icon="args.labelIcon"
                  :tooltip-text="args.tooltipText"
                  @on-search-keywords="(query) => console.log(query)"
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
          label: 'Group 1',
          value: [
            {
              label: 'Option 1',
              value: 1,
            },
            {
              label: 'Option 2',
              value: 2,
            },
            {
              label: 'Option 3',
              value: 3,
            },
            {
              label: 'Option 4',
              value: 4,
            },
          ],
        },
        {
          label: 'Group 2',
          value: [
            {
              label: 'Option 11',
              value: 11,
            },
            {
              label: 'Option 22',
              value: 22,
            },
            {
              label: 'Option 33',
              value: 33,
            },
            {
              label: 'Option 44',
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
          label: 'Option 1',
          value: 1,
        },
        {
          label: 'Option 2',
          value: 2,
        },
        {
          label: 'Option 3',
          value: 3,
        },
        {
          label: 'Option 4 with very long text, it should be truncated',
          value: 4,
        },
      ];
      const groups = [
        {
          label: 'Group 1',
          values: [
            {
              label: 'Option 1',
              value: 1,
            },
            {
              label: 'Option 2',
              value: 2,
            },
            {
              label: 'Option 3',
              value: 3,
            },
            {
              label: 'Option 4',
              value: 4,
            },
          ],
        },
        {
          label: 'Group 2',
          values: [
            {
              label: 'Option 11',
              value: 11,
            },
            {
              label: 'Option 22',
              value: 22,
            },
            {
              label: 'Option 33',
              value: 33,
            },
            {
              label: 'Option 44',
              value: 44,
            },
          ],
        },
      ];

      const selectedOption = ref([]);
      const selectedGroups = ref([]);

      const setExceedMaxOption = () => {
        console.log('Exceed max options allowed');
      };

      return {
        selectedOption,
        selectedGroups,
        groups,
        options,
        setExceedMaxOption,
      };
    },
    template: `
          <Theme colorMode="light" class="p-10 flex flex-col gap-y-8">
            <Select
                v-model="selectedOption"
                :options="options"
                label="Label"
                hint="Hint"
                is-filterable
                is-checkboxes
                is-select-all
                multiple
                placeholder="Placeholder"
            />

            <Select
                v-model="selectedOption"
                :options="options"
                label="Max options allowed: 2"
                hint="Hint"
                is-filterable
                is-checkboxes
                :max-option-allowed="2"
                is-select-all
                multiple
                placeholder="Placeholder"
                @max-option-allowed-set="setExceedMaxOption"
            />

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
            <div class="">Selected value: {{ selectedOption }}</div>

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
