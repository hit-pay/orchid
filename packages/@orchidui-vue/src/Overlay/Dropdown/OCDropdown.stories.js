import Dropdown from "./OCDropdown.vue";
import Theme from "../../Theme/OCTheme.vue";

export default {
  component: Dropdown,
  tags: ["autodocs"],
};

export const Default = {
  render: () => ({
    components: { Dropdown, Theme },
    template: `
          <Theme colorMode="light">
            <Dropdown/>
          </Theme>
        `,
  }),
};
