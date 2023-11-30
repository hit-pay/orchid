<script setup>
import { ref } from "vue";
import { DropdownItem } from "@/orchidui";
import DraggableList from "./OcDraggableList.vue";
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits("update:modelValue");
const model = ref(props.modelValue);

const update = (value) => emit("update:modelValue", value);

const editMenu = (item, subitem, subitem2) => {
  console.log(item, subitem, subitem2);
};
const deleteMenu = (item, subitem, subitem2) => {
  console.log(item, subitem, subitem2);
};
const addSubMenu = (item, subitem) => {
  console.log(item, subitem);
};
</script>
<template>
  <div>
    <DraggableList v-model="model" is-link @update:model-value="update">
      <template #action-item="{ item }">
        <div class="flex flex-col">
          <div class="p-2 border-b border-gray-200">
            <DropdownItem text="Edit" icon="pencil" @click="editMenu(item)" />
            <DropdownItem
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
        <div v-if="item.children" class="flex w-full my-5">
          <DraggableList
            v-model="item.children"
            class="w-full"
            is-children
            is-link
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
              <div v-if="slot.item.children" class="flex w-full my-5">
                <DraggableList
                  v-model="slot.item.children"
                  class="w-full"
                  is-children
                  is-link
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
