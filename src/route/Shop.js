import Products from "../components/products/Products";

function Shop({products, setProductsInCart, productsInCart}) {
  return (
    <div className="container">
      <Products products={products} productsInCart={productsInCart} setProductsInCart={setProductsInCart} />
    </div>
  )
}

export default Shop