import countryCodes from "./CountryCodes.sample";

const SampleJsonForm = [
  {
    name: "input",
    key: "input",
    type: "Input",
    props: {
      label: "Example Label",
      hint: "This is a hint text to help user",
      placeholder: "placeholder",
    },
  },
  {
    name: "card_input",
    key: "card_input",
    type: "CardInput",
    rule: "required",
    props: {
      label: "Example Label",
      hint: "This is a hint text to help user",
      placeholder: "placeholder",
      isInlineLabel: false,
      isDisabled: false,
      cardType: "mastercard",
    },
  },
  {
    key: "custom_form_input",
    name: "custom_form_input",
    type: "CustomFormInput",
  },
  {
    name: "simple_checkbox_input",
    key: "simple_checkbox_input",
    type: "Checkbox",
    props: {
      label: "Text",
    },
  },
  {
    name: "checkboxes_group",
    key: "checkboxes_group",
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
    name: "input_2",
    type: "Input",
    key: "input_2",
    props: {
      label: "Example Label",
      hint: "This is a hint text to help user",
      placeholder: "placeholder",
      icon: "circle",
    },
  },
  {
    name: "custom_form_input_2",
    key: "custom_form_input_2",
    type: "CustomFormInput2",
  },
  {
    name: "link_input",
    type: "LinkInput",
    key: "link_input",
    props: {
      hint: "This is a hint text to help user.",
      label: "Social",
      links: [
        {
          value: "instagram",
          label: "Instagram",
          icon: "instagram",
          preFill: "https://instagram.com/",
        },
        {
          value: "twitter",
          label: "Twitter",
          icon: "twitter",
          preFill: "https://twitter.com/",
        },
      ],
    },
  },
  {
    name: [
      {
        key: "country_code_field",
        rule: "required",
      },
      {
        key: "phone_number_field",
        rule: "required",
      },
    ],
    key: "phone_number_field",
    type: "PhoneInput",
    props: {
      countryCodes: countryCodes,
      label: "Example Label",
      hint: "This is a hint text to help user",
      placeholder: "placeholder",
    },
  },
  {
    name: "radio_group",
    key: "radio_group",
    type: "RadioGroup",
    props: {
      groupName: "unique_group_name_1",
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
    name: "radio_group_2",
    key: "radio_group_2",
    type: "RadioGroup",
    props: {
      groupName: "unique_group_name_2",
      label: "Example Label",
      hint: "This is a hint text to help user",
      placeholder: "placeholder",
      radio: [
        {
          label: "Text 2",
          value: "0",
        },
        {
          label: "Text 2",
          value: "1",
        },
        {
          label: "Text 2",
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
    name: "select",
    key: "select",
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
  {
    name: "text_area_field",
    key: "text_area_field",
    type: "Textarea",
    props: {
      label: "Example Label",
      hint: "This is a hint text to help user",
      placeholder: "placeholder",
    },
  },
  {
    name: "range_input",
    key: "range_input",
    type: "RangeInput",
    props: {
      label: "Example Label",
      hint: "This is a hint text to help user",
      placeholder: "placeholder",
    },
  },
  {
    name: "time_picker_test",
    key: "time_picker_test",
    type: "TimePicker",
    props: {
      label: "Example Label",
      hint: "This is a hint text to help user",
      placeholder: "placeholder",
    },
  },
  {
    name: "date_picker_test",
    key: "date_picker_test",
    type: "DatePicker",
    props: {
      label: "Example Label",
      hint: "This is a hint text to help user",
      placeholder: "placeholder",
    },
  },
  {
    name: [
      {
        key: "date_picker_range_from",
        rule: "required",
      },
      {
        key: "date_picker_range_to",
        rule: "required",
      },
    ],
    key: "date_picker_range_from",
    type: "DatePicker",
    props: {
      type: "range",
      label: "Example Label",
      hint: "This is a hint text to help user",
      placeholder: "placeholder",
    },
  },
  {
    name: "toggle_field",
    key: "toggle_field",
    type: "Toggle",
  },
];

export { SampleJsonForm };
