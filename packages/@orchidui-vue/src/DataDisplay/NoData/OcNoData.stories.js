import OcNoData from "./OcNoData.vue";

export default {
  component: OcNoData,
  tags: ["autodocs"],
};

export const noData = {
  args: {
    icon: undefined,
    title: undefined,
    description: "No users on the site yet ",
  },
  render: (args) => ({
    components: { OcNoData },
    setup() {
      return { args };
    },
    template: `
          <div>
            <OcNoData
                :icon="args.icon"
                :title="args.title"
                :description="args.description"
            />
          </div>
        `,
  }),
};
