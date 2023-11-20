import {
  Theme,
  DataTable,
  Table,
  Chip,
  Icon,
  Toggle,
  TableCellContent,
  Button,
} from "@/orchidui";

import { ref } from "vue";

export default {
  component: DataTable,
  tags: ["autodocs"],
};

import { DataTableOptions, Filter } from "../../data/DataTableOptions.sample";

export const Default = {
  args: {
    filter: Filter,
    options: DataTableOptions,
    isLoading: false,
  },
  render: (args) => ({
    components: {
      DataTable,
      Table,
      Theme,
      Icon,
      Toggle,
      Chip,
      TableCellContent,
      Button,
    },
    setup() {
      const changedFields = ref([]);
      const updateFilterData = (data) => {
        // get new data
        args.filter = data;
      };
      const onClickRow = (val) => {
        console.log("onClickRow  ", val);
      };

      return { args, updateFilterData, onClickRow, changedFields };
    },
    template: `
          <Theme class="p-8">
            <div>
              <ul>
                <li v-for="(item, key) in args.filter">{{ key }} : {{ item }}</li>
              </ul>
              <div>
                Filter fields changed: {{ changedFields }}
              </div>
            </div>
            <DataTable 
                id="sample-data-table" 
                :filter="args.filter" 
                :options="args.options"
                :is-loading="args.isLoading"
                @update:filter="updateFilterData"
                @click:row="onClickRow"
                @filter-fields-changed="changedFields = $event"
             >
              <template #before>
                Slot Before
              </template>
              <template #bulk-actions="{selectedRows}">
                <Button
                    label="Publish"
                    size="small"
                    is-transparent
                    left-icon="eye-open"
                />
                <Button
                    label="Unpublish"
                    is-transparent
                    size="small"
                    variant="secondary"
                    left-icon="eye-close"
                />
                <Button
                    label="Delete"
                    is-transparent
                    size="small"
                    variant="destructive"
                    left-icon="bin"
                />
                {{ selectedRows }}
              </template>
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
                  <Toggle size="small" v-model="data"/>
                  <span class="md:hidden">
                    status
                  </span>
                </div>
              </template>
              <template #actions>
                <Icon class="w-6 h-6 group-hover/row:block md:hidden cursor-pointer mx-auto" name="dots-vertical"/>
              </template>
              <template #after>
                Slot After
              </template>
            </DataTable>
          </Theme>
        `,
  }),
};
