import { Theme, Checkbox } from "@/orchidui";
import { ref } from "vue";

export default {
  component: Checkbox,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    isError: false,
    isPartial: false,
    isDisabled: false,
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
                  :is-disabled="args.isDisabled"
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
