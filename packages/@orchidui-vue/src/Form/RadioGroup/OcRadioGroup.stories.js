import { Theme, RadioGroup } from "@orchid";
import { ref } from "vue";

export default {
  component: RadioGroup,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {
    alignment: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
  },
  args: {
    alignment: "vertical",
    label: "Label",
    radio: [
      {
        label: "Text",
        value: "0",
      },
      {
        label: "Text",
        value: "1",
      },
      {
        label: "Text",
        value: "2",
      },
      {
        label: "Text",
        value: "3",
      },
      {
        label: "is Disabled",
        value: "4",
        isDisabled: true,
      },
    ],
  },
  render: (args) => ({
    components: { RadioGroup, Theme },
    setup() {
      const selectedRadio = ref();
      return { args, selectedRadio };
    },
    template: `
          <Theme>
            <div class="flex flex-col gap-y-4">
              <RadioGroup
                  v-model="selectedRadio"
                  :radio="args.radio"
                  :label="args.label"
                  group-name="radio1"
                  :alignment="args.alignment"
              />
              <div class="flex gap-x-2">
                Model value:
                "{{ selectedRadio }}"
              </div>
            </div>
          </Theme>
        `,
  }),
};
export const Variants = {
  args: {
    radio: [
      {
        label: "Text",
        value: 0,
      },
      {
        label: "Text",
        value: 1,
      },
      {
        label: "Text",
        value: 2,
      },
      {
        label: "Text",
        value: 3,
      },
      {
        label: "Text",
        value: 5,
      },
    ],
  },
  render: (args) => ({
    components: { RadioGroup, Theme },
    setup() {
      const selectedRadio1 = ref();
      const selectedRadio2 = ref();
      return { selectedRadio1, selectedRadio2, args };
    },
    template: `
          <Theme>
            <div class="flex flex-col gap-y-4">
              <RadioGroup
                  v-model="selectedRadio1"
                  :radio="args.radio"
                  label="Label"
                  group-name="radio1"
                  alignment="vertical"

              />
              <RadioGroup
                  v-model="selectedRadio2"
                  :radio="args.radio"
                  label="Label"
                  group-name="radio2"
                  alignment="horizontal"
              />
            </div>
          </Theme>
        `,
  }),
};
