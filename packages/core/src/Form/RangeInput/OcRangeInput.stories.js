import { RangeInput, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: RangeInput,
  tags: ['autodocs']
}

export const Default = {
  args: {
    maxLimit: 100,
    minLimit: 0,
    minGap: 0,
    label: '',
    hint: '',
    errorMessage: '',
    onlyInput: true
  },
  render: (args) => ({
    components: { RangeInput, Theme },
    setup() {
      const modelValue = ref('')
      return { modelValue, args }
    },
    template: `
      <Theme>
        <RangeInput v-model="modelValue" v-bind="args" />
      </Theme>
    `
  })
}
