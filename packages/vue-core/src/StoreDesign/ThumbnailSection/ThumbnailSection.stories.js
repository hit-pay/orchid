import { Theme } from '@orchidui/vue-core'
import ThumbnailSection from './ThumbnailSection.vue'

export default {
  tags: ['autodocs'],
  component: ThumbnailSection
}

export const Default = {
  args: {
    sections: [
      {
        name: 'section_1',
        preview: '/images/section.png',
        title: 'Section 1'
      },
      {
        name: 'section_2',
        preview: '/images/section.png',
        title: 'Section 2'
      },
      {
        name: 'section_2',
        preview: '/images/section.png',
        title: 'Section 2'
      }
    ]
  },
  render: (args) => ({
    components: { Theme, ThumbnailSection },
    setup() {
      return { args }
    },
    template: `
          <Theme>
              <div class="grid grid-cols-2 gap-5 w-[535px]">
                <ThumbnailSection v-for="section in args.sections" :section="section"  />
               </div>
          </Theme>
        `
  })
}
