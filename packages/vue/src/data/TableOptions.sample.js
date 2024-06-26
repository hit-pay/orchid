const TableOptions = {
  isSelectable: true,
  headers: [
    {
      key: 'image',
      variant: 'image',
      label: 'Image',
      class: () => {
        return 'w-1/2 md:w-[5%]'
      }
    },
    {
      key: 'col1',
      variant: 'content',
      title: 'title_field',
      description: 'description_field',
      label: 'Table Header',
      class: 'w-1/2 md:w-[20%]'
    },
    {
      key: 'col2',
      label: 'Table Header',
      isCopy: true,
      class: 'w-full md:w-[10%]'
    },
    {
      key: 'col3',
      label: 'Table Header',
      variant: 'datetime',
      class: 'w-1/2 md:w-[12%]'
    },
    {
      key: 'col4',
      label: 'Table Header',
      class: 'w-1/2 md:w-[18%]'
    },
    {
      key: 'col5',
      label: 'Table Header',
      class: 'w-3/6 md:w-[15%]'
    },
    {
      key: 'col6',
      label: 'Header',
      class: 'w-2/6 md:w-[10%]',
      disableClickRow: true
    },
    {
      key: 'actions',
      label: '',
      headerVariant: 'text',
      variant: 'icon',
      class: 'w-1/6 md:w-[5%]'
    }
  ],
  fields: [
    {
      image:
        'https://sportano.ua/img/986c30c27a3d26a3ee16c136f92f4ff5/1/9/195239323706_20-jpg/boksers-ki-krosivki-nike-hyperko-2-olympic-colorway-bili-dj4475-121-581894.jpg',
      title_field: 'Table Cell',
      description_field: 'Table Cell column two',
      col2: 'Table Cell',
      col3: '2023-11-08T03:40:52.000000Z',
      col4: 'Table Cell column two',
      col5: 'Label',
      col6: false,
      link: 'https://orchidui.vercel.app/storybook/'
    },
    {
      image: '',
      title_field: 'Table Cell',
      description_field: 'Table Cell column two',
      col2: 'Table Cell',
      col3: '2023-11-08T03:40:52.000000Z',
      col4: 'Table Cell column two',
      col5: 'Label',
      col6: false
    },
    {
      image: '',
      title_field: 'Table Cell',
      description_field: 'Table Cell column two',
      col2: '',
      col3: '2023-11-08T03:40:52.000000Z',
      col4: '',
      col5: 'Label',
      col6: false,
      col7: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum ultricies justo, sed suscipit erat. Pellentesque vel volutpat nisi. Sed ultrices pharetra ligula, nec tincidunt purus auctor at. Maecenas a neque id arcu iaculis euismod. Morbi ut varius sapien, id ultricies purus. Integer egestas vitae sem feugiat euismod. Morbi bibendum vel ipsum ac viverra. Quisque luctus eros in urna dictum, facilisis condimentum risus suscipit. Cras sed sapien dapibus, eleifend dui eu, faucibus nunc. Fusce ac diam non ex mollis commodo.

Donec pretium a felis id mattis. Nam malesuada lacus et erat pellentesque, eget pharetra erat scelerisque. Nullam eget aliquet lacus, ac rhoncus libero. Cras vel tempus odio, nec consectetur ligula. Nulla eleifend lacus sed erat tincidunt, id convallis urna gravida. Suspendisse potenti. Maecenas sed eleifend justo. Nam in ipsum euismod, ornare mi a, pulvinar sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean varius turpis ac nunc ullamcorper, id volutpat enim finibus. Vivamus tempus mi nec arcu faucibus, sit amet sagittis enim fringilla. Maecenas quis libero tempor, sodales augue ac, rhoncus nulla.`
    },
    {
      image: '',
      title_field: 'Table Cell',
      description_field: 'Table Cell column two',
      col2: 'Table Cell',
      col3: '2023-11-08T03:40:52.000000Z',
      col4: 'Table Cell column two',
      col5: 'Label',
      col6: false
    },
    {
      image: '',
      title_field: 'Table Cell',
      description_field: 'Table Cell column two',
      col2: 'Table Cell',
      col3: '2023-11-08T03:40:52.000000Z',
      col4: 'Table Cell column two',
      col5: 'Label',
      col6: false
    }
  ]
}
const StickyTableOptions = {
  isSelectable: true,
  headers: [
    {
      key: 'image',
      variant: 'image',
      label: 'Image',
      class: 'w-[80px]',
      stickyLeft: true
    },
    {
      key: 'col1',
      variant: 'content',
      title: 'title_field',
      description: 'description_field',
      label: 'Table Header',
      class: 'w-[200px]'
    },
    {
      key: 'col2',
      label: 'Table Header',
      isCopy: true,
      class: 'w-[200px]'
    },
    {
      key: 'col3',
      label: 'Table Header',
      variant: 'datetime',
      class: 'w-[200px]'
    },
    {
      key: 'col4',
      label: 'Table Header',
      class: 'w-[200px]'
    },
    {
      key: 'col5',
      label: 'Table Header',
      class: 'w-[200px]'
    },
    {
      key: 'col6',
      label: 'Header',
      class: 'w-[100px]'
    },
    {
      key: 'col5',
      label: 'Table Header',
      class: 'w-[100px]',
      stickyRight: true
    }
  ],
  fields: [
    {
      image:
        'https://sportano.ua/img/986c30c27a3d26a3ee16c136f92f4ff5/1/9/195239323706_20-jpg/boksers-ki-krosivki-nike-hyperko-2-olympic-colorway-bili-dj4475-121-581894.jpg',
      title_field: 'Table Cell',
      description_field: 'Table Cell column two',
      col2: 'Table Cell',
      col3: '2023-11-08T03:40:52.000000Z',
      col4: 'Table Cell column two',
      col5: 'Label',
      col6: false
    },
    {
      image: '',
      title_field: 'Table Cell',
      description_field: 'Table Cell column two',
      col2: 'Table Cell',
      col3: '2023-11-08T03:40:52.000000Z',
      col4: 'Table Cell column two',
      col5: 'Label',
      col6: false
    },
    {
      image: '',
      title_field: 'Table Cell',
      description_field: 'Table Cell column two',
      col2: 'Table Cell',
      col3: '2023-11-08T03:40:52.000000Z',
      col4: 'Table Cell column two',
      col5: 'Label',
      col6: false
    },
    {
      image: '',
      title_field: 'Table Cell',
      description_field: 'Table Cell column two',
      col2: 'Table Cell',
      col3: '2023-11-08T03:40:52.000000Z',
      col4: 'Table Cell column two',
      col5: 'Label',
      col6: false
    },
    {
      image: '',
      title_field: 'Table Cell',
      description_field: 'Table Cell column two',
      col2: 'Table Cell',
      col3: '2023-11-08T03:40:52.000000Z',
      col4: 'Table Cell column two',
      col5: 'Label',
      col6: false
    }
  ]
}

export { TableOptions, StickyTableOptions }
