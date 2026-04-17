import { ModalCropper, Theme } from '@/orchidui-core'

export default {
  component: ModalCropper,
  tags: ['autodocs'],
  kind: 'composite',
  description: 'Modal dialog wrapping the Cropper component for in-place image editing and cropping.',
  keywords: ['cropper', 'modal', 'image', 'upload', 'edit', 'crop'],
  use_for: ['image crop dialog', 'profile picture editor', 'inline image editing'],
  understand_with: ['Cropper', 'Modal', 'SingleFileUpload']
}

export const Playground = {
  argTypes: {
    img: { control: 'text' }
  },
  args: {
    img: 'https://picsum.photos/400/300'
  },
  render: (args) => ({
    components: { ModalCropper, Theme },
    setup() {
      return { args }
    },
    template: `
      <Theme>
        <ModalCropper
          :img="args.img"
          @close="() => {}"
          @change-image="() => {}"
        />
      </Theme>
    `
  })
}
