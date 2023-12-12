import { Theme, FormBuilder, Button, Icon, Input} from "@/orchidui";
import { ref } from 'vue'

import { 
  TOP_BANNER_FORM,
  HEADER_FORM
 } from "./SDForm.sample";

export default {
  component: '',
};


export const TopBannerSection = {
  args: {
    values: {
      closable: false,
      content: 'Same day local delivery - 25% Off for selected items.'
    },
    errors: {},
  },
  render: (args) => ({
    components: {
      Theme,
      FormBuilder,
      Button,
      Icon
    },
    setup() {
      const values = ref(args.values);
      const errors = ref(args.errors);

      const onUpdateForm = (form, value = null) => {
        console.log("onUpdateForm", form, value);
        if (typeof form.name === "object") {
          form.name.forEach((formName, index) => {
            values.value[formName.key] = value[index];
          });
        } else {
          values.value[form.name] = value;
        }
      };

      const isOpenedDropdown = ref(false);

      const JsonForm = TOP_BANNER_FORM;
      return {
        JsonForm,
        args,
        values,
        errors,
        onUpdateForm,
        isOpenedDropdown,
      };
    },
    template: `
          <Theme class="p-8 w-[600px]">
            <pre class="p-5 rounded mb-5  border-b bg-black text-white">{{ values }}</pre>
            <div class="flex flex-col p-7 border rounded">
                <FormBuilder
                      id="form-builder"
                      class="grid gap-4"
                      :errors="errors"
                      :values="values"
                      :json-form="JsonForm"
                      @onUpdate="onUpdateForm"
                  >
                </FormBuilder>
            </div>
          </Theme>
        `,
  }),
};


export const HeaderSection = {
  args: {
    values: {
      background_color: '',
      text_color: '',
      alignment: 'right',
      menu_enabled: true,
      menus: []
    },
    errors: {},
  },
  render: (args) => ({
    components: {
      Theme,
      FormBuilder,
      Button,
      Icon,
      Input
    },
    setup() {
      const values = ref(args.values);
      const errors = ref(args.errors);

      const onUpdateForm = (form, value = null) => {
        console.log("onUpdateForm", form, value);
        if (typeof form.name === "object") {
          form.name.forEach((formName, index) => {
            values.value[formName.key] = value[index];
          });
        } else {
          values.value[form.name] = value;
        }
      };

      const isOpenedDropdown = ref(false);

      const JsonForm = HEADER_FORM;
      return {
        JsonForm,
        args,
        values,
        errors,
        onUpdateForm,
        isOpenedDropdown,
      };
    },
    template: `
          <Theme class="p-8 w-[600px]">
            <pre class="p-5 rounded mb-5  border-b bg-black text-white">{{ values }}</pre>
            <div class="flex flex-col p-7 border rounded">
                <FormBuilder
                      id="form-builder"
                      class="grid gap-4"
                      :errors="errors"
                      :values="values"
                      :json-form="JsonForm"
                      @onUpdate="onUpdateForm"
                  >
                  <template #NavigationMenu="{item}">
                    {Navigation Menu form}
                  </template>
                  <template #Colors="{form}">
                    <div class="grid grid-cols-2 gap-4" >
                        <div v-for="name in form.name">
                          <Input v-model="values[name.key]" v-bind="name.props" form-type="color" />
                        </div>
                    </div>
                  </template>
                </FormBuilder>
            </div>
          </Theme>
        `,
  }),
};



