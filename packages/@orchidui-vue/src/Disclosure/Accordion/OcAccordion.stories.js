import { Theme, Accordion, DatePicker } from "@/orchidui";
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
    components: { Accordion, Theme, DatePicker },
    setup() {
      const isOpen = ref(false);
      watch(
        () => args.isExpandable,
        (val) => (isOpen.value = args.isDisabled ? false : val),
      );
      return { isOpen, args };
    },
    template: `
          <Theme class="h-[500px]">
            <Accordion
                v-model:isExpandable="isOpen"
                :header="args.header"
                :header-style="'bg-oc-gray-50'"
                :body="args.body"
                :icon="args.icon"
                :showIcon="args.showIcon"
                :isAnimated="args.isAnimated"
                :isDisabled="args.isDisabled"
            >
              <template #body>
                <DatePicker/>
              </template>
            </Accordion>
          </Theme>
        `,
  }),
};
