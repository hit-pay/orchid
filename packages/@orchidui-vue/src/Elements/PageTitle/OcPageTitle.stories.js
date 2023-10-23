import { Theme, PageTitle } from "@orchid";

export default {
  component: PageTitle,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {
    additionalContentVariant: {
      control: "select",
      options: ["default", "dynamic", "balance"],
    },
    customerCardVariant: {
      control: "select",
      options: ["small", "big", "float"],
    },
    overviewActiveTab: {
      control: "select",
      options: ["hitpay", "card"],
    },
    boxes: {
      control: "select",
      options: {
        "5 Fields in 2 boxes": [
          [
            {
              title: "Purpose",
              content: "Premium GYM membership",
            },
            {
              title: "ID",
              content: "9a2f500c-545d-4db6-84fa-c40d65146f43",
            },
            {
              title: "reference",
              content: "9a2f500c-545d-4db6-84fa-c40d65146f43",
            },
          ],
          [
            {
              title: "Created at",
              content: "20/11/2023",
            },
            {
              title: "Expired at",
              content: "20/12/2023",
            },
          ],
        ],
        "4 Fields": [
          [
            {
              title: "Purpose",
              content: "Premium GYM membership",
            },
            {
              title: "ID",
              content: "9a2f500c-545d-4db6-84fa-c40d65146f43",
            },
            {
              title: "reference",
              content: "9a2f500c-545d-4db6-84fa-c40d65146f43",
            },
            {
              title: "reference",
              content: "9a2f500c-545d-4db6-84fa-c40d65146f43",
            },
          ],
        ],
      },
    },
    chipVariant: {
      control: "select",
      options: [
        "accent-1",
        "accent-2",
        "success",
        "warning",
        "error",
        "gray",
        "",
      ],
    },
  },
  args: {
    title: "Page Title",
    description: "",
    mainLink: "https://securecheckout.../payment-request/",
    userId: "@minstore-edit43",
    chipVariant: "success",
    chipLabel: "Active",
    additionalTitle: "Need attention",
    tooltipContent: "Preview Link",
    additionalContentVariant: "default",
    boxes: [],
    isCustomer: false,
    overviewItems: [
      {
        title: "Total revenue",
        content: "SGD 11,170.00",
        icon: "coins",
        variant: "blue",
      },
      {
        title: "This month",
        content: "SGD 1,870.00",
        icon: "coin",
        variant: "accent",
      },
      {
        title: "Completed",
        content: "20",
        icon: "check",
        variant: "green",
      },
      {
        title: "Refunded",
        content: "3",
        icon: "backward",
        variant: "red",
      },
    ],
    overviewTabs: [
      {
        title: "HitPay Balance",
        content: "SGD 1,110.00",
        value: "hitpay",
      },
      {
        title: "Card Balance",
        content: "SGD 1000.00",
        value: "card",
      },
    ],
    overviewActiveTab: "hitpay",
    customerCardVariant: "big",
    customer: {
      name: "Alex Turner",
      email: "alex@arcticmonkey.io",
      phone: "+65 8373 3739 18",
      address: "4666 Dickens Islands Pennsylvania",
    },
  },
  render: (args) => ({
    components: { PageTitle, Theme },
    setup() {
      return { args };
    },
    template: `
          <Theme>
            <PageTitle
                v-bind="args"
                @changeTab="args.overviewActiveTab = $event"
            />
          </Theme>
        `,
  }),
};
