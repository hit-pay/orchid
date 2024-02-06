import { Theme, CustomerCard } from "@/orchidui";

export default {
  component: CustomerCard,
  tags: ["autodocs"],
};

export const overview = {
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
      phone_number: "+65 8373 3739 18",
      address: {
        postal_code: "12345 ",
        country: "USA",
        city: "Pennsylvania",
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
