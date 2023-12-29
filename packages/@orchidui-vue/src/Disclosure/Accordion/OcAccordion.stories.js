import { Theme, Accordion, DatePicker, Button } from "@/orchidui";
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
    components: { Accordion, Theme, DatePicker, Button },
    setup() {
      const isOpen = ref(false);
      const dynamicContent = ref([]);

      watch(
        () => args.isExpandable,
        (val) => (isOpen.value = args.isDisabled ? false : val),
      );
      return { isOpen, dynamicContent, args };
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
                <DatePicker />
                <div class="flex flex-col gap-3 mt-3">
                  <div v-for="item in dynamicContent">Dynamic Content {{item}}</div>
                  <Button size="small" label="Add Content" @click="dynamicContent.push(dynamicContent.length)"/>
                </div>
              </template>
            </Accordion>
          </Theme>
        `,
  }),
};
