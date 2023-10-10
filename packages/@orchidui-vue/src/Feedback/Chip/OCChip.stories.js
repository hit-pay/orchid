import Chip from "./OCChip.vue";
import Theme from "../../Theme/OCTheme.vue";

export default {
  component: Chip,
  tags: ["autodocs"],
};

export const VariantColor = {
  render: () => ({
    components: { Chip, Theme },
    template: `
          <Theme class="flex gap-3 items-center mb-3">
            <Chip label="Primary"/>
            <Chip label="Accent 1" variant="accent-1"/>
            <Chip label="Accent 2" variant="accent-2"/>
            <Chip label="success" variant="success"/>
            <Chip label="warning" variant="warning"/>
            <Chip label="error" variant="error"/>
          </Theme>
        `,
  }),
};
