import { ColorPicker } from '@/orchidui-dashboard'
import { Icon } from '@/orchidui-core'
import { computed, ref } from 'vue'

export default {
  component: ColorPicker,
  tags: ['autodocs']
}

export const Default = {
  render: () => ({
    components: { ColorPicker , Icon},
    setup() {
      const modelValue = ref()
      return {
        modelValue
      }
    },
    template: `
          <div class="h-[400px]">
           modelValue: {{modelValue}}
            <ColorPicker v-model="modelValue" :show-opacity="false" >
              <template #leading>
                <Icon name="paint" />
              </template>
            </ColorPicker>
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
