import { Theme, Chip } from '@/orchidui-core'
export default {
  component: Chip,
  tags: ['autodocs']
}

export const Default = {
  render: () => ({
    components: { Chip, Theme },
    template: `
      <div class="grid grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Background Type</h3>
          <Theme class="flex flex-col gap-3">
            <Chip label="Primary" type="background" class="w-fit"/>
            <Chip label="Accent 1" variant="accent-1" type="background" class="w-fit"/>
            <Chip label="Accent 2" variant="accent-2" type="background" class="w-fit"/>
            <Chip label="Accent 3" variant="accent-3" type="background" class="w-fit"/>
            <Chip label="Success" variant="success" type="background" class="w-fit"/>
            <Chip label="Warning" variant="warning" type="background" class="w-fit"/>
            <Chip label="Error" variant="error" type="background" class="w-fit"/>
            <Chip label="Gray" variant="gray" type="background" class="w-fit"/>
            <Chip label="Light Red" variant="light-red" type="background" class="w-fit"/>
            <Chip label="Neutral" variant="neutral" type="background" class="w-fit"/>
            <Chip label="Tosca" variant="tosca" type="background" class="w-fit"/>
          </Theme>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Transparent Type</h3>
          <Theme class="flex flex-col gap-3">
            <Chip label="Primary" type="transparent" class="w-fit"/>
            <Chip label="Accent 1" variant="accent-1" type="transparent" class="w-fit"/>
            <Chip label="Accent 2" variant="accent-2" type="transparent" class="w-fit"/>
            <Chip label="Accent 3" variant="accent-3" type="transparent" class="w-fit"/>
            <Chip label="Success" variant="success" type="transparent" class="w-fit"/>
            <Chip label="Warning" variant="warning" type="transparent" class="w-fit"/>
            <Chip label="Error" variant="error" type="transparent" class="w-fit"/>
            <Chip label="Gray" variant="gray" type="transparent" class="w-fit"/>
            <Chip label="Light Red" variant="light-red" type="transparent" class="w-fit"/>
            <Chip label="Neutral" variant="neutral" type="transparent" class="w-fit"/>
            <Chip label="Tosca" variant="tosca" type="transparent" class="w-fit"/>
          </Theme>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Outlined Type</h3>
          <Theme class="flex flex-col gap-3">
            <Chip label="Primary" type="outlined" class="w-fit"/>
            <Chip label="Accent 1" variant="accent-1" type="outlined" class="w-fit"/>
            <Chip label="Accent 2" variant="accent-2" type="outlined" class="w-fit"/>
            <Chip label="Accent 3" variant="accent-3" type="outlined" class="w-fit"/>
            <Chip label="Success" variant="success" type="outlined" class="w-fit"/>
            <Chip label="Warning" variant="warning" type="outlined" class="w-fit"/>
            <Chip label="Error" variant="error" type="outlined" class="w-fit"/>
            <Chip label="Gray" variant="gray" type="outlined" class="w-fit"/>
            <Chip label="Light Red" variant="light-red" type="outlined" class="w-fit"/>
            <Chip label="Neutral" variant="neutral" type="outlined" class="w-fit"/>
            <Chip label="Tosca" variant="tosca" type="outlined" class="w-fit"/>
          </Theme>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Background with Icons</h3>
          <Theme class="flex flex-col gap-3">
            <Chip label="Primary" type="background" icon="check" closable class="w-fit"/>
            <Chip label="Accent 1" variant="accent-1" type="background" icon="check" closable class="w-fit"/>
            <Chip label="Accent 2" variant="accent-2" type="background" icon="check" closable class="w-fit"/>
            <Chip label="Accent 3" variant="accent-3" type="background" icon="check" closable class="w-fit"/>
            <Chip label="Success" variant="success" type="background" icon="check" closable class="w-fit"/>
            <Chip label="Warning" variant="warning" type="background" icon="check" closable class="w-fit"/>
            <Chip label="Error" variant="error" type="background" icon="check" closable class="w-fit"/>
            <Chip label="Gray" variant="gray" type="background" icon="check" closable class="w-fit"/>
            <Chip label="Light Red" variant="light-red" type="background" icon="check" closable class="w-fit"/>
            <Chip label="Neutral" variant="neutral" type="background" icon="check" closable class="w-fit"/>
            <Chip label="Tosca" variant="tosca" type="background" icon="check" closable class="w-fit"/>
          </Theme>
        </div>
      </div>
    `
  })
}
