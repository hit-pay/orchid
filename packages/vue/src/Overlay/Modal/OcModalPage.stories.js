import { Theme, Button, OcModalPage, Icon } from '@/orchidui'
import { ref } from 'vue'

export default {
  component: OcModalPage,
  tags: ['autodocs']
}
export const Default = {
  argTypes: {},
  args: {},
  render: (args) => ({
    components: { Theme, Button, OcModalPage, Icon },
    setup() {
      const modalValue = ref(false)
      return { modalValue, args }
    },
    template: `
      <Theme>
        <div class="h-full">
          <Button label="Toggle Modal Here" @click="modalValue = !modalValue"/>
          
          <OcModalPage
            v-model="modalValue"
            is-close-icon-visible
            is-back-button-visible
          >
            <template #top>
              <div class="flex relative">
                <div>
                  <Icon  name="hitPay" width="24" height="24" />
                </div>

                <div class="ml-auto relative">
                  <Icon name="pencil" width="18" height="18" />
                </div>
              </div>
            </template>

            <div class="max-w-[980px] mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde nesciunt vitae, quis maxime explicabo numquam molestias natus dolores quidem. Provident eligendi rem perferendis tempora ex magnam officia fugiat quae? Ex!
            </div>
          </OcModalPage>
        </div>
      </Theme>
    `
  })
}
