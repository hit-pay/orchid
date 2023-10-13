import TableSearchFor from "./OcTableSearchFor.vue";
import Theme from "../../Theme/OcTheme.vue";

export default {
  component: TableSearchFor,
  tags: ["autodocs"],
};

export const SearchFor = {
  args: {
    queries: ["filter1", "filter3", "filter2"],
  },
  render: (args) => ({
    components: { TableSearchFor, Theme },
    setup() {
      return { args };
    },
    template: `
          <Theme>
            <div class="flex gap-x-6">
              <TableSearchFor :queries="args.queries"/>
            </div>
          </Theme>
        `,
  }),
};
