import { Card, Button, OverviewItem, Icon } from "@/orchidui";

export default {
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
    hover: false,
    shadow: false,
    noData: false,
  },
  render: (args) => ({
    components: { Card, Button, OverviewItem, Icon },
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
                :no-data="args.noData"
          >
            <template #header>
              <div class="flex items-center text-oc-warning">
                <Icon name="check" class="mr-2"/> 
                <div>Card Title Slot</div>
              </div>
            </template>

            <div class="my-7">
              <OverviewItem v-for="o in 4" :key="o" :title="'Item ' + o" icon="circle" class="mb-4"/>
            </div>
            
            <template #footer>
              <Button variant="secondary">Button</Button>
            </template>
          </Card>
        `,
  }),
};
