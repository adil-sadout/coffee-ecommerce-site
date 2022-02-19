import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import Home from "./route/Home";
import About from "./route/About";
import Shop from "./route/Shop";
import Cart from "./route/Cart";
import NavWrapper from "./components/navbar/NavWrapper";
import {useState, useEffect} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {

  const [productsInCart, setProductsInCart] = useState([]);

  const [products, useProduct ] = useState([
    {
      id:1,
      name: "250g Pack",
      descr: "Medium Dark Beans",
      image: "./assets/coffeebeans.png",
      price: "74.49",
      "price_id":"price_1KUiNFIkkMJ9JWLen3niFiDE"
    },
    {
      id:2,
      name: "500g Pack",
      descr: "Premium Bean Mixture",
      image: "./assets/coffeebeans5.png",
      price: "55.99",
      "price_id":"price_1KUiPGIkkMJ9JWLeqyQm6XkF"
    },
    {
      id:3,
      name: "6OZ Cup",
      descr: "Hard pressed coffee",
      image: "./assets/coffee8.png",
      price: "8.99",
      "price_id":"price_1KUiOQIkkMJ9JWLePkNAMqwb"
    },
    {
      id:4,
      name: "150G Jar",
      descr: "African coco beans",
      image: "./assets/coffeebeans2.png",
      price: "39.99",
      "price_id":"price_1KUiNsIkkMJ9JWLe7KOUqVa7"
    }
  ])

  useEffect(()=>{
    
    
  })


  return (
    <div className="App">
      <BrowserRouter>
        <NavWrapper productsInCart={productsInCart}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Shop" element={<Shop products={products} useProduct={useProduct} productsInCart={productsInCart} setProductsInCart={setProductsInCart} />} />
          <Route path="/Cart" element={<Cart productsInCart={productsInCart} setProductsInCart={setProductsInCart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;