import {Link} from "react-router-dom"


function Home() {


  return (
    <>
      <div className=" bg-silver d-md-flex justify-content-center align-items-center pb-5 px-5 ">
        <div className="p-2 pt-5 w-md-50 text-center text-md-start">
          <h2 className="display-2">Coffee Shopping Simplified</h2>
          <p>Order your groceries from SuperM with our easy to use app, and get your products delivered straight to your doorstep.</p>
          <Link to="/shop" className="btn btn-lg text-light btn-success">Start shopping</Link>
        </div>
        <div className="d-md-block d-none">
          <img src="assets/coffee3.png" alt="coffee cup" className="rounded minmaxWidth" width="100%" />
        </div>
      </div>
      
    </>
  )
}

export default Home