<script setup>
import { ref, computed } from "vue";
import {
  DropdownItem,
  Button,
  Modal,
  Radio,
  Select,
  LinkInput,
  Input,
  ConfirmationModal,
  Option as OcOption,
} from "@/orchidui";
import { DraggableList } from "@/orchidui/Draggable.js";
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  variant: {
    type: String,
    default: "default", // social
  },
  hasSubmenu: Boolean,
  submenuLevel: {
    type: [String, Number],
    default: 1,
  },
  linkKey: {
    type: String,
    default: "link",
  },
  noMenuIcon: String,
  options: {
    type: Object,
    default: () => {
      return {
        categories: [],
        pages: [],
      };
    },
  },
});

const isLoading = ref(false);
const emit = defineEmits({
  "update:modelValue": [],
  "add:menu": [],
});

const update = (value) => emit("update:modelValue", value);

const isSocial = computed(() => props.variant === "social");

const addMenuForm = ref(null);
const addSubmenuItem = ref(null);
const addMenuModal = ref(false);

const editMenuModal = ref(false);
const editMenuForm = ref(null);

const addMenu = (submenu = false) => {
  if (!submenu) {
    addSubmenuItem.value = null;
  }
  addMenuModal.value = true;
  addMenuForm.value = {
    ids: [],
    type: isSocial.value ? "facebook" : "page",
    title: "",
    link: "",
  };
};

const addSubMenu = (item, subitem) => {
  addSubmenuItem.value = {
    item: item,
    subitem: subitem,
  };
  addMenu(true);
};

const editMenu = (item) => {
  editMenuModal.value = true;
  editMenuForm.value = item;
};

const socialOptions = [
  {
    value: "facebook",
    label: "Facebook",
    icon: "facebook",
    preFill: "https://facebook.com/",
    placeholder: "@username",
  },
  {
    value: "instagram",
    label: "Instagram",
    icon: "instagram",
    preFill: "https://instagram.com/",
    placeholder: "@username",
  },
  {
    value: "twitter",
    label: "(X) Twitter",
    icon: "twitter",
    preFill: "https://twitter.com/",
    placeholder: "@username",
  },
  {
    value: "tiktok",
    label: "Tiktok",
    icon: "tiktok",
    preFill: "https://tiktok.com/",
    placeholder: "@username",
  },
  {
    value: "email",
    label: "Email",
    icon: "email",
    preFill: "mailto:",
    placeholder: "example@mail.com",
  },
  {
    value: "phone",
    label: "Phone Number",
    icon: "phone",
    preFill: "tel:",
    placeholder: "628xxx",
  },
  {
    value: "whatsapp",
    label: "Whatsapp",
    icon: "whatsapp",
    preFill: "https://wa.me/",
    placeholder: "628xxx",
  },
  {
    value: "telegram",
    label: "Telegram",
    icon: "telegram",
    preFill: "https://t.me/",
    placeholder: "628xxx",
  },
  {
    value: "link",
    label: "Other website",
    icon: "link",
    preFill: "https://",
    placeholder: "website.com",
  },
];

