import { AccountSetupProgress, Theme } from '@/orchidui-core'

export default {
  component: AccountSetupProgress,
  tags: ['autodocs'],
  kind: 'leaf',
  description: 'Compact account setup progress card with a percentage bar and status label. Shown in the sidebar during onboarding.',
  keywords: ['progress', 'onboarding', 'setup', 'account', 'sidebar'],
  use_for: ['account onboarding progress widget in sidebar'],
  understand_with: ['Sidebar', 'ProgressBar']
}

export const Playground = {
  argTypes: {
    value:      { control: { type: 'number', min: 0, max: 100 } },
    infoLabel:  { control: 'text' }
  },
  args: {
    value:     60,
    infoLabel: '3 of 5 steps completed'
  },
  render: (args) => ({
    components: { AccountSetupProgress, Theme },
    setup() {
      return { args }
    },
    template: `
      <Theme class="p-6 max-w-xs">
        <AccountSetupProgress
          :value="args.value"
          :info-label="args.infoLabel"
          @redirect="() => {}"
        />
      </Theme>
    `
  })
}
