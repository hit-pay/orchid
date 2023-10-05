import Checkbox from "./OCCheckbox.vue";
import Theme from "../../Theme/OCTheme.vue";
import { ref } from "vue";

export default {
  component: Checkbox,
  tags: ["autodocs"],
};

export const Default = {
  render: () => ({
    components: { Checkbox, Theme },
    setup() {
      const value = ref(true);
      return {
        value,
      };
    },
    template: `
          <Theme>
            <Checkbox v-model="value"/>
          </Theme>
        `,
  }),
};
