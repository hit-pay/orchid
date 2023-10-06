import Radio from "./OCRadio.vue";
import Theme from "../../Theme/OCTheme.vue";

export default {
  component: Radio,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    disabled: false,
    modelValue: false,
    isError: false,
    label: "Text",
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
                :isError="args.isError"
                :label="args.label"
                :disabled="args.disabled"
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
            <div class="grid grid-cols-3 w-fit items-center gap-6">
              <Radio :model-value="true"/>
              <Radio :model-value="false"/>
              <Radio :model-value="false" is-error/>
              <Radio :model-value="true" disabled/>
              <Radio :model-value="false" disabled/>
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
              <Radio model-value="3" disabled label="Text"/>
              <Radio model-value="4" disabled label="Text"/>
              <Radio model-value="5" is-error label="Text"/>
            </div>
          </Theme>
        `,
  }),
};
