<script setup>
import { ref, watch } from "vue";
import { Icon, Toggle, Button, SelectOptions } from "@/orchidui";
import { DraggableList } from "@/orchidui/Draggable";
import { RequestForm, ThumbnailSection } from "@/orchidui/StoreDesign";
import { computed } from "vue";
const props = defineProps({
  values: {
    type: Object,
  },
  active: {
    type: Object,
  },
  sidebar: {
    type: Array,
  },
  settings: {
    type: Array,
  },
  preset: {
    type: Array,
  },
  options: Object
});

const requiredSection = ["Header", "FooterContent"];

const emit = defineEmits({
  "update:values": [],
  "update:active": [],
  "add:menu": [], // navigation menu, footer menu, link in bio
  "add:banner": [],
  // TODO : juizzy theme
  "get:products": [],
  "get:categories": [],
  "get:pages": [],
});

const presetOptions = computed(() => {
  return props.preset;
});
const presetValue = computed(() => {
  return props.values.sections.find((s) => s.key === "Styles")["preset"];
});

const updatePreset = (to) => {
  const selectedPreset = presetOptions.value.find((p) => p.value === to);
  if (to !== "custom") {
    let newSectionsList = [];
    props.values.sections.forEach((item) => {
      const defaultSettings = selectedPreset.sections.find(
        (s) => s.section === item.section,
      );
      if (defaultSettings) {
        let sectionItem = {
          ...item,
        };
        Object.keys(defaultSettings.changes).forEach((key) => {
          const val = defaultSettings.changes[key];
          sectionItem[key] = val;
        });
        newSectionsList.push(sectionItem);
      } else {
        newSectionsList.push(item);
      }
    });

    const newStoreDesignData = {
      general: generalData.value,
      sections: [...newSectionsList],
    };

    emit("update:values", newStoreDesignData);
  }
};
const sectionList = ref(null);
const sectionActive = ref(null);

const generalData = computed(() => props.values.general);

const sidebarActive = computed(() => {
  return props.active;
});

const availableSections = computed(() =>
  props.settings.filter((s) => s.group === "sections"),
);

const renderForm = ref(null);
watch(
  () => props.active,
  () => {
    renderForm.value = null;
    if (props.active.submenu && props.active.submenu !== "sections") {
      sectionList.value = props.settings.filter((s) => {
        const sectionData = props.values.sections.find((i) => i.key === s.key);
        s.active = sectionData?.active;
        return s.group === props.active.submenu;
      });
    } else {
      let sectionListCustom = [];
      props.values.sections.forEach((item) => {
        if (item.group === "sections") {
          const sectionItem = props.settings.find(
            (s) => s.section === item.section,
          );
          sectionListCustom.push({
            key: item.key,
            group: item.group,
            section: item.section,
            title: item.title ?? item.section,
            active: item.active,
            icon: sectionItem.icon,
            form: sectionItem.form,
          });
        }
      });
      sectionList.value = sectionListCustom;
    }

    sectionActive.value = sectionList.value.find(
      (s) => s.key === props.active.id,
    );

    setTimeout(() => {
      renderForm.value = Date.now();
    }, 100);
  },
  {
    deep: true,
  },
);

const sectionActiveValues = computed(() => {
  let sectionValues = props.values.sections.find(
    (s) => s.key === props.active.id,
  );
  return sectionValues;
});

const changeSidebarMenu = (value) => {
  emit("update:active", {
    ...sidebarActive.value,
    sidebarMenu: value,
    submenu: "",
    section: "",
    id: "",
  });
};

const changeSubmenu = (value) => {
  emit("update:active", {
    ...sidebarActive.value,
    submenu: value,
    section: "",
    id: "",
  });
};

