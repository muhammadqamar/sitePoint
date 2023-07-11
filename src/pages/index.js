import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import bgImage from "../assets/images/Hero.png"

const IndexPage = () => (
  <Layout>
    <div className="w-full h-[680px] lg:h-[550px] px-[20px] md:px-[clamp(20px,12vw,122px)] bg-black pb-[173px] md:pb-[168px] lg:pb-0 pt-[153px] sm:pt-[168px]  lg:pt-[184px] relative mb-[500px]">
      <div className="absolute bottom-0 right-0 w-full h-full ">
        <img
          src={bgImage}
          alt="bgImage"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-[1084px] mx-auto flex items-center lg:items-start justify-between  flex-col lg:flex-row gap-[58px]  relative z-[1] ">
        <div className=" w-full lg:w-[552px] text-left sm:text-center lg:text-left">
          <h1 className="h1-text text-purple_400 mb-4">
            Connect your brand with over
            <span className="text-white"> 325,000 </span>
            designers and developers.
          </h1>
          <p className="w-[305px] sm:w-full lg:w-[305px] small-text text-purple_500 ">
            Grow your business with targeted advertising solutions that work.
          </p>
        </div>
        <div className="w-full  md:w-[535px] lg:w-[440px] h-[662px] bg-white rounded-3xl p-8 shadow-lgShadow"></div>
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
