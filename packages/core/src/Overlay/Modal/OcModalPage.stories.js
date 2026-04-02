import { OcModalPage, Button, Icon, Theme } from '@/orchidui-core'
import { ref } from 'vue'

export default {
  component: OcModalPage,
  tags: ['autodocs']
}

export const Default = {
  args: {
    isCloseIconVisible: true,
    isBackButtonVisible: true
  },
  render: (args) => ({
    components: { OcModalPage, Button, Icon, Theme },
    setup() {
      const isOpen = ref(false)
      return { args, isOpen }
    },
    template: `
      <Theme>
        <div class="h-full">
          <Button label="Open Modal Page" @click="isOpen = true" />

          <OcModalPage v-model="isOpen" v-bind="args">
            <template #top>
              <div class="flex relative">
                <div>
                  <Icon name="hitPay" width="24" height="24" />
                </div>
                <div class="ml-auto relative">
                  <Icon name="pencil" width="18" height="18" />
                </div>
              </div>
            </template>

            <div class="max-w-[980px] mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
            </div>
          </OcModalPage>
        </div>
      </Theme>
    `
  })
}
