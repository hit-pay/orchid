import { Tag } from '@orchidui/vue-core'

export default {
  component: Tag,
  tags: ['autodocs']
}

export const Default = {
  args: {},
  render: (args) => ({
    components: { Tag },
    setup() {
      return {
        args
      }
    },
    template: `
          <Tag variant="warning" label="BETA"/>
        `
  })
}