const sidebarMenuActive = computed(() => {
  return props.sidebar.find((s) => s.name === sidebarActive.value.sidebarMenu);
});
const sidebarMenuLabel = computed(() => {
  return sidebarMenuActive.value?.label ?? "";
});
const submenuLabel = computed(() => {
  const submenu = sidebarMenuActive.value?.children.find(
    (s) => s.name === sidebarActive.value.submenu,
  );
  return submenu?.label;
});

const changeSection = (to = "", key = "") => {
  let newActiveSidebar = {
    ...sidebarActive.value,
    section: to,
    id: key,
  };
  if (to === "" && sidebarActive.value.submenu === "styles") {
    newActiveSidebar.submenu = "";
  }
  emit("update:active", newActiveSidebar);
};
const onClickSection = (section) => {
  if (section.form) {
    changeSection(section.section, section.key);
  }
};

const updateSectionActive = (value, item) => {
  const newValuesSections = [];

  props.values.sections.map((vs) => {
    if (item.key === vs.key) {
      newValuesSections.push({
        ...vs,
        active: value,
      });
    } else {
      newValuesSections.push(vs);
    }
  });

  emit("update:values", {
    general: generalData.value,
    sections: newValuesSections,
  });
};

const updateOrderedSection = (newOrdered) => {
  let newSectionsList = [];
  newOrdered.forEach((item) => {
    newSectionsList.push(props.values.sections.find((i) => i.key === item.key));
  });
  emit("update:values", {
    general: generalData.value,
    sections: [
      ...props.values.sections.filter((vs) => vs.group !== "sections"),
      ...newSectionsList,
    ],
  });
};

