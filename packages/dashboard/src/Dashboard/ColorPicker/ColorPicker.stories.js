import { ColorPicker } from '@/orchidui-dashboard'
import { Theme, Icon } from '@/orchidui-core'
import { ref, computed } from 'vue'

export default {
  component: ColorPicker,
  tags: ['autodocs']
}

export const Default = {
  args: {
    showOpacity: false,
    modelValue: ''
  },
  render: (args) => ({
    components: { ColorPicker, Theme, Icon },
    setup() {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `
      <Theme>
        <div class="h-[400px]">
          <div class="mb-2 text-sm">modelValue: {{ modelValue }}</div>
          <ColorPicker v-model="modelValue" :show-opacity="args.showOpacity">
            <template #leading>
              <Icon name="paint" />
            </template>
          </ColorPicker>
        </div>
      </Theme>
    `
  })
}

export const Gradient = {
  args: {
    modelValue: ''
  },
  render: (args) => ({
    components: { ColorPicker, Theme },
    setup() {
      const modelValue = ref(args.modelValue)
      const styleBg = computed(() => `background:${modelValue.value}`)
      return { args, modelValue, styleBg }
    },
    template: `
      <Theme>
        <ColorPicker v-model="modelValue" variant="gradient" />
        <div class="h-[400px] w-full mt-3" :style="styleBg" />
      </Theme>
    `
  })
}
