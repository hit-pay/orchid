import { Card, Button, OverviewItem } from "@/orchidui";

export default {
  components: { Button, OverviewItem },
  component: Card,
  tags: ["autodocs"],
};

export const card = {
  args: {
    title: "Card Title",
    titleIcon: "information",
    titleIconTooltip: "Hello I am tooltip!",
    loading: false,
    transparent: false,
    hover: true,
    shadow: false,
  },
  render: (args) => ({
    components: { Card, Button, OverviewItem },
    setup() {
      return {
        args,
      };
    },
    template: `
          <Card :title="args.title"
                :title-icon="args.titleIcon"
                :title-icon-tooltip="args.titleIconTooltip"
                :loading="args.loading"
                :transparent="args.transparent"
                :hover="args.hover"
                :shadow="args.shadow"
          >

            <div class="my-7">
              <OverviewItem v-for="o in 4" :key="o" :title="'Item ' + o" icon="circle" class="mb-4"/>
            </div>
            
            <template #footer>
              <Button>Button</Button>
            </template>
          </Card>
        `,
  }),
};
