import { Tooltip, Theme } from '@/orchidui-core'

export default {
  component: Tooltip,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    trigger: {
      control: 'select',
      options: ['hover', 'click']
    },
    position: {
      control: 'select',
      options: [
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-start',
        'bottom',
        'bottom-end',
        'left-start',
        'left',
        'left-end'
      ]
    }
  },
  args: {
    position: 'bottom',
    trigger: 'hover',
    distance: 10,
    skidding: 0,
    isAttachToBody: false
  },
  render: (args) => ({
    components: { Tooltip, Theme },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <div class="w-full h-[400px] flex items-center justify-center">
          <Tooltip v-bind="args">
            <button class="px-4 py-2 bg-oc-gray-100 rounded">Hover me</button>

            <template #popper>
              <div class="flex w-[300px] flex-col gap-y-3 p-4">
                <div class="font-medium">Tooltip title</div>
                <div class="text-sm">Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.</div>
              </div>
            </template>
          </Tooltip>
        </div>
      </Theme>
    `
  })
}
