import { CopyTooltip, Theme } from '@/orchidui-core'

export default {
  component: CopyTooltip,
  tags: ['autodocs']
}

export const Default = {
  args: {
    value: 'Text to copy',
    tooltipText: 'Copied!'
  },
  render: (args) => ({
    components: { CopyTooltip, Theme },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <div class="w-full pt-8">
          <CopyTooltip v-bind="args" />
        </div>
      </Theme>
    `
  })
}
