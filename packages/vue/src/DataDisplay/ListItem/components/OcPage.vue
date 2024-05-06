<script setup>
import { Chip, Icon, Dropdown } from "@/orchidui";
import { ref } from "vue";
import dayjs from "dayjs";

defineProps({
  page: Object,
});
const isOpen = ref(false);
const stripHtml = (html) => {
  let tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

const getPageThumbnail = (url) => {
  return url?.replace("generics/medium/", "generics/thumbnail/");
};
</script>

<template>
  <div class="w-full p-5 flex" @mouseleave="isOpen = false">
    <div v-if="page.page_cover_url" class="min-w-[100px]">
      <div
        class="w-[100px] h-[100px] rounded !bg-cover"
        :style="`background:url(${getPageThumbnail(page.page_cover_url)})`"
      ></div>
    </div>
    <div class="grow pl-3">
      <div class="flex w-full">
        <div class="text-lg font-medium">
          {{ page.title }}
        </div>
        <div class="ml-auto">
          <Dropdown v-model="isOpen" placement="bottom-end">
            <div
              class="cursor-pointer flex hover:bg-oc-gray-200 items-center rounded p-2"
            >
              <Icon class="text-oc-text-400" name="dots-vertical" />
            </div>
            <template #menu>
              <slot name="menu" />
            </template>
          </Dropdown>
        </div>
      </div>
      <div class="line-clamp-2 mb-3 max-w-[80%] text-oc-text-400">
        {{ stripHtml(page.description) }}
      </div>
      <div class="w-full text-sm lg:mt-4 flex flex-wrap items-center">
        <span class="mr-3">
          <span class="text-oc-text-300">Last updated : </span>
          <span class="text-oc-text-400 font-medium">{{
            dayjs(page.updated_at).format("DD MMM YYYY")
          }}</span></span
        >
        <Chip
          class="ml-auto md:ml-0"
          :variant="!page.enabled ? 'gray' : 'primary'"
          >{{ page.enabled ? "Published" : "Draft" }}</Chip
        >
      </div>
    </div>
  </div>
</template>
