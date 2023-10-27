import { Theme, Modal, Button } from "@orchid";
import { ref } from "vue";

export default {
  component: Modal,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "default"],
    },
  },
  args: {
    title: "Modal Title",
    description: "Modal Description",
    isCloseIcon: true,
    cancelButtonProps: {
      label: "Cancel",
      variant: "secondary",
    },
    okButtonProps: {
      label: "OK",
    },
    size: "medium",
  },
  render: (args) => ({
    components: { Theme, Modal, Button },
    setup() {
      const modalValue = ref(false);
      return { modalValue, args };
    },
    template: `
          <Theme>
            <div class="h-[500px]">
              <Button label="Toggle Modal Here" @click="modalValue = !modalValue"/>

              <Modal
                  v-model="modalValue"
                  class="!w-full !h-full"
                  :title="args.title"
                  :description="args.description"
                  :size="args.size"
                  :isCloseIcon="args.isCloseIcon"
                  :cancelButtonProps="args.cancelButtonProps"
                  :okButtonProps="args.okButtonProps"
              />
            </div>
          </Theme>
        `,
  }),
};
