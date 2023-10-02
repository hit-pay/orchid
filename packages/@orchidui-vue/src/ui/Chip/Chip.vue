<template>
    <span >
        {{label}}
    </span>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
    label: String
})
</script>