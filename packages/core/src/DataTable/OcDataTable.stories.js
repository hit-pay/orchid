import {
  Theme,
  Table,
  Chip,
  Icon,
  Toggle,
  TableCellContent,
  Button,
  Dropdown,
  DropdownItem
} from '@/orchidui-core'

import { DataTable } from '@/orchidui-core'

import { ref } from 'vue'

import dayjs from 'dayjs'

export default {
  component: DataTable,
  tags: ['autodocs']
}
import { db, removeOldLocalDB } from './db'
import { useDataTable } from './useDataTable'

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
          key: 'status',
          options: [
            { label: 'All', value: '' },
            { label: 'Published', value: 'published' },
            { label: 'Draft', value: 'draft' },
          ]
        },
        actions: {
          applyButton: {
            label: 'Apply Filter'
          }
        },
        search: {
          key: 'name',
        },
        columnEdit: {
          key: 'columnEdit',
          localStorageKey: `column-edit-products-table`
        },
        form: [
          {
            name: 'available',
            type: 'Select',
            props: {
              label: 'Inventory',
              hint: 'This is a hint text to help user',
              placeholder: 'Select Inventory',
              options: [
                {
                  label: 'In Stock',
                  value: true
                },
                {
                  label: 'Out of Stock',
                  value: false
                }
              ]
            }
          },
          {
            name: 'channels',
            type: 'Select',
            props: {
              label: 'Select',
              hint: 'This is a hint text to help user',
              placeholder: 'placeholder',
              multiple: true,
              options: [
                {
                  label: 'Invoice',
                  value: 'invoice'
                },
                {
                  label: 'POS',
                  value: 'pos'
                },
                {
                  label: 'Online Store',
                  value: 'online_store'
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
            key: 'name',
            label: 'Product Name',
            class: 'w-1/2 md:min-w-[20%]'
          },
          {
            key: 'available_quantity',
            label: 'Available',
            class: 'w-1/2 md:min-w-[10%]'
          },
          {
            key: 'category_names',
            label: 'Categories',
            class: 'w-1/2 md:min-w-[12%]'
          },
          {
            key: 'amount',
            label: 'Amount',
            class: 'w-1/2 md:min-w-[18%]'
          },
          {
            key: 'status',
            label: 'Status',
            class: 'w-1/2 md:min-w-[15%]',
          },
          {
            key: 'actions',
            label: '',
            headerVariant: 'text',
            variant: 'icon',
            class: 'w-1/2 md:min-w-[5%]'
          }
        ],
        fields: []
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
      const sortBy = ref([
        {
          column: 'created_at',
          direction: 'desc'
        }
      ])
      const changedFields = ref([])
      const selectedRows = ref([])
      const showDropdown = ref({})

      const updateFilterData = (data) => {
        filter.value = data
      }

      const updateSortBy = (data) => {
        sortBy.value = data
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
      removeOldLocalDB()

      const localDataOptions = {
        db: db,
        table_name: 'products'
      }

      const fieldData = [
        {
            "id": "9ec1eb47-bb7c-40a5-9785-b181cbdda21b",
            "business_id": "9389861a-e539-4714-8dac-2cd53710b677",
            "category_id": [
                {
                    "id": "9e6dcc87-a646-4a26-b061-cfba72d6bc74",
                    "business_id": "9389861a-e539-4714-8dac-2cd53710b677",
                    "parent_id": null,
                    "name": "Category 1",
                    "handle": "category-1",
                    "emoji": null,
                    "pos_color": null,
                    "description": "<p><span style=\"font-size: 14px;\">Loremmm das dasmndas dasjda dasdas</span></p>",
                    "active": true,
                    "order": 1,
                    "total_products": 1,
                    "created_at": "2025-03-14T09:23:20.000000Z",
                    "updated_at": "2025-05-27T06:40:36.000000Z",
                    "is_active": true,
                    "pivot": {
                        "product_id": "9ec1eb47-bb7c-40a5-9785-b181cbdda21b",
                        "category_id": "9e6dcc87-a646-4a26-b061-cfba72d6bc74",
                        "order": 1
                    }
                }
            ],
            "name": "Product Variant",
            "headline": null,
            "description": "<p><span style=\"font-size:14px;\">das</span></p>",
            "stock_keeping_unit": null,
            "currency": "sgd",
            "price": 100,
            "price_before_discount": null,
            "price_display": "SGD 100.00",
            "price_stored": 10000,
            "is_manageable": 1,
            "is_pinned": true,
            "status": "published",
            "product_weight": null,
            "delivery_method_required": true,
            "has_variations": true,
            "is_shopify": false,
            "is_woocommerce": false,
            "order": 3,
            "quantity": 0,
            "quantity_alert_level": null,
            "min_order_quantity": null,
            "max_order_quantity": null,
            "emoji": null,
            "open_amount": false,
            "product_url": "https://link.src.test/wywcxo",
            "variations_count": 2,
            "variations": [
                {
                    "id": "9ec1eb47-be52-4726-93dd-074e5a9a359b",
                    "stock_keeping_unit": null,
                    "barcode": null,
                    "description": "S",
                    "values": [
                        {
                            "key": "Size",
                            "value": "S"
                        }
                    ],
                    "price": 100,
                    "price_display": "SGD 100.00",
                    "price_stored": 10000,
                    "quantity": 0,
                    "quantity_alert_level": null,
                    "image": [
                        {
                            "id": "9ec1eb3b-3731-46cb-b41f-a88d61a66602",
                            "caption": "Screenshot 2025-04-25 at 11.01.19",
                            "alt_text": null,
                            "group": "product-variation",
                            "order": 0,
                            "extension": "png",
                            "status": "pending_optimisation",
                            "disk": "s3",
                            "url": "http://127.0.0.1:9001/test-bucket/product-variations/screenshot-2025-04-25-at-11-01-19-680b16840641b.png",
                            "other_dimensions": [],
                            "created_at": "2025-04-25T04:58:44.000000Z",
                            "pivot": {
                                "imageable_type": "App\\Business\\ProductVariation",
                                "imageable_id": "9ec1eb47-be52-4726-93dd-074e5a9a359b",
                                "image_id": "9ec1eb3b-3731-46cb-b41f-a88d61a66602",
                                "imageable_group": null,
                                "order_weight": 0
                            }
                        }
                    ],
                    "product_variation_weight": null,
                    "open_amount": false,
                    "order": 1,
                    "locations": [
                        {
                            "id": "9c1ddd4c-61c4-46ca-b2b8-8d09176be59d",
                            "name": "New Location for online store",
                            "street": "ddas",
                            "postal_code": "123",
                            "city": "das",
                            "state": "das",
                            "country": "sg",
                            "created_at": "2024-05-24T03:20:07.000000Z",
                            "updated_at": "2025-05-26T04:46:05.000000Z",
                            "active": true,
                            "business_id": "9389861a-e539-4714-8dac-2cd53710b677",
                            "inventory": {
                                "manage_inventory": true,
                                "quantity": 0,
                                "quantity_alert_level": 0
                            },
                            "pickups": []
                        }
                    ]
                },
                {
                    "id": "9ec1eb47-c0d3-41b5-a4cd-b3e25e06caea",
                    "stock_keeping_unit": null,
                    "barcode": null,
                    "description": "M",
                    "values": [
                        {
                            "key": "Size",
                            "value": "M"
                        }
                    ],
                    "price": 100,
                    "price_display": "SGD 100.00",
                    "price_stored": 10000,
                    "quantity": 0,
                    "quantity_alert_level": null,
                    "image": [
                        {
                            "id": "9ec1eb44-0a6b-41f3-a259-25d98d765e6c",
                            "caption": "Screenshot 2025-04-18 at 18.26.54",
                            "alt_text": null,
                            "group": "product-variation",
                            "order": 0,
                            "extension": "png",
                            "status": "pending_optimisation",
                            "disk": "s3",
                            "url": "http://127.0.0.1:9001/test-bucket/product-variations/screenshot-2025-04-18-at-18-26-54-680b1689c6426.png",
                            "other_dimensions": [],
                            "created_at": "2025-04-25T04:58:49.000000Z",
                            "pivot": {
                                "imageable_type": "App\\Business\\ProductVariation",
                                "imageable_id": "9ec1eb47-c0d3-41b5-a4cd-b3e25e06caea",
                                "image_id": "9ec1eb44-0a6b-41f3-a259-25d98d765e6c",
                                "imageable_group": null,
                                "order_weight": 0
                            }
                        }
                    ],
                    "product_variation_weight": null,
                    "open_amount": false,
                    "order": 2,
                    "locations": [
                        {
                            "id": "9c1ddd4c-61c4-46ca-b2b8-8d09176be59d",
                            "name": "New Location for online store",
                            "street": "ddas",
                            "postal_code": "123",
                            "city": "das",
                            "state": "das",
                            "country": "sg",
                            "created_at": "2024-05-24T03:20:07.000000Z",
                            "updated_at": "2025-05-26T04:46:05.000000Z",
                            "active": true,
                            "business_id": "9389861a-e539-4714-8dac-2cd53710b677",
                            "inventory": {
                                "manage_inventory": true,
                                "quantity": 0,
                                "quantity_alert_level": 0
                            },
                            "pickups": []
                        }
                    ]
                }
            ],
            "images": [],
            "image": "http://127.0.0.1:9001/test-bucket/product-variations/screenshot-2025-04-25-at-11-01-19-680b16840641b.png",
            "is_published": true,
            "published_at": "2025-04-25T12:58:52+08:00",
            "created_at": "2025-04-25T12:58:52+08:00",
            "updated_at": "2025-05-22T18:17:14+08:00",
            "order_in_category": null,
            "allow_back_order": false,
            "available": false,
            "type": "physical",
            "password_protected": false,
            "digital_content": null,
            "auto_tag_new_locations": true,
            "channels": [
                "invoice",
                "pos",
                "online_store"
            ],
            "locations": [
                {
                    "id": "9c1ddd4c-61c4-46ca-b2b8-8d09176be59d",
                    "name": "New Location for online store",
                    "street": "ddas",
                    "postal_code": "123",
                    "city": "das",
                    "state": "das",
                    "country": "sg",
                    "created_at": "2024-05-24T03:20:07.000000Z",
                    "updated_at": "2025-05-26T04:46:05.000000Z",
                    "active": true,
                    "business_id": "9389861a-e539-4714-8dac-2cd53710b677",
                    "inventory": {
                        "manage_inventory": true,
                        "quantity": 0,
                        "quantity_alert_level": 0
                    },
                    "pickups": []
                }
            ],
            "product_unit": null,
            "product_unit_abbreviation": null,
            "product_unit_value": 1,
            "handle": "product-variant",
            "pos_color": null,
            "product_add_ons": [
                {
                    "id": "9eac5a82-c067-46d4-b7a6-2f6361231be6",
                    "business_id": "9389861a-e539-4714-8dac-2cd53710b677",
                    "name": "Extra 1",
                    "option_type": "radio",
                    "option_values": [
                        {
                            "option_price": 100,
                            "option_value": "A"
                        },
                        {
                            "option_price": 200,
                            "option_value": "B"
                        }
                    ],
                    "min_selection": null,
                    "max_selection": null,
                    "is_required": 0,
                    "products_count": 2,
                    "created_at": "2025-04-14T11:41:40.000000Z",
                    "updated_at": "2025-05-20T03:51:21.000000Z",
                    "pivot": {
                        "business_product_id": "9ec1eb47-bb7c-40a5-9785-b181cbdda21b",
                        "business_add_on_id": "9eac5a82-c067-46d4-b7a6-2f6361231be6",
                        "order_weight": 1
                    }
                },
                {
                    "id": "9ef41e33-0dc9-4c88-9083-e6cf58771052",
                    "business_id": "9389861a-e539-4714-8dac-2cd53710b677",
                    "name": "Hellooo",
                    "option_type": "checkbox",
                    "option_values": [
                        {
                            "option_price": 0.8,
                            "option_value": "a"
                        },
                        {
                            "option_price": 0.89,
                            "option_value": "b"
                        },
                        {
                            "option_price": 0.77,
                            "option_value": "c"
                        },
                        {
                            "option_price": 0.98,
                            "option_value": "d"
                        },
                        {
                            "option_price": 0.98,
                            "option_value": "e"
                        },
                        {
                            "option_price": 0.56,
                            "option_value": "f"
                        },
                        {
                            "option_price": 0.67,
                            "option_value": "g"
                        },
                        {
                            "option_price": 0.97,
                            "option_value": "h"
                        }
                    ],
                    "min_selection": 3,
                    "max_selection": 8,
                    "is_required": 1,
                    "products_count": 2,
                    "created_at": "2025-05-20T03:52:38.000000Z",
                    "updated_at": "2025-05-20T03:52:38.000000Z",
                    "pivot": {
                        "business_product_id": "9ec1eb47-bb7c-40a5-9785-b181cbdda21b",
                        "business_add_on_id": "9ef41e33-0dc9-4c88-9083-e6cf58771052",
                        "order_weight": 2
                    }
                }
            ]
        },
        {
            "id": "9eac5a29-8141-4e93-8cff-a5678da95148",
            "business_id": "9389861a-e539-4714-8dac-2cd53710b677",
            "category_id": [
                {
                    "id": "9e6dcc90-5b03-402d-b04c-9b6908da6dfb",
                    "business_id": "9389861a-e539-4714-8dac-2cd53710b677",
                    "parent_id": null,
                    "name": "Category 2",
                    "handle": "category-2",
                    "emoji": null,
                    "pos_color": null,
                    "description": null,
                    "active": true,
                    "order": 1,
                    "total_products": 1,
                    "created_at": "2025-03-14T09:23:26.000000Z",
                    "updated_at": "2025-05-10T08:00:51.000000Z",
                    "is_active": true,
                    "pivot": {
                        "product_id": "9eac5a29-8141-4e93-8cff-a5678da95148",
                        "category_id": "9e6dcc90-5b03-402d-b04c-9b6908da6dfb",
                        "order": 1
                    }
                }
            ],
            "name": "Product with Variant",
            "headline": null,
            "description": "<p><span style=\"font-size:14px;\">asdas jj</span></p>",
            "stock_keeping_unit": null,
            "currency": "sgd",
            "price": 50,
            "price_before_discount": null,
            "price_display": "SGD 50.00",
            "price_stored": 5000,
            "is_manageable": 1,
            "is_pinned": true,
            "status": "published",
            "product_weight": 1000,
            "delivery_method_required": true,
            "has_variations": true,
            "is_shopify": false,
            "is_woocommerce": false,
            "order": 2,
            "quantity": 0,
            "quantity_alert_level": null,
            "min_order_quantity": null,
            "max_order_quantity": null,
            "emoji": null,
            "open_amount": false,
            "product_url": "https://link.src.test/d5ciyu",
            "variations_count": 4,
            "variations": [
                {
                    "id": "9ede7eb8-5d8d-46f3-9bce-e992b5e5467d",
                    "stock_keeping_unit": null,
                    "barcode": null,
                    "description": "RED / Y",
                    "values": [
                        {
                            "key": "Color",
                            "value": "RED"
                        },
                        {
                            "key": "Size",
                            "value": "Y"
                        }
                    ],
                    "price": 50,
                    "price_display": "SGD 50.00",
                    "price_stored": 5000,
                    "quantity": 0,
                    "quantity_alert_level": null,
                    "image": [],
                    "product_variation_weight": 1000,
                    "open_amount": false,
                    "order": 1,
                    "locations": [
                        {
                            "id": "9c1ddd4c-61c4-46ca-b2b8-8d09176be59d",
                            "name": "New Location for online store",
                            "street": "ddas",
                            "postal_code": "123",
                            "city": "das",
                            "state": "das",
                            "country": "sg",
                            "created_at": "2024-05-24T03:20:07.000000Z",
                            "updated_at": "2025-05-26T04:46:05.000000Z",
                            "active": true,
                            "business_id": "9389861a-e539-4714-8dac-2cd53710b677",
                            "inventory": {
                                "manage_inventory": true,
                                "quantity": 0,
                                "quantity_alert_level": 0
                            },
                            "pickups": []
                        }
                    ]
                },
                {
                    "id": "9ede7eb8-65e3-4d44-b996-5dae4ee17640",
                    "stock_keeping_unit": null,
                    "barcode": null,
                    "description": "RED / X",
                    "values": [
                        {
                            "key": "Color",
                            "value": "RED"
                        },
                        {
                            "key": "Size",
                            "value": "X"
                        }
                    ],
                    "price": 50,
                    "price_display": "SGD 50.00",
                    "price_stored": 5000,
                    "quantity": 0,
                    "quantity_alert_level": null,
                    "image": [],
                    "product_variation_weight": 1000,
                    "open_amount": false,
                    "order": 2,
                    "locations": [
                        {
                            "id": "9c1ddd4c-61c4-46ca-b2b8-8d09176be59d",
                            "name": "New Location for online store",
                            "street": "ddas",
                            "postal_code": "123",
                            "city": "das",
                            "state": "das",
                            "country": "sg",
                            "created_at": "2024-05-24T03:20:07.000000Z",
                            "updated_at": "2025-05-26T04:46:05.000000Z",
                            "active": true,
                            "business_id": "9389861a-e539-4714-8dac-2cd53710b677",
                            "inventory": {
                                "manage_inventory": true,
                                "quantity": 0,
                                "quantity_alert_level": 0
                            },
                            "pickups": []
                        }
                    ]
                },
                {
                    "id": "9ede7eb8-6ebe-45ba-baf3-8d2e6b90bedf",
                    "stock_keeping_unit": null,
                    "barcode": null,
                    "description": "GREED / Y",
                    "values": [
                        {
                            "key": "Color",
                            "value": "GREED"
                        },
                        {
                            "key": "Size",
                            "value": "Y"
                        }
                    ],
                    "price": 50,
                    "price_display": "SGD 50.00",
                    "price_stored": 5000,
                    "quantity": 0,
                    "quantity_alert_level": null,
                    "image": [],
                    "product_variation_weight": 1000,
                    "open_amount": false,
                    "order": 3,
                    "locations": [
                        {
                            "id": "9c1ddd4c-61c4-46ca-b2b8-8d09176be59d",
                            "name": "New Location for online store",
                            "street": "ddas",
                            "postal_code": "123",
                            "city": "das",
                            "state": "das",
                            "country": "sg",
                            "created_at": "2024-05-24T03:20:07.000000Z",
                            "updated_at": "2025-05-26T04:46:05.000000Z",
                            "active": true,
                            "business_id": "9389861a-e539-4714-8dac-2cd53710b677",
                            "inventory": {
                                "manage_inventory": true,
                                "quantity": 0,
                                "quantity_alert_level": 0
                            },
                            "pickups": []
                        }
                    ]
                },
                {
                    "id": "9ede7eb8-77cb-4e1c-bc34-1dc8ac5d2f79",
                    "stock_keeping_unit": null,
                    "barcode": null,
                    "description": "GREED / X",
                    "values": [
                        {
                            "key": "Color",
                            "value": "GREED"
                        },
                        {
                            "key": "Size",
                            "value": "X"
                        }
                    ],
                    "price": 50,
                    "price_display": "SGD 50.00",
                    "price_stored": 5000,
                    "quantity": 0,
                    "quantity_alert_level": null,
                    "image": [],
                    "product_variation_weight": 1000,
                    "open_amount": false,
                    "order": 4,
                    "locations": [
                        {
                            "id": "9c1ddd4c-61c4-46ca-b2b8-8d09176be59d",
                            "name": "New Location for online store",
                            "street": "ddas",
                            "postal_code": "123",
                            "city": "das",
                            "state": "das",
                            "country": "sg",
                            "created_at": "2024-05-24T03:20:07.000000Z",
                            "updated_at": "2025-05-26T04:46:05.000000Z",
                            "active": true,
                            "business_id": "9389861a-e539-4714-8dac-2cd53710b677",
                            "inventory": {
                                "manage_inventory": true,
                                "quantity": 0,
                                "quantity_alert_level": 0
                            },
                            "pickups": []
                        }
                    ]
                }
            ],
            "images": [
                {
                    "id": "9ec1ebcc-665b-4ce2-9f64-4a77a5f9445d",
                    "caption": "Screenshot 2025-04-18 at 17.02.46",
                    "alt_text": null,
                    "group": "product",
                    "order": 0,
                    "extension": "png",
                    "status": "pending_optimisation",
                    "disk": "s3",
                    "url": "http://127.0.0.1:9001/test-bucket/products/screenshot-2025-04-18-at-17-02-46-680b16e32b080.png",
                    "other_dimensions": [],
                    "created_at": "2025-04-25T05:00:19.000000Z",
                    "pivot": {
                        "imageable_type": "business_product",
                        "imageable_id": "9eac5a29-8141-4e93-8cff-a5678da95148",
                        "image_id": "9ec1ebcc-665b-4ce2-9f64-4a77a5f9445d",
                        "imageable_group": null,
                        "order_weight": 0
                    }
                },
                {
                    "id": "9ec1ebcc-665b-479d-b16d-6a2a3a124bf8",
                    "caption": "Screenshot 2025-04-18 at 16.58.18",
                    "alt_text": null,
                    "group": "product",
                    "order": 1,
                    "extension": "png",
                    "status": "pending_optimisation",
                    "disk": "s3",
                    "url": "http://127.0.0.1:9001/test-bucket/products/screenshot-2025-04-18-at-16-58-18-680b16e32b0c2.png",
                    "other_dimensions": [],
                    "created_at": "2025-04-25T05:00:19.000000Z",
                    "pivot": {
                        "imageable_type": "business_product",
                        "imageable_id": "9eac5a29-8141-4e93-8cff-a5678da95148",
                        "image_id": "9ec1ebcc-665b-479d-b16d-6a2a3a124bf8",
                        "imageable_group": null,
                        "order_weight": 1
                    }
                }
            ],
            "image": "http://127.0.0.1:9001/test-bucket/products/screenshot-2025-04-18-at-17-02-46-680b16e32b080.png",
            "is_published": true,
            "published_at": "2025-04-14T19:40:42+08:00",
            "created_at": "2025-04-14T19:40:42+08:00",
            "updated_at": "2025-05-20T11:50:54+08:00",
            "order_in_category": null,
            "allow_back_order": true,
            "available": false,
            "type": "physical",
            "password_protected": false,
            "digital_content": null,
            "auto_tag_new_locations": true,
            "channels": [
                "invoice",
                "pos",
                "online_store"
            ],
            "locations": [
                {
                    "id": "9c1ddd4c-61c4-46ca-b2b8-8d09176be59d",
                    "name": "New Location for online store",
                    "street": "ddas",
                    "postal_code": "123",
                    "city": "das",
                    "state": "das",
                    "country": "sg",
                    "created_at": "2024-05-24T03:20:07.000000Z",
                    "updated_at": "2025-05-26T04:46:05.000000Z",
                    "active": true,
                    "business_id": "9389861a-e539-4714-8dac-2cd53710b677",
                    "inventory": {
                        "manage_inventory": true,
                        "quantity": 0,
                        "quantity_alert_level": 0
                    },
                    "pickups": []
                }
            ],
            "product_unit": null,
            "product_unit_abbreviation": null,
            "product_unit_value": 1,
            "handle": "product-with-variant",
            "pos_color": null,
            "product_add_ons": [
                {
                    "id": "9eac5a82-c067-46d4-b7a6-2f6361231be6",
                    "business_id": "9389861a-e539-4714-8dac-2cd53710b677",
                    "name": "Extra 1",
                    "option_type": "radio",
                    "option_values": [
                        {
                            "option_price": 100,
                            "option_value": "A"
                        },
                        {
                            "option_price": 200,
                            "option_value": "B"
                        }
                    ],
                    "min_selection": null,
                    "max_selection": null,
                    "is_required": 0,
                    "products_count": 2,
                    "created_at": "2025-04-14T11:41:40.000000Z",
                    "updated_at": "2025-05-20T03:51:21.000000Z",
                    "pivot": {
                        "business_product_id": "9eac5a29-8141-4e93-8cff-a5678da95148",
                        "business_add_on_id": "9eac5a82-c067-46d4-b7a6-2f6361231be6",
                        "order_weight": 1
                    }
                },
                {
                    "id": "9ef41e33-0dc9-4c88-9083-e6cf58771052",
                    "business_id": "9389861a-e539-4714-8dac-2cd53710b677",
                    "name": "Hellooo",
                    "option_type": "checkbox",
                    "option_values": [
                        {
                            "option_price": 0.8,
                            "option_value": "a"
                        },
                        {
                            "option_price": 0.89,
                            "option_value": "b"
                        },
                        {
                            "option_price": 0.77,
                            "option_value": "c"
                        },
                        {
                            "option_price": 0.98,
                            "option_value": "d"
                        },
                        {
                            "option_price": 0.98,
                            "option_value": "e"
                        },
                        {
                            "option_price": 0.56,
                            "option_value": "f"
                        },
                        {
                            "option_price": 0.67,
                            "option_value": "g"
                        },
                        {
                            "option_price": 0.97,
                            "option_value": "h"
                        }
                    ],
                    "min_selection": 3,
                    "max_selection": 8,
                    "is_required": 1,
                    "products_count": 2,
                    "created_at": "2025-05-20T03:52:38.000000Z",
                    "updated_at": "2025-05-20T03:52:38.000000Z",
                    "pivot": {
                        "business_product_id": "9eac5a29-8141-4e93-8cff-a5678da95148",
                        "business_add_on_id": "9ef41e33-0dc9-4c88-9083-e6cf58771052",
                        "order_weight": 2
                    }
                }
            ]
        }
    ];
      const formatFieldData = (data) => {
        return data.map(item => {
          let source = []
          if(item.is_shopify) {
            source.push('Shopify')
          }
          if(item.is_woocommerce) {
            source.push('WooCommerce')
          }
          return {
            id: item.id,
            link: item.product_url,
            emoji: item.emoji,
            image: item.image,
            name: item.name,
            category_ids: item.category_id?.map(category => category.id).join(', '),
            category_names: item.category_id?.map(category => category.name).join(', '),
            available: item.available || item.quantity > 0 || item.allow_back_order || !item.is_manageable,
            is_manageable: item.is_manageable,
            available_quantity: !item.is_manageable 
              ? 'Inventory not tracked'
              : item.quantity > 0 
                ? `${item.quantity} in stock${item.variations?.length ? ` for ${item.variations.length} variants` : ''}`
                : 'Out of stock',
            amount: item.price_display,
            channels: item.channels?.join(', '),
            source: source.join(', '),
            status: item.status,
            created_at: item.created_at,
            updated_at: item.updated_at
          }
        })
      }


      const { bulkPutLocalData, getLocalDataUpdatedAt, getLocalDataIds } = useDataTable({
        id: 'products-table',
        name: 'products',
        localDb: db,
        options: localDataOptions
      })

      // in dashboard get all products in DB and update local data
      // on visit get latest updated_at in 

      const getLatestData = async () => {
        const latestUpdatedAt = await getLocalDataUpdatedAt()
        const localIds = await getLocalDataIds()
        console.log('latestUpdatedAt', latestUpdatedAt, 'localIds', localIds)
      }

      getLatestData()

      bulkPutLocalData(formatFieldData(fieldData))
    

      return {
        localDataOptions: localDataOptions,
        args,
        filter,
        sortBy,
        changedFields,
        selectedRows,
        showDropdown,
        handleOpenDropdown,
        updateFilterData,
        updateSortBy,
        onClickRow,
        db
      }
    },
    template: `
          <Theme class="p-8">
            <DataTable 
                id="products-table"
                v-model:selected="selectedRows"
                row-key="id"
                row-link="link"
                :filter="filter" 
                :sort-by="sortBy"
                :options="args.options"
                :is-loading="args.isLoading"
                :is-local-data="true"
                :local-data-options="localDataOptions"
                @update:filter="updateFilterData"
                @update:sort-by="updateSortBy"
                @click:row="onClickRow"
                @filter-fields-changed="changedFields = $event"
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