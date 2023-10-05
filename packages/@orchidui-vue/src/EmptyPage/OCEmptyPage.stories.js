import OCEmptyPage from "./OCEmptyPage.vue";
import Theme from "../Theme/OCTheme.vue";

export default {
  component: OCEmptyPage,
  tags: ["autodocs"],
};

export const Default = {
  render: () => ({
    components: { OCEmptyPage, Theme },
    template: `
          <Theme colorMode="light" group="payment">
            <OCEmptyPage/>
          </Theme>
        `,
  }),
};
