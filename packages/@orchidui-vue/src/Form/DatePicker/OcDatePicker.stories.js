import { Theme, DatePicker, Calendar } from "@/orchidui";

export default {
  components: { Calendar },
  component: DatePicker,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {
    type: {
      control: "select",
      options: ["default", "range"],
    },
  },
  args: {
    type: "range",
    dateFormat: "DD/MM/YYYY",
    errorMessage: "",
    hint: "",
    minLabel: "From",
    maxLabel: "To",
  },
  render: (args) => ({
    components: { Theme, DatePicker },
    setup() {
      return { args };
    },
    template: `
          <Theme>
            <div class="w-full h-[400px]">
              <DatePicker
                  :key="args.type"
                  :type="args.type"
                  :date-format="args.dateFormat"
                  :error-message="args.errorMessage"
                  :hint="args.hint"
                  :min-label="args.minLabel"
                  :max-label="args.maxLabel"
              />
            </div>
          </Theme>
        `,
  }),
};
