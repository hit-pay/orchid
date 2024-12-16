// clickOutside.js
export const clickOutside = {
  beforeMount(el, binding) {
    el.clickOutsideEvent = function (event) {
      let elementExist = document.contains(event.target)
      // Check if the clicked element is outside the bound element
      if (elementExist && !(el === event.target || el.contains(event.target))) {
        // Call the provided method when a click outside is detected
        binding.value(event)
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    // Cleanup: Remove the event listener when the directive is unmounted
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}
