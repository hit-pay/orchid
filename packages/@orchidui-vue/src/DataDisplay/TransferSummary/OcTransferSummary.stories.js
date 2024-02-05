import { Theme, TransferSummary } from '@/orchidui';

export default {
  component: TransferSummary,
  tags: ['autodocs'],
};

export const overview = {
  argTypes: {
    hasFxData: {
      control: 'boolean',
    },
  },
  args: {
    hasFxData: false,
    transfer: {
      fx_rate: '1.34',
      base_currency_amount: '134.20',
      base_currency: 'SGD',
      transfer_currency: 'USD',
      fee: '3.50',
      type: 'Local',
    },
  },
  render: (args) => ({
    components: { TransferSummary, Theme },
    setup() {
      return {
        args,
      };
    },
    template: `
      <Theme class="items-center mb-3">
        <TransferSummary :transfer="args.transfer" :has-fx-data="args.hasFxData" />
      </Theme>
    `,
  }),
};

export const withFxData = {
  args: {
    hasFxData: true,
    transfer: {
      fx_rate: '1.34',
      base_currency_amount: '134.20',
      base_currency: 'SGD',
      transfer_currency: 'USD',
      fee: '3.50',
      type: 'Local',
    },
  },
  render: (args) => ({
    components: { TransferSummary, Theme },
    setup() {
      return {
        args,
      };
    },
    template: `
      <Theme class="items-center mb-3">
        <TransferSummary :transfer="args.transfer" :has-fx-data="args.hasFxData" />
      </Theme>
    `,
  }),
};