const addSection = (newSection, customize = false) => {
  let newKey = Date.now();
  const newSectionData = [
    {
      group: newSection.group,
      key: newKey,
      section: newSection.section,
      title: newSection.title ?? newSection.section,
      active: true,
      ...newSection.default,
    },
  ];
  emit("update:values", {
    general: generalData.value,
    sections: [...props.values.sections, ...newSectionData],
  });

  if (customize) {
    changeSection(newSection.section, newKey);
  } else {
    changeSubmenu(newSection.group);
  }
};
</script>
<template>
  <div class="h-full relative border border-gray-200">
    <div v-if="!sidebarActive.submenu" class="flex flex-col pt-8">
      <div
        v-for="(sidebarMenu, index) in sidebar"
        :key="index"
        class="border-b flex flex-wrap items-center"
      >
        <div
          class="p-4 w-full flex items-center cursor-pointer hover:bg-oc-accent-1-50-tr"
          @click="
            sidebarMenu.onClick
              ? sidebarMenu.onClick()
              : changeSidebarMenu(sidebarMenu.name)
          "
        >
          <Icon
            v-if="sidebarMenu.icon"
            :name="sidebarMenu.icon"
            class="mx-1"
            width="20"
            height="20"
          />
          <div
            class="ml-2"
            :class="
              sidebarActive.sidebarMenu === sidebarMenu.name
                ? 'font-medium'
                : ''
            "
          >
            {{ sidebarMenu.label }}
          </div>
          <Icon
            v-if="sidebarMenu.children || sidebarMenu.name ==='styles'"
            name="chevron-down"
            class="ml-auto text-oc-text-400"
            :class="sidebarActive.sidebarMenu === sidebarMenu.name ? 'rotate-180':''"
            width="18"
            height="18"
          />
          <Icon
            v-else
            name="chevron-right"
            class="ml-auto text-oc-text-400"
            width="18"
            height="18"
          />
        </div>
        <div
          v-if="sidebarActive.sidebarMenu === sidebarMenu.name"
          class="w-full flex flex-col"
        >
          <template v-if="sidebarMenu.type === 'list' && sidebarMenu.children">
            <div
              v-for="(children, childIndex) in sidebarMenu.children"
              :key="childIndex"
              class="pl-9 p-4 w-full flex items-center cursor-pointer hover:bg-oc-accent-1-50-tr"
              @click="
                children.onClick
                  ? children.onClick()
                  : changeSubmenu(children.name)
              "
            >
              <div class="ml-2">
                {{ children.label }}
              </div>
              <Icon
                v-if="children.icon"
                :name="children.icon"
                class="ml-auto text-oc-text-primary"
                width="18"
                height="18"
              />
              <Icon
                v-else
                width="18"
                height="18"
                name="chevron-right"
                class="ml-auto text-oc-text-400"
              />
            </div>
          </template>
          <template v-else-if="sidebarMenu.type === 'styles'">
            <div class="px-5 pb-7">
              <SelectOptions
                class="!grid-cols-2"
                variant="list2"
                :model-value="presetValue"
                :options="presetOptions"
                @update:model-value="updatePreset"
              >
                <template #option="{ option, selected }">
                  <div class="p-1 flex flex-col justify-center">
                    <img :src="option.preview" alt="" />
                    <div
                      :class="{
                        'text-oc-primary': selected,
                      }"
                      class="text-center mt-2"
                    >
                      {{ option.label }}
                    </div>
                  </div>
                </template>
              </SelectOptions>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div v-else-if="!sidebarActive.section">
      <div class="px-5 py-4 flex cursor-pointer mt-8">
        <div class="text-oc-text-300" @click="changeSubmenu('')">
          {{ sidebarMenuLabel }}
        </div>
        <div class="mx-2">/</div>
        <div class="font-medium">{{ submenuLabel }}</div>
      </div>
      <div v-if="sectionList" class="px-5 mt-4">
        <DraggableList
          :model-value="sectionList"
          class="w-full cursor-pointer"
          @click:element="onClickSection"
          @update:model-value="updateOrderedSection"
        >
          <template #action="{ item }">
            <Toggle
              v-if="!requiredSection.includes(item.section)"
              v-model="item.active"
              size="small"
              @update:model-value="updateSectionActive($event, item)"
            ></Toggle>
            <span v-else></span>
          </template>
        </DraggableList>
        <div
          v-if="sidebarActive.submenu === 'sections'"
          class="flex justify-center w-full mt-5"
        >
          <Button
            label="New Section"
            left-icon="plus"
            variant="secondary"
            @click="changeSection('add-new-section', '')"
          />
        </div>
      </div>
    </div>
    <template
      v-if="
        sidebarActive.section && sidebarActive.section !== 'add-new-section'
      "
    >
      <div class="flex flex-col border-b">
        <Icon
          class="ml-auto text-oc-text-300 mx-5 mt-5 cursor-pointer"
          name="x"
          width="24"
          height="24"
          @click="changeSection('', '')"
        />
        <div v-if="sectionActive" class="font-medium pb-4 px-7">
          {{ sectionActive.title ?? sectionActive.section }}
        </div>
      </div>
      <div v-if="sectionActiveValues" class="px-7 py-4 mt-4">
        <RequestForm
          v-if="renderForm && sectionActive?.form"
          :general-data="generalData"
          :section-data="sectionActiveValues"
          :request-form="sectionActive.form"
          :options="options"
        >
        </RequestForm>
        <span v-else> loading... </span>
      </div>
    </template>
    <template v-else-if="sidebarActive.section === 'add-new-section'">
      <div class="flex flex-col border-b">
        <Icon
          class="ml-auto text-oc-text-300 mx-5 mt-5 cursor-pointer"
          name="x"
          width="24"
          height="24"
          @click="changeSection('', '')"
        />
        <div class="font-medium pb-4 px-7">Add Sections</div>
      </div>
      <div class="px-7 py-4 mt-4">
        <div class="grid grid-cols-2 gap-5">
          <ThumbnailSection
            v-for="item in availableSections"
            :key="item.section"
            :section="item"
            @add="addSection"
            @customize="addSection($event, true)"
          />
        </div>
      </div>
    </template>
    <div class="absolute bottom-0">
      <slot name="sidebar-bottom" />
    </div>
  </div>
</template>
