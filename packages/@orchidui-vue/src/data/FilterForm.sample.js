const SampleFilterForm = [
  {
    name: "checkboxes_group",
    type: "CheckboxesGroup",
    rule: "required",
    props: {
      label: "CheckboxesGroup",
      hint: "This is a hint text to help user",
      alignment: "vertical",
      checkboxes: [
        {
          label: "Checkbox 1",
          value: 1,
        },
        {
          label: "Checkbox 2",
          value: 2,
        },
        {
          label: "Checkbox 3",
          value: 3,
          isDisabled: true,
        },
      ],
    },
  },
  {
    name: "date_picker_range",
    type: "DatePicker",
    props: {
      type: "range",
      label: "DatePicker Range",
      hint: "This is a hint text to help user",
      placeholder: "placeholder",
    },
  },
  {
    name: "only_date",
    type: "DatePicker",
    props: {
      label: "DatePicker",
      hint: "This is a hint text to help user",
      placeholder: "placeholder",
    },
  },
  {
    name: "radio_group",
    type: "RadioGroup",
    props: {
      groupName: "unique_group_name",
      label: "RadioGroup",
      hint: "This is a hint text to help user",
      placeholder: "placeholder",
      radio: [
        {
          label: "Text",
          value: "0",
        },
        {
          label: "Text",
          value: "1",
        },
        {
          label: "Text",
          value: "2",
        },
        {
          label: "Text",
          value: "3",
        },
        {
          label: "is Disabled",
          value: "4",
          isDisabled: true,
        },
      ],
    },
  },
  {
    name: "range_input",
    type: "RangeInput",
    props: {
      label: "RangeInput",
      hint: "This is a hint text to help user",
      placeholder: "placeholder",
    },
  },
  {
    name: "select",
    type: "Select",
    props: {
      label: "Select",
      hint: "This is a hint text to help user",
      placeholder: "placeholder",
      isFilterable: true,
      isAddNew: true,
      options: [
        {
          label: "Option 1",
          value: 1,
        },
        {
          label: "Option 2",
          value: 2,
        },
        {
          label: "Option 3",
          value: 3,
        },
        {
          label: "Option 4",
          value: 4,
        },
      ],
    },
  },
  {
    name: "select_multiple",
    type: "Select",
    props: {
      label: "Select Multiple",
      hint: "This is a hint text to help user",
      placeholder: "placeholder",
      isFilterable: true,
      multiple: true,
      options: [
        {
          label: "Option 1",
          value: 1,
        },
        {
          label: "Option 2",
          value: 2,
        },
        {
          label: "Option 3",
          value: 3,
        },
        {
          label: "Option 4",
          value: 4,
        },
      ],
    },
  },
];

export { SampleFilterForm };
