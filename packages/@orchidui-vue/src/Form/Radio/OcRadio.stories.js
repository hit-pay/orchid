import { Theme, Radio } from "@/orchidui";

export default {
  component: Radio,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    modelValue: false,
    errorMessage: "",
    isDisabled: false,
    label: "Text",
    hint: "Text",
  },
  render: (args) => ({
    setup() {
      return { args };
    },
    components: { Radio, Theme },
    template: `
          <Theme>
            <Radio
                :model-value="args.modelValue"
                :errorMessage="args.errorMessage"
                :hint="args.hint"
                :label="args.label"
                :is-disabled="args.isDisabled"
            />
          </Theme>
        `,
  }),
};
export const Variants = {
  render: () => ({
    components: { Radio, Theme },
    template: `
          <Theme>
            <div class="grid grid-cols-3 w-fit gap-6">
              <Radio :model-value="true"/>
              <Radio :model-value="false"/>
              <Radio :model-value="false" errorMessage="Error"/>
              <Radio :model-value="true" is-disabled/>
              <Radio :model-value="false" is-disabled/>
            </div>
          </Theme>
        `,
  }),
};

export const LabelVariants = {
  render: () => ({
    components: { Radio, Theme },
    template: `
          <Theme>
            <div class="flex flex-col w-fit items-center gap-6">
              <Radio model-value="1" label="Text"/>
              <Radio model-value="2" label="Text"/>
              <Radio model-value="3" is-disabled label="Text"/>
              <Radio model-value="4" is-disabled label="Text"/>
              <Radio model-value="5" errorMessage="Error" label="Text"/>
            </div>
          </Theme>
        `,
  }),
};
