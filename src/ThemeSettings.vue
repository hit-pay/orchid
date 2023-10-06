<template>
    <div class="absolute top-0 right-0 p-4 rounded-lg bg-oc-bg border" :style="variables">
        {{ colorPalette }}
    </div>
</template>
<script setup>

defineProps({
    variables: {
        type: String
    }
})
// Palette Settings
// 1. Background Color
// 2. Text Color
// 3. Primary Color
// 4. Primary Text Color
// 5. Accent Color 1
// 6. Accent Color 2
// storefront settings : more than 3 colors variant [primary, accent 1, accent 2, accent 3, accent 4]
// CURRENT DASHBOARD USE 3 MAIN COLORS [primary, accent 1, accent 2]

// TODO : COLOR GENERATOR for storefront
const colorPalette = [
    {
        background_color: '', // background color
        text_color: '', // text color
        button_color: '', // from primary color
        button_text_color: '', // primary lightest color
        secondary_button_color: '', // from lighest primary color
        secondary_button_text_color: '', // primary color
        fixed_color: '', // accent_1 , accent_2
        system_color: '', // success, warning, error, 
        dark_mode: false, // true if background is dark 
        contrast_color: 'white' // [if dark use black color, if light use white color]
       
    }
]
</script>