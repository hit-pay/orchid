import { Theme, DatePicker, Calendar } from "@/orchidui";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

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
      // Disable date after next week
      const checkDisableDate = (value) => {
        return dayjs().add(7, "day").isBefore(new Date(value));
      };

      return { args, checkDisableDate };
    },
    template: `
          <Theme>
            <div class="w-full h-[400px]">
              <DatePicker
                  :key="args.type"
                  :type="args.type"
                  :date-format="args.dateFormat"
                  :error-message="args.errorMessage"
                  :disabled-date="checkDisableDate"
                  :hint="args.hint"
                  :min-label="args.minLabel"
                  :max-label="args.maxLabel"
              />
            </div>
          </Theme>
        `,
  }),
};
