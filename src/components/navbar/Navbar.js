import {NavLink} from "react-router-dom"

function Navbar({productsInCart}) {

  const productsQuantity = productsInCart.reduce((total, product) =>{
    return total + product.quantity;
  },0);

  return (
    <div className="d-flex list-unstyled display-6 pt-3 pb-3">
        <NavLink to="/" className=" text-decoration-none mx-2 p-1">Home</NavLink>
        <NavLink to="/About"  className=" text-decoration-none mx-2 p-1">About</NavLink>
        <NavLink to="/Shop"  className=" text-decoration-none mx-2 p-1">Shop</NavLink>
        <NavLink  to="/Cart" className=" text-decoration-none mx-2 p-1">Cart ({productsQuantity}) </NavLink>
    </div>
  )
}

export default Navbar