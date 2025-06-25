import { Theme } from '@/orchidui-core'
import { TextEditor } from '@/orchidui-dashboard'
import { ref } from 'vue'

export default {
  component: TextEditor,
  tags: ['autodocs']
}
export const Default = {
  args: {
    label: 'Label',
    isRequired: true,
    fontSizes: [
      {
        label: 'Default',
        value: '14px'
      },
      {
        label: 'Medium',
        value: '16px'
      },
      {
        label: 'Large',
        value: '18px'
      },
      {
        label: 'Extra Large',
        value: '20px'
      }
    ],
    initialFontSize: '14px',
    placeholder: 'Placeholder'
  },
  render: (args) => ({
    components: { TextEditor, Theme },
    setup() {
      const modelValue = ref('')
      const modelValue2 = ref('')
      const onUpdateImage = () => {
        // console.log(base64);
      }
      return { args, modelValue, modelValue2, onUpdateImage }
    },
    template: `
          <Theme>

            <div @click="modelValue = ''">Clear</div>
            <div @click="modelValue = 'default model value'">Reset</div>

            Full Editor
            <TextEditor id="quill-example" v-model="modelValue" v-bind="args" @update:image="onUpdateImage"/>
             <div class="flex gap-y-6 flex-col mt-8">Preview
              <div v-html="modelValue"/>
            </div>
            Text Only Editor
            <TextEditor id="quill-example-text-only" variant="text-only" v-model="modelValue2" v-bind="args" />
 <div class="flex gap-y-6 flex-col mt-8">Preview
              <div v-html="modelValue2"/>
            </div>
           
          </Theme>
        `
  })
}
