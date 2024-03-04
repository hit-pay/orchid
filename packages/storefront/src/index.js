// Storefront
class Storefront {
  constructor(id) {
    this.businessId = id;
  }
  addToCart(data, calback) {
    const { product, variantId, quantity } = data;
    console.log(
      `${quantity} product ${product.name} ${variantId}, added to cart`,
    );
    return calback();
  }
  visit(page) {
    console.log(`redirect ${page}`);
  }
}
export default Storefront;
