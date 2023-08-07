import React from "react"

const Home = () => {
  return (
    <div className="w-full min-h-[550px] bg-cover bg-center bg-no-repeat bg-[url(../../assets/images/home-hero-bg.png)] px-[20px] md:px-[clamp(20px,12vw,122px)] ">
      <div className="max-w-[1084px] mx-auto py-[148px]">
        <div className="w-[709px] mx-auto text-white text-center">
          <h1 className=" h1-text mb-4">Equip your team with knowledge</h1>
          <p className="small-text mb-8">
            Sitepoint for Teams gives your company, school, or any other group
            access to our entire library of books and courses from Sitepoint and
            publishing partners.
          </p>

          <button className="button border border-solid !mx-auto">
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
