import Theme from "../../Theme/OcTheme.vue";
import TableHeader from "./OcTableHeader.vue";

export default {
  component: TableHeader,
  tags: ["autodocs"],
};
export const Header = {
  render: () => ({
    components: { TableHeader, Theme },
    template: `
          <Theme>
            <div class="flex gap-x-6">
              <TableHeader text="Table Header"/>
              <TableHeader variant="checkbox"/>
            </div>
          </Theme>
        `,
  }),
};
