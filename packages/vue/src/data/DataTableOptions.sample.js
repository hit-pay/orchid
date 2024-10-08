import { SampleFilterForm } from './FilterForm.sample'

const DataTableOptions = {
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
      key: 'keywords'
    },
    columnEdit: {
      key: 'columnEdit',
      localStorageKey: `test-local-storage-table`
    },
    form: SampleFilterForm
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
        description: 'col3Description',
        isCopy: true,
        addDescriptionToCopyClipboard: true,
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
}

const Filter = {
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
}

export { DataTableOptions, Filter }
