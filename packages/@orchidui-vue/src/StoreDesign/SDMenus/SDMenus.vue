<script setup>
import { ref } from "vue";
import { DropdownItem, Button, Modal, Radio, Select, Input } from "@/orchidui";
import { DraggableList } from "@/orchidui/Draggable.js";
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
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

const isLoading = ref(false)
const emit = defineEmits({
  "update:modelValue": [],
})

const update = (value) => emit("update:modelValue", value);

const editMenu = (item, subitem, subitem2) => {
  console.log("edit:menu", item, subitem, subitem2);
};
const deleteMenu = (item, subitem, subitem2) => {
  console.log("delete:menu", item, subitem, subitem2);
};
const addSubMenu = (item, subitem) => {
  console.log("add:submenu", item, subitem);
};

const addMenuForm = ref({
  id: "new_"+ Date.now(),
  type: "page",
  title: "",
  link: "",
});
const addMenuModal = ref(false);
const addMenu = () => {
  addMenuModal.value = true;
  addMenuForm.value = {
    id: "new_"+ Date.now(),
    type: "page",
    title: "",
    link: "",
  };
};

const onUpdatePage = () => {
  const selected = props.options.pages.find(o =>  o.value === addMenuForm.value.id)
  addMenuForm.value.title = selected.label
  addMenuForm.value.link = selected.link
}
const saveMenu = () => {
  if(addMenuForm.value.link && addMenuForm.value.title){
    isLoading.value = true
    let newModelValue = [...props.modelValue, addMenuForm.value]
    emit('update:modelValue',newModelValue)
    setTimeout(() => {
      addMenuModal.value = false
      isLoading.value = false
    }, 100)
  }
}
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
        <div v-if="item.children && hasSubmenu" class="flex w-full my-5">
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
                v-if="slot.item.children && submenuLevel == 2"
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
        @click="addMenu"
      />

      <Modal
        v-model="addMenuModal"
        class="!w-full !h-full"
        title="Add Menu"
        :confirm-button-props="{
          label: 'Save',
          onClick: () => saveMenu()
        }"
      >
        <div class="flex flex-col gap-5">
          <div class="flex flex-col">
            <Radio
              id="menu-type-page"
              group-name="menu-type"
              :checked="addMenuForm.type === 'page'"
              label="From pages"
              @update:model-value="addMenuForm.type = 'page'"

            />
            <div class="w-full pl-4 mt-4">
              <Input v-model="addMenuForm.title" class="mb-3" placeholder="Menu title"  />
              <Select v-model="addMenuForm.id" :options="options.pages" placeholder="Select Page" @update:model-value="onUpdatePage"  />
            </div>
          </div>
          <div class="flex">
            <Radio
              id="menu-type-category"
              group-name="menu-type"
              :checked="addMenuForm.type === 'category'"
              label="Product category "
              @update:model-value="addMenuForm.type = 'category'"
            />
          </div>
          <div class="flex">
            <Radio
              id="menu-type-link"
              group-name="menu-type"
              :checked="addMenuForm.type === 'link'"
              label="External link"
              @update:model-value="aaddMenuForm.type= 'link'"

            />
          </div>
        </div>
      </Modal>
    </div>
  </div>
</template>
