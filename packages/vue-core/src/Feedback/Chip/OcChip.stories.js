import { Theme, Chip } from '@/orchidui-core'
export default {
  component: Chip,
  tags: ['autodocs']
}

export const VariantColor = {
  render: () => ({
    components: { Chip, Theme },
    template: `
          <Theme class="flex gap-3 items-center mb-3">
            <Chip label="Primary"/>
            <Chip label="Accent 1" variant="accent-1"/>
            <Chip label="Accent 2" variant="accent-2"/>
            <Chip label="Accent 3" variant="accent-3"/>
            <Chip label="success" variant="success"/>
            <Chip label="warning" variant="warning"/>
            <Chip label="error" variant="error"/>
            <Chip should-truncate-chip label="Label is long and should be truncated" variant="error"/>
          </Theme>
        `
  })
}

export const HasIcon = {
  render: () => ({
    components: { Chip, Theme },
    template: `
      <Theme class="flex gap-3 items-center mb-3">
        <Chip label="Gray" variant="gray" icon="plus" />
        <Chip label="Success" variant="success" icon="check" icon-tooltip="Icon Tooltip" />
      </Theme>
    `
  })
}
