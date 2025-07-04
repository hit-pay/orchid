<script setup>
import { Button, Chip, Icon } from '@/orchidui-core'
defineProps({
  theme: Object,
  activating: Boolean,
  isProAccount: Boolean
})
defineEmits(['activate', 'customize', 'preview', 'upgrade', 'publish'])
</script>
<template>
  <div
    class="bg-oc-bg-dark border-[3px] rounded-lg flex flex-col"
    :class="theme.active ? 'border-oc-primary' : 'border-oc-bg-dark'"
  >
    <div class="w-full relative group">
      <div
        class="w-full h-full bg-black/25 absolute top-0 left-0 group-hover:flex rounded-t-lg"
        :class="!activating ? 'hidden' : 'flex'"
      >
        <template v-if="!activating">
          <div v-if="!theme.installed" class="m-auto flex gap-3">
            <Button variant="secondary" label="Preview" @click="$emit('preview', theme)" />
            <Button
              v-if="isProAccount || !theme.pro"
              label="Try Theme"
              @click="$emit('activate', theme)"
            />
          </div>
          <div v-if="theme.installed && theme.active" class="m-auto">
            <Button variant="secondary" label="Customize" @click="$emit('customize', theme)" />
          </div>
          <div v-else-if="theme.installed && !theme.active" class="m-auto flex gap-3">
            <Button variant="secondary" label="Customize" @click="$emit('customize', theme)" />
            <Button label="Publish" @click="$emit('publish', theme)" />
          </div>
        </template>
        <template v-else>
          <div class="m-auto bg-white/75 rounded p-5 flex text-center flex-col justify-center">
            <div class="mx-auto mb-3">
              <Icon
                name="loading-2"
                width="32"
                height="32"
                class="text-oc-text-400 motion-safe:animate-spin"
              ></Icon>
            </div>
            Adding theme
          </div>
        </template>
      </div>
      <img class="w-full rounded-t-md" :src="theme.thumbnail" :alt="theme.title" />
    </div>
    <div class="p-4 flex items-center">
      <div class="w-full">
        <div class="text-md font-medium">{{ theme.title }}</div>
        <div class="text-oc-text-400 text-sm mt-1">{{ theme.description }}</div>
      </div>
      <div class="h-full flex items-start">
        <Chip v-if="theme.installed && theme.active" class="ml-auto">Active</Chip>
        <Chip v-else-if="theme.installed && !theme.active" variant="gray" class="ml-auto"
          >Draft</Chip
        >
        <Chip
          v-else-if="theme.pro"
          class="ml-auto cursor-pointer"
          variant="accent-2"
          @click="$emit('upgrade', theme)"
          >Upgrade</Chip
        >
      </div>
    </div>
  </div>
</template>
