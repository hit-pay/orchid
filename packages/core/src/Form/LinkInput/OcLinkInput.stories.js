import { LinkInput, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: LinkInput,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    labelIcon: {
      control: 'select',
      options: ['', 'question-mark']
    }
  },
  args: {
    label: 'Enter Username',
    hint: '',
    placeholder: '@username',
    isDisabled: false,
    isRequired: false,
    isInlineLabel: false,
    labelIcon: '',
    tooltipText: 'Tooltip text',
    tooltipOptions: {
      position: 'top',
      distance: 10
    },
    errorMessages: {
      link: 'error',
      title: 'error'
    },
    links: [
      {
        value: 'facebook',
        placeholder: '@username',
        label: 'Facebook',
        icon: 'facebook',
        preFill: 'https://facebook.com/'
      },
      {
        value: 'instagram',
        label: 'Instagram',
        icon: 'instagram',
        preFill: 'https://instagram.com/'
      },
      {
        value: 'twitter',
        label: '(X) Twitter',
        icon: 'twitter',
        preFill: 'https://twitter.com/'
      },
      {
        value: 'tiktok',
        label: 'Tiktok',
        icon: 'tiktok',
        preFill: 'https://tiktok.com/'
      },
      {
        value: 'link',
        label: 'Other website',
        placeholder: 'website.com',
        icon: 'earth',
        preFill: 'https://'
      }
    ]
  },
  render: (args) => ({
    components: { LinkInput, Theme },
    setup() {
      const modelValue = ref('')
      const linkType = ref('twitter')
      const linkTitle = ref('')
      return { modelValue, linkType, linkTitle, args }
    },
    template: `
      <Theme>
        <div class="w-full h-[200px]">
          <LinkInput
            v-model="modelValue"
            v-model:type="linkType"
            v-model:title="linkTitle"
            v-bind="args"
          />
        </div>
      </Theme>
    `
  })
}
