import {
  Theme,
  DataTable,
  Table,
  Chip,
  Icon,
  Toggle,
  TableCellContent,
  Button,
} from "@orchid";

export default {
  component: DataTable,
  tags: ["autodocs"],
};

import { DataTableOptions, Filter } from "../../data/DataTableOptions.sample";
export const Default = {
  args: {
    filter: Filter,
    options: DataTableOptions,
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
      const updateFilterData = (data) => {
        // get new data
        args.filter = data;
      };
      return { args, updateFilterData };
    },
    template: `
          <Theme class="p-8">
            <div>
              <ul>
                <li v-for="(item, key) in args.filter">{{ key }} : {{ item }}</li>
              </ul>
            </div>
            <DataTable id="sample-data-table" :filter="args.filter" :options="args.options" @update:filter="updateFilterData">
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

{
  /* custom filter form <template #custom-filter-form="{updateFilter, errors ,values, jsonForm}">
      filter name:  {{jsonForm[0].name}}
      <Toggle size="small" :model-value="false" @update:modelValue="updateFilter(jsonForm[0],$event)"/>
      </template> */
}
