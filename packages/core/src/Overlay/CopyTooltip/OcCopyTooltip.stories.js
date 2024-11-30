import OcCopyTooltip from '@/orchidui-core/Overlay/CopyTooltip/OcCopyTooltip.vue'

export default {
  component: OcCopyTooltip,
  tags: ['autodocs']
}

export const Default = {
  args: {
    text: 'Text to copy',
    tooltipText: 'Copied!'
  },
  render: (args) => ({
    components: { OcCopyTooltip },
    setup() {
      return { args }
    },
    template: `
          <div class="w-full pt-8">
            <OcCopyTooltip
                :value="args.text"
                :tooltip-text="args.tooltipText"
                :tooltip-options="args.tooltipOptions"
            />
          </div>
        `
  })
}
