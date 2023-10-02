<template>
    <button type="button">{{ label }}</button>
  </template>
  <script>
  export default {
    name: 'my-button',
    props: {
      label: {
        type: String,
        required: true,
      },
      primary: {
        type: Boolean,
        default: false,
      },
      size: {
        type: String,
        validator: function (value) {
          return ['small', 'medium', 'large'].indexOf(value) !== -1;
        },
      },
      backgroundColor: {
        type: String,
      },
    },
  };
  </script>
  