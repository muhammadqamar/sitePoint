import React from "react"
import Hero from "./hero"
import Trusted from "./trusted"
import Audience from "./audience"
import TargetCustomers from "./targetCustomers"

const Home = () => {
  return (
    <>
      <Hero />
      <div className="w-full  px-[20px] md:px-[clamp(20px,12vw,122px)] pt-[64px]">
        <div className="mx-auto">
          <Trusted />
          <Audience />
          <TargetCustomers/>
        </div>
      </div>
    </>
  )
}

export default Home
