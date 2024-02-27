import { Theme, DatePicker, Calendar } from "@/orchidui";
import dayjs from "dayjs";
import { ref } from "vue";

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
    dateFormat: "YYYY-MM-DD",
    errorMessage: "",
    hint: "",
    minLabel: "From",
    maxLabel: "To",
    minDate: null,
    maxDate: null,
    isRequired: true,
    label: "Date",
    isSplitInput: true,
  },
  render: (args) => ({
    components: { Theme, DatePicker },
    setup() {
      // Disable date after next week
      const checkDisableDate = (value) => {
        return dayjs().add(7, "day").isBefore(dayjs(value));
      };
      const model = ref("");
      const model1 = ref([]);

      return { args, checkDisableDate, model, model1 };
    },
    template: `
      <Theme>
        <div class="w-full h-[400px]">
          {{ model }}
          <DatePicker
            v-model="model"
            :key="args.type"
            type="range"
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
            :is-split-input="args.isSplitInput"
          />
          
          <div class="mt-8">
            DD/MM/YYYY:  {{ model1 }}
            <DatePicker
              v-model="model1"
              :key="args.type"
              :type="args.type"
              date-format="DD/MM/YYYY"
              :error-message="args.errorMessage"
              :disabled-date="checkDisableDate"
              :hint="args.hint"
              :min-date="args.minDate"
              :max-date="args.maxDate"
              :label="args.label"
              :min-label="args.minLabel"
              :max-label="args.maxLabel"
              :is-required="args.isRequired"
              :is-split-input="args.isSplitInput"
            />
          </div>
        </div>
      </Theme>
    `,
  }),
};
