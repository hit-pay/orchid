import { Theme, BeneficiaryCard } from '@/orchidui';

export default {
  component: BeneficiaryCard,
  tags: ['autodocs'],
};

export const overview = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['small', 'large'],
    },
  },
  args: {
    variant: 'small',
    beneficiary: {
      name: 'Alex Turner',
      currency: 'SGD',
      email: 'alex@arcticmonkey.io',
      phone_number: '+65 8373 3739 18',
      bank_name: 'DBS Bank',
      bank_account_number: '**** 1234',
    },
  },
  render: (args) => ({
    components: { BeneficiaryCard, Theme },
    setup() {
      return {
        args,
      };
    },
    template: `
      <Theme class="items-center mb-3">
        <BeneficiaryCard :beneficiary="args.beneficiary" :variant="args.variant"/>
      </Theme>
    `,
  }),
};

export const largeVariant = {
  args: {
    variant: 'large',
    beneficiary: {
      name: 'Alex Turner',
      currency: 'SGD',
      email: 'alex@arcticmonkey.io',
      phone_number: '+65 8373 3739 18',
      bank_name: 'DBS Bank',
      bank_account_number: '**** 1234',
    },
  },
  render: (args) => ({
    components: { BeneficiaryCard, Theme },
    setup() {
      return {
        args,
      };
    },
    template: `
      <Theme class="items-center mb-3">
        <BeneficiaryCard :beneficiary="args.beneficiary" :variant="args.variant"/>
      </Theme>
    `,
  }),
};

export const closable = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['small', 'large'],
    },
  },
  args: {
    variant: 'small',
    beneficiary: {
      name: 'Alex Turner',
      currency: 'SGD',
      email: 'alex@arcticmonkey.io',
      phone_number: '+65 8373 3739 18',
      bank_name: 'DBS Bank',
      bank_account_number: '**** 1234',
    },
  },
  render: (args) => ({
    components: { BeneficiaryCard, Theme },
    setup() {
      return {
        args,
      };
    },
    template: `
      <Theme class="items-center mb-3">
        <BeneficiaryCard :beneficiary="args.beneficiary" :variant="args.variant" :closable="true" />
      </Theme>
    `,
  }),
};
