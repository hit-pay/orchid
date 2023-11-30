import ConfirmationModal from "./OcConfirmationModal.vue";

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
  },
  render: (args) => ({
    components: { ConfirmationModal },
    setup() {
      return { args };
    },
    template: `
          <div class="h-screen">
            <ConfirmationModal class="!w-full" v-bind="args"/>
          </div>
        `,
  }),
};
