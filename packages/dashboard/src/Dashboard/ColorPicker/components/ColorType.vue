<template>
  <div class="w-full flex justify-center">
    <button
      type="button"
      :class="mode == 'solid' ? 'active' : ''"
      style="padding: 7px"
      @click="$emit('onChangeMode', 'solid')"
    >
      <div
        v-if="modelValue && mode == 'solid'"
        class="w-[28px] h-[28px] rounded-full border"
        :style="`background:${modelValue}`"
      ></div>
      <svg
        v-else
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path
            d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z"
            fill="#03102F"
          />
        </g>
      </svg>
    </button>
    <button
      type="button"
      :class="gradientType == 'linear' && mode != 'solid' ? 'active' : ''"
      :style="`${iconClasses.linear ? '' : 'padding: 7px;'}`"
      @click="$emit('onChangeMode', 'linear')"
    >
      <div
        class="w-[28px] h-[28px] rounded-full border"
        :style="
          modelValue && gradientType == 'linear' && mode != 'solid'
            ? `background:${modelValue}`
            : `
          background: linear-gradient(
            180deg,
            #03102f 0%,
            rgba(3, 16, 47, 0) 100%
          );
        `
        "
      ></div>
    </button>
    <button
      type="button"
      :class="gradientType == 'radial' && mode != 'solid' ? 'active' : ''"
      :style="`${iconClasses.radial ? '' : 'padding: 6px;'}`"
      @click="$emit('onChangeMode', 'radial')"
    >
      <div
        class="w-[28px] h-[28px] rounded-full border"
        :style="
          modelValue && gradientType == 'radial' && mode != 'solid'
            ? `background:${modelValue}`
            : `background: radial-gradient(circle at 50% 50%, rgb(255, 255, 255) 0%, rgb(3, 16, 47) 100%);`
        "
      ></div>
    </button>
  </div>
</template>

<script setup>
defineProps({
  variant: String,
  mode: {
    default: 'gradient',
    type: String
  },
  gradientType: { default: 'linear', type: String },
  iconClasses: {
    default: () => {
      return {
        linear: '',
        radial: ''
      }
    },
    type: Object
  },
  modelValue: String
})

defineEmits(['onChangeMode'])
</script>
