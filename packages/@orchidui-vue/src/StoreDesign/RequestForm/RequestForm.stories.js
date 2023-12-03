import { Theme } from "@/orchidui";
import { RequestForm } from "@/orchidui/StoreDesign";

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
        name: "input",
        type: "Input",
        props: {
          label: "Example Label",
          hint: "This is a hint text to help user",
          placeholder: "placeholder",
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
        name: "textarea",
        key: "textarea",
        type: "Textarea",
        props: {
          label: "Example Label",
          hint: "This is a hint text to help user",
          placeholder: "placeholder",
        },
      },
    ],
  },
  render: (args) => ({
    components: { Theme, RequestForm },
    setup() {
      const values = ref({
        select_options: "",
        select_options_1: "",
        select_options_2: "",
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

      return { values, errors, onUpdateForm, args };
    },
    template: `
          <Theme>
            <div class="mb-5">
              {{ values}}
            </div>
            <div class="max-w-[550px] border p-4 rounded">
              <RequestForm class="grid gap-5"  id="section_name" :values="values" :errors="errors" :json-form="args.jsonForm"  @onUpdate="onUpdateForm" />
            </div>
          </Theme>
        `,
  }),
};
