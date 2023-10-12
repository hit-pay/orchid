import TableSearchFor from "./OcTableSearchFor.vue";
import Theme from "../../Theme/OcTheme.vue";

export const SearchFor = {
  render: () => ({
    components: { TableSearchFor, Theme },
    template: `
          <Theme>
            <div class="flex gap-x-6">
              <TableSearchFor/>
            </div>
          </Theme>
        `,
  }),
};
