import Navbar from "./Navbar";


//import Hamburger from "./Hamburger";
//import SearchBar from "./SearchBar";
/*
<SearchBar/>
<Hamburger/>

*/

function NavWrapper({productsInCart}) {
  return (
    <header className="d-flex justify-content-center align-items-center px-3">
        <Navbar productsInCart={productsInCart} />
    </header>
  )
}

export default NavWrapper