<script setup>
import { ref, watch } from "vue";
import {
  Icon,
  Toggle,
  Button,
  SelectOptions,
  Dropdown,
  DropdownItem,
} from "@/orchidui";
import { DraggableList } from "@/orchidui/Draggable.js";
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
  options: Object,
  theme: Object,
});

const getSidebarMenu = (section) => {
  // Sidebar not stored to DB
  if (section === "Styles") {
    return "styles";
  } else if (["IconLinks", "ButtonLinks"].includes(section)) {
    return "link_in_bio";
  } else {
    return "home";
  }
};

const isDropdownOpen = ref([]);
const requiredSection = ["Header", "FooterContent", "IconLinks", "ButtonLinks"];

const emit = defineEmits({
  "update:values": [],
  "update:active": [],
  "get:products": [], // pick product sections
  // Event
  "edit:images": [],
  "delete:images": [],
  "add:images": [],
  "update:section": [],
  "update:general": [],
  "update:field": [],
  "close:settings": [],
  changeTheme: [],
});

const presetOptions = computed(() => {
  return [
    ...props.preset,
    {
      value: "custom",
      label: "Custom",
      sections: [
        {
          section: "Styles",
          changes: {
            preset: "custom",
          },
        },
      ],
    },
  ];
});
const presetValue = computed(() => {
  return props.values.sections.find((s) => s.key === "Styles")["preset"];
});
const activePreset = computed(() => {
  return presetOptions.value.find((p) => p.value === presetValue.value);
});
const updatePreset = (to) => {
  showPresetStyle.value = false;
  const selectedPreset = presetOptions.value.find((p) => p.value === to);

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

  if (to === "custom") {
    emit("update:active", {
      sidebarMenu: "styles",
      submenu: "styles",
      section: "Styles",
      id: "Styles",
    });
  }
};
const sectionList = ref([]);
const sectionActive = ref(null);

const generalData = computed(() => props.values.general);

const sidebarActive = computed(() => {
  return props.active;
});

const availableSections = computed(() =>
  props.settings.filter((s) => s.group === "sections"),
);

const renderForm = ref(null);
const renderSectionList = ref(null);

const renderSectionAndForm = () => {
  renderForm.value = null;
  renderSectionList.value = null;

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
          key: item.key, // required
          group: item.group, // required
          section: item.section, // required
          title: item?.title ? item.title : item.section,
          active: item?.active ?? true,
          icon: sectionItem?.icon ?? "",
          canDelete: sectionItem?.canDelete ?? false,
          form: sectionItem?.form ?? [],
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
    renderSectionList.value = Date.now();
  }, 100);
};

watch(
  () => props.active,
  () => {
    renderSectionAndForm();
  },
  {
    deep: true,
    immediate: true,
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
    sidebarMenu: value,
    submenu: "",
    section: "",
    id: "",
  });
};

const changeSubmenu = (value) => {
  if (sidebarMenuActive.value.type === "sections") {
    emit("update:active", {
      sidebarMenu: getSidebarMenu(value),
      submenu: sidebarMenuActive.value.name,
      section: value,
      id: value,
    });
  } else {
    emit("update:active", {
      sidebarMenu: getSidebarMenu(value),
      submenu: value,
      section: "",
      id: "",
    });
  }
};

const sidebarMenuActive = computed(() => {
  return props.sidebar.find((s) => s.name === sidebarActive.value.sidebarMenu);
});
const sidebarMenuLabel = computed(() => {
  return sidebarMenuActive.value?.label ?? "";
});
const submenuLabel = computed(() => {
  if (sidebarMenuActive.value.children) {
    const submenu = sidebarMenuActive.value.children.find(
      (s) => s.name === sidebarActive.value.submenu,
    );
    return submenu?.label;
  } else {
    return sidebarMenuActive.value.label;
  }
});

