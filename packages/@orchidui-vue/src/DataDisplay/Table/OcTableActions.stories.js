import TableActions from "./OcTableActions.vue";
import Theme from "../../Theme/OcTheme.vue";

export default {
  component: TableActions,
  tags: ["autodocs"],
};
export const Actions = {
  render: () => ({
    components: { TableActions, Theme },
    setup() {
      const tabs = [
        {
          label: "All",
          value: "",
        },
        {
          label: "Filter 01",
          value: "1",
        },
        {
          label: "Filter 02",
          value: "2",
        },
        {
          label: "Filter 03",
          value: "3",
        },
      ];
      return { tabs };
    },
    template: `
          <Theme>
            <TableActions :tabs="tabs"/>
          </Theme>
        `,
  }),
};
