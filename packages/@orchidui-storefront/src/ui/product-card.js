const Template = /*html*/ `
<div>
    <div>
        <img :src="product.image" :alt="product.name" /></div>
             <div>
        <div class="font-bold">
            {product.name}
        </div>
        <div v-if="product.has_variations" class="h-[19px]">
            {product.variations_count} variants
        </div>
        <div class="font-bold">
            {product.price}
        </div>
        <s-btn-primary class="w-full" label="Add to cart" />
    </div>
</div>`;
export default Template;
