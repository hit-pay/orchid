import { Theme, Slider } from '@/orchidui-core'
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
    components: { Theme, Slider },
    setup() {
      const rangeModelValue = ref([0, 50])
      const modelValue = ref(20)
      return { rangeModelValue, modelValue, args }
    },
    template: `
          <Theme>
            <div class="p-4 w-full bg-oc-accent-1-100">
              <Slider :key="args.minGap + args.minLimit + args.maxLimit + args.type"
                      :model-value="args.type === 'range' ? rangeModelValue : modelValue" :min-gap="args.minGap"
                      :min-limit="args.minLimit"
                      :type="args.type"
                      :max-limit="args.maxLimit"
                      @update:modelValue="args.type === 'range' ? rangeModelValue = $event : modelValue = $event"
              />
            </div>
          </Theme>
        `
  })
}
