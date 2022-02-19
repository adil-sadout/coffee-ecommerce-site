

function Product({product, setProductsInCart, productsInCart}) {



  function addToCart(){
    const prodSearch= productsInCart.find(prod => prod.id===product.id);
    console.log(prodSearch);

    if (prodSearch === undefined){
      setProductsInCart([...productsInCart, {...product, quantity:1}])
    }else{
      prodSearch.quantity+=1;
      setProductsInCart([...productsInCart])
    }
    console.log(productsInCart);
  }

  return (
    <div className="col-lg-5 d-sm-flex justify-content-center py-3 align-items-center border bg-light rounded mx-1">
      <div className="">
        <img src={product.image} width="200px" className="" alt={product.image} />
      </div>
      
      <div className="text-center">
        <p className="h1">{product.name}</p>
        <p className="fs-5">{product.descr}</p>
        <button onClick={addToCart} className="btn btn-lg btn-success w-100">${product.price}</button>
      </div>
    </div>
  )
}

export default Product