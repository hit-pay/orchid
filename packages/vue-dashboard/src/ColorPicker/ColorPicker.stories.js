import { ColorPicker } from '@/orchidui-dashboard'
import { computed, ref } from 'vue'

export default {
  component: ColorPicker,
  tags: ['autodocs']
}

export const Default = {
  render: () => ({
    components: { ColorPicker },
    setup() {
      const modelValue = ref()
      return {
        modelValue
      }
    },
    template: `
          <div class="h-[400px]">
            <ColorPicker v-model="modelValue" :show-opacity="false" />
          </div>`
  })
}

export const Gradient = {
  render: () => ({
    components: { ColorPicker },
    setup() {
      const modelValue = ref('')
      const styleBg = computed(() => {
        return `background:${modelValue.value}`
      })
      return {
        modelValue,
        styleBg
      }
    },
    template: `
          <div>
            <ColorPicker v-model="modelValue" variant="gradient"/>
            <div class="h-[400px] w-full mt-3" :style="styleBg"></div>
          </div>`
  })
}
