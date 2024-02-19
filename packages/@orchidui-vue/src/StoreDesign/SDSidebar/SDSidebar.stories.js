import { Theme, Button } from "@/orchidui";
import { SDSidebar } from "@/orchidui/StoreDesign";
// config default
// import { Config } from "./settings/Config.sample";
// import { StoreDesign } from "./settings/StoreDesign.sample";
// config Juizzy
import { Config } from "./settings/Config-Juizzy.sample";
import { StoreDesign } from "./settings/StoreDesign-Juizzy.sample";

import { ref } from "vue";
export default {
  component: SDSidebar,
  tags: ["autodocs"],
};

export const Default = {
  args: {},
  render: (args) => ({
    components: { Theme, Button, SDSidebar },
    setup() {
      const sidebarConfig = ref(Config);
      const storeDesignData = ref(StoreDesign);
      const sidebarActive = ref({
        sidebarMenu: "home",
        submenu: "",
        section: "",
        id: "",
      });

      const content = ref("data");

      const getSidebarMenu = (section) => {
        // Sidebar not stored to user store design
        if (section === "Styles") {
          return "styles";
        } else if (["IconLinks", "ButtonLinks"].includes(section)) {
          return "link_in_bio";
        } else {
          return "home";
        }
      };

      const updateSidebarActive = (item) => {
        sidebarActive.value = {
          sidebarMenu: getSidebarMenu(item.section),
          submenu: item.group,
          section: item.section,
          id: item.key,
        };

        console.log("sidebar :", sidebarActive.value);
      };

      const onUpdateSidebarActive = () => {
        console.log("sidebar :", sidebarActive.value);
      };

      const options = {
        pages: [
          {
            value: "page_id",
            link: "/page-1",
            label: "page title",
          },
          {
            value: "page_id_2",
            link: "/page-2",
            label: "page title 2",
          },
        ],
        categories: [
          {
          "value": "999ea993-5893-49bf-8e87-b508c40845dc",
          "label": "subb subb",
          "parent": "999ea984-09d4-48a4-8f7f-d3c7ad11a8f5"
          },
          {
          "value": "99ab9ebc-9dd0-41c9-8798-52d744bfcd8f",
          "label": "Mac long name categories",
          "parent": null
          },
          {
          "value": "99ab9ecb-4a9e-439f-bcda-fff0ce81b2eb",
          "label": "Ipad",
          "parent": null
          },
          {
          "value": "99ab9ed4-369b-4b72-a224-de96df48d9b6",
          "label": "Iphone",
          "parent": null
          },
          {
          "value": "99ab9f29-a4ff-41d3-9f00-80cb9187f8b3",
          "label": "Macbook Pro",
          "parent": "99ab9ebc-9dd0-41c9-8798-52d744bfcd8f"
          },
          {
          "value": "99ab9f35-e68a-41cb-ac2e-d74536f54a98",
          "label": "Macbook Air",
          "parent": "99ab9ebc-9dd0-41c9-8798-52d744bfcd8f"
          },
          {
          "value": "99ab9f52-7e55-495d-a975-3c62d6e16e76",
          "label": "IMac",
          "parent": "99ab9ebc-9dd0-41c9-8798-52d744bfcd8f"
          },
          {
          "value": "99ab9f5c-81dd-4a75-a555-20e7c18dc794",
          "label": "Mac Mini",
          "parent": "99ab9ebc-9dd0-41c9-8798-52d744bfcd8f"
          },
          {
          "value": "99ab9f9b-f9dc-4813-91a1-f47f3db7c0ae",
          "label": "Macbook Pro 2023",
          "parent": "99ab9f29-a4ff-41d3-9f00-80cb9187f8b3"
          },
          {
          "value": "99ab9fab-e0b1-440b-9390-5e1b53dcd891",
          "label": "Macbook Pro 2022",
          "parent": "99ab9f29-a4ff-41d3-9f00-80cb9187f8b3"
          },
          {
          "value": "99ab9fbc-6cdb-460d-ab69-5ff8559f2eb4",
          "label": "Macbook Pro 2021",
          "parent": "99ab9f29-a4ff-41d3-9f00-80cb9187f8b3"
          },
          {
          "value": "99ab9fe0-5522-4462-b016-f8e72e353600",
          "label": "IPad Pro",
          "parent": "99ab9ecb-4a9e-439f-bcda-fff0ce81b2eb"
          },
          {
          "value": "99ab9ff0-ea71-4544-9f70-7fb6ebac8306",
          "label": "IPad Mini",
          "parent": "99ab9ecb-4a9e-439f-bcda-fff0ce81b2eb"
          },
          {
          "value": "99aba036-cc71-4966-97e1-32f43127f443",
          "label": "Iphone 14",
          "parent": "99ab9ed4-369b-4b72-a224-de96df48d9b6"
          },
          {
          "value": "99aba047-5d35-44c4-8b23-6cda64b3d4e7",
          "label": "IPhone 13",
          "parent": "99ab9ed4-369b-4b72-a224-de96df48d9b6"
          },
          {
          "value": "99aba0a1-28ce-4090-84f4-6d44e2248f82",
          "label": "Mackbook Air 2023",
          "parent": "99ab9f35-e68a-41cb-ac2e-d74536f54a98"
          },
          {
          "value": "99aba0b4-7a6e-4491-93d9-7513d1554f23",
          "label": "Macbook Air 2019",
          "parent": "99ab9f35-e68a-41cb-ac2e-d74536f54a98"
          },
          {
          "value": "99aba0cc-e1aa-4309-8ad9-e1c8e3e2e66d",
          "label": "Macbook Air 2015",
          "parent": "99ab9f35-e68a-41cb-ac2e-d74536f54a98"
          },
          {
          "value": "99aba53b-97fd-447b-b216-a397e5d620a2",
          "label": "Man",
          "parent": null
          },
          {
          "value": "99aba551-ccb1-4359-9b63-90633224b8ac",
          "label": "Women",
          "parent": null
          },
          {
          "value": "99aba589-64c4-4642-91e6-6b253f203bb2",
          "label": "Shoes",
          "parent": "99aba53b-97fd-447b-b216-a397e5d620a2"
          },
          {
          "value": "99aba593-c47b-4f8c-9880-e6ce70c2e06b",
          "label": "Clothing",
          "parent": "99aba53b-97fd-447b-b216-a397e5d620a2"
          },
          {
          "value": "99aba5bf-32bf-4f5f-a990-4be9d73e43ef",
          "label": "Accessories",
          "parent": "99aba53b-97fd-447b-b216-a397e5d620a2"
          },
          {
          "value": "99aba5d7-4d8b-4e9a-b842-343a1a231bce",
          "label": "Clothing",
          "parent": "99aba551-ccb1-4359-9b63-90633224b8ac"
          },
          {
          "value": "99aba5e5-d771-4d44-bc75-e99390fbc186",
          "label": "Accessories",
          "parent": "99aba551-ccb1-4359-9b63-90633224b8ac"
          },
          {
          "value": "99aba636-d150-456d-ab68-69eb604d3d1f",
          "label": "Jordan",
          "parent": "99aba589-64c4-4642-91e6-6b253f203bb2"
          },
          {
          "value": "99aba644-fcf6-4e8f-9cdd-e336515a0a77",
          "label": "Running",
          "parent": "99aba589-64c4-4642-91e6-6b253f203bb2"
          },
          {
          "value": "99aba661-b0ab-4e23-803b-9f0f04fccbeb",
          "label": "Football",
          "parent": "99aba589-64c4-4642-91e6-6b253f203bb2"
          },
          {
          "value": "99aba688-96bd-4d01-9d86-6ef36a16d83d",
          "label": "Basketball",
          "parent": "99aba589-64c4-4642-91e6-6b253f203bb2"
          },
          {
          "value": "99aba698-0ca6-4d8e-9ec3-a780ae7357c1",
          "label": "Sneakers",
          "parent": "99aba589-64c4-4642-91e6-6b253f203bb2"
          },
          {
          "value": "99aba6cf-ab53-4033-9f4c-b57cd26df939",
          "label": "Short",
          "parent": "99aba593-c47b-4f8c-9880-e6ce70c2e06b"
          },
          {
          "value": "99aba6e1-b7ff-4b80-9dc6-59d4b61f0c64",
          "label": "Pants",
          "parent": "99aba593-c47b-4f8c-9880-e6ce70c2e06b"
          },
          {
          "value": "99aba6fa-ee02-404f-b8a2-3deb265821d0",
          "label": "Hoodie",
          "parent": "99aba593-c47b-4f8c-9880-e6ce70c2e06b"
          },
          {
          "value": "99aba705-cf94-47a9-81e1-3169d7569295",
          "label": "Jacket",
          "parent": "99aba593-c47b-4f8c-9880-e6ce70c2e06b"
          }
          ]
      };

      const onEditBanner = (data) => {
        console.log(data);
      };
      const onDeleteBanner = (data) => {
        console.log(data);
      };

      const onUpdateField = (data) => {
        console.log("field updated :", data);
      };

      return {
        sidebarConfig,
        sidebarActive,
        storeDesignData,
        updateSidebarActive,
        onUpdateSidebarActive,

        onEditBanner,
        onDeleteBanner,
        // stories
        args,
        content,
        options,
        onUpdateField,
      };
    },
    template: `
          <Theme>
          <div class="flex gap-5 m-5 w-[1200px] overflow-y-auto ">
              <div class="h-[90vh] w-[535px] overflow-y-scroll">
                  <SDSidebar 
                    v-model:values="storeDesignData"
                    :sidebar="sidebarConfig.sidebar"
                    :preset="sidebarConfig.preset"
                    :preset-custom-preview="sidebarConfig.presetCustomPreview"
                    :settings="sidebarConfig.settings"
                    :options="options"
                    v-model:active="sidebarActive"
                    @update:active="onUpdateSidebarActive"
                    @edit:banner="onEditBanner"
                    @delete:banner="onDeleteBanner"
                    @update:field="onUpdateField"
                    >
                  </SDSidebar>
                </div>
                <div class="w-[700px]">
                    <div class="flex gap-5 mb-5 flex-wrap">
                        <div class="w-full flex gap-5">
                          <Button label="Undo" />
                          <Button label="Redo" />
                        </div>
                        <Button @click="content = 'data'" label="Store Design" variant="secondary"  />
                        <Button @click="content = 'preset'" label="Preset" variant="secondary"  />
                        <Button @click="content = 'section'" label="Settings" variant="secondary"  />
                        <Button @click="content = 'preview'" label="PREVIEW" variant="secondary"  />
                    </div>
                    <div class="h-[80vh] overflow-auto rounded bg-black">
                      <pre v-if="content === 'data'" class="bg-black text-white p-3 rounded">{{storeDesignData}}</pre>
                      <pre v-if="content === 'section'" class="bg-black text-white p-3 rounded">{{sidebarConfig.settings}}</pre>
                      <pre v-if="content === 'preset'" class="bg-black text-white p-3 rounded">{{sidebarConfig.preset}}</pre>
                      <div class="flex flex-wrap gap-5 p-5" v-if="content === 'preview'">
                        <Button v-for="section in storeDesignData.sections" :label="section.title ?? section.section" @click="updateSidebarActive(section)" />
                      </div>
                    </div>
                </div>
            </div>
          </Theme>
        `,
  }),
};
