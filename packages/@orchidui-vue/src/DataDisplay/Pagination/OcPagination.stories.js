import Pagination from "./OcPagination.vue";
import Theme from "../../Theme/OcTheme.vue";
import { ref } from "vue";

export default {
  component: Pagination,
  tags: ["autodocs"],
};

export const pagination = {
  argTypes: {
    size: {
      control: "select",
      options: ["default", "small", "big"],
    },
  },
  args: {
    totalVisible: 5,
    size: "default",
    maxPage: 15,
    isRounded: false,
  },
  render: (args) => ({
    components: { Pagination, Theme },
    setup() {
      const currentPage = ref(1);
      return {
        currentPage,
        args,
      };
    },
    template: `
          <Theme class="flex gap-3 items-center mb-3">
            <Pagination
                :max-page="args.maxPage"
                :size="args.size"
                :totalVisible="args.totalVisible"
                :isRounded="args.isRounded"
                v-model="currentPage"
            />
          </Theme>
        `,
  }),
};
