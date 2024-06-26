import CodeBlock from './OcCodeBlock.vue'

export default {
  component: CodeBlock,
  tags: ['autodocs']
}

export const Default = {
  argTypes: {
    lang: {
      control: 'select',
      options: ['json', 'text']
    }
  },
  args: {
    lang: 'json',
    jsonObject: `{
  "widget": {
    "debug": "on",
    "window": {
      "title": "Sample Konfabulator Widget",
      "name": "main_window",
      "width": 500,
      "height": 500
    },
    "image": {
      "src": "Images/Sun.png",
      "name": "sun1",
      "hOffset": 250,
      "vOffset": 250,
      "alignment": "center"
    },
    "text": {
      "data": "Click Here",
      "size": 36,
      "style": "bold",
      "name": "text1",
      "hOffset": 250,
      "vOffset": 100,
      "alignment": "center",
      "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
  }
}`
  },
  render: (args) => ({
    components: {
      CodeBlock
    },
    setup() {
      return { args }
    },
    template: `
          <CodeBlock :json-object="args.jsonObject" :lang="args.lang" :key="args.lang"/>
        `
  })
}
