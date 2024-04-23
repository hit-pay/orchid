<template>
  <div class="ck-cp-controller-bar">
    <button
      v-if="variant == 'gradient'"
      type="button"
      class="cp-btn"
      :class="mode == 'solid' ? 'active' : ''"
      style="padding: 7px"
      @click="$emit('onChangeMode', 'solid')"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.9942 7.85074C18.9134 6.81588 17.9988 6 16.8824 6H3.11765L2.9596 6.00549C1.86387 6.08183 1 6.94564 1 8V12L1.00581 12.1493C1.08665 13.1842 2.00126 14 3.11765 14H16.8824L17.0404 13.9945C18.1362 13.9182 19 13.0544 19 12V8L18.9942 7.85074Z"
          fill="#61667C"
        />
      </svg>
    </button>
    <button
      v-if="variant == 'gradient'"
      type="button"
      class="cp-btn"
      :class="gradientType == 'linear' && mode != 'solid' ? 'active' : ''"
      :style="`${iconClasses.linear ? '' : 'padding: 7px;'}`"
      @click="$emit('onChangeMode', 'linear')"
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <path
          d="M21.5 0h9c0.831 0 1.5 0.669 1.5 1.5v9c0 0.606-0.363 1.156-0.925 1.387s-1.206 0.106-1.637-0.325l-2.438-2.438-5.438 5.438c-0.587 0.588-1.538 0.588-2.119 0l-2-2c-0.587-0.588-0.587-1.537 0-2.119l5.438-5.438-2.444-2.444c-0.431-0.431-0.556-1.075-0.325-1.637s0.781-0.925 1.387-0.925zM10.5 32h-9c-0.831 0-1.5-0.669-1.5-1.5v-9c0-0.606 0.362-1.156 0.925-1.387s1.206-0.106 1.637 0.325l2.438 2.438 5.438-5.438c0.588-0.587 1.537-0.587 2.119 0l2 2c0.588 0.587 0.588 1.538 0 2.119l-5.438 5.438 2.438 2.438c0.431 0.431 0.556 1.075 0.325 1.637s-0.781 0.925-1.387 0.925z"
        ></path>
      </svg>
    </button>
    <button
      v-if="variant == 'gradient'"
      type="button"
      class="cp-btn"
      :class="gradientType == 'radial' && mode != 'solid' ? 'active' : ''"
      :style="`${iconClasses.radial ? '' : 'padding: 6px;'}`"
      @click="$emit('onChangeMode', 'radial')"
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <path
          d="M29 16c0-7.18-5.82-13-13-13s-13 5.82-13 13v0c0 7.18 5.82 13 13 13s13-5.82 13-13v0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16v0c0 8.837-7.163 16-16 16s-16-7.163-16-16v0z"
        ></path>
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
});

defineEmits(["onChangeMode"]);
</script>