export const BannerSection = {
  args: {
    values: {},
    errors: {},
  },
  render: (args) => ({
    components: {
      Theme,
      FormBuilder,
      Button,
      Icon
    },
    setup() {
      const values = ref(args.values);
      const errors = ref(args.errors);

      const onUpdateForm = (form, value = null) => {
        console.log("onUpdateForm", form, value);
        if (typeof form.name === "object") {
          form.name.forEach((formName, index) => {
            values.value[formName.key] = value[index];
          });
        } else {
          values.value[form.name] = value;
        }
      };

      const isOpenedDropdown = ref(false);

      const JsonForm = [];
      return {
        JsonForm,
        args,
        values,
        errors,
        onUpdateForm,
        isOpenedDropdown,
      };
    },
    template: `
          <Theme class="p-8 w-[600px]">
            <pre class="p-5 rounded mb-5  border-b bg-black text-white">{{ values }}</pre>
            <div class="flex flex-col p-7 border rounded">
                <div class="w-full flex items-center mb-4">
                      <Icon name="chevron-right" class="rotate-180" />
                      Banner
                </div>
                <FormBuilder
                      id="form-builder"
                      class="grid gap-4"
                      :errors="errors"
                      :values="values"
                      :json-form="JsonForm"
                      @onUpdate="onUpdateForm"
                  >
                </FormBuilder>
            </div>
          </Theme>
        `,
  }),
};


export const ProductSection = {
  args: {
    values: {},
    errors: {},
  },
  render: (args) => ({
    components: {
      Theme,
      FormBuilder,
      Button,
      Icon
    },
    setup() {
      const values = ref(args.values);
      const errors = ref(args.errors);

      const onUpdateForm = (form, value = null) => {
        console.log("onUpdateForm", form, value);
        if (typeof form.name === "object") {
          form.name.forEach((formName, index) => {
            values.value[formName.key] = value[index];
          });
        } else {
          values.value[form.name] = value;
        }
      };

      const isOpenedDropdown = ref(false);

      const JsonForm = [
        {
          type: "SectionItem",
          props: {
            title: "Select product from",
          },
        },
        {
          name: "product_from",
          type: "Select",
          props: {
            options: [
              {
                value: "feature",
                label: "Feature product",
              },
              {
                value: "all_product",
                label: "All product",
              },
              {
                value: "product_category",
                label: "Product Category",
              },
              {
                value: "pick_products",
                label: "Pick Products",
              },
            ],
            hint: "Learn how to make featured products here.",
          },
        },
        {
          type: "SectionItem",
          props: {
            title: "Column",
          },
        },
        {
          name: "column",
          type: "SelectOptions",
          props: {
            placeholder: "placeholder",
            options: [
              {
                preview: "/images/request-form.svg",
                label: "Option 1",
                value: 1,
              },
              {
                preview: "/images/request-form.svg",
                label: "Option 2",
                value: 2,
              },
              {
                preview: "/images/request-form.svg",
                label: "Option 3",
                value: 3,
              },
            ],
          },
        },
        {
          name: "show_categories_filter",
          type: "SectionItem",
          props: {
            title: "Show categories filter",
            isToggle: true,
          },
        },
        {
          name: "content",
          type: "SectionItem",
          props: {
            title: "Content",
          },
        },
      ];
      return {
        JsonForm,
        args,
        values,
        errors,
        onUpdateForm,
        isOpenedDropdown,
      };
    },
    template: `
          <Theme class="p-8 w-[600px]">
            <h1 class="mb-5">Product Section </h1>
            <pre class="p-5 rounded mb-5  border-b bg-black text-white">{{ values }}</pre>
            <div class="flex flex-col p-7 border rounded">
                <div class="w-full flex items-center mb-4">
                      <Icon name="chevron-right" class="rotate-180" />
                      Product
                      <Button class="ml-auto my-auto"> <span class="px-4">Add</span></Button>
                </div>
                <FormBuilder
                      id="form-builder"
                      class="grid gap-4"
                      :errors="errors"
                      :values="values"
                      :json-form="JsonForm"
                      @onUpdate="onUpdateForm"
                  >
                </FormBuilder>
            </div>
          </Theme>
        `,
  }),
};



