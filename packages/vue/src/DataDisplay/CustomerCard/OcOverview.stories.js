import { Theme, CustomerCard } from "@/orchidui";

export default {
  component: CustomerCard,
  tags: ["autodocs"],
};

export const overview = {
  name: "Overview",
  argTypes: {
    variant: {
      control: "select",
      options: ["small", "big", "float"],
    },
  },
  args: {
    variant: "small",
    customer: {
      name: "Alex Turner",
      email: "alex@arcticmonkey.io",
      phone_number: "65 8373 3739 18",
      address: {
        street: "123 Main Street",
        city: "Pennsylvania",
        state: "Pennsylvania",
        postal_code: "12345 ",
        country: "USA",
      },
    },
  },
  render: (args) => ({
    components: { CustomerCard, Theme },
    setup() {
      return {
        args,
      };
    },
    template: `
          <Theme class="items-center mb-3">
            <CustomerCard :customer="args.customer" :variant="args.variant"/>
          </Theme>
        `,
  }),
};

export const bigVariant = {
  name: "Big variant customer style card",
  args: {
    variant: "big",
    customer: {
      name: "Alex Turner",
      email: "alex@arcticmonkey.io",
      phone_number: "65 8373 3739 18",
      address: {
        street: "123 Main Street",
        city: "Pennsylvania",
        state: "Pennsylvania",
        postal_code: "12345 ",
        country: "USA",
      },
    },
  },
  render: (args) => ({
    components: { CustomerCard, Theme },
    setup() {
      return {
        args,
      };
    },
    template: `
      <Theme class="items-center mb-3">
        <CustomerCard :customer="args.customer" :variant="args.variant" />
      </Theme>
    `,
  }),
};

export const isBeneficiary = {
  name: "Beneficiary style card",
  argTypes: {
    variant: {
      control: "select",
      options: ["small", "big"],
    },
  },
  args: {
    variant: "small",
    customer: {
      name: "Alex Turner",
      currency: "SGD",
      email: "alex@arcticmonkey.io",
      phone_number: "+65 8373 3739 18",
      bank_name: "DBS Bank",
      bank_account_number: "**** 1234",
    },
    isBeneficiary: true,
  },
  render: (args) => ({
    components: { CustomerCard, Theme },
    setup() {
      return {
        args,
      };
    },
    template: `
      <Theme class="items-center mb-3">
        <CustomerCard :customer="args.customer" :is-beneficiary="args.isBeneficiary" :variant="args.variant" />
      </Theme>
    `,
  }),
};

export const bigVariantBeneficiary = {
  name: "Big variant beneficiary card",
  args: {
    variant: "big",
    customer: {
      name: "Alex Turner",
      currency: "SGD",
      email: "alex@arcticmonkey.io",
      phone_number: "+65 8373 3739 18",
      bank_name: "DBS Bank",
      bank_account_number: "**** 1234",
    },
    isBeneficiary: true,
  },
  render: (args) => ({
    components: { CustomerCard, Theme },
    setup() {
      return {
        args,
      };
    },
    template: `
      <Theme class="items-center mb-3">
        <CustomerCard :customer="args.customer" :is-beneficiary="args.isBeneficiary" :variant="args.variant" />
      </Theme>
    `,
  }),
};

export const isClosable = {
  name: "Closable beneficiary style card",
  argTypes: {
    variant: {
      control: "select",
      options: ["small", "big"],
    },
  },
  args: {
    variant: "small",
    customer: {
      name: "Alex Turner",
      currency: "SGD",
      email: "alex@arcticmonkey.io",
      phone_number: "+65 8373 3739 18",
      bank_name: "DBS Bank",
      bank_account_number: "**** 1234",
    },
    isBeneficiary: true,
  },
  render: (args) => ({
    components: { CustomerCard, Theme },
    setup() {
      return {
        args,
      };
    },
    template: `
      <Theme class="items-center mb-3">
        <CustomerCard :customer="args.customer" :is-beneficiary="args.isBeneficiary" :variant="args.variant" :is-closable="true" />
      </Theme>
    `,
  }),
};
