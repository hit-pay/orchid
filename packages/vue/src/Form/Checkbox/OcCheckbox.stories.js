import { Theme, Checkbox } from "@/orchidui";
import { ref } from "vue";

export default {
  component: Checkbox,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    errorMessage: false,
    isPartial: false,
    isDisabled: false,
    label: "Text",
    hint: "Text",
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
                  :errorMessage="args.errorMessage"
                  :is-partial="args.isPartial"
                  :label="args.label"
                  :hint="args.hint"
                  :is-disabled="args.isDisabled"
                  v-model="value"
              >

              <template #after>
                After
              </template>
              </Checkbox>
            </div>
            <div>
                Model value:
                {{ value }}
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
              <Checkbox errorMessage="Error"/>
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