const changeSection = (to = "", key = "") => {
  let newActiveSidebar = {
    ...sidebarActive.value,
    section: to,
    id: key,
  };
  if (
    to === "" &&
    ["styles", "link_in_bio"].includes(sidebarActive.value.submenu)
  ) {
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
  const exist = props.values.sections.find((vs) => vs.key === item.key);
  if (!exist) {
    newValuesSections.push({
      key: item.key,
      group: item.group,
      section: item.section,
      active: value,
    });
  }

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

const deleteSectionItem = (item) => {
  emit("update:values", {
    general: generalData.value,
    sections: props.values.sections.filter((i) => i.key !== item.key),
  });
  setTimeout(() => {
    renderSectionAndForm();
  }, 100);
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
      canDelete: newSection.canDelete ?? false,
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

const updateModelValues = (data, general = false) => {
  let newStoreDesignData = {
    general: props.values.general,
    sections: props.values.sections,
  };
  if (general) {
    newStoreDesignData.general = data;
    emit("update:general", data); // for undo redo
  } else {
    emit("update:section", data); // for undo redo
    newStoreDesignData.sections = newStoreDesignData.sections.map((s) => {
      if (s.key === data.key) {
        return data;
      }
      return s;
    });
  }
  emit("update:values", newStoreDesignData);
};

const closeSettings = () => {
  emit("close:settings", sectionActive.value.key);
  changeSection("", "");
};

const showPresetStyle = ref(false);
const isHomePageDropdownOpen = ref(false);
</script>
<template>
  <div class="h-full relative">
    <div class="h-full overflow-auto border border-gray-200 pb-[100px]">
      <div v-if="!sidebarActive.submenu" class="flex flex-col pt-8">
        <div
          v-for="(sidebarMenu, index) in sidebar"
          :key="index"
          class="border-b flex flex-wrap items-center"
          :class="sidebarMenu.name === 'styles' ? 'hidden' : ''"
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
              v-if="sidebarMenu.children"
              name="chevron-down"
              class="ml-auto text-oc-text-400"
              :class="
                sidebarActive.sidebarMenu === sidebarMenu.name
                  ? 'rotate-180'
                  : ''
              "
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
            <template
              v-if="
                ['list', 'sections'].includes(sidebarMenu.type) &&
                sidebarMenu.children
              "
            >
              <div
                v-for="(children, childIndex) in sidebarMenu.children"
                :key="childIndex"
                class="pl-9 p-4 w-full flex items-center cursor-pointer hover:bg-oc-accent-1-50-tr"
                @click="
                  children.onClick
                    ? children.onClick()
                    : changeSubmenu(children.name, children.section)
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
          </div>
        </div>
      </div>
      <div v-else-if="!sidebarActive.section">
        <div class="px-5 py-4 flex cursor-pointer mt-8">
          <div class="text-oc-text-300" @click="changeSubmenu('')">
            {{ sidebarMenuLabel }}
          </div>
          <div class="mx-2">/</div>
          <div class="font-medium">
            <Dropdown v-model="isHomePageDropdownOpen" :distance="10">
              {{ submenuLabel }}
              <template #menu>
                <div
                  v-if="sidebarMenuActive.children"
                  class="p-2"
                  @click="isHomePageDropdownOpen = false"
                >
                  <DropdownItem
                    v-for="sectionHomePage in sidebarMenuActive.children"
                    :key="sectionHomePage.name"
                    :text="sectionHomePage.label"
                    class="p-2 text-sm"
                    @click="
                      changeSubmenu(
                        sectionHomePage.name,
                        sectionHomePage.section,
                      )
                    "
                  />
                </div>
              </template>
            </Dropdown>
          </div>
        </div>
        <div v-if="renderSectionList" class="px-5 mt-4">
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
                class="mt-2 mr-2"
                @update:model-value="updateSectionActive($event, item)"
                @click.stop
              ></Toggle>
              <span v-else></span>
              <Dropdown
                v-if="item.canDelete"
                v-model="isDropdownOpen[item.key]"
                placement="bottom-end"
                @click.stop
              >
                <Icon name="dots-vertical" />
                <template #menu>
                  <div class="p-2 border-b border-gray-200">
                    <DropdownItem
                      icon="pencil"
                      text="Edit"
                      @click="onClickSection(item)"
                    />
                  </div>
                  <div class="p-2">
                    <DropdownItem
                      variant="destructive"
                      icon="bin"
                      text="Delete"
                      @click="deleteSectionItem(item)"
                    />
                  </div>
                </template>
              </Dropdown>
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
      <Transition
        enter-active-class="duration-[250ms] ease-out"
        enter-from-class="transform opacity-0 mt-[100px]"
        enter-to-class="opacity-100 mt-0"
        leave-active-class="duration-[350ms] ease-out"
        leave-from-class="transform opacity-100 mt-0"
        leave-to-class="opacity-0 mt-[150px]"
      >
        <div
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
              @click="closeSettings"
            />
            <div class="flex items-center pb-4 px-7">
              <template v-if="sidebarActive.section === 'Styles'">
                <div class="text-oc-text-300">
                  {{ sidebarMenuLabel }}
                </div>
                <div class="mx-2">/</div>
              </template>
              <div v-if="sectionActive" class="font-medium">
                {{ sectionActive.title ?? sectionActive.section }}
              </div>
            </div>
          </div>
          <div v-if="sectionActiveValues" class="px-7 py-4 mt-4">
            <RequestForm
              v-if="renderForm && sectionActive?.form"
              :general-data="generalData"
              :section-data="sectionActiveValues"
              :request-form="sectionActive.form"
              :options="options"
              @edit:images="
                $emit('edit:images', { ...$event, section: sectionActive.key })
              "
              @delete:images="
                $emit('delete:images', {
                  ...$event,
                  section: sectionActive.key,
                })
              "
              @add:images="
                $emit('add:images', { ...$event, section: sectionActive.key })
              "
              @update:general-data="updateModelValues($event, true)"
              @update:section-data="updateModelValues($event, false)"
              @update:field="
                $emit('update:field', {
                  section: sectionActive.key,
                  ...$event,
                })
              "
            >
            </RequestForm>
          </div>
        </div>
        <div v-else-if="sidebarActive.section === 'add-new-section'">
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
        </div>
      </Transition>
      <div v-if="theme" class="w-full absolute bottom-0 z-20 h-[84px]">
        <div
          v-if="showPresetStyle"
          class="flex w-full px-[16px] absolute bottom-[84px]"
        >
          <SelectOptions
            class="!grid-cols-2 bg-oc-bg-light py-[24px] border-t border-gray-200"
            variant="list2"
            :model-value="presetValue"
            :options="presetOptions"
            @update:model-value="updatePreset"
          >
            <template #option="{ option, selected }">
              <div class="p-1 flex flex-col justify-center relative">
                <div
                  v-if="option.value === 'custom' && selected"
                  class="absolute top-0 right-0"
                >
                  <Button
                    label="Edit"
                    left-icon="pencil"
                    size="small"
                    variant="secondary"
                  />
                </div>
                <img
                  :src="`${theme.assets}images/preset/${option.value}.png`"
                  alt=""
                />
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
        <div
          class="bg-oc-bg-light w-full flex gap-5 border-y border-r border-gray-200 h-[84px]"
        >
          <div
            class="bg-oc-bg-light flex items-center gap-5 p-[16px] border-r border-gray-200"
          >
            <img
              :src="`${theme.assets}thumbnail.png`"
              class="h-[51px] rounded-sm"
            />
            <div class="flex flex-col">
              <div class="text-oc-text-400 mb-3">Active theme</div>
              <div class="text-[14px] font-medium">{{ theme.name }}</div>
            </div>
            <div
              class="w-[100px] group flex items-center justify-end ml-auto cursor-pointer gap-[8px]"
            >
              <span class="hidden group-hover:block text-[10px] mr-2"
                >Change theme</span
              >
              <Icon
                name="repeat"
                width="18"
                height="18"
                @click="$emit('changeTheme')"
              />
            </div>
          </div>
          <div
            class="flex gap-3 items-center cursor-pointer ml-auto pr-4"
            @click="showPresetStyle = !showPresetStyle"
          >
            <img
              class="w-[112px]"
              :src="`${theme.assets}images/preset/${activePreset.value}-sm.png`"
            />
            <div>
              <Icon
                name="chevron-down"
                width="18"
                height="18"
                :class="showPresetStyle ? 'rotate-180' : ''"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
