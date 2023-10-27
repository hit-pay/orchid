import { Theme, DatePicker, Calendar } from "@orchid";

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
  },
  render: (args) => ({
    components: { Theme, DatePicker },
    setup() {
      return { args };
    },
    template: `
          <Theme>
            <DatePicker
                :key="args.type"
                :type="args.type"
                :date-format="args.dateFormat"
            />
          </Theme>
        `,
  }),
};
