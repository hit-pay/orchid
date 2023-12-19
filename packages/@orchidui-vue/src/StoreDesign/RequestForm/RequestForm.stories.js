import { Theme } from "@/orchidui";

import RequestForm from "./RequestForm.vue";
import { ref } from "vue";
export default {
  component: RequestForm,
  tags: ["autodocs"],
};

const GENERAL_SETTINGS = {
  top_banner_content: "general value test",
};

const SECTION_SETTINGS = [
  {
    key: "unique_key_1",
    section: "TopBanner",
    closable: false,
  },
  {
    key: "unique_key_2",
    section: "Banner",
  },
];

export const SDTopBanner = {
  render: () => ({
    components: {
      Theme,
      RequestForm,
    },
    setup() {
      const generalData = ref(GENERAL_SETTINGS);
      const sectionData = ref(
        SECTION_SETTINGS.find((s) => s.section === "TopBanner"),
      );
      const JSON_FORM = [{
        name: "closable",
        type: "SectionItem",
        props: {
          title: "Closable",
          isToggle: true,
        },
      },
      {
        type: "SectionItem",
        props: {
          title: "Content",
        },
      },
      {
        general: true,
        name: "top_banner_content",
        type: "TextArea",
      }]

      return { JSON_FORM, generalData, sectionData };
    },
    template: `
          <Theme>
            <div class="w-full">
            <pre class="bg-black text-white p-3 mb-3 rounded">{{ generalData }}</pre>
            <pre class="bg-black text-white p-3 rounded">{{ sectionData }}</pre>
            <div class="mt-5">
                <RequestForm :request-form="JSON_FORM" v-model:general-data="generalData" v-model:section-data="sectionData" />
            </div>
            </div>
          </Theme>
        `,
  }),
};
