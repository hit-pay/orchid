import { AdditionalContent, OverviewItem, Theme } from "@/orchidui";

export default {
  components: { OverviewItem },
  component: AdditionalContent,
  tags: ["autodocs"],
};
const argTypes = {
  variant: {
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
        {
          showInfo: false,
          infoTooltip: "Tooltip",
          items: [
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
        },
        {
          showInfo: false,
          infoTooltip: "Tooltip",
          items: [
            {
              title: "Created at",
              content: "20/11/2023",
            },
            {
              title: "Expired at",
              content: "20/12/2023",
            },
          ],
        },
      ],
      "4 Fields": [
        {
          showInfo: true,
          infoTooltip: "Tooltip",
          infoTooltipStyle: "absolute right-3",
          infoTooltipSlot: "BoxInfoTooltip",
          style: "!grid-cols-2 relative pr-10",
          slot: "Box",
          items: [
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
        },
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
};
const args = {
  mainLink: "https://securecheckout.../payment-request/",
  userId: "@minstore-edit43",
  chipVariant: "success",
  chipLabel: "Active",
  additionalTitle: "Need attention",
  primaryActions: {
    mainLinkAction: {
      tooltipContent: "Preview Link",
      url: "https://securecheckout.../payment-request/",
    },
    dropdownOptions: {
      isDropdownOpened: false,
      top: [
        {
          icon: "pencil",
          text: "Customize link",
          onClick: () => console.log("customize link clicked"),
        },
        {
          isCopyButton: true,
        },
        {
          icon: "eye-open",
          text: "View details",
          onClick: () => console.log("view details clicked"),
        },
      ],
      bottom: [
        {
          text: "Activate",
          icon: "toggle-right-fill",
          iconClasses: "!text-oc-success",
          onClick: () => console.log("activate/disactivate clicked"),
        },
      ],
    },
  },
  variant: "default",
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
};
export const Default = {
  argTypes,
  args,
  render: (args) => ({
    components: { AdditionalContent, Theme },
    setup() {
      return { args };
    },
    template: `
          <Theme class="h-[300px]">
            <AdditionalContent
                :main-link="args.mainLink"
                :chip-label="args.chipLabel"
                :additional-title="args.additionalTitle"
                :chip-variant="args.chipVariant"
                :user-id="args.userId"
                :primary-actions="args.primaryActions"
                :variant="args.variant ?? 'default'"
                :boxes="args.boxes"
                :overview-items="args.overviewItems"
                :overview-tabs="args.overviewTabs"
                :customer-card-variant="args.customerCardVariant"
                :is-customer="args.isCustomer"
                :customer="args.customer"
                :overview-active-tab="args.overviewActiveTab"
                @change-tab="args.overviewActiveTab = $event"
            />
          </Theme>
        `,
  }),
};
export const Dynamic = {
  args,
  argTypes,
  render: (args) => ({
    components: { AdditionalContent, Theme, OverviewItem },
    setup() {
      return { args, argTypes };
    },
    template: `
          <Theme class="h-[300px]">
            <AdditionalContent
                :main-link="args.mainLink"
                :chip-label="args.chipLabel"
                :additional-title="args.additionalTitle"
                :chip-variant="args.chipVariant"
                :user-id="args.userId"
                :primary-actions="args.primaryActions"
                variant="dynamic"
                :boxes="argTypes['boxes'].options['5 Fields in 2 boxes']"
                :overview-items="args.overviewItems"
                :overview-tabs="args.overviewTabs"
                :customer-card-variant="args.customerCardVariant"
                :is-customer="args.isCustomer"
                :customer="args.customer"
                :overview-active-tab="args.overviewActiveTab"
                @change-tab="args.overviewActiveTab = $event"
            />
            <AdditionalContent
                :main-link="args.mainLink"
                :chip-label="args.chipLabel"
                :additional-title="args.additionalTitle"
                :chip-variant="args.chipVariant"
                :user-id="args.userId"
                :primary-actions="args.primaryActions"
                variant="dynamic"
                :boxes="argTypes['boxes'].options['4 Fields']"
                :overview-items="args.overviewItems"
                :overview-tabs="args.overviewTabs"
                :customer-card-variant="args.customerCardVariant"
                is-customer
                :customer="args.customer"
                :overview-active-tab="args.overviewActiveTab"
                @change-tab="args.overviewActiveTab = $event"
            >
              <template #Box="{ data, key }">
                <OverviewItem
                    v-for="(field, index) in data.items"
                    :key="data.key + '-' + index"
                    is-transparent
                    :title="field.title"
                    :content="field.content"
                >
                  <template #content>
                    <div class="text-oc-success-500">{{field.content}}</div>
                  </template>
                </OverviewItem>
              </template>
              <template #BoxInfoTooltip>
                <div class="p-4">
                  <div class="text-oc-error">Tooltip</div>
                </div>
              </template>
            </AdditionalContent>
          </Theme>
        `,
  }),
};

export const Balance = {
  args,
  argTypes,
  render: (args) => ({
    components: { AdditionalContent, Theme },
    setup() {
      return { args, argTypes };
    },
    template: `
          <Theme class="h-[300px]">
            <AdditionalContent
                :main-link="args.mainLink"
                :chip-label="args.chipLabel"
                :additional-title="args.additionalTitle"
                :chip-variant="args.chipVariant"
                :user-id="args.userId"
                :primary-actions="args.primaryActions"
                variant="balance"
                :boxes="args.boxes"
                :overview-items="args.overviewItems"
                :overview-tabs="args.overviewTabs"
                :customer-card-variant="args.customerCardVariant"
                :is-customer="args.isCustomer"
                :customer="args.customer"
                :overview-active-tab="args.overviewActiveTab"
                @change-tab="args.overviewActiveTab = $event"
            />
          </Theme>
        `,
  }),
};
