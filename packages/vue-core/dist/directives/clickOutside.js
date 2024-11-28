const i = {
  beforeMount(t, c) {
    t.clickOutsideEvent = function(e) {
      document.contains(e.target) && !(t === e.target || t.contains(e.target)) && c.value(e);
    }, document.addEventListener("click", t.clickOutsideEvent);
  },
  unmounted(t) {
    document.removeEventListener("click", t.clickOutsideEvent);
  }
};
export {
  i as clickOutside
};
