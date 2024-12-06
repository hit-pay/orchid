import Card from './OcCard.vue'

export default {
  component: Card,
  tags: ['autodocs']
}

export const Default = {
  args: {
    title: 'Beginner guide for Payment Links',
    description: 'You will learn how to manage (create, update, view) your payment link.'
  },
  render: (args) => ({
    components: {
      Card
    },
    setup() {
      return { args }
    },
    template: `
          <div class="flex flex-col gap-y-5 max-w-[552px]">
            <Card type="education" v-bind="args"/>
            <Card type="cross_feature" v-bind="args"/>

            <Card type="cross_sell_pos" v-bind="args"/>
            <Card type="cross_sell_os" v-bind="args"/>

            <Card type="video" v-bind="args"/>
          </div>

          <div class="mt-5 gap-y-5 flex flex-col">
            <Card type="cross_sell_pos" is-full v-bind="args"/>
            <Card type="cross_sell_os" is-full v-bind="args"/>
          </div>
        `
  })
}
