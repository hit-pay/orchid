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
            <Chip truncate label="Label is long and should be truncated" variant="error"/>
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

export const Types = {
  render: () => ({
    components: { Chip, Theme },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-3">Background Type (Default)</h3>
          <Theme class="flex gap-3 items-center mb-3">
            <Chip label="Primary" type="background"/>
            <Chip label="Accent 1" variant="accent-1" type="background"/>
            <Chip label="Success" variant="success" type="background"/>
            <Chip label="Warning" variant="warning" type="background"/>
            <Chip label="Error" variant="error" type="background"/>
            <Chip label="Gray" variant="gray" type="background"/>
          </Theme>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-3">Transparent Type (No padding, no background)</h3>
          <Theme class="flex gap-3 items-center mb-3">
            <Chip label="Primary" type="transparent"/>
            <Chip label="Accent 1" variant="accent-1" type="transparent"/>
            <Chip label="Success" variant="success" type="transparent"/>
            <Chip label="Warning" variant="warning" type="transparent"/>
            <Chip label="Error" variant="error" type="transparent"/>
            <Chip label="Gray" variant="gray" type="transparent"/>
          </Theme>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-3">Outlined Type (Border with variant color, no background)</h3>
          <Theme class="flex gap-3 items-center mb-3">
            <Chip label="Primary" type="outlined"/>
            <Chip label="Accent 1" variant="accent-1" type="outlined"/>
            <Chip label="Success" variant="success" type="outlined"/>
            <Chip label="Warning" variant="warning" type="outlined"/>
            <Chip label="Error" variant="error" type="outlined"/>
            <Chip label="Gray" variant="gray" type="outlined"/>
          </Theme>
        </div>
      </div>
    `
  })
}

export const TypesWithIcons = {
  render: () => ({
    components: { Chip, Theme },
    template: `
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-3">Background Type with Icons</h3>
          <Theme class="flex gap-3 items-center mb-3">
            <Chip label="Primary" type="background" icon="plus"/>
            <Chip label="Success" variant="success" type="background" icon="check"/>
            <Chip label="Error" variant="error" type="background" icon="x" closable/>
          </Theme>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-3">Transparent Type with Icons</h3>
          <Theme class="flex gap-3 items-center mb-3">
            <Chip label="Primary" type="transparent" icon="plus"/>
            <Chip label="Success" variant="success" type="transparent" icon="check"/>
            <Chip label="Error" variant="error" type="transparent" icon="x" closable/>
          </Theme>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-3">Outlined Type with Icons</h3>
          <Theme class="flex gap-3 items-center mb-3">
            <Chip label="Primary" type="outlined" icon="plus"/>
            <Chip label="Success" variant="success" type="outlined" icon="check"/>
            <Chip label="Error" variant="error" type="outlined" icon="x" closable/>
          </Theme>
        </div>
      </div>
    `
  })
}
