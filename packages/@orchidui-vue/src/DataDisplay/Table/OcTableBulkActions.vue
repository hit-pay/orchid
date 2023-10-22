<script setup>
import { Button, TableHeader } from "@orchid";
defineEmits({
  publish: [],
  unPublish: [],
  delete: [],
});
</script>

<template>
  <TableHeader
    class="!bg-oc-bg-light w-full rounded-t-l flex-1 gap-x-5 items-center flex !justify-start"
  >
    <Button
      label="Publish"
      size="small"
      is-transparent
      left-icon="eye-open"
      @click="$emit('publish')"
    />
    <Button
      label="Unpublish"
      is-transparent
      size="small"
      variant="secondary"
      left-icon="eye-close"
      @click="$emit('unPublish')"
    />
    <Button
      label="Delete"
      is-transparent
      size="small"
      variant="destructive"
      left-icon="bin"
      @click="$emit('delete')"
    />
  </TableHeader>
</template>
