import {
  Theme,
  Table,
  Chip,
  Icon,
  Toggle,
  TableCellContent,
  TableCell,
  ExpandingTable
} from '@/orchidui'
import TextEditor from '../../Form/TextEditor/OcTextEditor.vue'

import { ref } from 'vue'
import { TableOptions, StickyTableOptions } from '../../data/TableOptions.sample'

export default {
  component: Table,
  tags: ['autodocs']
}

export const Default = {
  args: {
    options: TableOptions,
    isLoading: false,
    isSticky: false,
    loadingRows: 10
  },
  render: (args) => ({
    components: {
      Table,
      Theme,
      Icon,
      Toggle,
      Chip,
      TableCellContent
    },
    setup() {
      const selectedRows = ref([])
      const onClickRow = (item) => {
        console.log('on click row', item)
      }

      const rowClass = (r, i) => `z-[${100 - i}]`
      return { StickyTableOptions, args, selectedRows, onClickRow, rowClass }
    },
    template: `
          <Theme>
            <Table v-model="selectedRows"
                   :options="args.isSticky ? StickyTableOptions : args.options"
                   :is-loading="args.isLoading"
                   :is-sticky="args.isSticky"
                   :loadingRows="args.loadingRows"
                   :row-class="rowClass"
                   row-link="link"
                   @click:row="onClickRow"
            >
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
        `
  })
}

export const ExtraContent = {
  args: {
    options: TableOptions,
    isLoading: false,
    loadingRows: 10
  },
  render: (args) => ({
    components: {
      Table,
      Theme,
      Icon,
      Toggle,
      Chip,
      TableCellContent,
      TableCell,
      TextEditor
    },
    setup() {
      const selectedRows = ref([])
      const onClickRow = (item) => {
        console.log('on click row', item)
      }
      return { args, selectedRows, onClickRow }
    },
    template: `
          <Theme>
            <Table v-model="selectedRows"
                   :options="args.options"
                   :is-loading="args.isLoading"
                   :loadingRows="args.loadingRows"
                   @click-row="onClickRow"
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
              <template #extra="{ item, index }">
                <TableCell
                    v-if="item.col7"
                    class="flex border-oc-gray-200 w-full"
                    :is-last="args.options.fields.length === index + 1"
                >
                  <TextEditor
                      v-model="item.col7"
                      v-bind="{fontSizes:[{label:'Default',value:'14px'},{label:'Medium',value:'16px'},{label:'Large',value:'18px'},{label:'Extra Large',value:'20px'}],initialFontSize:'14px'}"
                  />
                </TableCell>
              </template>
              <template #actions>
                <Icon class="w-6 h-6 group-hover/row:block md:hidden cursor-pointer mx-auto" name="dots-vertical"/>
              </template>
            </Table>
          </Theme>
        `
  })
}
export const expandingTable = {
  args: {},
  render: (args) => ({
    components: {
      ExpandingTable
    },
    setup() {
      const selectedRows = ref([])

      const headers = [
        {
          key: 'gross_sales',
          label: 'Gross Sales',
          important: true,
          children: [
            {
              label: 'Quick Sale',
              key: 'quick_sale'
            },
            {
              label: 'Products',
              key: 'products'
            }
          ]
        },
        {
          label: 'Surcharges',
          key: 'surcharges',
          infoText: 'Additional charge or payment'
        }
      ]
      const fields = {
        gross_sales: {
          quick_sale: 100,
          products: 200
        },
        surcharges: 50
      }
      return { args, headers, fields, selectedRows }
    },
    template: `
          <div class="p-10">
            <ExpandingTable :headers="headers" :fields="fields">
              <template #gross_sales="{value}">
                {{ Object.values(value).reduce((acc, numb) => acc + numb, 0) }}
              </template>
            </ExpandingTable>
          </div>
        `
  })
}
