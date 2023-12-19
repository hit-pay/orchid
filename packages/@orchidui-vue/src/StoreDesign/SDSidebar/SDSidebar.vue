<script setup>
import { ref, watch } from "vue";
import { Icon, Toggle } from "@/orchidui";
import { DraggableList } from "@/orchidui/Draggable";
import { RequestForm } from "@/orchidui/StoreDesign";
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
});
const emit = defineEmits({
  "update:values": [],
  "update:active": [],
});

const sectionList = ref(null);
const sectionActive = ref(null);
const sectionActiveSettings = ref(null);

const generalData = computed(() => props.values.general);

const sidebarActive = computed(() => {
  return props.active;
});

watch(
  () => props.active,
  () => {
    sectionActive.value = props.settings.find(
      (s) => s.key === props.active.section
    );

    sectionActiveSettings.value = props.values.sections.find(
      (s) => s.key === props.active.section
    );

    if (props.active.submenu && props.active.submenu !== "sections") {
      sectionList.value = props.settings.filter((s) => {
        const sectionData = props.values.sections.find((i) => i.key === s.key);
        s.active = sectionData?.active;
        return s.group === props.active.submenu;
      });
    } else {
      // set by store design section data
      sectionList.value = null;
    }
  },
  {
    deep: true,
  }
);

const changeSidebarMenu = (value) => {
  emit("update:active", {
    ...sidebarActive.value,
    sidebarMenu: value,
  });
};

const changeSubmenu = (value) => {
  emit("update:active", {
    ...sidebarActive.value,
    submenu: value,
    section: "",
  });
};

const sidebarMenuActive = computed(() => {
  return props.sidebar.find((s) => s.name === sidebarActive.value.sidebarMenu);
});
const sidebarMenuLabel = computed(() => {
  return sidebarMenuActive.value.label;
});
const submenuLabel = computed(() => {
  const submenu = sidebarMenuActive.value.children.find(
    (s) => s.name === sidebarActive.value.submenu
  );
  return submenu?.label;
});

const changeSection = (to = "") => {
  emit("update:active", {
    ...sidebarActive.value,
    section: to,
  });
};
const onClickSection = (section) => {
  changeSection(section.key);
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
            v-if="sidebarMenu.children"
            name="chevron-down"
            class="ml-auto text-oc-text-400"
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
          v-if="
            sidebarMenu.children &&
            sidebarActive.sidebarMenu === sidebarMenu.name
          "
          class="w-full flex flex-col"
        >
          <template v-if="sidebarMenu.type === 'list'">
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
            Styles Settings
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
      <div v-if="sectionList" class="px-5">
        <DraggableList
          :model-value="sectionList"
          class="w-full cursor-pointer"
          @click:element="onClickSection"
        >
          <template #action="{ item }">
            <Toggle
              v-model="item.active"
              size="small"
              @update:model-value="updateSectionActive($event, item)"
            ></Toggle>
          </template>
        </DraggableList>
      </div>
    </div>
    <template v-if="sidebarActive.section">
      <div class="px-5 py-4 flex cursor-pointer mt-8">
        <div class="text-oc-text-300" @click="changeSubmenu('')">
          {{ sidebarMenuLabel }}
        </div>
        <div class="text-oc-text-300 mx-2">/</div>
        <div class="text-oc-text-300" @click="changeSection('')">
          {{ submenuLabel }}
        </div>
        <div class="mx-2">/</div>
        <div class="font-medium">
          {{ sectionActive.title }}
        </div>
      </div>
      <div class="p-5">
        <RequestForm
          :general-data="generalData"
          :section-data="sectionActiveSettings"
          :request-form="sectionActive.form"
        >
        </RequestForm>
      </div>
    </template>
    <div class="absolute bottom-0">
      <slot name="sidebar-bottom" />
    </div>
  </div>
</template>
