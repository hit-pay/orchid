<template>
    <div>
        Testing
        <s-product-card :state="state" />
    </div>
</template>
<script setup>
import { reactive, ref,  defineCustomElement } from 'vue'
// html only in orchid theme builder : will get html data from props laravel blade
import BtnPrimary from './ui/btn-primary.js'
import ProductCard from './ui/product-card.js'



const state = reactive({}) // global state
// s-btn-primary
const BtnPrimaryTemplate = BtnPrimary.replaceAll('{','{{').replaceAll('}','}}')
customElements.define('s-btn-primary', defineCustomElement({
    props: {
        label: String
    },
    template: BtnPrimaryTemplate,
}))

// s-product-card
const ProductCardTemplate = ProductCard.replaceAll('{','{{').replaceAll('}','}}')
customElements.define('s-product-card', defineCustomElement({
    setup(){
    const product = ref({
            id: 1,
            name: 'item 1',
            price: 100,
            image: 'https://via.placeholder.com/150',
            has_variations: true,
            variations_count: 4
        })
    return {
        product
    }
    },
    template: ProductCardTemplate,
}))


</script>