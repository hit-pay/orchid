const SampleFilterForm = [
  {
    name: "checkboxes_group",
    type: "CheckboxesGroup",
    rule: "required",
    props: {
      label: "Example Label",
      hint: "This is a hint text to help user",
      alignment: "vertical",
      checkboxes: [
        {
          label: "Text",
          value: 0,
        },
        {
          label: "Text",
          value: 1,
        },
        {
          label: "Text",
          value: 2,
          isDisabled: true,
        },
      ],
    },
  },
  {
    name: "filter_date_range_picker_test",
    type: "DatePicker",
    props: {
      type: "range",
      label: "Example Label",
      hint: "This is a hint text to help user",
      placeholder: "placeholder",
    },
  },
  {
    name: "radio_group",
    type: "RadioGroup",
    props: {
      groupName: "unique_group_name",
      label: "Example Label",
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
    name: [
      {
        key: "custom_min_field_name",
        rule: "required",
      },
      {
        key: "custom_max_field_name",
        rule: "required",
      },
    ],
    type: "RangeInput",
    props: {
      label: "Example Label",
      hint: "This is a hint text to help user",
      placeholder: "placeholder",
    },
  },
  {
    name: "select",
    type: "Select",
    props: {
      label: "Example Label",
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
];

export { SampleFilterForm };
