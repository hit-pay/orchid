import { Checkbox, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: Checkbox,
  tags: ['autodocs']
}

export const Default = {
  args: {
    label: 'Text',
    topLabel: 'Text',
    hint: 'Text',
    errorMessage: '',
    isPartial: false,
    isDisabled: false
  },
  render: (args) => ({
    components: { Checkbox, Theme },
    setup() {
      const modelValue = ref(false)
      return { modelValue, args }
    },
    template: `
      <Theme>
        <Checkbox v-model="modelValue" v-bind="args">
          <template #after>After</template>
        </Checkbox>
        <div class="mt-2">Model value: {{ modelValue }}</div>
      </Theme>
    `
  })
}

export const Variants = {
  render: () => ({
    components: { Checkbox, Theme },
    template: `
      <Theme>
        <div class="grid grid-cols-4 gap-4 w-fit">
          <Checkbox :model-value="true" />
          <Checkbox />
          <Checkbox error-message="Error" />
          <Checkbox is-partial />
          <Checkbox :model-value="true" disabled />
          <Checkbox disabled />
          <div />
          <Checkbox is-partial disabled />
        </div>
      </Theme>
    `
  })
}
