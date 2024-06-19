import { Theme, Icon } from '@/orchidui'
export default {
  component: Icon,
  tags: ['autodocs']
}

export const Default = {
  render: (args) => ({
    components: { Icon, Theme },
    setup() {
      return {
        args
      }
    },
    template: `
          <Theme>
            <div class="w-full h-[400px] flex items-center justify-center">
              <Icon width="22" height="16" name="flags/SG"/>
            </div>
          </Theme>
        `
  })
}
