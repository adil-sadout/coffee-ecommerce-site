import { loadStripe } from "@stripe/stripe-js";
import {useState} from "react"

function Cart({productsInCart, setProductsInCart}) {


  //CONST

  const [email, setEmail] = useState("");
  const stripeLoadedPromise = loadStripe('pk_test_Bd3ecggkl2AH2q74P2iFkd27');


  



  //FUNCTIONS

  const totalPrice = productsInCart.reduce((total, product)=> {
    return total + (product.price*product.quantity)
  },0)

  function deleteItem(product){
    const newCart = productsInCart.filter(prod => prod.id !==product.id)
    setProductsInCart(newCart);
  }

  
  function handleFormSubmit(event) {
    event.preventDefault();

    const lineItems = productsInCart.map((product) => {
      return { price: product.price_id, quantity: product.quantity };
    });

    stripeLoadedPromise.then((stripe) => {
      stripe
        .redirectToCheckout({
          lineItems: lineItems,
          mode: "payment",
          successUrl: "http://bettercoffeereact.netlify.app/",
          cancelUrl: "http://bettercoffeereact.netlify.app/cart",
          customerEmail: email
        })
        .then((response) => {
          // this will only log if the redirect did not work
          console.log(response.error);
        })
        .catch((error) => {
          // wrong API key? you will see the error message here
          console.log(error);
        });
    });
  }
  
  //RETURN

  return (
    <div className="container py-5">
      <h1>Your Cart</h1>
      {
        productsInCart.length===0 && <p className="fs-5 py-5">You have not added any product to your cart yet.</p>
      }
      {
        productsInCart.length>0 && 
        <>
        <table className="table text-center table-striped table-light grid rounded">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              productsInCart.map(product => 
                
                <tr className="align-middle">
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>${product.price}</td>
                  <td>
                    <button onClick={()=>deleteItem(product)} className="btn btn-danger btn-sm">X</button>
                  </td>
                </tr>
                )
            }
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Total: ${totalPrice.toFixed(2)}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <form onSubmit={handleFormSubmit} className="pt-5" >
          <p>Enter your email and then click on pay and your products will be delivered to you on the same day!</p>
          <input
            className="input input-light form-control w-50"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="email"
            required
            />
            <button type="submit" className="btn btn-success my-1" >Pay</button>
        </form>
        </>
      }

      
      
    </div>
  )
}

export default Cart