import { Theme, SwitchTabs } from "@/orchidui";
import { ref } from "vue";

export default {
  component: SwitchTabs,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    options: [
      { label: "Weekly", value: "weekly" },
      { label: "Monthly", value: "monthly" },
      { label: "Yearly", value: "annually" },
    ],
  },
  render: (args) => ({
    components: { Theme, SwitchTabs },
    setup() {
      const selectedOption = ref("weekly");
      return { args, selectedOption };
    },
    template: `
          <Theme>
            <div class="flex items-center justify-center">
              <SwitchTabs :options="args.options" :active-option="selectedOption" @select="selectedOption = $event"/>
            </div>
          </Theme>
        `,
  }),
};
