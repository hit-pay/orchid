<template>
  <!-- Preview Dummy Products -->

  <s-top-banner v-if="topBanner.active" />
  <s-banners/>
  <s-products/>
  <s-products/>
  <s-footer/>

  <!-- Other Page -->
  <!-- <s-product-detail-page /> -->
  <!-- <s-search-filter-page /> -->
  <!-- <s-search-product-page /> -->
</template>
<script setup>
import storefront from "./storefront-default-settings.json";
import { useTheme } from "./storefront.js";

const { 
  topBanner,
  initialState
} = useTheme()

initialState(storefront);
</script>
