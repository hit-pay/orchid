import { Theme, ListItem, DropdownItem, Button } from "@/orchidui";

export default {
  component: ListItem,
  tags: ["autodocs"],
};

export const listItem = {
  argTypes: {
    icon: {
      control: "select",
      options: ["backward", "circle", "x", ""],
    },
    type: {
      control: "select",
      options: ["timeline", "webhook", "payment", "terminal"],
    },
    active: {
      control: {
        type: "number",
        min: 1,
        max: 5,
      },
    },
    imageSize: {
      control: "select",
      options: ["small", "default", "big"],
    },
  },
  args: {
    active: 1,
    title: "September, 1 2023 at 05:01PM",
    icon: "backward",
    iconClass: "text-oc-error",
    iconText: "SGD 130,11",
    description: "#9a2804fc-74df-4304-a7d7-79d11f9e1db8dsdss",
    type: "timeline",
    image:
      "https://hitpay-staging-public.s3.ap-southeast-1.amazonaws.com/covers/small/99d696e564ba45fbaa0fb2e3b43d0e27.jpg",
    imageSize: "small",
  },
  render: (args) => ({
    components: { Theme, ListItem },
    setup() {
      return { args };
    },
    template: `
      <Theme colorMode="light">
        <ListItem
          v-for="i in 5"
          :is-active="args.active >= i"
          :key="i"
          :type="args.type"
          :title="args.title"
          :image="args.image"
          :image-size="args.imageSize"
          :icon="args.icon"
          :icon-class="args.iconClass"
          :icon-text="args.iconText"
          :description="args.description"
        />
      </Theme>
    `,
  }),
};
export const ListWebhook = {
  args: {
    urls: [
      {
        url: "https://orchid.software",
        title: "URL",
      },
    ],
  },
  render: (args) => ({
    components: { Theme, ListItem, DropdownItem },
    setup() {
      return { args };
    },
    template: `
      <Theme colorMode="light" class="p-10">
        <ListItem
          type="webhook"
          :urls="args.urls"
          title="Zapier Flow"
          date="Oct, 20 2023"
        >
          <template #menu>
            <div class="p-2 border-b border-gray-200">
              <DropdownItem text="Edit" icon="pencil"/>
            </div>
            <div class="p-2">
              <DropdownItem text="Delete" variant="destructive" icon="bin"/>
            </div>
          </template>
        </ListItem>
      </Theme>
    `,
  }),
};

export const ListPayment = {
  args: {
    title: "shopify",
    paymentMethods: [
      {
        method: "paynow_online",
        sm: "https://dashboard.src.test/icons/methods/sm/paynow.png",
        md: "https://dashboard.src.test/icons/methods/md/paynow.png",
      },
      {
        method: "card",
        sm: "https://dashboard.src.test/icons/methods/sm/card.png",
        md: "https://dashboard.src.test/icons/methods/md/card.png",
      },
    ],
  },
  render: (args) => ({
    components: { Theme, ListItem },
    setup() {
      return { args };
    },
    template: `
      <Theme colorMode="light" class="p-10">
        <ListItem
          :title="args.title"
          :payment-methods="args.paymentMethods"
          type="payment"
        />
      </Theme>
    `,
  }),
};

export const ListGeneral = {
  args: {
    title: "Standard shipping",
    description: "Calculation Method : Flat",
    isDisabled: false,
    chips: [
      {
        label: "Default",
      },
      {
        label: "HitPay",
        variant: "accent-1",
      },
    ],
    details: [
      {
        label: "SGD 28.00",
        icon: "dollar-coin",
      },
      {
        label: "Singapore",
        country: "sg",
      },
    ],
  },
  render: (args) => ({
    components: { Theme, ListItem, DropdownItem, Button },
    setup() {
      const methodLogos = [
        "http://api.src.test/icons/methods/md/visa.png",
        "http://api.src.test/icons/methods/md/mastercard.png",
        "http://api.src.test/icons/methods/md/jcb.png",
        "http://api.src.test/icons/methods/md/unionpay.png",
        "http://api.src.test/icons/methods/md/amex.png",
      ];
      const onClickEdit = () => [alert("edit clicked")];

      return { args, methodLogos, onClickEdit };
    },
    template: `
      <Theme colorMode="light" class="p-10">
        <ListItem
          type="general"
          v-bind="args"
        >
          <template #menu>
            <div class="p-2 border-b border-gray-200">
              <DropdownItem text="Edit" icon="pencil" @click="onClickEdit" />
            </div>
            <div class="p-2">
              <DropdownItem text="Delete" variant="destructive" icon="bin"/>
            </div>
          </template>
        </ListItem>

        <ListItem
          type="general"
          title="Shopee Pay"
          :chips="[
            { label: 'Primary' }
          ]"
        >
          <template #logo>
            <img
              src="http://api.src.test/icons/providers/shopee.png"
              width="64"
              alt="shopee"
            />
          </template>
        </ListItem>

        <ListItem
          type="general"
          v-bind="args"
          :is-dropdown-actions-visible="false"
        >
          <template #logo>
            <img
              src="http://api.src.test/icons/providers/paynow.png"
              width="64"
            />
          </template>
          <div
            class="flex gap-x-4"
          >
            <img
              v-for="(methodImage, index) in methodLogos"
              :key="index"
              class="object-contain"
              :src="methodImage"
              width="35"
              :alt="methodImage"
              height="24"
            />
          </div>
          
          <template #append>
            <Button label="Connect" />
          </template>
        </ListItem>
      </Theme>
    `,
  }),
};
