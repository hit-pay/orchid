import { Theme, Accordion } from "@/orchidui";
import { ref, watch } from "vue";

export default {
  component: Accordion,
  tags: ["autodocs"],
};

export const OcAccordion = {
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
    components: { Accordion, Theme },
    setup() {
      const isOpen = ref(false);
      watch(
        () => args.isExpandable,
        (val) => (isOpen.value = args.isDisabled ? false : val),
      );
      return { isOpen, args };
    },
    template: `
          <Theme >
            <Accordion
                v-model:isExpandable="isOpen"
                :header="args.header"
                :body="args.body"
                :icon="args.icon"
                :showIcon="args.showIcon"
                :isAnimated="args.isAnimated"
                :isDisabled="args.isDisabled"
            />
          </Theme>
        `,
  }),
};
