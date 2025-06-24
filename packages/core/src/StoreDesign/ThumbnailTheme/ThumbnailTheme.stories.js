import { Theme } from '@/orchidui-core'
import ThumbnailTheme from './ThumbnailTheme.vue'

export default {
  tags: ['autodocs'],
  component: ThumbnailTheme
}

export const Default = {
  args: {
    templates: [
      {
        id: 1,
        thumbnail: '/images/theme1.png',
        title: 'Theme Title 1',
        description: 'Description of theme will be here, of theme will be here',
        active: true,
        installed: true
      },
      {
        id: 2,
        thumbnail: '/images/theme1.png',
        title: 'Theme Title 2',
        description: 'Description of theme will be here, of theme will be here',
        active: true,
        installed: true
      },
      {
        id: 3,
        thumbnail: '/images/theme1.png',
        title: 'Theme Title 3',
        description: 'Description of theme will be here, of theme will be here',
        active: false,
        installed: true
      },

      {
        id: 4,
        thumbnail: '/images/theme1.png',
        title: 'Theme Title 4',
        description: 'Description of theme will be here, of theme will be here',
        active: false,
        installed: false
      },
      {
        id: 5,
        thumbnail: '/images/theme1.png',
        title: 'Theme Title 5',
        description: 'Description of theme will be here, of theme will be here',
        active: false,
        installed: false,
        pro: true
      }
    ]
  },
  render: (args) => ({
    components: { Theme, ThumbnailTheme },
    setup() {
      return { args }
    },
    template: `
          <Theme>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-5">
                <ThumbnailTheme if-pro-account  v-for="(theme, idx) in args.templates" :theme="theme" :activating="idx === 0" />
               </div>
          </Theme>
        `
  })
}