const getUniqueListBy = (arr, key) => {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

const saveMenuItems = (items) => {
  let newModelValue = [...props.modelValue];
  if (addSubmenuItem.value && addSubmenuItem.value.subitem) {
    let parentChildren = addSubmenuItem.value.item.children;
    let children =
      parentChildren[parentChildren.indexOf(addSubmenuItem.value.subitem)]
        .children;
    let newChildren = [...items];
    if (children) {
      newChildren = getUniqueListBy([...children, ...items], "id");
    }
    newModelValue[newModelValue.indexOf(addSubmenuItem.value.item)].children[
      parentChildren.indexOf(addSubmenuItem.value.subitem)
    ].children = newChildren;
  } else if (addSubmenuItem.value && addSubmenuItem.value.item) {
    let children =
      newModelValue[newModelValue.indexOf(addSubmenuItem.value.item)].children;
    let newChildren = [...items];
    if (children) {
      newChildren = getUniqueListBy([...children, ...items], "id");
    }
    newModelValue[newModelValue.indexOf(addSubmenuItem.value.item)].children =
      newChildren;
  } else {
    newModelValue = getUniqueListBy([...newModelValue, ...items], "id")
  }
  emit("update:modelValue", newModelValue);
  items?.forEach((i) => {
    emit("add:menu", i);
  });

  addMenuModal.value = false;

  setTimeout(() => {
    isLoading.value = false;
  }, 50);
};
const saveMenu = () => {
  isLoading.value = true;
  if (addMenuForm.value.ids.length > 0) {
    let newMenus = [];
    addMenuForm.value.ids.forEach((value) => {
      let selected = null;
      if (addMenuForm.value.type === "page") {
        selected = props.options.pages.find((p) => p.value === value);
      } else if (addMenuForm.value.type === "category") {
        selected = props.options.categories.find((p) => p.value === value);
      }
      newMenus.push({
        id: selected.value,
        type: addMenuForm.value.type,
        title: selected.label,
        link: selected.link,
      });
    });
    saveMenuItems(newMenus);
  } else if (
    addMenuForm.value.title &&
    addMenuForm.value.link &&
    addMenuForm.value.link !== "https://"
  ) {
    let newMenu = {
      id: "new_" + Date.now(),
      icon: addMenuForm.value.type,
      type: addMenuForm.value.type,
      title: addMenuForm.value.title,
      link: addMenuForm.value.link,
    };
    saveMenuItems([newMenu]);
  }
};

const getLinkFromOption = (value, opt) => {
  return opt.find((o) => o.value === value).link;
};

const deleteMenuItems = ref(null);
const deleteMenu = (item, subitem, subitem2) => {
  deleteMenuItems.value = {
    item: item,
    subitem: subitem,
    subitem2: subitem2,
  };
};
const displayDeleteMessage = computed(() => {
  let itemTitle = deleteMenuItems.value.item.title;
  if (deleteMenuItems.value.subitem2) {
    itemTitle = deleteMenuItems.value.subitem2.title;
  } else if (deleteMenuItems.value.subitem) {
    itemTitle = deleteMenuItems.value.subitem.title;
  }
  return `Do you want to delete ${itemTitle}`;
});
const confirmDeleteMenu = () => {
  isLoading.value = true;
  let newModelValue = [...props.modelValue];
  if (deleteMenuItems.value && deleteMenuItems.value.subitem2) {
    let parentChildren = deleteMenuItems.value.item.children;
    let newChildren = deleteMenuItems.value.subitem.children.filter(
      (i) => i.id !== deleteMenuItems.value.subitem2.id,
    );
    newModelValue[newModelValue.indexOf(deleteMenuItems.value.item)].children[
      parentChildren.indexOf(deleteMenuItems.value.subitem)
    ].children = newChildren;
  } else if (deleteMenuItems.value && deleteMenuItems.value.subitem) {
    let children =
      newModelValue[newModelValue.indexOf(deleteMenuItems.value.item)].children;
    newModelValue[newModelValue.indexOf(deleteMenuItems.value.item)].children =
      children.filter((i) => i.id !== deleteMenuItems.value.subitem.id);
  } else {
    newModelValue = newModelValue.filter(
      (s) => s.id !== deleteMenuItems.value.item.id,
    );
  }
  emit("update:modelValue", newModelValue);
  setTimeout(() => {
    isLoading.value = false;
    deleteMenuItems.value = null;
  }, 50);
};

const selectOption = (option) => {
  let hasSelected = addMenuForm.value.ids.find((o) => o === option.value);
  if (hasSelected) {
    addMenuForm.value.ids = addMenuForm.value.ids.filter(
      (o) => o !== option.value,
    );
  } else {
    addMenuForm.value.ids = [...addMenuForm.value.ids, option.value];
  }
};

const categoryDropdown = ref([]);
</script>
<template>
  <div>
    <DraggableList
      v-if="!isLoading"
      is-link
      :link-key="linkKey"
      :model-value="modelValue"
      @update:model-value="update"
    >
      <template #action-item="{ item }">
        <div class="flex flex-col">
          <div class="p-2 border-b border-gray-200">
            <DropdownItem text="Edit" icon="pencil" @click="editMenu(item)" />
            <DropdownItem
              v-if="hasSubmenu"
              text="Add submenu"
              icon="submenu"
              @click="addSubMenu(item)"
            />
          </div>
          <div class="p-2">
            <DropdownItem
              text="Delete"
              icon="bin"
              variant="destructive"
              @click="deleteMenu(item)"
            />
          </div>
        </div>
      </template>
      <template #content="{ item }">
        <div
          v-if="item.children && item.children.length > 0 && hasSubmenu"
          class="flex w-full my-5"
        >
          <DraggableList
            v-model="item.children"
            class="w-full"
            is-children
            is-link
            :link-key="linkKey"
          >
            <template #action-item="slot">
              <div class="flex flex-col">
                <div class="p-2 border-b border-gray-200">
                  <DropdownItem
                    text="Edit"
                    icon="pencil"
                    @click="editMenu(item, slot.item)"
                  />
                  <DropdownItem
                    v-if="submenuLevel == 2"
                    text="Add submenu"
                    icon="submenu"
                    @click="addSubMenu(item, slot.item)"
                  />
                </div>
                <div class="p-2">
                  <DropdownItem
                    text="Delete"
                    icon="bin"
                    variant="destructive"
                    @click="deleteMenu(item, slot.item)"
                  />
                </div>
              </div>
            </template>
            <template #content="slot">
              <div
                v-if="
                  slot.item.children &&
                  slot.item.children.length > 0 &&
                  submenuLevel == 2
                "
                class="flex w-full my-5"
              >
                <DraggableList
                  v-model="slot.item.children"
                  class="w-full"
                  is-children
                  is-link
                  :link-key="linkKey"
                >
                  <template #action-item="slot2">
                    <div class="flex flex-col">
                      <div class="p-2 border-b border-gray-200">
                        <DropdownItem
                          text="Edit"
                          icon="pencil"
                          @click="editMenu(item, slot.item, slot2.item)"
                        />
                      </div>
                      <div class="p-2">
                        <DropdownItem
                          text="Delete"
                          icon="bin"
                          variant="destructive"
                          @click="deleteMenu(item, slot.item, slot2.item)"
                        />
                      </div>
                    </div>
                  </template>
                </DraggableList>
              </div>
            </template>
          </DraggableList>
        </div>
      </template>
    </DraggableList>
    <div class="flex flex-col justify-center">
      <img
        v-if="modelValue.length === 0"
        class="w-full"
        :src="noMenuIcon"
        alt="you don't have menus"
      />
      <Button
        class="mx-auto mt-3"
        variant="secondary"
        size="small"
        left-icon="plus"
        label="New Menu"
        @click="addMenu(false)"
      />

      <Modal
        v-model="addMenuModal"
        class="!w-full !h-full"
        title="Add Menu"
        :confirm-button-props="{
          label: 'Save',
          onClick: () => saveMenu(),
        }"
      >
        <div class="flex flex-col gap-5">
          <template v-if="!isSocial">
            <div class="flex flex-col">
              <Radio
                id="menu-type-page"
                group-name="menu-type"
                :checked="addMenuForm.type === 'page'"
                label="From pages"
                @update:model-value="addMenuForm.type = 'page'"
              />
              <div v-if="addMenuForm.type === 'page'" class="w-full pl-4 mt-4">
                <Select
                  v-if="options.pages.length > 0"
                  v-model="addMenuForm.ids"
                  multiple
                  is-filterable
                  is-checkboxes
                  :options="options.pages"
                  placeholder="Choose Pages"
                />
              </div>
            </div>
            <div class="flex flex-col">
              <Radio
                id="menu-type-category"
                group-name="menu-type"
                :checked="addMenuForm.type === 'category'"
                label="Product categories "
                @update:model-value="addMenuForm.type = 'category'"
              />

              <div
                v-if="addMenuForm.type === 'category'"
                class="w-full pl-4 mt-4"
              >
                <Select
                  v-if="options.categories.length > 0"
                  v-model="addMenuForm.ids"
                  multiple
                  is-select-all
                  is-checkboxes
                  is-filterable
                  :options="options.categories"
                  placeholder="Choose Categories"
                >
                  <template #default="{ fOptions }">
                    <OcOption
                      v-for="option in fOptions.filter((o) => !o.parent)"
                      :key="option.value"
                      :label="option.label"
                      is-checkboxes
                      :is-selected="
                        addMenuForm.ids.find((o) => o === option.value)
                          ? true
                          : false
                      "
                      :has-children="
                        fOptions.find((o) => o.parent === option.value)
                          ? true
                          : false
                      "
                      :show-children="categoryDropdown.includes(option.value)"
                      @show:children="categoryDropdown.push(option.value)"
                      @hide:children="
                        categoryDropdown = categoryDropdown.filter(
                          (c) => c !== option.value,
                        )
                      "
                      @select="selectOption(option)"
                    >
                      <template #after>
                        <div
                          v-if="fOptions.find((o) => o.parent === option.value)"
                          class="w-full flex-col ml-5"
                          :class="
                            categoryDropdown.includes(option.value)
                              ? 'flex'
                              : 'hidden'
                          "
                        >
                          <OcOption
                            v-for="option1 in fOptions.filter(
                              (o) => o.parent === option.value,
                            )"
                            :key="option1.value"
                            :label="option1.label"
                            is-checkboxes
                            :is-selected="
                              addMenuForm.ids.find((o) => o === option1.value)
                                ? true
                                : false
                            "
                            :has-children="
                              fOptions.find((o) => o.parent === option1.value)
                                ? true
                                : false
                            "
                            :show-children="
                              categoryDropdown.includes(option1.value)
                            "
                            @show:children="
                              categoryDropdown.push(option1.value)
                            "
                            @hide:children="
                              categoryDropdown = categoryDropdown.filter(
                                (c) => c !== option1.value,
                              )
                            "
                            @select="selectOption(option1)"
                          >
                            <template #after>
                              <div
                                v-if="
                                  fOptions.find(
                                    (o) => o.parent === option1.value,
                                  )
                                "
                                class="w-full flex-col ml-5"
                                :class="
                                  categoryDropdown.includes(option1.value)
                                    ? 'flex'
                                    : 'hidden'
                                "
                              >
                                <OcOption
                                  v-for="option2 in fOptions.filter(
                                    (o) => o.parent === option1.value,
                                  )"
                                  :key="option2.value"
                                  :label="option2.label"
                                  is-checkboxes
                                  :is-selected="
                                    addMenuForm.ids.find(
                                      (o) => o === option2.value,
                                    )
                                      ? true
                                      : false
                                  "
                                  @select="selectOption(option2)"
                                >
                                </OcOption>
                              </div>
                            </template>
                          </OcOption>
                        </div>
                      </template>
                    </OcOption>
                  </template>
                </Select>
              </div>
            </div>
          </template>
          <div class="flex flex-col">
            <Radio
              v-if="!isSocial"
              id="menu-type-link"
              group-name="menu-type"
              :checked="!['page', 'category'].includes(addMenuForm.type)"
              label="External link"
              @update:model-value="addMenuForm.type = 'link'"
            />
            <div
              v-if="!['page', 'category'].includes(addMenuForm.type)"
              class="w-full pl-4 mt-4"
            >
              <LinkInput
                v-model="addMenuForm.link"
                v-model:type="addMenuForm.type"
                v-model:title="addMenuForm.title"
                label="Enter username"
                placeholder="@username"
                :links="socialOptions"
              />
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        v-model="editMenuModal"
        class="!w-full !h-full"
        title="Edit Menu"
        :confirm-button-props="{
          class: 'hidden',
        }"
        :cancel-button-props="{
          label: 'Close',
        }"
      >
        <div class="flex flex-col gap-5">
          <div class="flex flex-col">
            <template v-if="['page', 'category'].includes(editMenuForm.type)">
              <div class="flex flex-col">
                <Input
                  v-model="editMenuForm.title"
                  class="mb-3"
                  label="Title"
                  placeholder="Title"
                />
                <div v-if="editMenuForm.type === 'page'" class="w-full">
                  <Select
                    v-if="options.pages.length > 0"
                    v-model="editMenuForm.id"
                    :options="options.pages"
                    is-filterable
                    label="Choose Page"
                    placeholder="Choose Page"
                    @update:model-value="
                      editMenuForm.link = getLinkFromOption(
                        $event,
                        options.pages,
                      )
                    "
                  />
                </div>
                <div v-if="editMenuForm.type === 'category'" class="w-full">
                  <Select
                    v-if="options.categories.length > 0"
                    v-model="editMenuForm.id"
                    :options="options.categories"
                    label="Choose Category"
                    placeholder="Choose Category"
                    is-filterable
                    @update:model-value="
                      editMenuForm.link = getLinkFromOption(
                        $event,
                        options.categories,
                      )
                    "
                  />
                </div>
              </div>
            </template>
            <div v-else class="w-full pl-4 mt-4">
              <LinkInput
                v-model="editMenuForm.link"
                v-model:type="editMenuForm.type"
                v-model:title="editMenuForm.title"
                label="Enter username"
                placeholder="@username"
                is-edit
                :links="socialOptions"
              />
            </div>
          </div>
        </div>
      </Modal>
      <ConfirmationModal
        v-if="deleteMenuItems"
        :model-value="true"
        class="!w-full"
        title="Are you sure?"
        :description="displayDeleteMessage"
        @cancel="deleteMenuItems = null"
        @confirm="confirmDeleteMenu"
      />
    </div>
  </div>
</template>
