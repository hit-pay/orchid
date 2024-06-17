import { Theme } from '@/orchidui'
import ThumbnailTheme from './ThumbnailTheme.vue'

export default {
  tags: ['autodocs'],
  component: ThumbnailTheme
}

export const Default = {
  args: {
    templates: [
      {
        id: 2,
        thumbnail: '/images/theme1.png',
        title: 'Theme Title 2',
        description: 'Description of theme will be here, of theme will be here',
        active: true
      },
      {
        id: 3,
        thumbnail: '/images/theme1.png',
        title: 'Theme Title 3',
        description: 'Description of theme will be here, of theme will be here',
        pro: true
      },

      {
        id: 4,
        thumbnail: '/images/theme1.png',
        title: 'Theme Title 4',
        description: 'Description of theme will be here, of theme will be here',
        draft: true
      },

      {
        id: 1,
        thumbnail: '/images/theme1.png',
        title: 'Theme Title 1',
        description: 'Description of theme will be here, of theme will be here'
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
                <ThumbnailTheme  v-for="(theme, idx) in args.templates" :theme="theme" :activating="idx === 0" />
               </div>
          </Theme>
        `
  })
}
