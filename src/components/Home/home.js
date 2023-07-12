import React from "react"
import Hero from "./hero"
import Trusted from "./trusted"
import Audience from "./audience"

const Home = () => {
  return (
    <>
      <Hero />
      <div className="w-full px-[20px] md:px-[clamp(20px,12vw,122px)] lg:px-8 pt-[795px] sm:pt-[680px] lg:pt-[64px]">
        <div className="max-w-[1084px] mx-auto">
          <Trusted />
          <Audience />
        </div>
      </div>
    </>
  )
}

export default Home
