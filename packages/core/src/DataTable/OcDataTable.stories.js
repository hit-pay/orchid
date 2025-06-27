import {
    Theme,
    Table,
    Chip,
    Icon,
    Toggle,
    TableCellContent,
    Button,
    Dropdown,
    DropdownItem,
    DataTable,
  } from '@/orchidui-core'
  
  import { ref } from 'vue'
  
  import dayjs from 'dayjs'
  
  export default {
    component: DataTable,
    tags: ['autodocs']
  }
  
  export const Default = {
    args: {
      options: {
        pagination: {
          total: 50,
          last_page: 20
        },
        // cursor: {
        //   prev: "prev_cursor_key",
        //   next: "next_cursor_key",
        // },
        // perPageOptions: [10,25,50,100],
        filterOptions: {
          per_page: {
            key: 'per_page'
          },
          tabs: {
            key: 'tabs',
            options: [
              { label: 'All', value: '' },
              { label: 'Filter 01', value: '1' },
              { label: 'Filter 02', value: '2' },
              { label: 'Filter 03', value: '3' }
            ]
          },
          actions: {
            applyButton: {
              label: '100 results'
            }
          },
          search: {
            key: 'keywords',
            selectedOption: 'keywords',
            options: [
              { label: 'All', value: 'keywords' },
              { label: 'Filter 01', value: '1' },
              { label: 'Filter 02', value: '2' },
              { label: 'Filter 03', value: '3' }
            ]
          },
          columnEdit: {
            key: 'columnEdit',
            localStorageKey: `test-local-storage-table`
          },
          form: [
            {
              name: 'checkboxes_group',
              type: 'CheckboxesGroup',
              rule: 'required',
              props: {
                label: 'CheckboxesGroup',
                hint: 'This is a hint text to help user',
                alignment: 'vertical',
                checkboxes: [
                  {
                    label: 'Checkbox 1',
                    value: 1
                  },
                  {
                    label: 'Checkbox 2',
                    value: 2
                  },
                  {
                    label: 'Checkbox 3',
                    value: 3,
                    isDisabled: true
                  }
                ]
              }
            },
            {
              name: [
                {
                  key: 'date_range_from'
                },
                {
                  key: 'date_range_to'
                }
              ],
              type: 'DatePicker',
              props: {
                type: 'range',
                label: 'DatePicker Range',
                hint: 'This is a hint text to help user',
                placeholder: 'placeholder',
                maxDate: dayjs().format('YYYY-MM-DD')
              }
            },
            {
              name: [
                {
                  key: 'total_range_from'
                },
                {
                  key: 'total_range_to'
                }
              ],
              type: 'RangeInput',
              props: {
                label: 'RangeInput',
                hint: 'This is a hint text to help user',
                placeholder: 'placeholder',
                onlyInput: true
              }
            },
            {
              name: 'select',
              type: 'Select',
              props: {
                label: 'Select',
                hint: 'This is a hint text to help user',
                placeholder: 'placeholder',
                options: [
                  {
                    label: 'Option 1',
                    value: 1
                  },
                  {
                    label: 'Option 2',
                    value: 2
                  },
                  {
                    label: 'Option 3',
                    value: 3
                  },
                  {
                    label: 'Option 4',
                    value: 4
                  }
                ]
              }
            }
          ]
        },
        tableOptions: {
          isSticky: false,
          isSelectable: true,
          isCursorPointer: true,
          isBorderless: false,
          headers: [
            {
              key: 'image',
              variant: 'image',
              label: 'Image',
              class: 'w-1/2 md:min-w-[5%]'
            },
            {
              key: 'col1',
              label: 'Table Header 1',
              class: 'w-1/2 md:min-w-[20%]'
            },
            {
              key: 'col2',
              label: 'Table Header 2',
              class: 'w-1/2 md:min-w-[10%]'
            },
            {
              key: 'col3',
              variant: 'content',
              label: 'Table Header 3',
              title: 'col3Title',
              href: 'col3Url',
              description: 'col3Description',
              isCopy: true,
              addDescriptionToCopyClipboard: true,
              class: 'w-1/2 md:min-w-[12%]'
            },
            {
              key: 'col4',
              label: 'Table Header 4',
              class: 'w-1/2 md:min-w-[18%]'
            },
            {
              key: 'col5',
              label: 'Table Header 5',
              class: 'w-1/2 md:min-w-[15%]',
              variant: 'chip',
              chipOptions: {
                Label: {
                  label: 'Label',
                  variant: 'success',
                  icon: 'check'
                }
              }
            },
            {
              key: 'col6',
              label: 'Header',
              class: 'w-1/2 md:min-w-[10%]'
            },
            {
              key: 'actions',
              label: '',
              headerVariant: 'text',
              variant: 'icon',
              class: 'w-1/2 md:min-w-[5%]'
            }
          ],
          fields: [
            {
              image:
                'https://sportano.ua/img/986c30c27a3d26a3ee16c136f92f4ff5/1/9/195239323706_20-jpg/boksers-ki-krosivki-nike-hyperko-2-olympic-colorway-bili-dj4475-121-581894.jpg',
              imageTitle: 'Table Cell',
              imageDescription: 'Table Cell column two',
              col2: 'Table Cell',
              col3Title: 'Table Cell ',
              col3Description: 'Table cell column four',
              col3Url: 'https://hitpayapp.com',
              col4: 'Table Cell column two',
              col5: 'Label',
              link: 'https://google.com',
              col6: false,
              id: crypto.randomUUID()
            },
            {
              image: '',
              imageTitle: 'Table Cell',
              imageDescription: '',
              col2: 'Table Cell',
              col3Title: 'Table Cell',
              col4: 'Table Cell column two',
              col5: 'Label',
              col6: false,
              id: crypto.randomUUID()
            },
            {
              image: '',
              imageTitle: 'Table Cell',
              imageDescription: 'Table Cell column two',
              col2: '',
              col3Title: '',
              col4: '',
              col5: 'Label',
              col6: false,
              id: crypto.randomUUID()
            },
            {
              image: '',
              imageTitle: '',
              imageDescription: 'Table Cell column two',
              col2: 'Table Cell',
              col3Title: 'Table Cell',
              col4: 'Table Cell column two',
              col5: 'Label',
              col6: false,
              id: crypto.randomUUID()
            },
            {
              image: '',
              imageTitle: 'Table Cell',
              imageDescription: 'Table Cell column two',
              col2: 'Table Cell',
              col3Title: 'Table Cell',
              col4: 'Table Cell column two',
              col5: 'Label',
              col6: false,
              id: crypto.randomUUID()
            },
            {
              image: '',
              imageTitle: '',
              imageDescription: 'Table Cell column two',
              col2: 'Table Cell',
              col3Title: 'Table Cell',
              col4: 'Table Cell column two',
              col5: 'Label',
              col6: false,
              id: crypto.randomUUID()
            },
            {
              image: '',
              imageTitle: 'Table Cell',
              imageDescription: 'Table Cell column two',
              col2: 'Table Cell',
              col3Title: 'Table Cell',
              col4: 'Table Cell column two',
              col5: 'Label',
              col6: false,
              id: crypto.randomUUID()
            },
            {
              image: '',
              imageTitle: '',
              imageDescription: 'Table Cell column two',
              col2: 'Table Cell',
              col3Title: 'Table Cell',
              col4: 'Table Cell column two',
              col5: 'Label',
              col6: false,
              id: crypto.randomUUID()
            },
            {
              image: '',
              imageTitle: 'Table Cell',
              imageDescription: 'Table Cell column two',
              col2: 'Table Cell',
              col3Title: 'Table Cell',
              col4: 'Table Cell column two',
              col5: 'Label',
              col6: false,
              id: crypto.randomUUID()
            },
            {
              image: '',
              imageTitle: '',
              imageDescription: 'Table Cell column two',
              col2: 'Table Cell',
              col3Title: 'Table Cell',
              col4: 'Table Cell column two',
              col5: 'Label',
              col6: false,
              id: crypto.randomUUID()
            }
          ]
        }
      },
      isLoading: false
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
        DropdownItem
      },
      setup() {
        const filter = ref({
          page: 1,
          per_page: 10,
          tabs: '',
          columnEdit: {
            active: [
              {
                key: 'col1',
                isActive: false
              }
            ]
          }
        })
        const changedFields = ref([])
        const selectedRows = ref([])
        const showDropdown = ref({})
        const updateFilterData = (data) => {
          filter.value = data
          console.log(123, filter.value)
        }
        const onClickRow = (val) => {
          console.log('onClickRow  ', val)
        }
  
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
          onClickRow
        }
      },
      template: `
            <Theme class="p-8">
              <DataTable 
                  id="sample-data-table"
                  v-model:selected="selectedRows"
                  row-key="id"
                  row-link="link"
                  :filter="filter" 
                  :options="args.options"
                  :is-loading="args.isLoading"
                  @update:filter="updateFilterData"
                  @click:row="onClickRow"
                  @filter-fields-changed="changedFields = $event"
                  @hover:cell="console.log('hover:cell: ', $event)"
               >
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
              </DataTable>
            </Theme>
          `
    })
  }
  
  export const FilterTabSameKeyFilterDefault = {
    args: {
      options: {
        pagination: {
          total: 50,
          last_page: 20
        },
        filterOptions: {
          per_page: {
            key: 'per_page'
          },
          tabs: {
            key: 'status',
            options: [
              { label: 'All', value: '' },
              { label: 'Filter 01', value: ['1'] },
              { label: 'Filter 02', value: ['2'] },
              { label: 'Filter 03', value: ['3'] }
            ]
          },
          form: [
            {
              name: 'status',
              type: 'Select',
              props: {
                label: 'Select Status',
                hint: 'This is a hint text to help user',
                placeholder: 'placeholder',
                multiple: true,
                options: [
                  {
                    label: 'Option 1',
                    value: '1'
                  },
                  {
                    label: 'Option 2',
                    value:'2'
                  },
                  {
                    label: 'Option 3',
                    value: '3'
                  },
                  {
                    label: 'Option 4',
                    value: '4'
                  }
                ]
              }
            }
          ]
        },
        tableOptions: {
          headers: [
            {
              key: 'image',
              variant: 'image',
              label: 'Image',
              class: 'w-1/2 md:min-w-[5%]'
            },
            {
              key: 'col1',
              label: 'Table Header',
              class: 'w-1/2 md:min-w-[20%]'
            },
            {
              key: 'col2',
              label: 'Table Header',
              class: 'w-1/2 md:min-w-[10%]'
            },
            {
              key: 'col3',
              variant: 'content',
              label: 'Table Header',
              title: 'col3Title',
              href: 'col3Url',
              class: 'w-1/2 md:min-w-[12%]'
            },
            {
              key: 'col4',
              label: 'Table Header',
              class: 'w-1/2 md:min-w-[18%]'
            },
            {
              key: 'col5',
              label: 'Table Header',
              class: 'w-1/2 md:min-w-[15%]',
              variant: 'chip',
              chipOptions: {
                Label: {
                  label: 'Label',
                  variant: 'success',
                  icon: 'check'
                }
              }
            },
            {
              key: 'col6',
              label: 'Header',
              class: 'w-1/2 md:min-w-[10%]'
            },
            {
              key: 'actions',
              label: '',
              headerVariant: 'text',
              variant: 'icon',
              class: 'w-1/2 md:min-w-[5%]'
            }
          ],
          fields: [
            {
              image: '',
              imageTitle: '',
              imageDescription: 'Table Cell column two',
              col2: 'Table Cell',
              col3Title: 'Table Cell',
              col4: 'Table Cell column two',
              col5: 'Label',
              col6: false,
              id: crypto.randomUUID()
            }
          ]
        }
      },
    },
    render: (args) => ({
      components: {
        DataTable,
        Theme,
      },
      setup() {
        const filter = ref({
          page: 1,
          per_page: 10,
          status: '',
        })
        const updateFilterData = (data) => {
          console.log('updateFilterData', data)
        }
        return {
          args,
          filter,
          updateFilterData
        }
      },
      template: `
            <Theme class="p-8">
              <DataTable 
                  id="sample-data-table-tab-same-key"
                  :options="args.options"
                  :filter="filter" 
                  @update:filter="updateFilterData"
               >
              </DataTable>
            </Theme>
          `
    })
  }

  export const NewTable = {
    args: {
      options: {
        pagination: {
          total: 50,
          last_page: 20
        },
        // cursor: {
        //   prev: "prev_cursor_key",
        //   next: "next_cursor_key",
        // },
        // perPageOptions: [10,25,50,100],
        filterOptions: {
          per_page: {
            key: 'per_page'
          },
          tabs: {
            key: 'tabs',
            options: [
              { label: 'All', value: '' },
              { label: 'Filter 01', value: '1' },
              { label: 'Filter 02', value: '2' },
              { label: 'Filter 03', value: '3' }
            ]
          },
          actions: {
            applyButton: {
              label: '100 results'
            }
          },
          search: {
            key: 'keywords',
            selectedOption: 'keywords',
            options: [
              { label: 'All', value: 'keywords' },
              { label: 'Filter 01', value: '1' },
              { label: 'Filter 02', value: '2' },
              { label: 'Filter 03', value: '3' }
            ]
          },
          columnEdit: {
            key: 'columnEdit',
            localStorageKey: `test-local-storage-table`
          },
          form: [
            {
              name: 'checkboxes_group',
              type: 'CheckboxesGroup',
              rule: 'required',
              props: {
                label: 'CheckboxesGroup',
                hint: 'This is a hint text to help user',
                alignment: 'vertical',
                checkboxes: [
                  {
                    label: 'Checkbox 1',
                    value: 1
                  },
                  {
                    label: 'Checkbox 2',
                    value: 2
                  },
                  {
                    label: 'Checkbox 3',
                    value: 3,
                    isDisabled: true
                  }
                ]
              }
            },
            {
              name: [
                {
                  key: 'date_range_from'
                },
                {
                  key: 'date_range_to'
                }
              ],
              type: 'DatePicker',
              props: {
                type: 'range',
                label: 'DatePicker Range',
                hint: 'This is a hint text to help user',
                placeholder: 'placeholder',
                maxDate: dayjs().format('YYYY-MM-DD')
              }
            },
            {
              name: [
                {
                  key: 'total_range_from'
                },
                {
                  key: 'total_range_to'
                }
              ],
              type: 'RangeInput',
              props: {
                label: 'RangeInput',
                hint: 'This is a hint text to help user',
                placeholder: 'placeholder',
                onlyInput: true
              }
            },
            {
              name: 'select',
              type: 'Select',
              props: {
                label: 'Select',
                hint: 'This is a hint text to help user',
                placeholder: 'placeholder',
                options: [
                  {
                    label: 'Option 1',
                    value: 1
                  },
                  {
                    label: 'Option 2',
                    value: 2
                  },
                  {
                    label: 'Option 3',
                    value: 3
                  },
                  {
                    label: 'Option 4',
                    value: 4
                  }
                ]
              }
            }
          ]
        },
        tableOptions: {
          isSticky: true,
          isSelectable: true,
          isCursorPointer: true,
          isBorderless: false,
          headers:  [
            {
              key: 'date',
              label: 'Date',
              class: 'font-reddit-mono',
              stickyLeft: true
            },
            {
              key: 'email',
              label: 'Email',
            },
            {
              key: 'id',
              label: 'ID',
              isCopy: true,
              class: 'text-oc-text-400'
            },
            {
              key: 'amount',
              label: 'Amount',
              class: 'font-reddit-mono font-semibold'
            },
            {
              key: 'method',
              label: 'Method',
              class: 'text-oc-text-400'
            },
            {
              key: 'status',
              label: 'Status',
              stickyRight: true
            }
          ],
          fields: [
            {
              date: new Date(),
              email: 'john.doe@example.com',
              id: `#${crypto.randomUUID()}`,
              amount: '2,234.56',
              currency: 'SGD',
              payment_method: 'visa',
              last4Digits: '1234',
              status: 'success'
            },
            {
              date: new Date(),
              email: 'test.doe@example.com',
              id: `#${crypto.randomUUID()}`,
              amount: '1,234.56',
              currency: 'SGD',
              payment_method: 'visa',
              last4Digits: '3214',
              status: 'neutral'
            },
            {
              date: new Date(),
              email: 'john.doe@example.com',
              id: `#${crypto.randomUUID()}`,
              amount: '2,234.56',
              currency: 'SGD',
              payment_method: 'visa',
              last4Digits: '1234',
              status: 'success'
            },
            {
              date: new Date(),
              email: 'test.doe@example.com',
              id: `#${crypto.randomUUID()}`,
              amount: '1,234.56',
              currency: 'SGD',
              payment_method: 'visa',
              last4Digits: '3214',
              status: 'neutral'
            },
            {
              date: new Date(),
              email: 'john.doe@example.com',
              id: `#${crypto.randomUUID()}`,
              amount: '2,234.56',
              currency: 'SGD',
              payment_method: 'visa',
              last4Digits: '1234',
              status: 'success'
            },
            {
              date: new Date(),
              email: 'test.doe@example.com',
              id: `#${crypto.randomUUID()}`,
              amount: '1,234.56',
              currency: 'SGD',
              payment_method: 'visa',
              last4Digits: '3214',
              status: 'neutral'
            },
            {
              date: new Date(),
              email: 'john.doe@example.com',
              id: `#${crypto.randomUUID()}`,
              amount: '2,234.56',
              currency: 'SGD',
              payment_method: 'visa',
              last4Digits: '1234',
              status: 'success'
            },
            {
              date: new Date(),
              email: 'test.doe@example.com',
              id: `#${crypto.randomUUID()}`,
              amount: '1,234.56',
              currency: 'SGD',
              payment_method: 'visa',
              last4Digits: '3214',
              status: 'neutral'
            }
          ],
          
        }
      },
      isLoading: false
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
        DropdownItem
      },
      setup() {
        const filter = ref({
          page: 1,
          per_page: 10,
          tabs: '',
          columnEdit: {
            active: [
              {
                key: 'col1',
                isActive: false
              }
            ]
          }
        })
        const changedFields = ref([])
        const selectedRows = ref([])
        const showDropdown = ref({})
        const updateFilterData = (data) => {
          filter.value = data
          console.log(123, filter.value)
        }
        const onClickRow = (val) => {
          console.log('onClickRow  ', val)
        }
  
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
          dayjs
        }
      },
      template: `
            <Theme class="p-8">
              <DataTable 
                  id="sample-data-table"
                  v-model:selected="selectedRows"
                  row-key="id"
                  row-link="link"
                  :filter="filter" 
                  :options="args.options"
                  :is-loading="args.isLoading"
                  is-new-table
                  @update:filter="updateFilterData"
                  @click:row="onClickRow"
                  @filter-fields-changed="changedFields = $event"
                  @hover:cell="console.log('hover:cell: ', $event)"
               >
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

                  <template #date="{ item }">
                    <div class="truncate">
                      {{ dayjs(item.date).format('YYYY-MM-DD HH:mm:ss') }}
                    </div>
                  </template>
                  <template #amount="{ item }">
                    {{ item.currency }} {{ item.amount }}
                  </template>
                  <template #method="{ item }">
                    {{ item.payment_method }} •••• {{ item.last4Digits }}
                  </template>
                  <template #status="{ item }">
                    <Chip :variant="item.status" label="Some label" class="truncate" />
                  </template>
                </DataTable>
            </Theme>
        `
    })
  }
