import ComplexCalendar from "./OcComplexCalendar.vue";
import { Theme } from "@/orchidui";
import dayjs from "dayjs";

export default {
  component: ComplexCalendar,
  tags: ["autodocs"],
};
export const Calendar = {
  args: {
    shortcuts: [
      {
        label: "Today",
        value: {
          start: new Date(),
          end: new Date(),
        },
      },
      {
        label: "Yesterday",
        value: {
          start: dayjs().subtract(1, "day").toDate(),
          end: dayjs().subtract(1, "day").toDate(),
        },
      },
      {
        label: "This week",
        value: {
          start: dayjs().startOf("week").toDate(),
          end: dayjs().endOf("week").toDate(),
        },
      },
      {
        label: "This month",
        value: {
          start: dayjs().startOf("month").toDate(),
          end: dayjs().endOf("month").toDate(),
        },
      },
      {
        label: "Last month",
        value: {
          start: dayjs().subtract(1, "month").startOf("month").toDate(),
          end: dayjs().subtract(1, "month").endOf("month").toDate(),
        },
      },
    ],
    cancelButtonProps: {
      label: "Clear",
    },
    submitButtonProps: {
      label: "Done",
    },
    calendarProps: null,
    countCalendars: 2,
    withFooter: true,
  },
  render: (args) => ({
    components: { ComplexCalendar, Theme },
    setup() {
      return { args };
    },
    template: `
          <Theme class="h-[400px]">
            <ComplexCalendar
                :shortcuts="args.shortcuts"
                :calendarProps="args.calendarProps"
                :cancel-button-props="args.cancelButtonProps"
                :submit-button-props="args.submitButtonProps"
                :count-calendars="args.countCalendars"
                :with-footer="args.withFooter"
            />
          </Theme>
        `,
  }),
};
