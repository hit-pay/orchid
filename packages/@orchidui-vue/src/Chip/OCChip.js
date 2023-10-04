import Chip from "./Chip.vue";

export default {
  component: Chip,
  tags: ["autodocs"],
};

export const VariantColor = {
  render: () => ({
    components: { Chip },
    template: `
      <div class="flex gap-3 items-center light-mode mb-3">
       <Chip label="text" />
       <Chip label="text" color="purple" />
       <Chip label="text" color="orange" />
       <Chip label="text" color="red" />
       <Chip label="text" color="dark-blue" />
       <Chip label="text" color="grey" />
       <Chip label="text" color="green" />
      </div>
    `,
  }),
};

export const Example = {
  render: () => ({
    components: { Chip },
    template: `
      <div class="flex gap-3 items-center light-mode mb-3">
       <Chip label="Owner" />
       <Chip label="Admin" color="purple" />
       <Chip label="Cashier" color="green" />
      </div>
    `,
  }),
};