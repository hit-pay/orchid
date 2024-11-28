import { Theme, Tooltip } from '@orchidui/vue'

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
    skidding: 0
  },
  render: (args) => ({
    components: { Tooltip, Theme },
    setup() {
      return {
        args
      }
    },
    template: `
          <Theme>
            <div class="w-full h-[400px] flex items-center justify-center gap-3">
              <Tooltip :key="args.trigger" :trigger="args.trigger" :distance="args.distance" :skidding="args.skidding"
                       :position="args.position" popper-class="bg-oc-bg">
                <div class="bg-oc-gray-300 p-3 rounded-sm cursor-pointer">Trigger</div>
                <template #popper>
                  <div class="flex w-[300px] flex-col gap-y-3 p-4">
                    <div class="font-medium">Tooltip title</div>
                    <div class="text-sm">Tooltips are used to describe or identify an element. In most scenarios,
                      tooltips help the user
                      understand the meaning, function or alt-text of an element.
                    </div>
                  </div>
                </template>
              </Tooltip>
              <Tooltip :key="args.trigger" :trigger="args.trigger" :distance="args.distance" :skidding="args.skidding"
                       :position="args.position" is-popover
                       popper-class="bg-oc-gray-900 text-oc-text-100">
                <div class="p-3 rounded-sm cursor-pointer">Trigger</div>
                <template #popper>
                  <div class="flex w-[300px] flex-col gap-y-3 p-4">
                    <div class="font-medium">Tooltip title</div>
                    <div class="text-sm">Tooltips are used to describe or identify an element. In most scenarios,
                      tooltips help the user
                      understand the meaning, function or alt-text of an element.
                    </div>
                  </div>
                </template>
              </Tooltip>
            </div>
          </Theme>
        `
  })
}
