<script setup>
import { ref } from "vue";
import { Button, Input } from "@orchid";
defineEmits({
  addQuery: [],
});
const isSearchOpen = ref(false);
const query = ref("");
</script>

<template>
  <div
    class="transition-all duration-300"
    :class="isSearchOpen ? 'max-w-[400px]' : 'absolute max-w-0 overflow-hidden'"
  >
    <div class="flex gap-x-4">
      <Input
        v-model="query"
        placeholder="Search something here"
        icon="search"
        @keyup.enter="
          $emit('addQuery', query);
          query = '';
        "
      />

      <span
        class="py-3 text-base cursor-pointer flex normal-case items-center font-medium text-oc-text-400"
        @click="
          isSearchOpen = false;
          query = '';
        "
      >
        Clear
      </span>
    </div>
  </div>
  <div
    class="transition-all duration-300"
    :class="!isSearchOpen ? 'max-w-[400px]' : 'max-w-0 overflow-hidden'"
  >
    <Button
      v-if="!isSearchOpen"
      variant="secondary"
      left-icon="search"
      @click="isSearchOpen = true"
    />
  </div>
</template>
