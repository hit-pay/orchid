import { Theme, TransferSummary } from '@orchidui/vue'

export default {
  component: TransferSummary,
  tags: ['autodocs']
}

export const overview = {
  argTypes: {
    hasFxData: {
      control: 'boolean'
    }
  },
  args: {
    hasFxData: false,
    transfer: {
      source_amount: '134.20',
      source_currency: 'sgd',
      fee: '3.50',
      fee_currency: 'SGD',
      transfer_method: 'Local'
    }
  },
  render: (args) => ({
    components: { TransferSummary, Theme },
    setup() {
      return {
        args
      }
    },
    template: `
      <Theme class="items-center mb-3">
        <TransferSummary :transfer="args.transfer" :has-fx-data="args.hasFxData" />
      </Theme>
    `
  })
}

export const withFxData = {
  args: {
    hasFxData: true,
    transfer: {
      exchange_rate: '0.73774386',
      source_amount: '1,355.48',
      source_currency: 'sgd',
      payment_currency: 'usd',
      fee: '3.50',
      fee_currency: 'SGD',
      transfer_method: 'Local'
    }
  },
  render: (args) => ({
    components: { TransferSummary, Theme },
    setup() {
      return {
        args
      }
    },
    template: `
      <Theme class="items-center mb-3">
        <TransferSummary :transfer="args.transfer" :has-fx-data="args.hasFxData" />
      </Theme>
    `
  })
}
