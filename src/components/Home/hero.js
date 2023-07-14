import React from "react"
import bgImage from "../../assets/images/Hero.png"
import TabHead from "../../assets/images/tab-head.png"
import MobileHead from "../../assets/images/mobile-head.png"
import ContactUs from "./contactUs"

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full h-[700px] xsm:h-[680px] sm:h-[550px] px-0 md:px-[clamp(20px,12vw,122px)] lg:px-8 bg-black pb-[173px] md:pb-[168px] lg:pb-0 pt-[153px] sm:pt-[168px]  lg:pt-[184px] relative "
    >
      <div className="absolute bottom-0 right-0 w-full h-full ">
        <img
          src={bgImage}
          alt="bgImage"
          className="w-full h-full object-cover hidden lg:block"
        />
        <img
          src={TabHead}
          alt="bgImage"
          className="w-full h-full object-cover hidden sm:block lg:hidden"
        />
        <img
          src={MobileHead}
          alt="bgImage"
          className="w-full h-full object-cover block sm:hidden"
        />
      </div>
      <div className="max-w-[1084px] mx-auto flex items-center lg:items-start justify-between  flex-col lg:flex-row gap-[48px] sm:gap-[58px]  relative z-[1] ">
        <div
          // data-aos="fade-right"
          className="w-full lg:w-[552px] text-left sm:text-center lg:text-left px-5 md:px-0"
        >
          <h1 className="h1-text text-primary-300 mb-4">
            Connect your brand with over
            <span className="text-white"> 325,000 </span>
            designers and developers.
          </h1>
          <p className="w-[305px] sm:w-full lg:w-[305px] small-text text-primary-100 ">
            Grow your business with targeted advertising solutions that work.
          </p>
        </div>
        <ContactUs />
      </div>
    </div>
  )
}

export default Hero
