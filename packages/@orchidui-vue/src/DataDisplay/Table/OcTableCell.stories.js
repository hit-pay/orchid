import TableCell from "./OcTableCell.vue";
import Theme from "../../Theme/OcTheme.vue";

export default {
  component: TableCell,
  tags: ["autodocs"],
};
export const Cell = {
  render: () => ({
    components: { TableCell, Theme },
    template: `
          <Theme>
            <div class="flex flex-col gap-y-6">
              <div class="flex gap-x-6">
                <TableCell variant="checkbox"/>
                <TableCell class="max-w-[145px]"/>
                <TableCell variant="icon" icon="dots-vertical"/>
                <TableCell variant="empty"/>
              </div>
              <div class="flex gap-x-6">
                <TableCell is-last variant="checkbox"/>
                <TableCell is-last class="max-w-[145px]"/>
                <TableCell is-last variant="icon" icon="dots-vertical"/>
                <TableCell is-last variant="empty"/>
              </div>
            </div>
          </Theme>
        `,
  }),
};
