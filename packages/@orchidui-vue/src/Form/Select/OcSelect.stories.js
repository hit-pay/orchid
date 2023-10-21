import {Theme,Select,Option,GroupOptions } from "@orchid";
import { ref } from "vue";

export default {
  component: Select,
  tags: ["autodocs"],
};

export const Default = {
  render: () => ({
    components: { Theme, Select, Option },
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

      const selectedOption = ref();
      return { selectedOption, options };
    },
    template: `
          <Theme colorMode="light">
            <div class="mb-4">Selected value: {{ selectedOption }}</div>
            <Select
                v-model="selectedOption"
                :options="options"
                label="Label"
                hint="Hint"
                is-filterable
                is-add-new
                placeholder="Placeholder"
            />
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
                      :is-selected="selectedOption?.value === option.value"
                      @click="selectedOption = option"
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
                      v-for="option in group.value"
                      :key="option.value"
                      :label="option.label"
                      :is-selected="selectedGroups?.find((o) => o.value === option.value)"
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
