import {
  Theme,
  DataTable,
  Table,
  Chip,
  Icon,
  Toggle,
  TableCellContent,
  Button,
  Dropdown,
  DropdownItem,
} from "@/orchidui";

import { ref } from "vue";

export default {
  component: DataTable,
  tags: ["autodocs"],
};

import { DataTableOptions, Filter } from "../../data/DataTableOptions.sample";

export const Default = {
  args: {
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
      Dropdown,
      DropdownItem,
    },
    setup() {
      const filter = ref(Filter);
      const changedFields = ref([]);
      const selectedRows = ref([]);
      const showDropdown = ref({})
      const updateFilterData = (data) => {
        filter.value = data;
      };
      const onClickRow = (val) => {
        console.log("onClickRow  ", val);
      };

      const handleOpenDropdown = (itemId) => {
        Object.keys(showDropdown.value).forEach((id) => {
          if (id !== itemId) {
            showDropdown.value[id] = false
          }
        })
      }

      return {
        args,
        filter,
        changedFields,
        selectedRows,
        showDropdown,
        handleOpenDropdown,
        updateFilterData,
        onClickRow,
      };
    },
    template: `
          <Theme class="p-8">
            <div>
               <pre class="bg-black text-white p-4 rounded mb-5">{{filter}}</pre>
              <div>
                Filter fields changed: {{ changedFields }}
              </div>
              <div>
                Selected item: {{ selectedRows.map(({ id }) => id).join(', ') }}
              </div>
            </div>
            <DataTable 
                id="sample-data-table"
                v-model:selected="selectedRows"
                row-key="id"
                :filter="filter" 
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
              </template>
              <template #col1="{ item }">
                <TableCellContent important :title="item.imageTitle" :description="item.imageDescription"/>
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
              <template #actions="{ item }">
                <Dropdown
                  v-model="showDropdown[item.id]"
                  :distance="10"
                  @update:modelValue="handleOpenDropdown(item.id)"
                >
                  <Icon class="w-6 h-6 group-hover/row:block md:hidden cursor-pointer mx-auto" name="dots-vertical"/>


                  <template #menu>
                    <div class="flex flex-col">
                      <div class="p-2 border-b border-gray-200">
                        <DropdownItem
                          text="Copy Link"
                          icon="copy"
                        />
                        <DropdownItem
                        text="Resend e-mail"
                          icon="telegram"
                        />
                        <DropdownItem
                          text="Download PDF"
                          icon="download"
                        />
                      </div>
                      <div class="p-2">
                        <DropdownItem
                          text="Delete"
                          icon="bin"
                          variant="destructive"
                        />
                      </div>
                    </div>
                  </template>
                </Dropdown>
              </template>
              <template #after>
                Slot After
              </template>
            </DataTable>
          </Theme>
        `,
  }),
};
