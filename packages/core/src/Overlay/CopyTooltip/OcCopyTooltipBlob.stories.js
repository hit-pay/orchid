import { CopyTooltip, Button, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: CopyTooltip,
  tags: ['autodocs']
}

export const Default = {
  args: {
    tooltipText: 'Copied!'
  },
  render: (args) => ({
    components: { CopyTooltip, Button, Theme },
    setup() {
      const blobValue = ref(null)
      const url =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'

      fetch(url).then(async (res) => (blobValue.value = await res.blob()))

      return { args, blobValue }
    },
    template: `
      <Theme>
        <div class="w-full pt-8">
          <CopyTooltip :value="blobValue" :tooltip-text="args.tooltipText">
            <Button label="Copy Blob" />
          </CopyTooltip>
        </div>
      </Theme>
    `
  })
}
