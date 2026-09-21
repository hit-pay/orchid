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

export const Placements = {
  render: () => ({
    components: { Tooltip, Theme },
    template: `
      <Theme>
        <div class="w-full h-[500px] flex items-center justify-center">
          <div class="grid grid-cols-3 gap-6 place-items-center">
            <Tooltip position="top-start" :distance="10">
              <button class="px-4 py-2 bg-oc-gray-100 rounded w-32">Top Start</button>
              <template #popper>
                <div class="p-3 text-sm">Top start tooltip</div>
              </template>
            </Tooltip>

            <Tooltip position="top" :distance="10">
              <button class="px-4 py-2 bg-oc-gray-100 rounded w-32">Top</button>
              <template #popper>
                <div class="p-3 text-sm">Top tooltip</div>
              </template>
            </Tooltip>

            <Tooltip position="top-end" :distance="10">
              <button class="px-4 py-2 bg-oc-gray-100 rounded w-32">Top End</button>
              <template #popper>
                <div class="p-3 text-sm">Top end tooltip</div>
              </template>
            </Tooltip>

            <Tooltip position="left" :distance="10">
              <button class="px-4 py-2 bg-oc-gray-100 rounded w-32">Left</button>
              <template #popper>
                <div class="p-3 text-sm">Left tooltip</div>
              </template>
            </Tooltip>

            <div class="px-4 py-2 bg-oc-gray-50 border border-oc-gray-200 rounded text-sm text-center text-oc-text-300 w-32 h-10 flex items-center justify-center">
              center
            </div>

            <Tooltip position="right" :distance="10">
              <button class="px-4 py-2 bg-oc-gray-100 rounded w-32">Right</button>
              <template #popper>
                <div class="p-3 text-sm">Right tooltip</div>
              </template>
            </Tooltip>

            <Tooltip position="bottom-start" :distance="10">
              <button class="px-4 py-2 bg-oc-gray-100 rounded w-32">Bottom Start</button>
              <template #popper>
                <div class="p-3 text-sm">Bottom start tooltip</div>
              </template>
            </Tooltip>

            <Tooltip position="bottom" :distance="10">
              <button class="px-4 py-2 bg-oc-gray-100 rounded w-32">Bottom</button>
              <template #popper>
                <div class="p-3 text-sm">Bottom tooltip</div>
              </template>
            </Tooltip>

            <Tooltip position="bottom-end" :distance="10">
              <button class="px-4 py-2 bg-oc-gray-100 rounded w-32">Bottom End</button>
              <template #popper>
                <div class="p-3 text-sm">Bottom end tooltip</div>
              </template>
            </Tooltip>
          </div>
        </div>
      </Theme>
    `
  })
}

export const AttachToBody = {
  render: () => ({
    components: { Tooltip, Theme },
    template: `
      <Theme>
        <div class="w-full h-[400px] flex items-center justify-center gap-6">
          <Tooltip position="top" :distance="10" :is-attach-to-body="true">
            <button class="px-4 py-2 bg-oc-gray-100 rounded">Top (body)</button>
            <template #popper>
              <div class="p-3 text-sm">Teleported to body — top</div>
            </template>
          </Tooltip>

          <Tooltip position="bottom" :distance="10" :is-attach-to-body="true">
            <button class="px-4 py-2 bg-oc-gray-100 rounded">Bottom (body)</button>
            <template #popper>
              <div class="p-3 text-sm">Teleported to body — bottom</div>
            </template>
          </Tooltip>

          <Tooltip position="left" :distance="10" :is-attach-to-body="true">
            <button class="px-4 py-2 bg-oc-gray-100 rounded">Left (body)</button>
            <template #popper>
              <div class="p-3 text-sm">Teleported to body — left</div>
            </template>
          </Tooltip>

          <Tooltip position="right" :distance="10" :is-attach-to-body="true">
            <button class="px-4 py-2 bg-oc-gray-100 rounded">Right (body)</button>
            <template #popper>
              <div class="p-3 text-sm">Teleported to body — right</div>
            </template>
          </Tooltip>
        </div>
      </Theme>
    `
  })
}
