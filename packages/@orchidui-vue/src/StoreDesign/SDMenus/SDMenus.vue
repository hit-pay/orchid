<script setup>
import { ref } from "vue";
import { DropdownItem } from "@/orchidui";
import { DraggableList } from "@/orchidui/DraggableList";
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
});

const emit = defineEmits(
  "update:modelValue",
  "edit:menu",
  "delete:menu",
  "add:submenu",
);
const model = ref(props.modelValue);

const update = (value) => emit("update:modelValue", value);

const editMenu = (item, subitem, subitem2) => {
  emit("edit:menu", item, subitem, subitem2);
};
const deleteMenu = (item, subitem, subitem2) => {
  emit("delete:menu", item, subitem, subitem2);
};
const addSubMenu = (item, subitem) => {
  emit("add:submenu", item, subitem);
};
</script>
<template>
  <div>
    <DraggableList
      v-model="model"
      is-link
      :link-key="linkKey"
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
  </div>
</template>
