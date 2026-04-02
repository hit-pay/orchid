import { Slider, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Slider,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'range']
    }
  },
  args: {
    minGap: 0,
    minLimit: 0,
    maxLimit: 100,
    type: 'default'
  },
  render: (args) => ({
    components: { Slider, Theme },
    setup() {
      const modelValue = ref(20)
      const rangeModelValue = ref([0, 50])
      return { modelValue, rangeModelValue, args }
    },
    template: `
      <Theme>
        <div class="p-4 w-full">
          <Slider
            :model-value="args.type === 'range' ? rangeModelValue : modelValue"
            :min-gap="args.minGap"
            :min-limit="args.minLimit"
            :max-limit="args.maxLimit"
            :type="args.type"
            @update:model-value="args.type === 'range' ? rangeModelValue = $event : modelValue = $event"
          />
        </div>
      </Theme>
    `
  })
}

export const VariantRightInput = {
  render: () => ({
    components: { Slider, Theme },
    setup() {
      const modelValue = ref(20)
      const rangeModelValue = ref([0, 50])
      return { modelValue, rangeModelValue }
    },
    template: `
      <Theme>
        <div class="p-4 w-full flex flex-col gap-8">
          <div>
            <p class="mb-2 text-sm text-oc-text-400">Default with right input</p>
            <Slider
              v-model="modelValue"
              variant="right"
              :min-limit="0"
              :max-limit="100"
            />
          </div>
          <div>
            <p class="mb-2 text-sm text-oc-text-400">Range with right input</p>
            <Slider
              :model-value="rangeModelValue"
              type="range"
              variant="right"
              :min-limit="0"
              :max-limit="100"
              @update:model-value="rangeModelValue = $event"
            />
          </div>
        </div>
      </Theme>
    `
  })
}
