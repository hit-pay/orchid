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
        v-if="modelValue && gradientType == 'linear' && mode != 'solid'"
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
        <path
          d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z"
          fill="url(#paint0_linear_4469_2104)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_4469_2104"
            x1="14"
            y1="0"
            x2="14"
            y2="28"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#03102F" />
            <stop offset="1" stop-color="#03102F" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </button>
    <button
      type="button"
      :class="gradientType == 'radial' && mode != 'solid' ? 'active' : ''"
      :style="`${iconClasses.radial ? '' : 'padding: 6px;'}`"
      @click="$emit('onChangeMode', 'radial')"
    >
      <div
        v-if="modelValue && gradientType == 'radial' && mode != 'solid'"
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
            fill="url(#paint0_radial_4469_2106)"
          />
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_4469_2106"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(14 14) rotate(90) scale(14)"
          >
            <stop stop-color="#03102F" stop-opacity="0" />
            <stop offset="1" stop-color="#03102F" />
          </radialGradient>
        </defs>
      </svg>
    </button>
  </div>
</template>

<script setup>
defineProps({
  variant: String,
  mode: {
    default: "gradient",
    type: String,
  },
  gradientType: { default: "linear", type: String },
  iconClasses: {
    default: () => {
      return {
        linear: "",
        radial: "",
      };
    },
    type: Object,
  },
  modelValue: String,
});

defineEmits(["onChangeMode"]);
</script>
