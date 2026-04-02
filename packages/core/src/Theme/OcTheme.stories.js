import { Theme } from '@/orchidui-core'

export default {
  component: Theme,
  tags: ['autodocs']
}

export const Default = {
  render: () => ({
    components: { Theme },
    template: `
      <Theme>
        <div class="flex gap-3 items-center mb-3">
          <span>Light Mode (default)</span>
        </div>
      </Theme>
    `
  })
}

export const ColorMode = {
  render: () => ({
    components: { Theme },
    template: `
      <div class="flex gap-3 items-center light-mode mb-3">
        <Theme colorMode="light">
          Light Mode
        </Theme>
        <Theme colorMode="dark">
          Dark Mode
        </Theme>
      </div>
    `
  })
}
