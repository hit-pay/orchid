import { Theme, Popper } from '@/orchidui'

export default {
  component: Popper,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    placement: {
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
    placement: 'top',
    skidding: 0,
    distance: 5,
    isFlipEnabled: true
  },
  render: (args) => ({
    components: { Popper, Theme },
    setup() {
      return {
        args
      }
    },
    template: `
          <Theme>
            <div class="w-ful h-[700px] gap-y-7 flex-col flex items-center pt-[200px]">
              <div class="w-full">Red border block is with overflow-hidden</div>
              <div class="w-full h-[200px] border border-oc-error overflow-hidden flex items-center justify-center">
                <Popper :placement="args.placement" :popper-options="args.popperOptions" :distance="args.distance"
                        :skidding="args.skidding" :is-flip-enabled="args.isFlipEnabled">
                  <div
                      class="bg-oc-gray-100 rounded border border-oc-gray-200 flex items-center justify-center py-2 px-4"
                  >
                    Reference block
                  </div>
                  <template #popper>
                    <div class="bg-oc-gray-100 max-w-[300px] p-3 rounded border border-oc-gray-200"
                    >
                      Popper
                      <div class="text-oc-text-300">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                      </div>
                    </div>
                  </template>
                </Popper>
              </div>
            </div>
          </Theme>
        `
  })
}
