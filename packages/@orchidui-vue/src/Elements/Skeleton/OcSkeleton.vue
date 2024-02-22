<template>
  <div class="bg-gray-100 overflow-hidden">
    <div
      class="slide relative rounded-[inherit] h-[inherit] w-[40px] bg-[linear-gradient(-90deg,_var(--oc-gray-200)_0%,_rgba(229,_230,_234,_0)_100%)]"
    />
  </div>
</template>

<style scoped lang="scss">
.slide {
  animation: slide 1.5s infinite;
}

@keyframes slide {
  0% {
    transform: translateX(-100%);
    left: 0;
  }
  100% {
    transform: translateX(100%);
    left: 100%;
  }
}
</style>
