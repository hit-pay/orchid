import { Theme, Table, Chip, Icon, Toggle, TableCellContent } from "@/orchidui";

import { ref } from "vue";
import { TableOptions } from "../../data/TableOptions.sample";

export default {
  component: Table,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    options: TableOptions,
    isLoading: false,
    loadingRows: 10,
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
      const onClickRow = (item) => {
        console.log(item);
      };
      return { args, selectedRows, onClickRow };
    },
    template: `
          <Theme>
            <Table v-model="selectedRows" 
              :options="args.options" 
              :is-loading="args.isLoading"
              :loadingRows="args.loadingRows"
              @click:row="onClickRow"
              >
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
