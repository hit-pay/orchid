import { Theme, RadioGroup } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: RadioGroup,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    alignment: {
      control: 'select',
      options: ['vertical', 'horizontal']
    }
  },
  args: {
    alignment: 'vertical',
    label: 'Label',
    hint: 'Hint',
    errorMessage: '',
    radio: [
      {
        label: 'Text',
        value: '0'
      },
      {
        label: 'Text',
        value: '1'
      },
      {
        label: 'Text',
        value: '2'
      },
      {
        label: 'Text',
        value: '3'
      },
      {
        label: 'is Disabled',
        value: '4',
        isDisabled: true
      }
    ]
  },
  render: (args) => ({
    components: { RadioGroup, Theme },
    setup() {
      const selectedRadio = ref()
      return { args, selectedRadio }
    },
    template: `
      <Theme>
        <div class="flex flex-col gap-y-4">
          <RadioGroup
            v-model="selectedRadio"
            :radio="args.radio"
            :label="args.label"
            :hint="args.hint"
            :error-message="args.errorMessage"
            group-name="radio1"
            :alignment="args.alignment"
          />
          <div class="flex gap-x-2">
            Model value:
            "{{ selectedRadio }}"
          </div>
        </div>
      </Theme>
    `
  })
}
export const directionVariants = {
  args: {
    radio: [
      {
        label: 'Text 1',
        value: 'Text 1'
      },
      {
        label: 'Text 2',
        value: 'Text 2'
      },
      {
        label: 'Text 3',
        value: 'Text 3'
      },
      {
        label: 'Text 4',
        value: 'Text 4'
      },
      {
        label: 'Text 5',
        value: 'Text 5'
      }
    ]
  },
  render: (args) => ({
    components: { RadioGroup, Theme },
    setup() {
      const selectedRadio1 = ref()
      const selectedRadio2 = ref()
      return { selectedRadio1, selectedRadio2, args }
    },
    template: `
      <Theme>
        <div class="flex flex-col gap-y-4">
          <RadioGroup
            v-model="selectedRadio1"
            :radio="args.radio"
            label="Label"
            group-name="radio1"
            alignment="vertical"

          />
          <RadioGroup
            v-model="selectedRadio2"
            :radio="args.radio"
            label="Label"
            group-name="radio2"
            alignment="horizontal"
          />
        </div>
      </Theme>
    `
  })
}

export const buttonVariants = {
  args: {
    radio: [
      {
        label: 'Text',
        value: 6,
        icon: 'phone'
      },
      {
        label: 'Text',
        value: 7,
        icon: 'email'
      },
      {
        label: 'Text',
        value: 8,
        icon: 'facebook'
      },
      {
        label: 'Text',
        value: 9,
        icon: 'tiktok'
      },
      {
        label: 'Text',
        value: 10,
        icon: 'telegram'
      }
    ]
  },
  render: (args) => ({
    components: { RadioGroup, Theme },
    setup() {
      const selectedRadio1 = ref()
      const selectedRadio2 = ref()
      return { selectedRadio1, selectedRadio2, args }
    },
    template: `
      <Theme>
        <div class="flex flex-col gap-y-4">
          <RadioGroup
            v-model="selectedRadio1"
            :radio="args.radio"
            label="Label"
            group-name="radio1"
            alignment="vertical"
            :is-button-variant="true"
          />
          <RadioGroup
            v-model="selectedRadio2"
            :radio="args.radio"
            label="Label"
            group-name="radio2"
            alignment="horizontal"
            :is-button-variant="true"
          />
        </div>
      </Theme>
    `
  })
}

export const buttonVariantsWithRadio = {
  args: {
    radio: [
      {
        label: 'Text',
        value: 6
      },
      {
        label: 'Text',
        value: 7
      },
      {
        label: 'Text',
        value: 8
      },
      {
        label: 'Text',
        value: 9
      },
      {
        label: 'Text',
        value: 10
      }
    ]
  },
  render: (args) => ({
    components: { RadioGroup, Theme },
    setup() {
      const selectedRadio1 = ref()
      const selectedRadio2 = ref()
      return { selectedRadio1, selectedRadio2, args }
    },
    template: `
      <Theme>
        <div class="flex flex-col gap-y-4">
          <RadioGroup
            v-model="selectedRadio1"
            :radio="args.radio"
            label="Label"
            group-name="radio3"
            alignment="vertical"
            :is-button-variant="true"
            :is-button-variant-with-radio="true"
          />
          <RadioGroup
            v-model="selectedRadio2"
            :radio="args.radio"
            label="Label"
            group-name="radio4"
            alignment="horizontal"
            :is-button-variant="true"
            :is-button-variant-with-radio="true"
          />
        </div>
      </Theme>
    `
  })
}
