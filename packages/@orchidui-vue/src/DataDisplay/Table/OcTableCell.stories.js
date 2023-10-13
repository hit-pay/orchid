import TableCell from "./OcTableCell.vue";
import Theme from "../../Theme/OcTheme.vue";
import TableCellContent from "./OcTableCellContent.vue";
import Checkbox from "../../Form/Checkbox/OcCheckbox.vue";
import { ref } from "vue";

export default {
  component: TableCell,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    variant: "checkbox",
  },
  render: (args) => ({
    components: { TableCell, Theme, Checkbox },
    setup() {
      const test = ref(false);
      return { test, args };
    },
    template: `
          <Theme>
            <TableCell :variant="args.variant">
              <Checkbox
                  v-if="args.variant === 'checkbox'"
                  v-model="test"
                  class="mx-auto"
              />
              <span v-else>Text</span>
            </TableCell>
          </Theme>
        `,
  }),
};
export const Cell = {
  render: () => ({
    components: { TableCell, Theme, TableCellContent },
    template: `
          <Theme>
            <div class="flex flex-col gap-y-6">
              <div class="flex gap-x-6">
                <TableCell variant="checkbox" is-simple/>
                <TableCell variant="content" class="max-w-[145px]" is-simple>Text</TableCell>
                <TableCell variant="icon" icon="dots-vertical"/>
                <TableCell variant="empty"/>
              </div>
              <div class="flex gap-x-6">
                <TableCell is-last variant="checkbox" is-simple/>
                <TableCell is-last class="max-w-[145px]" is-simple>Text</TableCell>
                <TableCell is-last variant="icon" icon="dots-vertical"/>
                <TableCell is-last variant="empty"/>
              </div>
            </div>
          </Theme>
        `,
  }),
};
