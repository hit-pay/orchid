import { Theme, DatePicker, Calendar } from "@/orchidui";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { ref } from "vue";

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
    minDate: {
      control: "text",
    },
    maxDate: {
      control: "text",
    },
  },
  args: {
    type: "range",
    dateFormat: "",
    errorMessage: "",
    hint: "",
    minLabel: "From",
    maxLabel: "To",
    minDate: null,
    maxDate: null,
    isRequired: true,
    label: "",
  },
  render: (args) => ({
    components: { Theme, DatePicker },
    setup() {
      // Disable date after next week
      const checkDisableDate = (value) => {
        return dayjs().add(7, "day").isBefore(new Date(value));
      };
      const model = ref("");

      return { args, checkDisableDate, model };
    },
    template: `
          <Theme>
            <div class="w-full h-[400px]">
              {{ model }}
              <DatePicker
                  v-model="model"
                  :key="args.type"
                  :type="args.type"
                  :date-format="args.dateFormat"
                  :error-message="args.errorMessage"
                  :disabled-date="checkDisableDate"
                  :hint="args.hint"
                  :min-date="args.minDate"
                  :max-date="args.maxDate"
                  :label="args.label"
                  :min-label="args.minLabel"
                  :max-label="args.maxLabel"
                  :is-required="args.isRequired"
              />
            </div>
          </Theme>
        `,
  }),
};
