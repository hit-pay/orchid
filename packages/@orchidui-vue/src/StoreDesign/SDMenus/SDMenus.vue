<script setup>
import { ref, computed } from "vue";
import { DropdownItem, Button, Modal, Radio, Select, LinkInput } from "@/orchidui";
import { DraggableList } from "@/orchidui/Draggable.js";
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  variant: {
    type: String,
    default: 'default' // social
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

const isSocial = computed(() => props.variant === 'social')

const addMenuForm = ref(null);
const addMenuModal = ref(false);
const addMenu = () => {
  addMenuModal.value = true;
  addMenuForm.value = {
    ids: [],
    type: isSocial.value ? "facebook" : "page",
    title: "",
    link: "",
  };
};

const socialOptions = [
      {
        value: "facebook",
        label: "Facebook",
        icon: "facebook",
        preFill: "https://facebook.com/",
      },
      {
        value: "instagram",
        label: "Instagram",
        icon: "instagram",
        preFill: "https://instagram.com/",
      },
      {
        value: "twitter",
        label: "(X) Twitter",
        icon: "twitter",
        preFill: "https://twitter.com/",
      },
      {
        value: "tiktok",
        label: "Tiktok",
        icon: "tiktok",
        preFill: "https://tiktok.com/",
      },
      {
        value: "email",
        label: "Email",
        icon: "email",
        preFill: "mailto:",
      },
      {
        value: "phone",
        label: "Phone Number",
        icon: "phone",
        preFill: "tel:",
      },
      {
        value: "whatsapp",
        label: "Whatsapp",
        icon: "whatsapp",
        preFill: "https://wa.me/",
      },
      {
        value: "telegram",
        label: "Telegram",
        icon: "telegram",
        preFill: "https://t.me/",
      },
      {
        value: "link",
        label: "Other website",
        icon: "link",
        preFill: "https://",
      },
    ]

const saveMenu = () => {
  isLoading.value = true
  console.log(addMenuForm.value)
  if(addMenuForm.value.ids.length > 0){
    let newMenus = []
    addMenuForm.value.ids.forEach((value) => {
      let selected = null
      if(addMenuForm.value.type === 'page'){
        selected = props.options.pages.find(p => p.value === value)
      }else if(addMenuForm.value.type === 'category'){
        selected = props.options.categories.find(p => p.value === value)
      }
      newMenus.push({
          id: selected.value,
          type: addMenuForm.value.type,
          title: selected.label,
          link: selected.link,
        })
    })
    emit('update:modelValue',[...props.modelValue, ...newMenus])
  }else if(addMenuForm.value.title && addMenuForm.value.link){

    let newMenu = {
      id: "new_"+ Date.now(),
      icon: addMenuForm.value.type,
      type: addMenuForm.value.type,
      title: addMenuForm.value.title,
      link: addMenuForm.value.link
    }
    let newMenus = [...props.modelValue, newMenu]
    emit('update:modelValue',newMenus)
  }

  setTimeout(() => {
    addMenuModal.value = false
    isLoading.value = false
  }, 200)
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
         <!-- if social  -->
         <div v-if="variant === 'social'" class="flex flex-col gap-5">
           <LinkInput 
                  v-model="addMenuForm.link"
                  v-model:type="addMenuForm.type"
                  v-model:title="addMenuForm.title"
                  label="Enter username"
                  placeholder="@username"
                  :links="socialOptions"
          />
        </div>
         <!-- else  -->
        <div v-else class="flex flex-col gap-5">
          <div class="flex flex-col">
            <Radio
              id="menu-type-page"
              group-name="menu-type"
              :checked="addMenuForm.type === 'page'"
              label="From pages"
              @update:model-value="addMenuForm.type = 'page'"

            />
            <div v-if="addMenuForm.type === 'page'" class="w-full pl-4 mt-4">
              <Select v-if="options.pages.length > 0" v-model="addMenuForm.ids" multiple :options="options.pages" placeholder="Choose Pages"   />
            </div>
          </div>
          <div class="flex flex-col">
            <Radio
              id="menu-type-category"
              group-name="menu-type"
              :checked="addMenuForm.type === 'category'"
              label="Product category "
              @update:model-value="addMenuForm.type = 'category'"
            />

            <div v-if="addMenuForm.type === 'category'" class="w-full pl-4 mt-4" >
              <Select v-if="options.categories.length > 0" v-model="addMenuForm.ids" multiple :options="options.categories" placeholder="Choose Categories"   />
            </div>
          </div>
          <div class="flex flex-col">
            <Radio
              id="menu-type-link"
              group-name="menu-type"
              :checked="!['page','category'].includes(addMenuForm.type)"
              label="External link"
              @update:model-value="addMenuForm.type = 'link'"

            />
            <div v-if="!['page','category'].includes(addMenuForm.type)" class="w-full pl-4 mt-4" >
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

      <!-- edit modal -->
    </div>
  </div>
</template>
