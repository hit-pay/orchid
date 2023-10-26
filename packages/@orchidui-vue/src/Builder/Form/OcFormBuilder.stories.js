import { Theme, FormBuilder } from "@orchid";

export default {
  component: FormBuilder,
  tags: ["autodocs"],
};
export const Default = {
  args: {
    errors: {},
    jsonForm: [
      // {
      //   name: "status",
      //   rule: "status",
      //   label: "Status",
      //   type: "select",
      //   options: [
      //     {
      //       value: "status-1",
      //       label: "Status 1",
      //     },
      //     {
      //       value: "status-2",
      //       label: "Status 2",
      //     },
      //   ],
      // },
      // {
      //   name: "date",
      //   rule: "date",
      //   label: "Date",
      //   type: "date",
      // },
      // {
      //   name: [
      //     {
      //       name: "from",
      //       rule: "date"
      //     },
      //     {
      //       name:  "to",
      //       rule: "date"
      //     }
      //   ],
      //   label: "Date Range",
      //   type: "date_range",
      // },
      // {
      //   name: "payment_methods",
      //   label: "Payment Methods",
      //   type: "select",
      //   options: [
      //     {
      //       value: "method-1",
      //       label: "Method 1",
      //     },
      //     {
      //       value: "method-2",
      //       label: "Method 2",
      //     },
      //   ],
      // },
      // {
      //   name: [
      //     {
      //       name: "amount_from",
      //       rule: "number"
      //     },
      //     {
      //       name:  "amount_to",
      //       rule: "number"
      //     }
      //   ],
      //   label: "Amount",
      //   type: "range",
      // }
    ],
  },
  render: (args) => ({
    components: {
      Theme,
      FormBuilder,
    },
    setup() {
      const validateForm = (value, key = null) => {
        // validate value
        // key / form fields
        // if key null validate all form
      };
      return { args, validateForm };
    },
    template: `
          <Theme>
           <FormBuilder :json-form="args.jsonForm" >
           </FormBuilder>
          </Theme>
        `,
  }),
};
