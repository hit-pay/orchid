import OCAccordion from "./OCAccordion.vue";
import OCTheme from "../../Theme/OCTheme.vue";
import { ref, watch } from "vue";

export default {
  component: OCAccordion,
  tags: ["autodocs"],
};

export const Accordion = {
  argTypes: {
    icon: {
      control: "select",
      options: ["chevron-down", "x", "plus"],
    },
  },
  args: {
    header: "Additional Information",
    body: "Accordion content",
    icon: "chevron-down",
    showIcon: true,
    isAnimated: true,
    isExpandable: false,
    isDisabled: false,
  },
  render: (args) => ({
    components: { OCAccordion, OCTheme },
    setup() {
      const isOpen = ref(false);
      watch(
        () => args.isExpandable,
        (val) => (isOpen.value = args.isDisabled ? false : val),
      );
      return { isOpen, args };
    },
    template: `
          <OCTheme colorMode="light" group="payment">
            <OCAccordion
                v-model:isExpandable="isOpen"
                :header="args.header"
                :body="args.body"
                :icon="args.icon"
                :showIcon="args.showIcon"
                :isAnimated="args.isAnimated"
                :isDisabled="args.isDisabled"
            />
          </OCTheme>
        `,
  }),
};
