import Product from "./Product"

function Products({products, setProductsInCart, productsInCart}) {
  return (
    <div className="grid row g-3 justify-content-center align-items-center text-center p-5">
      {
        products.map((product) => <Product key={product.id} product={product} productsInCart={productsInCart} setProductsInCart={setProductsInCart} />)
      }
    </div>
  )
}

export default Products