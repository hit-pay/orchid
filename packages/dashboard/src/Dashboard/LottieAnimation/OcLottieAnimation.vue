<!-- Lottie Animation Docs Reference: https://github.com/airbnb/lottie-web -->
<template>
  <div
    ref="lottieContainerRef"
    :style="style"
  />
</template>

<script setup>
import lottie from 'lottie-web';
import {
  onMounted,  ref, watch,
} from 'vue';

// Prop with default values
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  speed: {
    type: Number,
    default: 1,
  },
  loop: {
    type: Boolean,
    default: false,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
})

// Emits
const emit = defineEmits(['error', 'animation-item-changed']);

// Refs
const rendererSettings = ref({
  scaleMode: 'centerCrop',
  clearCanvas: true,
  progressiveLoad: false,
  hideOnTransparent: true,
});

const animationItem = ref();
const style = ref({
  width: '100', // in pixel
  height: '100',
  overflow: 'hidden',
  margin: '0 auto',
});

// select the HTML to render the animation
const lottieContainerRef = ref();

const jsonData = ref();

// Methods
const loadJsonData = async (path) => {
  const response = await fetch(path)
      .catch(() => {
        emit('error');
      });

  if (!response) {
    return;
  }

  jsonData.value = await response.json();
};

const play = () => {
  animationItem.value?.play();
}

const stop = () => {
  animationItem.value?.stop();
}

const init = async () => {
  style.value = {
    width: (props.width !== -1)
        ? `${props.width}px`
        : '100%',
    height: (props.height !== -1)
        ? `${props.height}px`
        : '100%',
    overflow: 'hidden',
    margin: '0 auto',
  };

  await loadJsonData(props.path);

  if (animationItem.value) {
    // Releases resources. The DOM element will be emptied.
    animationItem.value.destroy();
  }

  if (!lottieContainerRef.value) {
    return;
  }

  const animationConfig = {
    container: lottieContainerRef.value,
    renderer: 'svg',
    loop: props.loop,
    autoplay: props.autoplay,
    animationData: jsonData.value,
    rendererSettings: rendererSettings.value,
  };

  animationItem.value = lottie.loadAnimation(animationConfig);

  emit('animation-item-changed', animationItem.value);

  animationItem.value.setSpeed(props.speed);

  if (props.autoplay) {
    play();
  }
};

// Watch
watch(() => props.path, init);

// Mounted
onMounted(init);

defineExpose({
  play,
  stop,
})
</script>
