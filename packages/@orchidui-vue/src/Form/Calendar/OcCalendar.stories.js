import { Theme, Calendar } from "@/orchidui";
import { ref } from "vue";
import dayjs from "dayjs";

export default {
  component: Calendar,
  tags: ["autodocs"],
};

export const calendarStory = {
  argTypes: {
    disabledDate: {
      control: "object",
      description:
        "a function determining if a date is disabled with that date as its parameter. Should return a Boolean",
    },
    type: {
      control: "select",
      options: ["default", "range"],
    },
    position: {
      control: "select",
      options: ["floating", "inline"],
    },
  },
  args: {
    type: "default",
    minDate: "",
    maxDate: dayjs().toDate(),
    position: "floating",
  },
  render: (args) => ({
    components: {
      Theme,
      Calendar,
    },
    setup() {
      const modelValue = ref();
      const rangeModelValue = ref([]);

      return { modelValue, rangeModelValue, args };
    },
    template: `
          <Theme>
            <div class="flex gap-x-6 justify-around">
              <div class="gap-y-4 flex flex-col">
                <span class="text-xl font-bold">Default Calendar</span>
                <Calendar v-model="modelValue" v-bind="args" type="default"/>
                <span v-if="modelValue">({{ [modelValue] }})</span>
              </div>
              <div class="gap-y-4 flex flex-col">
                <span class="text-xl font-bold">Range Calendar</span>
                <Calendar v-model="rangeModelValue" v-bind="args" type="range"/>
                <span v-if="rangeModelValue">({{ rangeModelValue }})</span>
              </div>
            </div>
          </Theme>
        `,
  }),
};
