

function About() {
  return (
    <>
      <div className=" bg-silver d-md-flex justify-content-center align-items-center pb-5 px-5 ">
        <div className="p-2 pt-5 w-md-50 text-center text-md-start">
          <h2 className="display-2">About Us</h2>
          <p>Better Coffee Sho offers a unique coffee house environment unlike any other in Macon. We are not only a place to drop in and get your morning cup of coffee (although you are more than welcome to do that), we are a place where you can sit down and enjoy that tailor-made cup of coffee.</p>
        </div>
        <div className="d-md-block d-none">
          <img src="assets/coffeebeans5.png" alt="coffee cup" className="rounded minmaxWidth" width="100%" />
        </div>
      </div>
    </>
    
  )
}

export default About