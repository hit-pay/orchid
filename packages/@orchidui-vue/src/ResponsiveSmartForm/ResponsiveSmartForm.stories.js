import ResponsiveSmartForm from "./OcResponsiveSmartForm.vue";

export default {
  component: ResponsiveSmartForm,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    definition: {
      grid: {
        xs: {
          area: `
              first_name
              last_name
              email
              phone_number
              birthday
              assigned_to
          `,
          rows: "auto",
          columns: "100%",
        },
        sm: {
          area: `
              first_name
              last_name
              email
              phone_number
              birthday
              assigned_to
          `,
          rows: "auto",
          columns: "100%",
        },
        lg: {
          area: `
              first_name first_name last_name last_name
              email email email email
              phone_number birthday birthday birthday
              assigned_to assigned_to assigned_to assigned_to
          `,
          rows: "auto",
          columns: "25% 25% 25% 25%",
        },
      },
      formWidth: "100%",
      fields: [
        {
          label: "First Name",
          placeholder: `Enter name`,
          key: "first_name",
          type: "input",
        },
        {
          label: "Last Name",
          placeholder: `Enter name`,
          key: "last_name",
          type: "input",
        },
        {
          label: "Phone Number",
          placeholder: `Enter number`,
          key: "phone_number",
          type: "phone_number",
        },
        {
          label: "Email",
          placeholder: `Email:`,
          key: "email",
          type: "input",
        },
        {
          label: "Birthday",
          placeholder: `02.03.1974`,
          key: "birthday",
          minLabel: "Birthday",
          type: "date",
          onlyInput: true,
        },
        {
          isRequired: true,
          label: "Assigned To",
          key: "assigned_to",
          type: "select",
          placeholder: "Select a assigned to",
          options: [],
        },
      ],
    },
  },
  render: (args) => ({
    components: { ResponsiveSmartForm },
    setup() {
      return { args };
    },
    template: `
          <ResponsiveSmartForm :definition="args.definition"/>
        `,
  }),
};
