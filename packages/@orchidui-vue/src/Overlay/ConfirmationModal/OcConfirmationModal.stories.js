import { ConfirmationModal, Button } from "@/orchidui";

export default {
  component: ConfirmationModal,
  tags: ["autodocs"],
};

export const Default = {
  argTypes: {
    variant: {
      control: "select",
      options: ["delete", "success", "warning", "question"],
    },
  },
  args: {
    variant: "delete",
    title: "Are you sure?",
    description:
      "Do you want to delete this payment link? The action can’t be undo.",
    open: false,
    labelConfirm: "Confirm",
    labelCancel: "Close",
  },
  render: (args) => ({
    components: { ConfirmationModal, Button },
    setup() {
      return { args };
    },
    template: `
          <div class="h-screen">
            <Button @click="args.open = !args.open">Open Confirmation Modal</Button>
            <ConfirmationModal class="!w-full" v-bind="args" v-model="args.open" />
          </div>
        `,
  }),
};
