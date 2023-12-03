import { Theme } from "@/orchidui";
import { RequestForm, SDMenus } from "@/orchidui/StoreDesign";

import { ref } from "vue";
export default {
  tags: ["autodocs"],
  component: RequestForm,
};

export const Default = {
  args: {
    jsonForm: [
      {
        name: "select_options",
        type: "SelectOptions",
        props: {
          label: "Example Label",
          hint: "This is a hint text to help user",
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
        name: "select_options_2",
        type: "SelectOptions",
        props: {
          label: "Example Label",
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
          ],
        },
      },
      {
        name: "select_options_3",
        type: "SelectOptions",
        props: {
          variant: "list",
          label: "Example Label",
          hint: "This is a hint text to help user",
          placeholder: "placeholder",
          options: [
            {
              preview: "/images/request-form-1.svg",
              label: "Option 1",
              value: 1,
              description:
                "Useful if most of your product visuals are wider than taller",
            },
            {
              preview: "/images/request-form-1.svg",
              label: "Option 2",
              value: 2,
              description:
                "Useful if most of your product visuals are wider than taller",
            },
            {
              preview: "/images/request-form-1.svg",
              label: "Option 3",
              value: 3,
              description:
                "Useful if most of your product visuals are wider than taller",
            },
            {
              preview: "/images/request-form-1.svg",
              label: "Option 4",
              value: 4,
              description:
                "Useful if most of your product visuals are wider than taller",
            },
          ],
        },
      },
      {
        name: "select_options_4",
        type: "SelectOptions",
        props: {
          variant: "list2",
          label: "Example Label",
          hint: "This is a hint text to help user",
          placeholder: "placeholder",
          options: [
            {
              label: "Option 1",
              value: 1,
              description: "Smaller height, fit to screen width",
            },
            {
              label: "Option 2",
              value: 2,
              description: "Smaller height, fit to screen width",
            },
          ],
        },
      },

      {
        name: "select",
        type: "Select",
        props: {
          label: "Example Label",
          hint: "This is a hint text to help user",
          placeholder: "placeholder",
          options: [
            {
              label: "Option 1",
              value: 1,
            },
            {
              label: "Option 2",
              value: 2,
            },
            {
              label: "Option 3",
              value: 3,
            },
          ],
        },
      },
      {
        name: "input",
        type: "Input",
        props: {
          label: "Example Label",
          hint: "This is a hint text to help user",
          placeholder: "placeholder",
        },
      },
      {
        name: "textarea",
        key: "textarea",
        type: "Textarea",
        props: {
          label: "Example Label",
          hint: "This is a hint text to help user",
          placeholder: "placeholder",
        },
      },
      {
        name: "menus",
        type: "NavigationMenu",
      },
      {
        name: "select_product",
        type: "SelectProduct",
      },
      {
        name: "select_category",
        type: "SelectCategory",
      },
    ],
  },
  render: (args) => ({
    components: { Theme, RequestForm, SDMenus },
    setup() {
      const values = ref({
        select_options: "",
        select_options_1: "",
        select_options_2: "",
        select_options_3: "",
        select_options_4: "",
        input: "",
        select: "",
        textarea: "",
      });
      const errors = ref({});

      const onUpdateForm = (form, value = null) => {
        if (typeof form.name === "object") {
          form.name.forEach((formName, index) => {
            values.value[formName.key] = value[index];
          });
        } else {
          values.value[form.name] = value;
        }
      };

      const menusData = ref([
        {
          id: "234",
          title: "Menu ",
          link: "https://orchidui.vercel.app",
        },
        {
          id: "456",
          icon: "top-banner",
          title: "Menu",
          children: [
            {
              id: "123",
              icon: "banner",
              title: "SubMenu ",
              link: "https://orchidui.vercel.app",
            },
            {
              id: "234",
              icon: "banner",
              title: "SubMenu",
              link: "https://orchidui.vercel.app",
            },
          ],
        },
        {
          id: "667",
          title: "Menu ",
          link: "https://orchidui.vercel.app",
        },
      ]);

      return { values, errors, onUpdateForm, args, menusData };
    },
    template: `
          <Theme>
            <div class="mb-5">
              {{ values}}
            </div>
            <div class="max-w-[550px] border p-4 rounded">
              <RequestForm class="grid gap-5"  id="section_name" :values="values" :errors="errors" :json-form="args.jsonForm"  @onUpdate="onUpdateForm" >
                <template #NavigationMenu>
                  <div class="text-sm flex items-center gap-x-3 font-medium text-oc-text-400 mb-2">
                    Navigation Menu
                  </div>
                  <SDMenus :has-submenu v-model="menusData" />
                </template>
                <template #SelectProduct>
                    Custom Select Product Form
                </template>
                <template #SelectCategory>
                    Custom Select Category Form 
                </template>
              </RequestForm>
            </div>
          </Theme>
        `,
  }),
};
