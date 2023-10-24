import { Theme, Table, Chip, Icon, Toggle, TableCellContent } from "@orchid";

import { ref } from "vue";
import TableOptions from "./TableOptions";
export default {
  component: Table,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    options: TableOptions,
  },
  render: (args) => ({
    components: {
      Table,
      Theme,
      Icon,
      Toggle,
      Chip,
      TableCellContent,
    },
    setup() {
      const selectedRows = ref([]);
      return { args, selectedRows };
    },
    template: `
          <Theme>
            {{ selectedRows }}
            <Table v-model="selectedRows" :options="args.options">
              <template #col1="{ item }">
                <TableCellContent important :title="item.title" :description="item.descriptions"/>
              </template>
              <template #col4="{ data }">
                <span class="text-oc-text-400 text-sm">{{ data }}</span>
              </template>
              <template #col5="{ data }">
                <Chip variant="success" class="w-fit" :label="data"/>
              </template>
              <template #col6="{ data }">
                <div class="flex gap-3 items-center">
                  <span class="md:hidden">
                  status
                  </span>
                  <Toggle size="small" v-model="data"/>
                </div>
              </template>
              <template #actions>
                <Icon class="w-6 h-6 group-hover/row:block md:hidden cursor-pointer mx-auto" name="dots-vertical"/>
              </template>
            </Table>
          </Theme>
        `,
  }),
};
