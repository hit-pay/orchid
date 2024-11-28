import dayjs from 'dayjs'
const SampleFilterForm = [
  {
    name: 'checkboxes_group',
    type: 'CheckboxesGroup',
    rule: 'required',
    props: {
      label: 'CheckboxesGroup',
      hint: 'This is a hint text to help user',
      alignment: 'vertical',
      checkboxes: [
        {
          label: 'Checkbox 1',
          value: 1
        },
        {
          label: 'Checkbox 2',
          value: 2
        },
        {
          label: 'Checkbox 3',
          value: 3,
          isDisabled: true
        }
      ]
    }
  },
  {
    name: [
      {
        key: 'date_range_from'
      },
      {
        key: 'date_range_to'
      }
    ],
    type: 'DatePicker',
    props: {
      type: 'range',
      label: 'DatePicker Range',
      hint: 'This is a hint text to help user',
      placeholder: 'placeholder',
      maxDate: dayjs().format('YYYY-MM-DD')
    }
  },
  {
    name: [
      {
        key: 'total_range_from'
      },
      {
        key: 'total_range_to'
      }
    ],
    type: 'RangeInput',
    props: {
      label: 'RangeInput',
      hint: 'This is a hint text to help user',
      placeholder: 'placeholder',
      onlyInput: true
    }
  },
  {
    name: 'select',
    type: 'Select',
    props: {
      label: 'Select',
      hint: 'This is a hint text to help user',
      placeholder: 'placeholder',
      options: [
        {
          label: 'Option 1',
          value: 1
        },
        {
          label: 'Option 2',
          value: 2
        },
        {
          label: 'Option 3',
          value: 3
        },
        {
          label: 'Option 4',
          value: 4
        }
      ]
    }
  }
]

export { SampleFilterForm }
