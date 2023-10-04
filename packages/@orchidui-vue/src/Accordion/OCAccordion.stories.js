import OCAccordion from "./OCAccordion.vue";
import OCTheme from "../Theme/OCTheme.vue";

export default {
  component: OCAccordion,
  tags: ["autodocs"],
};

export const Accordion = {
  args: {
    header: "Additional Information",
    body: "Accordion content",
  },
  render: (args) => ({
    components: { OCAccordion, OCTheme },
    setup() {
      return { args };
    },
    template: `
          <OCTheme colorMode="light" group="payment">
            <OCAccordion :header="args.header" :body="args.body"/>
          </OCTheme>
        `,
  }),
};
