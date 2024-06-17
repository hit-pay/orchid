import OcCopyTooltip from '@/orchidui/Overlay/CopyTooltip/OcCopyTooltip.vue'
import OcButton from '@/orchidui/Form/Button/OcButton.vue'

export default {
  component: OcCopyTooltip,
  tags: ['autodocs']
}

export const Default = {
  args: {
    value: '',
    tooltipText: 'Copied!',
    tooltipOptions: { distance: 40 }
  },
  render: (args) => ({
    components: { OcCopyTooltip, OcButton },
    setup() {
      const url =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'

      fetch(url).then(async (res) => (args.value = await res.blob()))

      return { args }
    },
    template: `
          <div class="w-full pt-8">
            <OcCopyTooltip
                :value="args.value"
                :tooltip-text="args.tooltipText"
                :tooltip-options="args.tooltipOptions"
            >
              <OcButton>Copy Blob</OcButton>
            </OcCopyTooltip>
          </div>
        `
  })
}
