import Checkbox from "./OcCheckbox.vue";
import Theme from "../../Theme/OcTheme.vue";
import { ref } from "vue";

export default {
  component: Checkbox,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    isError: false,
    isPartial: false,
    disabled: false,
    label: "Text",
  },
  render: (args) => ({
    components: { Checkbox, Theme },
    setup() {
      const value = ref(false);
      return {
        value,
        args,
      };
    },
    template: `
          <Theme>
            <div class="grid grid-cols-4 gap-4">
              <Checkbox
                  :is-error="args.isError"
                  :is-partial="args.isPartial"
                  :label="args.label"
                  :disabled="args.disabled"
                  v-model="value"
              />
            </div>
          </Theme>
        `,
  }),
};
export const Variants = {
  render: () => ({
    components: { Checkbox, Theme },
    template: `
          <Theme>
            <div class="grid grid-cols-4 gap-4 w-fit">
              <Checkbox :model-value="true"/>
              <Checkbox/>
              <Checkbox is-error/>
              <Checkbox is-partial/>

              <Checkbox :model-value="true" disabled/>
              <Checkbox disabled/>
              <div/>
              <Checkbox is-partial disabled/>
            </div>
          </Theme>
        `,
  }),
};
