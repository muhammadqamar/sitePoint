import React from "react"

import HeroSection from "./hero"
import KnowledgeSection from "./knowledgeSection"
import SitepointFeatureImg from "../../assets/images/sitepoint-feature.png"

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className=" w-full px-[20px] md:px-[clamp(20px,12vw,122px)]  ">
        <div className="max-w-[1084px] mx-auto ">
          <FeatureImg />

          {/* add section */}

          <KnowledgeSection />
        </div>
      </div>
    </>
  )
}

export default Home

const FeatureImg = () => {
  return (
    <div className="relative mt-[-115px] rounded-[20px] shadow-mdShadow overflow-hidden">
      <img
        src={SitepointFeatureImg}
        alt="site point"
        className="w-auto h-auto object-contain"
      />
    </div>
  )
}
