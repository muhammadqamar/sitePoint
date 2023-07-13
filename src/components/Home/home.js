import React from "react"
import Hero from "./hero"
import Trusted from "./trusted"
import Audience from "./audience"
import TargetCustomers from "./targetCustomers"

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <div className="w-full px-[20px] md:px-[clamp(20px,12vw,122px)] lg:px-8 pt-[815px] xsm:pt-[795px] sm:pt-[680px] lg:pt-[64px] mb-[172px] md:mb-[231px] lg:mb-[275px]">
        <div className="max-w-[1084px] mx-auto mt-32 xsm:mt-20 sm:mt-0">
          <Trusted />
        </div>
      </div>
      <div className="w-full bg-bgGradient pb-[160px] md:pb-[165px] lg:pb-[231px] ">
        <Audience />
      </div>
      <div className="w-full px-[20px] md:px-[clamp(20px,12vw,122px)] lg:px-8  mb-[144px] md:mb-[152px]">
        <div className="max-w-[1084px] mx-auto ">
          <TargetCustomers />
        </div>
      </div>
    </div>
  )
}

export default Home