export const TextImageSection = {
  args: {
    values: {},
    errors: {},
  },
  render: (args) => ({
    components: {
      Theme,
      FormBuilder,
      Button,
      Icon
    },
    setup() {
      const values = ref(args.values);
      const errors = ref(args.errors);

      const onUpdateForm = (form, value = null) => {
        console.log("onUpdateForm", form, value);
        if (typeof form.name === "object") {
          form.name.forEach((formName, index) => {
            values.value[formName.key] = value[index];
          });
        } else {
          values.value[form.name] = value;
        }
      };

      const isOpenedDropdown = ref(false);

      const JsonForm = [];
      return {
        JsonForm,
        args,
        values,
        errors,
        onUpdateForm,
        isOpenedDropdown,
      };
    },
    template: `
          <Theme class="p-8 w-[600px]">
            <pre class="p-5 rounded mb-5  border-b bg-black text-white">{{ values }}</pre>
            <div class="flex flex-col p-7 border rounded">
                <div class="w-full flex items-center mb-4">
                      <Icon name="chevron-right" class="rotate-180" />
                      Text & Image
                </div>
                <FormBuilder
                      id="form-builder"
                      class="grid gap-4"
                      :errors="errors"
                      :values="values"
                      :json-form="JsonForm"
                      @onUpdate="onUpdateForm"
                  >
                </FormBuilder>
            </div>
          </Theme>
        `,
  }),
};



export const FooterSection = {
  args: {
    values: {},
    errors: {},
  },
  render: (args) => ({
    components: {
      Theme,
      FormBuilder,
      Button,
      Icon
    },
    setup() {
      const values = ref(args.values);
      const errors = ref(args.errors);

      const onUpdateForm = (form, value = null) => {
        console.log("onUpdateForm", form, value);
        if (typeof form.name === "object") {
          form.name.forEach((formName, index) => {
            values.value[formName.key] = value[index];
          });
        } else {
          values.value[form.name] = value;
        }
      };

      const isOpenedDropdown = ref(false);

      const JsonForm = [];
      return {
        JsonForm,
        args,
        values,
        errors,
        onUpdateForm,
        isOpenedDropdown,
      };
    },
    template: `
          <Theme class="p-8 w-[600px]">
            <pre class="p-5 rounded mb-5  border-b bg-black text-white">{{ values }}</pre>
            <div class="flex flex-col p-7 border rounded">
                <div class="w-full flex items-center mb-4">
                      <Icon name="chevron-right" class="rotate-180" />
                      Footer
                </div>
                <FormBuilder
                      id="form-builder"
                      class="grid gap-4"
                      :errors="errors"
                      :values="values"
                      :json-form="JsonForm"
                      @onUpdate="onUpdateForm"
                  >
                </FormBuilder>
            </div>
          </Theme>
        `,
  }),
};


export const StyleCustom = {
  args: {
    values: {},
    errors: {},
  },
  render: (args) => ({
    components: {
      Theme,
      FormBuilder,
      Button,
      Icon
    },
    setup() {
      const values = ref(args.values);
      const errors = ref(args.errors);

      const onUpdateForm = (form, value = null) => {
        console.log("onUpdateForm", form, value);
        if (typeof form.name === "object") {
          form.name.forEach((formName, index) => {
            values.value[formName.key] = value[index];
          });
        } else {
          values.value[form.name] = value;
        }
      };

      const isOpenedDropdown = ref(false);

      const JsonForm = [];
      return {
        JsonForm,
        args,
        values,
        errors,
        onUpdateForm,
        isOpenedDropdown,
      };
    },
    template: `
          <Theme class="p-8 w-[600px]">
            <pre class="p-5 rounded mb-5  border-b bg-black text-white">{{ values }}</pre>
            <div class="flex flex-col p-7 border rounded">
                <div class="w-full flex items-center mb-4">
                      <Icon name="chevron-right" class="rotate-180" />
                      Custom
                </div>
                <FormBuilder
                      id="form-builder"
                      class="grid gap-4"
                      :errors="errors"
                      :values="values"
                      :json-form="JsonForm"
                      @onUpdate="onUpdateForm"
                  >
                </FormBuilder>
            </div>
          </Theme>
        `,
  }),
};


