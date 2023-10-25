const SampleFilterForm = [
    {
        name: "status",
        rule: "status",
        label: "Status",
        type: "select",
        options: [
          {
            value: "status-1",
            label: "Status 1",
          },
          {
            value: "status-2",
            label: "Status 2",
          },
        ],
      },
      {
        name: "date",
        rule: "date",
        label: "Date",
        type: "date",
      },
      {
        name: [
          {
            name: "from",
            rule: "date"
          },
          {
            name:  "to",
            rule: "date"
          }
        ],
        label: "Date Range",
        type: "date_range",
      },
      {
        name: "payment_methods",
        label: "Payment Methods",
        type: "select",
        options: [
          {
            value: "method-1",
            label: "Method 1",
          },
          {
            value: "method-2",
            label: "Method 2",
          },
        ],
      },
      {
        name: [
          {
            name: "amount_from",
            rule: "number"
          },
          {
            name:  "amount_to",
            rule: "number"
          }
        ],
        label: "Amount",
        type: "range",
      }
]

export { SampleFilterForm }