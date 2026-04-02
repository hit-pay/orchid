import { Button, Theme } from '@/orchidui-core'

export default {
  component: Button,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive']
    },
    size: {
      control: 'select',
      options: ['default', 'small', 'big']
    },
    leftIcon: {
      control: 'select',
      options: ['', 'circle', 'x']
    },
    rightIcon: {
      control: 'select',
      options: ['', 'plus', 'circle']
    },
    additionalAreaIcon: {
      control: 'select',
      options: ['', 'chevron-down', 'circle']
    }
  },
  args: {
    label: 'Button Text',
    variant: 'primary',
    size: 'default',
    leftIcon: '',
    rightIcon: '',
    isDisabled: false,
    isLoading: false,
    isTransparent: false,
    isRoundedFull: false,
    isAdditionalArea: false,
    additionalAreaIcon: 'chevron-down'
  },
  render: (args) => ({
    components: { Button, Theme },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <Button v-bind="args" />
      </Theme>
    `
  })
}

export const SizeVariants = {
  render: () => ({
    components: { Button, Theme },
    template: `
      <Theme>
        <div class="flex flex-col gap-3">
          <div class="flex gap-3 items-center">
            <Button size="small" label="Button Text" />
            <Button label="Button Text" />
            <Button size="big" label="Button Text" />
          </div>
          <div class="flex gap-3 items-center">
            <Button size="small" variant="secondary" label="Button Text" />
            <Button variant="secondary" label="Button Text" />
            <Button size="big" variant="secondary" label="Button Text" />
          </div>
          <div class="flex gap-3 items-center">
            <Button size="small" variant="destructive" label="Button Text" />
            <Button variant="destructive" label="Button Text" />
            <Button size="big" variant="destructive" label="Button Text" />
          </div>
        </div>
      </Theme>
    `
  })
}

export const ButtonVariants = {
  render: () => ({
    components: { Button, Theme },
    template: `
      <Theme>
        <div class="flex flex-col gap-3">
          <div class="flex gap-5 items-center">
            <Button left-icon="x" />
            <Button left-icon="x" right-icon="circle" label="Button Text" />
            <Button label="Button Text" is-disabled />
            <Button label="Button Text" is-loading />
            <Button label="Button Text" is-transparent />
            <Button label="Button Text" is-additional-area additional-area-icon="chevron-down" />
          </div>
          <div class="flex gap-5 items-center">
            <Button variant="secondary" left-icon="x" />
            <Button variant="secondary" left-icon="x" right-icon="circle" label="Button Text" />
            <Button variant="secondary" label="Button Text" is-disabled />
            <Button variant="secondary" label="Button Text" is-loading />
            <Button variant="secondary" label="Button Text" is-transparent />
            <Button variant="secondary" label="Button Text" is-additional-area additional-area-icon="chevron-down" />
          </div>
          <div class="flex gap-5 items-center">
            <Button variant="destructive" left-icon="x" />
            <Button variant="destructive" left-icon="x" right-icon="circle" label="Button Text" />
            <Button variant="destructive" label="Button Text" is-disabled />
            <Button variant="destructive" label="Button Text" is-loading />
            <Button variant="destructive" label="Button Text" is-transparent />
            <Button variant="destructive" label="Button Text" is-additional-area additional-area-icon="chevron-down" />
          </div>
        </div>
      </Theme>
    `
  })
}
