import { Theme } from "@/ui/Theme/Theme";
export default {
  component: Theme,
  tags: ["autodocs"],
};

export const ColorMode = {
  render: () => ({
    components: { Theme },
    template: `
      <div class="flex gap-3 items-center light-mode mb-3">
          <Theme colorMode="dark">
              content
          </Theme>
      </div>
    `,
  }),
};