import Toggle from "./OCToggle.vue";
import Theme from "../../Theme/OCTheme.vue";
import { ref } from "vue";

export default {
  component: Toggle,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {
    size: {
      control: "select",
      options: ["default", "small"],
    },
  },
  args: {
    disabled: false,
    size: "default",
  },
  render: (args) => ({
    components: { Toggle, Theme },
    setup() {
      const value = ref(false);
      return {
        value,
        args,
      };
    },
    template: `
          <Theme>
            <Toggle
                :disabled="args.disabled"
                v-model="value" :size="args.size"
            />
          </Theme>
        `,
  }),
};
export const Variants = {
  render: () => ({
    components: { Toggle, Theme },
    template: `
          <Theme>
            <div class="grid grid-cols-2 w-fit items-center gap-6">
              <Toggle :model-value="true"/>
              <Toggle :model-value="true" size="small"/>
              <Toggle :model-value="false"/>
              <Toggle size="small" :model-value="false"/>
            </div>
          </Theme>
        `,
  }),
};
