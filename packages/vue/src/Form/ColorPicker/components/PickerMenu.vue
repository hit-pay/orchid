<template>
  <div class="ck-cp-menu mb-3 justify-end">
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
    <div
      ref="rightContainer"
      class="ck-cp-controller-bar"
      style="display: inline-flex; justify-content: end; position: relative"
    >
      <button
        v-if="isEyeDropperUsing && showEyeDrop"
        id="cp-btn-eyedropper"
        type="button"
        class="cp-btn"
        :style="`${iconClasses.eyeDroper ? '' : 'padding: 7px;'}`"
        @click="$emit('onClickEyeDropper')"
      >
        <i v-if="iconClasses.eyeDroper" :class="iconClasses.eyeDroper"></i>
        <svg
          v-else
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path
            d="M21.35 1.825l-6.344 6.35-0.588-0.588c-0.781-0.781-2.050-0.781-2.831 0s-0.781 2.050 0 2.831l10 10c0.781 0.781 2.050 0.781 2.831 0s0.781-2.050 0-2.831l-0.587-0.587 6.344-6.35c2.438-2.438 2.438-6.388 0-8.819s-6.387-2.438-8.819 0zM3.462 20.206c-0.938 0.938-1.462 2.212-1.462 3.538v2.65l-1.663 2.494c-0.531 0.794-0.425 1.85 0.25 2.525s1.731 0.781 2.525 0.25l2.494-1.663h2.65c1.325 0 2.6-0.525 3.537-1.462l7.544-7.544-2.831-2.831-7.544 7.544c-0.188 0.188-0.444 0.294-0.706 0.294h-2.256v-2.256c0-0.262 0.106-0.519 0.294-0.706l7.544-7.544-2.831-2.831-7.544 7.544z"
          ></path>
        </svg>
      </button>

      <button
        v-if="showColorList"
        type="button"
        class="cp-btn"
        :style="`${iconClasses.save ? '' : 'padding: 7px;'}`"
        @click="$emit('onSaveColor')"
      >
        <i v-if="iconClasses.save" :class="iconClasses.save"></i>
        <svg
          v-else
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="32"
          viewBox="0 0 28 32"
        >
          <path
            d="M4 2c-2.206 0-4 1.794-4 4v20c0 2.206 1.794 4 4 4h20c2.206 0 4-1.794 4-4v-15.169c0-1.063-0.419-2.081-1.169-2.831l-4.831-4.831c-0.75-0.75-1.769-1.169-2.831-1.169h-15.169zM4 8c0-1.106 0.894-2 2-2h12c1.106 0 2 0.894 2 2v4c0 1.106-0.894 2-2 2h-12c-1.106 0-2-0.894-2-2v-4zM14 18c2.209 0 4 1.791 4 4s-1.791 4-4 4v0c-2.209 0-4-1.791-4-4s1.791-4 4-4v0z"
          ></path>
        </svg>
      </button>
      <button
        type="button"
        v-if="mode == 'gradient'"
        class="cp-btn"
        @click="$emit('onDeleteColor')"
        :style="`${iconClasses.delete ? '' : 'padding: 7.5px;'}`"
      >
        <i v-if="iconClasses.delete" :class="iconClasses.delete"></i>
        <svg
          v-else
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="32"
          viewBox="0 0 28 32"
        >
          <path
            d="M8.45 1.106l-0.45 0.894h-6c-1.106 0-2 0.894-2 2s0.894 2 2 2h24c1.106 0 2-0.894 2-2s-0.894-2-2-2h-6l-0.45-0.894c-0.337-0.681-1.031-1.106-1.788-1.106h-7.525c-0.756 0-1.45 0.425-1.787 1.106zM26 8h-24l1.325 21.188c0.1 1.581 1.413 2.813 2.994 2.813h15.362c1.581 0 2.894-1.231 2.994-2.813l1.325-21.188z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
  <div
    v-if="mode == 'gradient'"
    v-show="gradientType == 'linear' && isShowLinearAngleRange"
    class="ck-cp-linear-angle-container"
  >
    <div>
      <p class="ck-gradient-set-label">
        {{ local.angle ? local.angle : "Angle" }} <span>{{ angle }}°</span>
      </p>
      <input
        type="range"
        min="0"
        max="360"
        :value="angle"
        @input="handleInput($event, 'angle')"
      />
    </div>
  </div>

  <div
    v-if="mode == 'gradient'"
    v-show="gradientType == 'radial' && isShowRadialAngleRange"
    class="ck-cp-linear-angle-container flex gap-3"
  >
    <div class="w-1/2">
      <p class="ck-gradient-set-label">
        {{ local.positionX ? local.positionX : "Position X" }}
        <span>{{ percentageX }}%</span>
      </p>
      <input
        type="range"
        min="0"
        max="100"
        :value="percentageX"
        @input="handleInput($event, 'percentageX')"
      />
    </div>
    <div class="w-1/2">
      <p class="ck-gradient-set-label">
        {{ local.positionY ? local.positionY : "Position Y" }}
        <span>{{ percentageY }}%</span>
      </p>
      <input
        type="range"
        min="0"
        max="100"
        :value="percentageY"
        @input="handleInput($event, 'percentageY')"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  variant: String,
  mode: {
    default: "gradient",
    type: String,
  },
  inputType: { default: "RGB", type: String },
  gradientType: { default: "linear", type: String },
  isEyeDropperUsing: { default: false, type: Boolean },
  showColorList: { default: true, type: Boolean },
  showEyeDrop: { default: true, type: Boolean },
  showInputMenu: { default: true, type: Boolean },
  angle: { default: 90, type: Number },
  percentageX: { default: 50, type: Number },
  percentageY: { default: 50, type: Number },
  local: {
    default: () => {
      return { angle: "", positionX: "", positionY: "" };
    },
    type: Object,
  },
  iconClasses: {
    default: () => {
      return {
        linear: "",
        radial: "",
        ruler: "",
        eyeDroper: "",
        inputMenu: "",
        save: "",
        delete: "",
      };
    },
    type: Object,
  },
});

const rightContainer = ref();
const isShowLinearAngleRange = ref(true);
const isShowRadialAngleRange = ref(true);

const emits = defineEmits([
  "onSaveColor",
  "onChangeMode",
  "onChangeInputType",
  "onDeleteColor",
  "onClickEyeDropper",
  "update:angle",
  "update:percentageX",
  "update:percentageY",
  "onInput",
]);

const handleInput = (event, type) => {
  switch (type) {
    case "angle":
      emits("update:angle", parseInt(event.target.value));
      emits("onInput");
      break;

    case "percentageX":
      emits("update:percentageX", parseInt(event.target.value));
      emits("onInput");
      break;
    case "percentageY":
      emits("update:percentageY", parseInt(event.target.value));
      emits("onInput");
      break;
  }
};
</script>
