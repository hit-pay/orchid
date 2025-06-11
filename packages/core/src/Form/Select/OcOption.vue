<script setup>
import { Checkbox, Icon } from '@/orchidui-core'
import { computed, ref } from 'vue'

const emit = defineEmits(['select', 'show:children', 'hide:children', 'focus', 'blur'])

const props = defineProps({
  label: String,
  subLabel: String,
  isSelected: [Boolean, Number],
  isCheckboxes: Boolean,
  isPartial: Boolean,
  hasChildren: Boolean,
  showChildren: Boolean,
  isDisabled: Boolean,
  isFocused: {
    type: Boolean,
    default: false
  },
  value: {
    type: [String, Number, Boolean, Object],
    default: null
  }
})

const optionItemRef = ref()

// Enhanced option classes with focus state
const optionClasses = computed(() => ({
  'bg-oc-accent-1-50': (props.isSelected && !props.isCheckboxes) || props.isFocused,
  'opacity-50 hover:bg-white !cursor-default': props.isDisabled,
  'ring-2 ring-oc-accent-1-500': props.isFocused,
  'bg-oc-accent-1-100': props.isFocused && props.isSelected && !props.isCheckboxes
}))

// Handle click with keyboard navigation support
const handleClick = (event) => {
  if (props.isDisabled) {
    event.preventDefault()
    return
  }
  emit('select')
}

// Handle mouse enter for focus management
const handleMouseEnter = () => {
  if (!props.isDisabled) {
    emit('focus')
  }
}

// Handle mouse leave
const handleMouseLeave = () => {
  if (!props.isDisabled) {
    emit('blur')
  }
}

// Handle children toggle
const handleChildrenToggle = (event) => {
  event.stopPropagation()
  if (props.showChildren) {
    emit('hide:children')
  } else {
    emit('show:children')
  }
}

// Scroll into view method for keyboard navigation
const scrollIntoView = () => {
  if (optionItemRef.value) {
    optionItemRef.value.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    })
  }
}

defineExpose({
  optionItemRef,
  scrollIntoView
})
</script>

<template>
  <div
    ref="optionItemRef"
    class="w-full flex flex-wrap relative hover:bg-oc-accent-1-50 rounded-sm transition-all duration-200"
    :class="optionClasses"
    role="option"
    :aria-selected="!!isSelected"
    :aria-disabled="isDisabled"
    :tabindex="isFocused ? 0 : -1"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="w-full p-3 flex items-center text-oc-text-400 justify-between cursor-pointer gap-x-3"
      :class="{
        'pointer-events-none': isDisabled
      }"
    >
      <Checkbox
        v-if="isCheckboxes"
        :model-value="!!isSelected"
        :is-partial="isPartial"
        class="!w-fit pointer-events-none"
        :class="{
          'opacity-50': isDisabled
        }"
      />
      
      <div class="w-full flex items-center gap-x-3">
        <slot name="trailing"></slot>

        <div class="flex flex-col gap-3 overflow-hidden" :class="{ 'flex-1': isCheckboxes }">
          <span 
            class="truncate"
            :class="{
              'text-oc-text-900': !isDisabled,
              'text-oc-text-300': isDisabled
            }"
          >
            {{ label }}
          </span>
          
          <slot name="sub-label">
            <span 
              v-if="subLabel" 
              class="text-sm"
              :class="{
                'text-oc-text-300': !isDisabled,
                'text-oc-text-200': isDisabled
              }"
            >
              {{ subLabel }}
            </span>
          </slot>
        </div>

        <slot name="leading"></slot>
      </div>
      
      <Icon 
        v-if="isSelected && !isCheckboxes" 
        class="w-5 h-5 text-oc-primary"
        :class="{
          'opacity-50': isDisabled
        }"
        name="check-2" 
      />
    </div>
    
    <Icon
      v-if="hasChildren"
      class="w-6 h-6 absolute right-[10px] top-[8px] cursor-pointer transition-transform duration-200"
      :class="{
        'rotate-180': showChildren,
        'opacity-50': isDisabled,
        'hover:text-oc-accent-1-600': !isDisabled
      }"
      name="chevron-down"
      @click="handleChildrenToggle"
    />
    
    <slot name="after"></slot>
  </div>
</template>

<style scoped>
/* Focus styles for better accessibility */
.option-focused {
  outline: 2px solid var(--oc-accent-1-500);
  outline-offset: -2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  [role="option"][aria-selected="true"] {
    border: 2px solid;
  }
  
  [role="option"]:focus {
    outline: 3px solid;
    outline-offset: -3px;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
  }
}
</style>