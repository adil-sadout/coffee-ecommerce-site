

function About() {
  return (
    <>
      <div className=" bg-silver d-md-flex justify-content-center align-items-center pb-5 px-5 ">
        <div className="p-2 pt-5 w-md-50 text-center text-md-start">
          <h2 className="display-2">Coffee Shopping Simplified</h2>
          <p>Order your groceries from SuperM with our easy to use app, and get your products delivered straight to your doorstep.</p>
        </div>
        <div className="d-md-block d-none">
          <img src="assets/coffeebeans5.png" alt="coffee cup" className="rounded minmaxWidth" width="100%" />
        </div>
      </div>
    </>
    
  )
}

export default About